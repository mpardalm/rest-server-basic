/*
 * Project: /Users/mpardalm/Documents/Node/05-restserver
 * Created Date: Saturday, March 13th 2021
 * Author: Miguel Pardal
 * Email: mpardalm.developer@gmail.com
 * Alias: mpardalm
 * -----
 * Date Modified: Sunday, March 14th 2021
 * Modified By: Miguel Pardal, known as mpardalm
 * -----
 * Copyright (c) 2021
 */
const { request, response } = require('express');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

const jwtValidator = async (req = request, res = response, next) => {
    const token = req.header('Authorization-Token');
    if (!token) {
        return res.status(401).json({
            msg: 'No token found'
        });
    }
    try {
        const { uid } = jwt.verify(token, process.env.PRIVATEJWTKEY);
        const userAutenticated = await User.findById(uid);

        //Check if userAutenticated
        if (!userAutenticated) {
            return res.status(401).json({
                msg: 'Not a valid token'
            });
        }

        //Check if userAutenticated has a valid state
        if (!userAutenticated.state) {
            return res.status(401).json({
                msg: 'Not a valid token'
            });
        }
        req.userAutenticated = userAutenticated;

        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Not a valid token'
        });

    }
}

module.exports = {
    jwtValidator
}