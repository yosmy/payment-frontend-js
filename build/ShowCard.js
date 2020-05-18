"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Props = require("./Props");

var _CardItem = require("./CardItem");

// @refresh reset
var ShowCard = (0, _react.memo)(function (_ref) {
  var ui = _ref.ui,
      card = _ref.card,
      onSelect = _ref.onSelect;
  return /*#__PURE__*/_react["default"].createElement(ui.layout, null, /*#__PURE__*/_react["default"].createElement(_CardItem.CardItem, {
    ui: {
      icons: {
        states: {
          selected: ui.icons.states.selected,
          unselected: ui.icons.states.unselected
        }
      }
    },
    selected: true,
    title: "**** **** **** ".concat(card.last4),
    onSelect: onSelect ? function () {
      onSelect();
    } : undefined
  }));
}, function () {
  return true;
});
ShowCard.propTypes = {
  ui: _propTypes["default"].shape({
    layout: _propTypes["default"].func.isRequired,
    icons: _propTypes["default"].shape({
      states: _propTypes["default"].shape({
        selected: _propTypes["default"].func.isRequired,
        unselected: _propTypes["default"].func.isRequired
      }).isRequired
    }).isRequired
  }).isRequired,
  card: _Props.CardProp.isRequired,
  onSelect: _propTypes["default"].func // ()

};
var _default = ShowCard;
exports["default"] = _default;