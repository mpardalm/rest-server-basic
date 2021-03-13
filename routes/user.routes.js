/*
 * Project: /Users/mpardalm/Documents/Node/05-restserver
 * Created Date: Tuesday, March 9th 2021
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
const { userGet,
    userPost,
    userPut,
    userPatch,
    userDelete } = require('../controllers/user.controller');
const { isRoleValid, isEmailDuplicated, existUserByID } = require('../helpers/db-validators.helpers');
const { fieldsValidate, jwtValidator, isAdminRole, hasRole } = require('../middlewares');

const router = Router();

router.get('/', userGet);
router.post('/', [
    check('name', 'Name is mandatory').not().isEmpty(),
    check('email', 'Email not valid').isEmail(),
    check('email').custom(isEmailDuplicated),
    check('password', 'Password length must be greather than 6 characters').isLength({ min: 6 }),
    check('role').custom(isRoleValid),
    fieldsValidate
], userPost);
router.put('/:userID', [
    check('userID', 'Not a valid ID').isMongoId(),
    check('userID').custom(existUserByID),
    check('role').custom(isRoleValid),
    fieldsValidate
], userPut);
router.patch('/', userPatch);
router.delete('/:userID', [
    jwtValidator,
    // isAdminRole,
    hasRole,
    check('userID', 'Not a valid ID').isMongoId(),
    check('userID').custom(existUserByID),
    fieldsValidate
], userDelete);

module.exports = router;