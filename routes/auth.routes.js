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

const { Router } = require('express');
const { check } = require('express-validator');
const { login } = require('../controllers/auth.controller');
const { fieldsValidate } = require('../middlewares/fields-validation.middleware');

const router = Router();

router.post('/login', [
    check('email', 'Email is mandatory').isEmail(),
    check('password', 'Password is mandatory').notEmpty(),
    fieldsValidate
], login);

module.exports = router;