"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ui = require("@yosmy/ui");

var BackendListCharges = function BackendListCharges(_ref) {
  var ui = _ref.ui,
      api = _ref.api,
      limit = _ref.limit;
  return /*#__PURE__*/_react["default"].createElement(_ui.LoaderList, {
    ui: {
      layout: ui.layout,
      empty: function empty() {
        return /*#__PURE__*/_react["default"].createElement(_ui.Text, null, "No hay pagos a\xFAn");
      },
      loading: function loading() {
        return /*#__PURE__*/_react["default"].createElement(_ui.Container, {
          margin: {
            top: 2
          }
        }, /*#__PURE__*/_react["default"].createElement(_ui.LinePlaceholder, null), /*#__PURE__*/_react["default"].createElement(_ui.LinePlaceholder, null), /*#__PURE__*/_react["default"].createElement(_ui.LinePlaceholder, null));
      },
      more: function more(_ref2) {
        var onClick = _ref2.onClick;
        return /*#__PURE__*/_react["default"].createElement(_ui.Container, {
          flow: "row",
          align: {
            main: "center"
          }
        }, /*#__PURE__*/_react["default"].createElement(_ui.PrimaryButton, {
          margin: {
            top: 2
          },
          onClick: onClick
        }, /*#__PURE__*/_react["default"].createElement(_ui.Text, null, "Mostrar m\xE1s")));
      },
      item: function item(props) {
        return /*#__PURE__*/_react["default"].createElement(ui.item, props);
      }
    },
    limit: limit,
    onCollect: function onCollect(limit, skip) {
      return new Promise(function (resolve) {
        api.collectCharges(limit, skip, // onReturn
        function (charges) {
          resolve({
            items: charges
          });
        });
      });
    }
  });
};

BackendListCharges.propTypes = {
  ui: _propTypes["default"].shape({
    layout: _propTypes["default"].func.isRequired,
    item: _propTypes["default"].func.isRequired
  }).isRequired,
  api: _propTypes["default"].shape({
    collectCharges: _propTypes["default"].func.isRequired
  }).isRequired,
  limit: _propTypes["default"].number.isRequired
};
var _default = BackendListCharges;
exports["default"] = _default;