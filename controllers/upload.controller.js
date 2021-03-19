/*
 * Project: /Users/mpardalm/Documents/Node/05-restserver
 * Created Date: Friday, March 19th 2021
 * Author: Miguel Pardal
 * Email: mpardalm.developer@gmail.com
 * Alias: mpardalm
 * -----
 * Date Modified: Friday, March 19th 2021
 * Modified By: Miguel Pardal, known as mpardalm
 * -----
 * Copyright (c) 2021
 */
const { request, response } = require("express");
const { fileUpload } = require("../helpers");

const loadFile = async (req = request, res = response) => {

    if (!req.files || !Object.keys(req.files).length || !req.files.file) {
        return res.status(400).json({
            msg: 'No file(s) were uploaded'
        });
    }

    try {
        const fileName = await fileUpload(req.files);
        res.json({
            msg: fileName
        });
    } catch (error) {
        res.status(400).json({
            msg: error
        })
    }
}

module.exports = {
    loadFile
}