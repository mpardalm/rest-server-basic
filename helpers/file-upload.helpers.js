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
const path = require('path');
const { v4: uuidv4 } = require('uuid')

const fileUpload = (files, validExtensions = ['png', 'jpg', 'jpeg'], folder = '') => {
    return new Promise((resolve, reject) => {
        const { file } = files;
        const splitedName = file.name.split('.');
        const extension = splitedName[splitedName.length - 1];

        if (!validExtensions.includes(extension)) {
            return reject(`File extension '${extension}' is not allowed`);
        }

        const tempName = uuidv4().concat('.').concat(extension);
        const uploadPath = path.join(__dirname, '../uploads/', folder, tempName);

        file.mv(uploadPath, (err) => {
            if (err) {
                reject(err);
            }
            resolve(tempName);
        });
    });
}

module.exports = {
    fileUpload
}