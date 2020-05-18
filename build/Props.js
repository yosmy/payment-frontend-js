"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AmountProp = exports.CardProp = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var CardProp = _propTypes["default"].shape({
  id: _propTypes["default"].string.isRequired,
  last4: _propTypes["default"].string.isRequired
});

exports.CardProp = CardProp;
var AmountProp = _propTypes["default"].number.isRequired;
exports.AmountProp = AmountProp;