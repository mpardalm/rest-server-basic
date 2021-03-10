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

const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('Connected');
    } catch (error) {
        console.error(error);
        throw new Error('Error connecting Data Base');
    }
}

module.exports = {
    dbConnection
}