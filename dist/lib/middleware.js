'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isAuth = undefined;

var _constants = require('../config/constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isAuth(req, res, next) {
    next();
}

exports.isAuth = isAuth;