'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.urlHelper = undefined;

var _urlParser = require('url-parser');

var _urlParser2 = _interopRequireDefault(_urlParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var urlHelper = function urlHelper() {
    _classCallCheck(this, urlHelper);

    this.domains = [];
};

exports.urlHelper = urlHelper;