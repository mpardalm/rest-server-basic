/*
 * Project: /Users/mpardalm/Documents/Node/05-restserver
 * Created Date: Tuesday, March 9th 2021
 * Author: Miguel Pardal
 * Email: mpardalm.developer@gmail.com
 * Alias: mpardalm
 * -----
 * Date Modified: Tuesday, March 9th 2021
 * Modified By: Miguel Pardal, known as mpardalm
 * -----
 * Copyright (c) 2021
 */

const { response, request } = require('express');

const userGet = (req = request, res = response) => {
    const { nombre } = req.query
    res.json({
        msg: 'get API - User',
        nombre
    });
}

const userPost = (req = request, res = response) => {
    const { nombre, edad } = req.body;
    res.json({
        msg: 'post API - User',
        nombre,
        edad
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