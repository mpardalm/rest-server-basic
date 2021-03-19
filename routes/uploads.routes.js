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
const { Router } = require('express');
const { check } = require('express-validator');
const { loadFile } = require('../controllers/upload.controller');
const { fieldsValidate } = require('../middlewares/fields-validation.middleware');

const router = Router();

router.post('/', loadFile);

module.exports = router;