"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardPlaceholder = exports.CardItem = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ui = require("@yosmy/ui");

// @refresh reset
var CardItem = (0, _react.memo)(function (_ref) {
  var ui = _ref.ui,
      margin = _ref.margin,
      initialSelected = _ref.selected,
      title = _ref.title,
      end = _ref.end,
      onSelect = _ref.onSelect;

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  (0, _react.useEffect)(function () {
    setSelected(initialSelected);
  }, [initialSelected]);
  return /*#__PURE__*/_react["default"].createElement(_ui.ListItem, {
    margin: margin,
    start: selected ? /*#__PURE__*/_react["default"].createElement(_ui.Icon, {
      data: ui.icons.states.selected,
      size: 30
    }) : /*#__PURE__*/_react["default"].createElement(_ui.Icon, {
      data: ui.icons.states.unselected,
      size: 30
    }),
    title: title,
    end: end,
    onClick: function onClick() {
      setSelected(true);
      onSelect();
    }
  });
}, function (prev, next) {
  return prev.selected === next.selected;
});
exports.CardItem = CardItem;
CardItem.propTypes = {
  ui: _propTypes["default"].shape({
    icons: _propTypes["default"].shape({
      states: _propTypes["default"].shape({
        selected: _propTypes["default"].func.isRequired,
        unselected: _propTypes["default"].func.isRequired
      })
    }).isRequired
  }).isRequired,
  selected: _propTypes["default"].bool,
  title: _propTypes["default"].string.isRequired,
  end: _propTypes["default"].object,
  onSelect: _propTypes["default"].func.isRequired // ()

};
CardItem.defaultProps = {
  selected: false
};
var CardPlaceholder = (0, _react.memo)(function () {
  return /*#__PURE__*/_react["default"].createElement(_ui.Container, null, /*#__PURE__*/_react["default"].createElement(_ui.LinePlaceholder, null), /*#__PURE__*/_react["default"].createElement(_ui.LinePlaceholder, null), /*#__PURE__*/_react["default"].createElement(_ui.LinePlaceholder, null));
});
exports.CardPlaceholder = CardPlaceholder;
CardPlaceholder.propTypes = {};