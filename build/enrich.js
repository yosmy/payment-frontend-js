"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var CardProp = _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].shape({
  last4: _propTypes["default"].string.isRequired
})]);

var ChargeProp = _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].shape({
  amount: _propTypes["default"].number.isRequired
})]);

var FingerprintProp = _propTypes["default"].string;

var enrichCards = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(items, filter, pick, collect, enrich) {
    var cards;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(items.length === 0)) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", items);

          case 2:
            cards = items.filter(filter).map(pick);
            _context.next = 5;
            return collect(cards);

          case 5:
            cards = _context.sent;
            items = items.map(function (item) {
              if (!filter(item)) {
                return item;
              }

              var card = cards.find(function (card) {
                return card.id === pick(item);
              });
              return enrich(item, {
                id: card.id,
                last4: card.last4
              });
            });
            return _context.abrupt("return", items);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function enrichCards(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();

var enrichCharges = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(items, filter, pick, collect, enrich) {
    var charges;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(items.length === 0)) {
              _context2.next = 2;
              break;
            }

            return _context2.abrupt("return", items);

          case 2:
            charges = items.filter(filter).map(pick);
            _context2.next = 5;
            return collect(charges);

          case 5:
            charges = _context2.sent;
            items = items.map(function (item) {
              if (!filter(item)) {
                return item;
              }

              var charge = charges.find(function (charge) {
                return charge.id === pick(item);
              });
              return enrich(item, {
                id: charge.id,
                amount: charge.amount
              });
            });
            return _context2.abrupt("return", items);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function enrichCharges(_x6, _x7, _x8, _x9, _x10) {
    return _ref2.apply(this, arguments);
  };
}();

var _default = {
  ChargeProp: ChargeProp,
  CardProp: CardProp,
  FingerprintProp: FingerprintProp,
  enrichCards: enrichCards,
  enrichCharges: enrichCharges
};
exports["default"] = _default;