"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _resolution = require("@yosmy/resolution");

var _ui = require("@yosmy/ui");

var _ListCards = _interopRequireDefault(require("./ListCards.block"));

var _AddCard = _interopRequireDefault(require("./AddCard.block"));

var _DeleteCard = _interopRequireDefault(require("./DeleteCard.block"));

var ManageCards = (0, _react.memo)(function (_ref) {
  var api = _ref.api,
      ui = _ref.ui,
      _onSelect = _ref.onSelect;

  var _useState = (0, _react.useState)({
    location: 'list-cards',
    // list-cards, add-card, delete-card
    payload: {}
  }),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      url = _useState2[0],
      setUrl = _useState2[1];

  return (0, _resolution.resolve)(url.location, [{
    location: /^list-cards/,
    element: function element() {
      return /*#__PURE__*/_react["default"].createElement(_ListCards["default"], {
        ui: {
          layout: ui.layout,
          icons: {
            actions: {
              "delete": ui.icons.actions["delete"]
            },
            states: {
              selected: ui.icons.states.selected,
              unselected: ui.icons.states.unselected
            }
          }
        },
        api: {
          collectCards: api.collectCards
        },
        onSelect: function onSelect(card) {
          _onSelect(card);
        },
        onEmpty: function onEmpty() {
          setUrl({
            location: "add-card",
            payload: {
              back: false
            }
          });
        },
        onDelete: function onDelete(card) {
          setUrl({
            location: "delete-card",
            payload: {
              card: card
            }
          });
        },
        onAdd: function onAdd() {
          setUrl({
            location: "add-card",
            payload: {
              back: true
            }
          });
        }
      });
    },
    "default": true
  }, {
    location: /^add-card/,
    element: function element() {
      return /*#__PURE__*/_react["default"].createElement(_AddCard["default"], {
        ui: {
          layout: function layout(_ref2) {
            var children = _ref2.children,
                props = (0, _objectWithoutProperties2["default"])(_ref2, ["children"]);
            return /*#__PURE__*/_react["default"].createElement(ui.layout, props, children, /*#__PURE__*/_react["default"].createElement(_ui.Image, {
              source: require("./secure.png"),
              margin: {
                top: 2
              },
              width: 200,
              height: 200 * 150 / 668,
              center: true
            }));
          },
          icons: {
            objects: {
              cvc: ui.icons.objects.cvc,
              expiry: ui.icons.objects.expiry,
              name: ui.icons.objects.name,
              number: ui.icons.objects.number,
              zip: ui.icons.objects.zip
            }
          }
        },
        onAdd: function onAdd(number, name, month, year, cvc, zip, onError) {
          api.addCard(number, name, month, year, cvc, zip, // onReturn
          function (card) {
            setUrl({
              location: "list-cards",
              payload: {}
            });

            _onSelect(card);
          }, // onPaymentException
          function (_ref3) {
            var message = _ref3.message;
            onError(message);
          });
        },
        onBack: url.payload.back ? function () {
          setUrl({
            location: "list-cards",
            payload: {}
          });
        } : null
      });
    }
  }, {
    location: /^delete-card/,
    element: function element() {
      return /*#__PURE__*/_react["default"].createElement(_DeleteCard["default"], {
        ui: {
          layout: ui.layout
        },
        api: {
          deleteCard: api.deleteCard
        },
        card: url.payload.card,
        onDelete: function onDelete() {
          setUrl({
            location: "list-cards",
            payload: {}
          });
        },
        onBack: function onBack() {
          setUrl({
            location: "list-cards",
            payload: {}
          });
        }
      });
    }
  }]);
}, function () {
  return true;
});
ManageCards.propTypes = {
  ui: _propTypes["default"].shape({
    layout: _propTypes["default"].func.isRequired,
    icons: _propTypes["default"].shape({
      actions: _propTypes["default"].shape({
        "delete": _propTypes["default"].func.isRequired
      }).isRequired,
      objects: _propTypes["default"].shape({
        bank: _propTypes["default"].func.isRequired,
        cvc: _propTypes["default"].func.isRequired,
        expiry: _propTypes["default"].func.isRequired,
        lock: _propTypes["default"].func.isRequired,
        name: _propTypes["default"].func.isRequired,
        number: _propTypes["default"].func.isRequired,
        zip: _propTypes["default"].func.isRequired
      }).isRequired,
      states: _propTypes["default"].shape({
        selected: _propTypes["default"].func.isRequired,
        unselected: _propTypes["default"].func.isRequired
      }).isRequired
    }).isRequired
  }).isRequired,
  api: _propTypes["default"].shape({
    addCard: _propTypes["default"].func.isRequired,
    collectCards: _propTypes["default"].func.isRequired,
    deleteCard: _propTypes["default"].func.isRequired
  }).isRequired,
  onSelect: _propTypes["default"].func.isRequired // (id)

};
var _default = ManageCards;
exports["default"] = _default;