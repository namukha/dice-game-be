const express = require('express');
const User = require('../models/User');
const History = require('../models/History');
const { validationResult } = require('express-validator')

const create_user = (req, res, next) => {
    const data = req.body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() })
    } else {
        User.create(data, function (err, data) {
            if (err)
                res.json({
                    success: false,
                    data: err,
                });
            else
                res.json({
                    success: true,
                    data: data,
                })
        })
    }
}

const get_number = (req, res, next) => {
    const rand =
        User.findOne({}, function (err, data) {
            if (err)
                res.json({
                    success: false,
                    data: err,
                })
            else
                res.json({
                    success: true,
                    data: data,
                })
        })
}

const save_res = (req, res, next) => {
    const data = req.body
    History.create(data, function (err, data) {
        if (err)
            res.json({
                success: false,
                data: err,
            })
        else
            res.json({
                success: true,
                data: data,
            })
    })
}

module.exports = {
    create_user,
    get_number,
    save_res,
}