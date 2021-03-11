/*
 * Project: /Users/mpardalm/Documents/Node/05-restserver
 * Created Date: Wednesday, March 10th 2021
 * Author: Miguel Pardal
 * Email: mpardalm.developer@gmail.com
 * Alias: mpardalm
 * -----
 * Date Modified: Wednesday, March 10th 2021
 * Modified By: Miguel Pardal, known as mpardalm
 * -----
 * Copyright (c) 2021
 */

const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    name: {
        type: String,
        required: [true, 'Name is mandatory']
    },
    email: {
        type: String,
        required: [true, 'Email is mandatory'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is mandatory']
    },
    img: {
        type: String
    },
    role: {
        type: String,
        required: true,
        enum: ['ADMIN', 'USER']
    },
    state: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});

module.exports = model('User', UserSchema);