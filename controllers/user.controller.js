/*
 * Project: /Users/mpardalm/Documents/Node/05-restserver
 * Created Date: Tuesday, March 9th 2021
 * Author: Miguel Pardal
 * Email: mpardalm.developer@gmail.com
 * Alias: mpardalm
 * -----
 * Date Modified: Friday, March 12th 2021
 * Modified By: Miguel Pardal, known as mpardalm
 * -----
 * Copyright (c) 2021
 */

const { response, request } = require('express');
const bcryptjs = require('bcryptjs');
const User = require('../models/user');

const userGet = async (req = request, res = response) => {
    const { limit = 5, pagination = 0 } = req.query;
    const queryState = { state: true };

    const [users, usersCount] = await Promise.all([
        User.find(queryState)
            .skip(Number(pagination))
            .limit(Number(limit)),
        User.countDocuments(queryState)
    ]);

    res.json({
        usersCount,
        users
    });
}

const userPost = async (req = request, res = response) => {
    const { name, email, password, role } = req.body;
    const user = new User({ name, email, password, role });

    // Encrypt pass
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);

    // Save in DB
    await user.save();
    res.json({
        user
    });
}

const userPut = async (req = request, res = response) => {
    const { userID } = req.params
    const { _id, password, google, email, ...rest } = req.body;

    if (password) {
        // Encrypt pass
        const salt = bcryptjs.genSaltSync();
        rest.password = bcryptjs.hashSync(password, salt);
    }

    const user = await User.findByIdAndUpdate(userID, rest);

    res.json(user);
}

const userPatch = (req = request, res = response) => {
    res.json({
        msg: 'patch API - User'
    });
}

const userDelete = async (req = request, res = response) => {
    const { userID } = req.params

    // Permant Delete
    // const user = await User.findByIdAndDelete(userID);

    const user = await User.findByIdAndUpdate(userID, { state: false });

    res.json({ user });
}

module.exports = {
    userGet,
    userPost,
    userPut,
    userPatch,
    userDelete
}