"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ElastAlertAPIClient = void 0;

var _requestPromise = _interopRequireDefault(require("request-promise"));

var _url = _interopRequireDefault(require("url"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ElastAlertAPIClient =
/*#__PURE__*/
function () {
  function ElastAlertAPIClient() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, ElastAlertAPIClient);

    this.host = opts.host || 'http://localhost';
    this.port = opts.port || 8090;
    this.rule = {
      get: this._rule_get.bind(this),
      update: this._rule_update.bind(this),
      delete: this._rule_delete.bind(this)
    };
  }

  _createClass(ElastAlertAPIClient, [{
    key: "getUrl",
    value: function getUrl() {
      return "".concat(this.host, ":").concat(this.port);
    }
  }, {
    key: "info",
    value: function () {
      var _info = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _requestPromise.default.get({
                  url: this.getUrl(),
                  json: true
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function info() {
        return _info.apply(this, arguments);
      };
    }()
  }, {
    key: "status",
    value: function () {
      var _status = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _requestPromise.default.get({
                  url: _url.default.resolve(this.getUrl(), '/status'),
                  json: true
                });

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function status() {
        return _status.apply(this, arguments);
      };
    }()
  }, {
    key: "rules",
    value: function () {
      var _rules = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _requestPromise.default.get({
                  url: _url.default.resolve(this.getUrl(), '/rules'),
                  json: true
                });

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function rules() {
        return _rules.apply(this, arguments);
      };
    }()
  }, {
    key: "_rule_get",
    value: function () {
      var _rule_get2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(id) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _requestPromise.default.get({
                  url: _url.default.resolve(this.getUrl(), "/rules/".concat(id)),
                  json: true
                });

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function _rule_get(_x) {
        return _rule_get2.apply(this, arguments);
      };
    }()
  }, {
    key: "_rule_update",
    value: function () {
      var _rule_update2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(id, body) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _requestPromise.default.post({
                  url: _url.default.resolve(this.getUrl(), "/rules/".concat(id)),
                  body: body,
                  json: true
                });

              case 2:
                return _context5.abrupt("return", _context5.sent);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function _rule_update(_x2, _x3) {
        return _rule_update2.apply(this, arguments);
      };
    }()
  }, {
    key: "_rule_delete",
    value: function () {
      var _rule_delete2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(id) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _requestPromise.default.del({
                  url: _url.default.resolve(this.getUrl(), "/rules/".concat(id)),
                  json: true
                });

              case 2:
                return _context6.abrupt("return", _context6.sent);

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function _rule_delete(_x4) {
        return _rule_delete2.apply(this, arguments);
      };
    }()
  }]);

  return ElastAlertAPIClient;
}();

exports.ElastAlertAPIClient = ElastAlertAPIClient;