/*
 * Project: /Users/mpardalm/Documents/Node/05-restserver
 * Created Date: Sunday, March 14th 2021
 * Author: Miguel Pardal
 * Email: mpardalm.developer@gmail.com
 * Alias: mpardalm
 * -----
 * Date Modified: Monday, March 15th 2021
 * Modified By: Miguel Pardal, known as mpardalm
 * -----
 * Copyright (c) 2021
 */

const { Router } = require('express');
const { check } = require('express-validator');
const { createCategory,
    getAllCategories,
    getCategoryByID,
    updateCategory,
    deleteCategory } = require('../controllers/categories.controller');
const { existCategoryByID } = require('../helpers/db-validators.helpers');
const { jwtValidator, fieldsValidate, isAdminRole } = require('../middlewares');

const router = Router();

// Get all categories - Public
router.get('/', getAllCategories);

// Get one category by ID - Public
router.get('/:categoryID', [
    check('categoryID', 'Not a valid ID').isMongoId(),
    check('categoryID').custom(existCategoryByID),
    fieldsValidate
], getCategoryByID);

// Create a category - Private (Valid Token)
router.post('/', [
    jwtValidator,
    check('name', 'Name is mandatory').notEmpty(),
    fieldsValidate
], createCategory);

// Update category - Private (Valid Token)
router.put('/:categoryID', [
    jwtValidator,
    check('categoryID', 'Not a valid ID').isMongoId(),
    check('categoryID').custom(existCategoryByID),
    check('name', 'Name is mandatory').notEmpty(),
    fieldsValidate
], updateCategory);

// Delete a category - Admin
router.delete('/:categoryID', [
    jwtValidator,
    check('categoryID', 'Not a valid ID').isMongoId(),
    check('categoryID').custom(existCategoryByID),
    isAdminRole,
    fieldsValidate
], deleteCategory);

module.exports = router;