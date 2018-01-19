"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _products = require('./routes/products');

var _products2 = _interopRequireDefault(_products);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');


var app = express();
var server = _http2.default.createServer(app);
var port = process.env.PORT || 3001;

app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use((0, _cookieParser2.default)());
app.set("view engine", "twig");
app.use(express.static('views'));

// app.get('/', routeIndex);
app.use('/products', _products2.default);
app.get('/products/list', function (req, res) {
    var sqlite3 = require('sqlite3').verbose();
    var db = new sqlite3.Database('database.sqlite');

    db.all("SELECT * FROM products", function (err, rows) {
        res.render('list', { products: rows });
    });

    db.close();
});

app.close = function () {
    server.close();
};

app.listen(function () {
    server.listen(port, function () {
        console.log("Express server listening on port " + port + " in " + app.settings.env + " mode");
    });
});

exports.default = app;