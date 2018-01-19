'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _middleware = require('../lib/middleware');

var express = require('express');


var router = express.Router();

router.get('/view/:id', _middleware.isAuth, function (req, res) {
    var id = req.params.id;
    var sqlite3 = require('sqlite3').verbose();
    var db = new sqlite3.Database('database.sqlite');

    db.get("SELECT * FROM products WHERE id = " + id, function (err, row) {
        console.log(row);
        res.render('view', { product: row });
    });

    db.close();
});

router.get('/cart/:id', _middleware.isAuth, function (req, res) {
    var id = req.params.id;
    var sqlite3 = require('sqlite3').verbose();
    var db = new sqlite3.Database('database.sqlite');

    db.get("SELECT * FROM products WHERE id = " + id, function (err, row) {
        console.log(row);
        res.json({ success: true, text: "Product " + id + " successfully bought" });
    });

    db.close();
});

exports.default = router;