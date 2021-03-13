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

const fieldsValidate = require('../middlewares/fields-validation.middleware');
const jwtValidator = require('../middlewares/jwt-validator.middleware');
const rolesValidator = require('../middlewares/role-validator.middleware');

module.exports = {
    ...fieldsValidate,
    ...jwtValidator,
    ...rolesValidator
}