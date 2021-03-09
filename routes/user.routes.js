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

const { Router } = require('express');
const { userGet,
    userPost,
    userPut,
    userPatch,
    userDelete } = require('../controllers/user.controller');

const router = Router();

router.get('/', userGet);
router.post('/', userPost);
router.put('/:userID', userPut);
router.patch('/', userPatch);
router.delete('/', userDelete);

module.exports = router;