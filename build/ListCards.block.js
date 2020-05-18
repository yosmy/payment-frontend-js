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

var _CardItem = require("./CardItem");

var ListCardsBlock = function ListCardsBlock(_ref) {
  var ui = _ref.ui,
      api = _ref.api,
      _onSelect = _ref.onSelect,
      onEmpty = _ref.onEmpty,
      onDelete = _ref.onDelete,
      onAdd = _ref.onAdd;

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      cards = _useState2[0],
      setCards = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      selected = _useState4[0],
      setSelected = _useState4[1];

  var _useState5 = (0, _react.useState)({
    progress: false
  }),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      execution = _useState6[0],
      setExecution = _useState6[1];

  (0, _react.useEffect)(function () {
    setExecution({
      progress: true
    });
    api.collectCards( // onReturn
    function (cards) {
      if (cards.length === 0) {
        onEmpty();
        return;
      }

      setCards(cards);
      setExecution({
        progress: false
      });
    });
  }, [api]);

  if (cards === null) {
    return /*#__PURE__*/_react["default"].createElement(ui.layout, {
      progress: execution.progress
    });
  }

  return /*#__PURE__*/_react["default"].createElement(ui.layout, {
    progress: execution.progress
  }, cards.map(function (card, i) {
    var id = card.id,
        last4 = card.last4;
    return /*#__PURE__*/_react["default"].createElement(_CardItem.CardItem, {
      key: id,
      ui: {
        icons: {
          states: {
            selected: ui.icons.states.selected,
            unselected: ui.icons.states.unselected
          }
        }
      },
      margin: {
        top: i !== 0 ? 2 : undefined
      },
      border: 1,
      selected: selected && selected.id ? card.id === selected.id : false,
      title: "Cobrar de **** **** **** ".concat(last4),
      end: /*#__PURE__*/_react["default"].createElement(_ui.TertiaryButton, {
        onClick: function onClick() {
          onDelete(card);
        }
      }, /*#__PURE__*/_react["default"].createElement(_ui.Icon, {
        data: ui.icons.actions["delete"],
        size: 20
      })),
      onSelect: function onSelect() {
        setSelected(card);

        _onSelect(card);
      }
    });
  }), /*#__PURE__*/_react["default"].createElement(_CardItem.CardItem, {
    ui: {
      icons: {
        states: {
          selected: ui.icons.states.selected,
          unselected: ui.icons.states.unselected
        }
      }
    },
    margin: {
      top: 2
    },
    selected: selected === 'add',
    title: "A\xF1adir tarjeta nueva",
    onSelect: function onSelect() {
      setSelected('add');
      onAdd();
    }
  }));
};

ListCardsBlock.propTypes = {
  ui: _propTypes["default"].shape({
    layout: _propTypes["default"].func.isRequired,
    icons: _propTypes["default"].shape({
      actions: _propTypes["default"].shape({
        "delete": _propTypes["default"].func.isRequired
      }).isRequired,
      states: _propTypes["default"].shape({
        selected: _propTypes["default"].func.isRequired,
        unselected: _propTypes["default"].func.isRequired
      }).isRequired
    }).isRequired
  }).isRequired,
  api: _propTypes["default"].shape({
    collectCards: _propTypes["default"].func.isRequired
  }).isRequired,
  onSelect: _propTypes["default"].func.isRequired,
  // (card)
  onEmpty: _propTypes["default"].func.isRequired,
  // ()
  onDelete: _propTypes["default"].func.isRequired,
  // (card)
  onAdd: _propTypes["default"].func.isRequired
};
var _default = ListCardsBlock;
exports["default"] = _default;