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
const dbValidators = require('./db-validators.helpers');
const fileUpload = require('./file-upload.helpers');
const generateJWT = require('./generateJWT.helpers');

module.exports = {
    ...dbValidators,
    ...fileUpload,
    ...generateJWT
}