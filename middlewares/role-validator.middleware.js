/*
 * Project: /Users/mpardalm/Documents/Node/05-restserver
 * Created Date: Saturday, March 13th 2021
 * Author: Miguel Pardal
 * Email: mpardalm.developer@gmail.com
 * Alias: mpardalm
 * -----
 * Date Modified: Saturday, March 13th 2021
 * Modified By: Miguel Pardal, known as mpardalm
 * -----
 * Copyright (c) 2021
 */

const { response, request } = require("express")

const isAdminRole = (req = request, res = response) => {
    if (!req.userAutenticated) {
        return res.status(500).json({
            msg: 'Unavailable to verify user'
        });
    }

    const { role, name } = req.userAutenticated;
    if (role !== 'ADMIN_ROLE') {
        return res.status(401).json({
            msg: 'Operation not allowed for this user'
        });
    }
    next();
}

const hasRole = (...roles) => {
    return (req = request, res = response, next) => {
        if (!req.userAutenticated) {
            return res.status(500).json({
                msg: 'Unavailable to verify user'
            });
        }

        if (!roles.includes(req.userAutenticated.role)) {
            return res.status(401).json({
                msg: 'Operation not allowed for this user'
            });
        }

        next();
    }
}

module.exports = {
    isAdminRole,
    hasRole
}