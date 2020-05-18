"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ui = require("@yosmy/ui");

var BackendListCards = function BackendListCards(_ref) {
  var ui = _ref.ui,
      api = _ref.api,
      criteria = _ref.criteria;

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      cards = _useState2[0],
      setCards = _useState2[1];

  var _useState3 = (0, _react.useState)({
    progress: false
  }),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      execution = _useState4[0],
      setExecution = _useState4[1];

  (0, _react.useEffect)(function () {
    setExecution({
      progress: true
    });
    api.collectCards(null, criteria.user, // onReturn
    function (cards) {
      setCards(cards);
      setExecution({
        progress: false
      });
    });
  }, [api]);
  return /*#__PURE__*/_react["default"].createElement(ui.layout, {
    progress: execution.progress
  }, cards === null ? /*#__PURE__*/_react["default"].createElement(_ui.EmptyLayout, null, /*#__PURE__*/_react["default"].createElement(_ui.LinePlaceholder, null), /*#__PURE__*/_react["default"].createElement(_ui.LinePlaceholder, null)) : cards.map(function (card) {
    var id = card.id,
        last4 = card.last4;
    return /*#__PURE__*/_react["default"].createElement(ui.card, {
      key: id,
      id: id
    }, /*#__PURE__*/_react["default"].createElement(_ui.Text, null, "**** **** **** ", last4));
  }));
};

BackendListCards.propTypes = {
  ui: _propTypes["default"].shape({
    layout: _propTypes["default"].func.isRequired,
    card: _propTypes["default"].func.isRequired // (id, children)

  }).isRequired,
  api: _propTypes["default"].shape({
    collectCards: _propTypes["default"].func.isRequired
  }).isRequired,
  criteria: _propTypes["default"].shape({
    user: _propTypes["default"].string
  }).isRequired
};
var _default = BackendListCards;
exports["default"] = _default;