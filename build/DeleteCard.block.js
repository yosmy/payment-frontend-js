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

var _Props = require("./Props");

// @refresh reset
var DeleteCardBlock = (0, _react.memo)(function (_ref) {
  var ui = _ref.ui,
      api = _ref.api,
      card = _ref.card,
      onDelete = _ref.onDelete,
      onBack = _ref.onBack;

  var _useState = (0, _react.useState)({
    progress: false
  }),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      execution = _useState2[0],
      setExecution = _useState2[1];

  return /*#__PURE__*/_react["default"].createElement(ui.layout, {
    progress: execution.progress
  }, /*#__PURE__*/_react["default"].createElement(_ui.Text, {
    center: true
  }, "\xBFSeguro que quieres borrar la tarjeta **** **** **** ", card.last4, "?"), /*#__PURE__*/_react["default"].createElement(_ui.Container, {
    flow: "row",
    align: {
      main: "center",
      cross: "center"
    },
    margin: {
      top: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_ui.SecondaryButton, {
    disabled: execution.progress,
    onClick: onBack
  }, /*#__PURE__*/_react["default"].createElement(_ui.Text, null, "Regresar")), /*#__PURE__*/_react["default"].createElement(_ui.DangerButton, {
    disabled: execution.progress,
    progress: execution.progress,
    margin: {
      left: 2
    },
    onClick: function onClick() {
      setExecution({
        progress: true
      });
      api.deleteCard(card.id, // onReturn
      function () {
        onDelete();
      });
    }
  }, /*#__PURE__*/_react["default"].createElement(_ui.Text, null, "S\xED, borrarla"))));
}, function () {
  return true;
});
DeleteCardBlock.propTypes = {
  ui: _propTypes["default"].shape({
    layout: _propTypes["default"].func.isRequired
  }).isRequired,
  api: _propTypes["default"].shape({
    deleteCard: _propTypes["default"].func.isRequired
  }).isRequired,
  card: _Props.CardProp.isRequired,
  onDelete: _propTypes["default"].func.isRequired,
  // ()
  onBack: _propTypes["default"].func.isRequired // ()

};
var _default = DeleteCardBlock;
exports["default"] = _default;