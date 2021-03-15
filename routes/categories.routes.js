/*
 * Project: /Users/mpardalm/Documents/Node/05-restserver
 * Created Date: Sunday, March 14th 2021
 * Author: Miguel Pardal
 * Email: mpardalm.developer@gmail.com
 * Alias: mpardalm
 * -----
 * Date Modified: Sunday, March 14th 2021
 * Modified By: Miguel Pardal, known as mpardalm
 * -----
 * Copyright (c) 2021
 */

const { Router } = require('express');
const { check } = require('express-validator');
const { login } = require('../controllers/auth.controller');
const { createCategory } = require('../controllers/categories.controller');
const { jwtValidator, fieldsValidate } = require('../middlewares');

const router = Router();

// Get all categories - Public
router.get('/', (req, res) => {

});

// Get one category by ID - Public
router.get('/:id', (req, res) => {

});

// Create a category - Private (Valid Token)
router.post('/', [
    jwtValidator,
    check('name', 'Name is mandatory').notEmpty(),
    fieldsValidate
], createCategory);

// Update category - Private (Valid Token)
router.put('/:id', (req, res) => {

});

// Delete a category - Admin
router.delete('/:id', (req, res) => {

});

module.exports = router;