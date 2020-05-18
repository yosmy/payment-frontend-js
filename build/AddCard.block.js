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

var _stringMask = _interopRequireDefault(require("string-mask"));

var _ui = require("@yosmy/ui");

// @refresh reset
var AddCardBlock = (0, _react.memo)(function (_ref) {
  var ui = _ref.ui,
      country = _ref.country,
      onAdd = _ref.onAdd,
      onBack = _ref.onBack;

  var _useState = (0, _react.useState)(""),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      number = _useState2[0],
      setNumber = _useState2[1];

  var _useState3 = (0, _react.useState)(""),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      name = _useState4[0],
      setName = _useState4[1];

  var _useState5 = (0, _react.useState)(""),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      expiry = _useState6[0],
      setExpiry = _useState6[1];

  var _useState7 = (0, _react.useState)(""),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      cvc = _useState8[0],
      setCvc = _useState8[1];

  var _useState9 = (0, _react.useState)(""),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      zip = _useState10[0],
      setZip = _useState10[1];

  var _useState11 = (0, _react.useState)({
    error: null,
    progress: false
  }),
      _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
      execution = _useState12[0],
      setExecution = _useState12[1];

  return /*#__PURE__*/_react["default"].createElement(ui.layout, {
    progress: execution.progress
  }, /*#__PURE__*/_react["default"].createElement(_ui.Input, {
    value: number,
    placeholder: "N\xFAmero de la tarjeta",
    start: /*#__PURE__*/_react["default"].createElement(_ui.FormIcon, {
      data: ui.icons.objects.number
    }),
    length: 19,
    keyboard: "number",
    onChange: function onChange(value) {
      if (value.length >= 5 && value.length <= 9) {
        // Clean before apply mask
        value = value.replace(/ /g, ""); // Apply mask

        value = _stringMask["default"].apply(value, "0000 0000");
      } else if (value.length >= 10 && value.length <= 14) {
        // Clean before apply mask
        value = value.replace(/ /g, ""); // Apply mask

        value = _stringMask["default"].apply(value, "0000 0000 0000");
      } else if (value.length >= 15) {
        // Clean before apply mask
        value = value.replace(/ /g, ""); // Apply mask

        value = _stringMask["default"].apply(value, "0000 0000 0000 0000");
      }

      setNumber(value);
    }
  }), /*#__PURE__*/_react["default"].createElement(_ui.Input, {
    value: name,
    placeholder: "Nombre y apellidos",
    start: /*#__PURE__*/_react["default"].createElement(_ui.FormIcon, {
      data: ui.icons.objects.name
    }),
    capitalize: "words",
    margin: {
      top: 2
    },
    onChange: function onChange(value) {
      setName(value);
    }
  }), /*#__PURE__*/_react["default"].createElement(_ui.Input, {
    value: expiry,
    start: /*#__PURE__*/_react["default"].createElement(_ui.FormIcon, {
      data: ui.icons.objects.expiry
    }),
    keyboard: "number",
    placeholder: "Expiraci\xF3n (MM/YY)",
    length: 5,
    margin: {
      top: 2
    },
    onChange: function onChange(value) {
      // value = value.replace(/ |\//g, "");
      // PhoneReceiver wrote 2nd number?
      if (expiry && expiry.length === 1 && value.length === 2) {
        value = value + "/";
      } // PhoneReceiver deleted slash character?
      else if (expiry && expiry.length === 3 && value.length === 2) {
          // Just take 1st character
          value = value.substr(0, 1);
        } // 3rd character is also a number. Did user write numbers too fast?
        else if (value.length > 2 && value.substr(2, 1) !== "/") {
            value = value.substr(0, 2) + "/" + value.substr(2, 2);
          }

      setExpiry(value);
    }
  }), /*#__PURE__*/_react["default"].createElement(_ui.Container, {
    flow: "row",
    align: {
      main: "flex-start",
      cross: "center"
    },
    margin: {
      top: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_ui.Input, {
    value: cvc,
    start: /*#__PURE__*/_react["default"].createElement(_ui.FormIcon, {
      data: ui.icons.objects.cvc
    }),
    keyboard: "number",
    length: 4 // American express cards have 4 digits
    ,
    placeholder: "CVC (c\xF3digo de seguridad)",
    flex: true,
    onChange: function onChange(value) {
      setCvc(value);
    }
  }), /*#__PURE__*/_react["default"].createElement(_ui.Image, {
    source: require("./cvc.png"),
    width: 50,
    height: 50 * 131 / 196,
    margin: {
      left: 2
    }
  })), country === "US" && /*#__PURE__*/_react["default"].createElement(_ui.Input, {
    margin: {
      top: 2
    },
    value: zip,
    start: /*#__PURE__*/_react["default"].createElement(_ui.FormIcon, {
      data: ui.icons.objects.zip
    }),
    keyboard: "number",
    placeholder: "C\xF3digo postal",
    onChange: function onChange(value) {
      setZip(value);
    }
  }), execution.error && /*#__PURE__*/_react["default"].createElement(_ui.Error, {
    margin: {
      top: 2
    }
  }, execution.error), /*#__PURE__*/_react["default"].createElement(_ui.Container, {
    flow: "row",
    align: {
      main: "center",
      cross: "center"
    },
    margin: {
      top: 2
    }
  }, onBack && /*#__PURE__*/_react["default"].createElement(_ui.SecondaryButton, {
    onClick: onBack
  }, /*#__PURE__*/_react["default"].createElement(_ui.Text, null, "Regresar")), /*#__PURE__*/_react["default"].createElement(_ui.PrimaryButton, {
    margin: {
      left: onBack ? 2 : 0
    },
    progress: execution.progress,
    disabled: execution.progress,
    onClick: function onClick() {
      if (!number) {
        setExecution({
          error: "El número no puede estar en blanco",
          progress: false
        });
        return;
      }

      if (!name) {
        setExecution({
          error: "El nombre no puede estar en blanco",
          progress: false
        });
        return;
      }

      if (!expiry) {
        setExecution({
          error: "La fecha de expiración no puede estar en blanco",
          progress: false
        });
        return;
      }

      if (!cvc) {
        setExecution({
          error: "El código de seguridad no puede estar en blanco",
          progress: false
        });
        return;
      }

      if (country === "US" && !zip) {
        setExecution({
          error: "El código postal no puede estar en blanco",
          progress: false
        });
        return;
      }

      setExecution({
        error: null,
        progress: true
      });
      onAdd(number.replace(/ /g, ""), name, expiry.replace(/[ /]/g, "").substr(0, 2), // expiry.replace(/ |\//g, "").substr(0, 2),
      expiry.replace(/[ /]/g, "").substr(2, 2), // expiry.replace(/ |\//g, "").substr(2, 2),
      cvc, zip, // onError
      function (message) {
        setExecution({
          error: message,
          progress: false
        });
      });
    }
  }, /*#__PURE__*/_react["default"].createElement(_ui.Text, null, "Continuar"))));
}, function () {
  return true;
});
AddCardBlock.propTypes = {
  ui: _propTypes["default"].shape({
    layout: _propTypes["default"].func.isRequired,
    icons: _propTypes["default"].shape({
      objects: _propTypes["default"].shape({
        cvc: _propTypes["default"].func.isRequired,
        expiry: _propTypes["default"].func.isRequired,
        name: _propTypes["default"].func.isRequired,
        number: _propTypes["default"].func.isRequired,
        zip: _propTypes["default"].func.isRequired
      }).isRequired
    }).isRequired
  }).isRequired,
  country: _propTypes["default"].string,
  onAdd: _propTypes["default"].func.isRequired,
  // (number, name, month, year, cvc, zip, onError)
  onBack: _propTypes["default"].func // ()

};
var _default = AddCardBlock;
exports["default"] = _default;