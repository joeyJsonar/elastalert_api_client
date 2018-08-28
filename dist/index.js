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

/**
 * Encapsulates the http client that interacts with bitsensor's
 * elastalert_api.
 */
var ElastAlertAPIClient =
/*#__PURE__*/
function () {
  /**
   * Creates the elastalert API client.
   * @param {Object} opts ElastAlert API information.
   * @param {string} opts.host The host ElastAlert API is listening to.
   * @param {number} opts.port The port ElastAlert API is listening to.
   */
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
  /**
   * @returns URL of the ElastAlert API.
   */


  _createClass(ElastAlertAPIClient, [{
    key: "getUrl",
    value: function getUrl() {
      return "".concat(this.host, ":").concat(this.port);
    }
    /**
     * @returns The current version running
     */

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
    /**
     * @returns either 'SETUP', 'READY', 'ERROR', 'STARTING', 'CLOSING', 'FIRST_RUN' or 'IDLE' 
     *   depending on the current ElastAlert process status.
     */

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
    /**
     * Stops the current ElastAlert process.
     */

  }, {
    key: "stop",
    value: function () {
      var _stop = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _requestPromise.default.get({
                  url: _url.default.resolve(this.getUrl(), '/status/control/stop'),
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

      return function stop() {
        return _stop.apply(this, arguments);
      };
    }()
    /**
     * Starts the current ElastAlert process.
     */

  }, {
    key: "start",
    value: function () {
      var _start = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _requestPromise.default.get({
                  url: _url.default.resolve(this.getUrl(), '/status/control/start'),
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

      return function start() {
        return _start.apply(this, arguments);
      };
    }()
    /**
     * Restarts the current ElastAlert process.
     */

  }, {
    key: "restart",
    value: function () {
      var _restart = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.stop();

              case 2:
                _context5.next = 4;
                return this.start();

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function restart() {
        return _restart.apply(this, arguments);
      };
    }()
    /**
     * @return A list of directories and rules that exist in the rulesPath (from the config) and 
     *   are being run by the ElastAlert process.
     */

  }, {
    key: "rules",
    value: function () {
      var _rules = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6() {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _requestPromise.default.get({
                  url: _url.default.resolve(this.getUrl(), '/rules'),
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

      return function rules() {
        return _rules.apply(this, arguments);
      };
    }()
    /**
     * @param {string} id ID of a rule to retrieve.
     * @return Rule object, where :id is the id of the rule returned by GET /rules, which will 
     *   return the file contents of that rule.
     * @function get
     * @memberof rule
     */

  }, {
    key: "_rule_get",
    value: function () {
      var _rule_get2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7(id) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return _requestPromise.default.get({
                  url: _url.default.resolve(this.getUrl(), "/rules/".concat(id)),
                  json: true
                });

              case 2:
                return _context7.abrupt("return", _context7.sent);

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function _rule_get(_x) {
        return _rule_get2.apply(this, arguments);
      };
    }()
    /**
     * Where :id is the id of the rule returned by GET /rules, which will 
     * allow you to edit the rule. The body send should be:
     * 
     * ```javascript
     * {
     *   // Required - The full yaml rule config.
     *   "yaml": "..."
     * }
     * ```
     * 
     * @param {string} id ID of a rule to update.
     * @param {Object} body New rule body.
     * @return {Object} Result of the rule update.
     * @function update
     * @memberof rule
     */

  }, {
    key: "_rule_update",
    value: function () {
      var _rule_update2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee8(id, body) {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return _requestPromise.default.post({
                  url: _url.default.resolve(this.getUrl(), "/rules/".concat(id)),
                  body: body,
                  json: true
                });

              case 2:
                return _context8.abrupt("return", _context8.sent);

              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      return function _rule_update(_x2, _x3) {
        return _rule_update2.apply(this, arguments);
      };
    }()
    /**
     * @param {string} id ID of the rule to delete.
     * @return {Object} Result of the rule delete.
     * @function delete
     * @memberof rule
     */

  }, {
    key: "_rule_delete",
    value: function () {
      var _rule_delete2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee9(id) {
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return _requestPromise.default.del({
                  url: _url.default.resolve(this.getUrl(), "/rules/".concat(id)),
                  json: true
                });

              case 2:
                return _context9.abrupt("return", _context9.sent);

              case 3:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      return function _rule_delete(_x4) {
        return _rule_delete2.apply(this, arguments);
      };
    }()
  }]);

  return ElastAlertAPIClient;
}();

exports.ElastAlertAPIClient = ElastAlertAPIClient;