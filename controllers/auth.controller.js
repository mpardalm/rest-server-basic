/*
 * Project: /Users/mpardalm/Documents/Node/05-restserver
 * Created Date: Saturday, March 13th 2021
 * Author: Miguel Pardal
 * Email: mpardalm.developer@gmail.com
 * Alias: mpardalm
 * -----
 * Date Modified: Saturday, March 13th 2021
 * Modified By: Miguel Pardal, known as mpardalm
 * -----
 * Copyright (c) 2021
 */
const { request, response } = require('express');
const bcryptjs = require('bcryptjs');
const User = require('../models/user');
const { generateJWT } = require('../helpers/generateJWT.helpers');

const login = async (req = request, res = response) => {
    const { email, password } = req.body;

    try {

        //TODO Check email exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                msg: 'User / Password not correct 1'
            });
        }

        //TODO Check user status
        if (!user.state) {
            return res.status(400).json({
                msg: 'User / Password not correct 2'
            });
        }

        //TODO Check password
        const validPassword = bcryptjs.compareSync(password, user.password);
        if (!validPassword) {
            return res.status(400).json({
                msg: 'User / Password not correct 3'
            });
        }

        //TODO Genreate JWT
        const token = await generateJWT(user.id);

        res.json({
            user,
            token
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Something went wrong"
        })
    }
}

module.exports = {
    login
}