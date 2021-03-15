/*
 * Project: /Users/mpardalm/Documents/Node/05-restserver
 * Created Date: Thursday, March 11th 2021
 * Author: Miguel Pardal
 * Email: mpardalm.developer@gmail.com
 * Alias: mpardalm
 * -----
 * Date Modified: Monday, March 15th 2021
 * Modified By: Miguel Pardal, known as mpardalm
 * -----
 * Copyright (c) 2021
 */
const { Category, Role, User } = require('../models');

const isRoleValid = async (role = '') => {
    const existsRole = await Role.findOne({ role });
    if (!existsRole) {
        throw new Error(`${role} not present in Role Data Base`);
    }
};

const isEmailDuplicated = async (email) => {
    const existEmail = await User.findOne({ email });
    if (existEmail) {
        throw new Error(`Duplicated email`);
    }
};

const existUserByID = async (userID) => {
    const existUserID = await User.findById(userID);
    if (!existUserID) {
        throw new Error(`ID not present in DB`);
    }
};

const existCategoryByID = async (categoryID) => {
    const existCategoryID = await Category.findOne({ _id: categoryID, state: true });
    if (!existCategoryID) {
        throw new Error(`ID not present in DB`);
    }
};

module.exports = {
    isRoleValid,
    isEmailDuplicated,
    existUserByID,
    existCategoryByID
}