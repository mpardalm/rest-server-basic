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

const { Schema, model } = require('mongoose');

const RoleSchema = Schema({
    rol: {
        type: String,
        required: [true, 'Role is mandatory']
    }
});

module.exports = model('Role', RoleSchema);