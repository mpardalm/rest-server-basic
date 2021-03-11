/*
 * Project: /Users/mpardalm/Documents/Node/05-restserver
 * Created Date: Thursday, March 11th 2021
 * Author: Miguel Pardal
 * Email: mpardalm.developer@gmail.com
 * Alias: mpardalm
 * -----
 * Date Modified: Thursday, March 11th 2021
 * Modified By: Miguel Pardal, known as mpardalm
 * -----
 * Copyright (c) 2021
 */

const { validationResult } = require('express-validator');

const fieldsValidate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }
    next();
}

module.exports = {
    fieldsValidate
}