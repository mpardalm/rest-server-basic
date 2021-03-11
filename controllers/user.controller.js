/*
 * Project: /Users/mpardalm/Documents/Node/05-restserver
 * Created Date: Tuesday, March 9th 2021
 * Author: Miguel Pardal
 * Email: mpardalm.developer@gmail.com
 * Alias: mpardalm
 * -----
 * Date Modified: Thursday, March 11th 2021
 * Modified By: Miguel Pardal, known as mpardalm
 * -----
 * Copyright (c) 2021
 */

const { response, request } = require('express');
const bcryptjs = require('bcryptjs');
const User = require('../models/user');

const userGet = (req = request, res = response) => {
    const { nombre } = req.query
    res.json({
        msg: 'get API - User',
        nombre
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
const userPut = (req = request, res = response) => {
    const userID = req.params.userID
    res.json({
        msg: 'put API - User',
        userID
    });
}
const userPatch = (req = request, res = response) => {
    res.json({
        msg: 'patch API - User'
    });
}

const userDelete = (req = request, res = response) => {
    res.json({
        msg: 'delete API - User'
    });
}

module.exports = {
    userGet,
    userPost,
    userPut,
    userPatch,
    userDelete
}