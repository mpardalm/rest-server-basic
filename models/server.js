/*
 * Project: /Users/mpardalm/Documents/Node/05-restserver
 * Created Date: Tuesday, March 9th 2021
 * Author: Miguel Pardal
 * Email: mpardalm.developer@gmail.com
 * Alias: mpardalm
 * -----
 * Date Modified: Wednesday, March 10th 2021
 * Modified By: Miguel Pardal, known as mpardalm
 * -----
 * Copyright (c) 2021
 */

const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config.db');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/user';

        // DB Connection
        this.dbConnect();

        this.middlewares();
        this.routes();
    }

    routes() {
        this.app.use(this.usersPath, require('../routes/user.routes'));
    }

    async dbConnect() {
        await dbConnection();
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Parse and Read body
        this.app.use(express.json());
    }

    listen() {
        this.app.listen(this.port);
    }
}

module.exports = Server;