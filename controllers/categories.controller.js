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

module.exports = {
    createCategory
}