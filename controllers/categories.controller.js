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

const { request, response } = require("express");
const { Category } = require("../models");

const createCategory = async (req = request, res = response) => {
    const name = req.body.name.toUpperCase();
    const categoryDB = await Category.findOne({ name });

    if (categoryDB) {
        return res.status(400).json({
            msg: `${categoryDB.name} already exists`
        });
    }

    // Data generate
    const data = {
        name,
        user: req.userAutenticated._id
    }

    const category = new Category(data);

    // DB Save
    await category.save();
    res.status(201).json(category);
}

const getAllCategories = async (req = request, res = response) => {
    const { limit = 5, pagination = 0 } = req.query;
    const queryState = { state: true };

    const [categories, categoryCount] = await Promise.all([
        Category.find(queryState)
            .skip(Number(pagination))
            .limit(Number(limit))
            .populate('user', 'name email -_id'),
        Category.countDocuments(queryState)
    ]);

    res.status(200).json({
        categoryCount,
        categories
    });
}

const getCategoryByID = async (req = request, res = response) => {
    const { categoryID } = req.params;

    const category = await Category.findById(categoryID)
        .populate('user', 'name email -_id');

    res.status(200).json({
        category
    });
}

const updateCategory = async (req = request, res = response) => {
    const { categoryID } = req.params;
    const { state, user, ...data } = req.body;

    data.user = req.userAutenticated._id
    data.name = data.name.toUpperCase();

    await Category.findOneAndUpdate(categoryID, data);

    res.status(200).json({
        msg: 'Category updated'
    });
}

const deleteCategory = async (req = request, res = response) => {
    const { categoryID } = req.params;

    await Category.findOneAndUpdate(categoryID, { state: false });

    res.status(200).json({
        msg: 'Category deleted'
    });
}

module.exports = {
    createCategory,
    getAllCategories,
    getCategoryByID,
    updateCategory,
    deleteCategory
}