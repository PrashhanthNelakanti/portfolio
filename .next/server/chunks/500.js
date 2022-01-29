"use strict";
exports.id = 500;
exports.ids = [500];
exports.modules = {

/***/ 7903:
/***/ ((module) => {



function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Agent() {
  this._defaults = [];
}

var _loop = function _loop() {
  var fn = _arr[_i];

  // Default setting for all requests from this agent
  Agent.prototype[fn] = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    this._defaults.push({
      fn: fn,
      args: args
    });

    return this;
  };
};

for (var _i = 0, _arr = ['use', 'on', 'once', 'set', 'query', 'type', 'accept', 'auth', 'withCredentials', 'sortQuery', 'retry', 'ok', 'redirects', 'timeout', 'buffer', 'serialize', 'parse', 'ca', 'key', 'pfx', 'cert', 'disableTLSCerts']; _i < _arr.length; _i++) {
  _loop();
}

Agent.prototype._setDefaults = function (request) {
  var _iterator = _createForOfIteratorHelper(this._defaults),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var def = _step.value;
      request[def.fn].apply(request, _toConsumableArray(def.args));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

module.exports = Agent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hZ2VudC1iYXNlLmpzIl0sIm5hbWVzIjpbIkFnZW50IiwiX2RlZmF1bHRzIiwiZm4iLCJwcm90b3R5cGUiLCJhcmdzIiwicHVzaCIsIl9zZXREZWZhdWx0cyIsInJlcXVlc3QiLCJkZWYiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsS0FBVCxHQUFpQjtBQUNmLE9BQUtDLFNBQUwsR0FBaUIsRUFBakI7QUFDRDs7O0FBRUksTUFBTUMsRUFBRSxXQUFSOztBQXdCSDtBQUNBRixFQUFBQSxLQUFLLENBQUNHLFNBQU4sQ0FBZ0JELEVBQWhCLElBQXNCLFlBQW1CO0FBQUEsc0NBQU5FLElBQU07QUFBTkEsTUFBQUEsSUFBTTtBQUFBOztBQUN2QyxTQUFLSCxTQUFMLENBQWVJLElBQWYsQ0FBb0I7QUFBRUgsTUFBQUEsRUFBRSxFQUFGQSxFQUFGO0FBQU1FLE1BQUFBLElBQUksRUFBSkE7QUFBTixLQUFwQjs7QUFDQSxXQUFPLElBQVA7QUFDRCxHQUhEOzs7QUF6QkYsd0JBQWlCLENBQ2YsS0FEZSxFQUVmLElBRmUsRUFHZixNQUhlLEVBSWYsS0FKZSxFQUtmLE9BTGUsRUFNZixNQU5lLEVBT2YsUUFQZSxFQVFmLE1BUmUsRUFTZixpQkFUZSxFQVVmLFdBVmUsRUFXZixPQVhlLEVBWWYsSUFaZSxFQWFmLFdBYmUsRUFjZixTQWRlLEVBZWYsUUFmZSxFQWdCZixXQWhCZSxFQWlCZixPQWpCZSxFQWtCZixJQWxCZSxFQW1CZixLQW5CZSxFQW9CZixLQXBCZSxFQXFCZixNQXJCZSxFQXNCZixpQkF0QmUsQ0FBakIsMEJBdUJHO0FBQUE7QUFNRjs7QUFFREosS0FBSyxDQUFDRyxTQUFOLENBQWdCRyxZQUFoQixHQUErQixVQUFVQyxPQUFWLEVBQW1CO0FBQUEsNkNBQzlCLEtBQUtOLFNBRHlCO0FBQUE7O0FBQUE7QUFDaEQsd0RBQWtDO0FBQUEsVUFBdkJPLEdBQXVCO0FBQ2hDRCxNQUFBQSxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sRUFBTCxDQUFQLE9BQUFLLE9BQU8scUJBQVlDLEdBQUcsQ0FBQ0osSUFBaEIsRUFBUDtBQUNEO0FBSCtDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJakQsQ0FKRDs7QUFNQUssTUFBTSxDQUFDQyxPQUFQLEdBQWlCVixLQUFqQiIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIEFnZW50KCkge1xuICB0aGlzLl9kZWZhdWx0cyA9IFtdO1xufVxuXG5mb3IgKGNvbnN0IGZuIG9mIFtcbiAgJ3VzZScsXG4gICdvbicsXG4gICdvbmNlJyxcbiAgJ3NldCcsXG4gICdxdWVyeScsXG4gICd0eXBlJyxcbiAgJ2FjY2VwdCcsXG4gICdhdXRoJyxcbiAgJ3dpdGhDcmVkZW50aWFscycsXG4gICdzb3J0UXVlcnknLFxuICAncmV0cnknLFxuICAnb2snLFxuICAncmVkaXJlY3RzJyxcbiAgJ3RpbWVvdXQnLFxuICAnYnVmZmVyJyxcbiAgJ3NlcmlhbGl6ZScsXG4gICdwYXJzZScsXG4gICdjYScsXG4gICdrZXknLFxuICAncGZ4JyxcbiAgJ2NlcnQnLFxuICAnZGlzYWJsZVRMU0NlcnRzJ1xuXSkge1xuICAvLyBEZWZhdWx0IHNldHRpbmcgZm9yIGFsbCByZXF1ZXN0cyBmcm9tIHRoaXMgYWdlbnRcbiAgQWdlbnQucHJvdG90eXBlW2ZuXSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgdGhpcy5fZGVmYXVsdHMucHVzaCh7IGZuLCBhcmdzIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xufVxuXG5BZ2VudC5wcm90b3R5cGUuX3NldERlZmF1bHRzID0gZnVuY3Rpb24gKHJlcXVlc3QpIHtcbiAgZm9yIChjb25zdCBkZWYgb2YgdGhpcy5fZGVmYXVsdHMpIHtcbiAgICByZXF1ZXN0W2RlZi5mbl0oLi4uZGVmLmFyZ3MpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFnZW50O1xuIl19

/***/ }),

/***/ 1930:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Module dependencies.
 */
// eslint-disable-next-line node/no-deprecated-api
var _require = __webpack_require__(7310),
    parse = _require.parse;

var _require2 = __webpack_require__(3014),
    CookieJar = _require2.CookieJar;

var _require3 = __webpack_require__(3014),
    CookieAccessInfo = _require3.CookieAccessInfo;

var methods = __webpack_require__(4710);

var request = __webpack_require__(4141);

var AgentBase = __webpack_require__(7903);
/**
 * Expose `Agent`.
 */


module.exports = Agent;
/**
 * Initialize a new `Agent`.
 *
 * @api public
 */

function Agent(options) {
  if (!(this instanceof Agent)) {
    return new Agent(options);
  }

  AgentBase.call(this);
  this.jar = new CookieJar();

  if (options) {
    if (options.ca) {
      this.ca(options.ca);
    }

    if (options.key) {
      this.key(options.key);
    }

    if (options.pfx) {
      this.pfx(options.pfx);
    }

    if (options.cert) {
      this.cert(options.cert);
    }

    if (options.rejectUnauthorized === false) {
      this.disableTLSCerts();
    }
  }
}

Agent.prototype = Object.create(AgentBase.prototype);
/**
 * Save the cookies in the given `res` to
 * the agent's cookie jar for persistence.
 *
 * @param {Response} res
 * @api private
 */

Agent.prototype._saveCookies = function (res) {
  var cookies = res.headers['set-cookie'];
  if (cookies) this.jar.setCookies(cookies);
};
/**
 * Attach cookies when available to the given `req`.
 *
 * @param {Request} req
 * @api private
 */


Agent.prototype._attachCookies = function (request_) {
  var url = parse(request_.url);
  var access = new CookieAccessInfo(url.hostname, url.pathname, url.protocol === 'https:');
  var cookies = this.jar.getCookies(access).toValueString();
  request_.cookies = cookies;
};

var _iterator = _createForOfIteratorHelper(methods),
    _step;

try {
  var _loop = function _loop() {
    var name = _step.value;
    var method = name.toUpperCase();

    Agent.prototype[name] = function (url, fn) {
      var request_ = new request.Request(method, url);
      request_.on('response', this._saveCookies.bind(this));
      request_.on('redirect', this._saveCookies.bind(this));
      request_.on('redirect', this._attachCookies.bind(this, request_));

      this._setDefaults(request_);

      this._attachCookies(request_);

      if (fn) {
        request_.end(fn);
      }

      return request_;
    };
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

Agent.prototype.del = Agent.prototype.delete;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2FnZW50LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJwYXJzZSIsIkNvb2tpZUphciIsIkNvb2tpZUFjY2Vzc0luZm8iLCJtZXRob2RzIiwicmVxdWVzdCIsIkFnZW50QmFzZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJBZ2VudCIsIm9wdGlvbnMiLCJjYWxsIiwiamFyIiwiY2EiLCJrZXkiLCJwZngiLCJjZXJ0IiwicmVqZWN0VW5hdXRob3JpemVkIiwiZGlzYWJsZVRMU0NlcnRzIiwicHJvdG90eXBlIiwiT2JqZWN0IiwiY3JlYXRlIiwiX3NhdmVDb29raWVzIiwicmVzIiwiY29va2llcyIsImhlYWRlcnMiLCJzZXRDb29raWVzIiwiX2F0dGFjaENvb2tpZXMiLCJyZXF1ZXN0XyIsInVybCIsImFjY2VzcyIsImhvc3RuYW1lIiwicGF0aG5hbWUiLCJwcm90b2NvbCIsImdldENvb2tpZXMiLCJ0b1ZhbHVlU3RyaW5nIiwibmFtZSIsIm1ldGhvZCIsInRvVXBwZXJDYXNlIiwiZm4iLCJSZXF1ZXN0Iiwib24iLCJiaW5kIiwiX3NldERlZmF1bHRzIiwiZW5kIiwiZGVsIiwiZGVsZXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsZUFBa0JBLE9BQU8sQ0FBQyxLQUFELENBQXpCO0FBQUEsSUFBUUMsS0FBUixZQUFRQSxLQUFSOztBQUNBLGdCQUFzQkQsT0FBTyxDQUFDLFdBQUQsQ0FBN0I7QUFBQSxJQUFRRSxTQUFSLGFBQVFBLFNBQVI7O0FBQ0EsZ0JBQTZCRixPQUFPLENBQUMsV0FBRCxDQUFwQztBQUFBLElBQVFHLGdCQUFSLGFBQVFBLGdCQUFSOztBQUNBLElBQU1DLE9BQU8sR0FBR0osT0FBTyxDQUFDLFNBQUQsQ0FBdkI7O0FBQ0EsSUFBTUssT0FBTyxHQUFHTCxPQUFPLENBQUMsT0FBRCxDQUF2Qjs7QUFDQSxJQUFNTSxTQUFTLEdBQUdOLE9BQU8sQ0FBQyxlQUFELENBQXpCO0FBRUE7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QXdCLEtBQUtkLGNBQUwsQ0FBb0JlLElBQXBCLENBQXlCLElBQXpCLEVBQStCZCxRQUEvQixDQUF4Qjs7QUFDQSxXQUFLZSxZQUFMLENBQWtCZixRQUFsQjs7QUFDQSxXQUFLRCxjQUFMLENBQW9CQyxRQUFwQjs7QUFFQSxVQUFJVyxFQUFKLEVBQVE7QUFDTlgsUUFBQUEsUUFBUSxDQUFDZ0IsR0FBVCxDQUFhTCxFQUFiO0FBQ0Q7O0FBRUQsYUFBT1gsUUFBUDtBQUNELEtBZEQ7OztBQUZGLHNEQUE0QjtBQUFBO0FBaUIzQjs7Ozs7OztBQUVEbkIsS0FBSyxDQUFDVSxTQUFOLENBQWdCMEIsR0FBaEIsR0FBc0JwQyxLQUFLLENBQUNVLFNBQU4sQ0FBZ0IyQixNQUF0QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm9kZS9uby1kZXByZWNhdGVkLWFwaVxuY29uc3QgeyBwYXJzZSB9ID0gcmVxdWlyZSgndXJsJyk7XG5jb25zdCB7IENvb2tpZUphciB9ID0gcmVxdWlyZSgnY29va2llamFyJyk7XG5jb25zdCB7IENvb2tpZUFjY2Vzc0luZm8gfSA9IHJlcXVpcmUoJ2Nvb2tpZWphcicpO1xuY29uc3QgbWV0aG9kcyA9IHJlcXVpcmUoJ21ldGhvZHMnKTtcbmNvbnN0IHJlcXVlc3QgPSByZXF1aXJlKCcuLi8uLicpO1xuY29uc3QgQWdlbnRCYXNlID0gcmVxdWlyZSgnLi4vYWdlbnQtYmFzZScpO1xuXG4vKipcbiAqIEV4cG9zZSBgQWdlbnRgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gQWdlbnQ7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgQWdlbnRgLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gQWdlbnQob3B0aW9ucykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQWdlbnQpKSB7XG4gICAgcmV0dXJuIG5ldyBBZ2VudChvcHRpb25zKTtcbiAgfVxuXG4gIEFnZW50QmFzZS5jYWxsKHRoaXMpO1xuICB0aGlzLmphciA9IG5ldyBDb29raWVKYXIoKTtcblxuICBpZiAob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLmNhKSB7XG4gICAgICB0aGlzLmNhKG9wdGlvbnMuY2EpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmtleSkge1xuICAgICAgdGhpcy5rZXkob3B0aW9ucy5rZXkpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLnBmeCkge1xuICAgICAgdGhpcy5wZngob3B0aW9ucy5wZngpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmNlcnQpIHtcbiAgICAgIHRoaXMuY2VydChvcHRpb25zLmNlcnQpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLnJlamVjdFVuYXV0aG9yaXplZCA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuZGlzYWJsZVRMU0NlcnRzKCk7XG4gICAgfVxuICB9XG59XG5cbkFnZW50LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQWdlbnRCYXNlLnByb3RvdHlwZSk7XG5cbi8qKlxuICogU2F2ZSB0aGUgY29va2llcyBpbiB0aGUgZ2l2ZW4gYHJlc2AgdG9cbiAqIHRoZSBhZ2VudCdzIGNvb2tpZSBqYXIgZm9yIHBlcnNpc3RlbmNlLlxuICpcbiAqIEBwYXJhbSB7UmVzcG9uc2V9IHJlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuQWdlbnQucHJvdG90eXBlLl9zYXZlQ29va2llcyA9IGZ1bmN0aW9uIChyZXMpIHtcbiAgY29uc3QgY29va2llcyA9IHJlcy5oZWFkZXJzWydzZXQtY29va2llJ107XG4gIGlmIChjb29raWVzKSB0aGlzLmphci5zZXRDb29raWVzKGNvb2tpZXMpO1xufTtcblxuLyoqXG4gKiBBdHRhY2ggY29va2llcyB3aGVuIGF2YWlsYWJsZSB0byB0aGUgZ2l2ZW4gYHJlcWAuXG4gKlxuICogQHBhcmFtIHtSZXF1ZXN0fSByZXFcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbkFnZW50LnByb3RvdHlwZS5fYXR0YWNoQ29va2llcyA9IGZ1bmN0aW9uIChyZXF1ZXN0Xykge1xuICBjb25zdCB1cmwgPSBwYXJzZShyZXF1ZXN0Xy51cmwpO1xuICBjb25zdCBhY2Nlc3MgPSBuZXcgQ29va2llQWNjZXNzSW5mbyhcbiAgICB1cmwuaG9zdG5hbWUsXG4gICAgdXJsLnBhdGhuYW1lLFxuICAgIHVybC5wcm90b2NvbCA9PT0gJ2h0dHBzOidcbiAgKTtcbiAgY29uc3QgY29va2llcyA9IHRoaXMuamFyLmdldENvb2tpZXMoYWNjZXNzKS50b1ZhbHVlU3RyaW5nKCk7XG4gIHJlcXVlc3RfLmNvb2tpZXMgPSBjb29raWVzO1xufTtcblxuZm9yIChjb25zdCBuYW1lIG9mIG1ldGhvZHMpIHtcbiAgY29uc3QgbWV0aG9kID0gbmFtZS50b1VwcGVyQ2FzZSgpO1xuICBBZ2VudC5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbiAodXJsLCBmbikge1xuICAgIGNvbnN0IHJlcXVlc3RfID0gbmV3IHJlcXVlc3QuUmVxdWVzdChtZXRob2QsIHVybCk7XG5cbiAgICByZXF1ZXN0Xy5vbigncmVzcG9uc2UnLCB0aGlzLl9zYXZlQ29va2llcy5iaW5kKHRoaXMpKTtcbiAgICByZXF1ZXN0Xy5vbigncmVkaXJlY3QnLCB0aGlzLl9zYXZlQ29va2llcy5iaW5kKHRoaXMpKTtcbiAgICByZXF1ZXN0Xy5vbigncmVkaXJlY3QnLCB0aGlzLl9hdHRhY2hDb29raWVzLmJpbmQodGhpcywgcmVxdWVzdF8pKTtcbiAgICB0aGlzLl9zZXREZWZhdWx0cyhyZXF1ZXN0Xyk7XG4gICAgdGhpcy5fYXR0YWNoQ29va2llcyhyZXF1ZXN0Xyk7XG5cbiAgICBpZiAoZm4pIHtcbiAgICAgIHJlcXVlc3RfLmVuZChmbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcXVlc3RfO1xuICB9O1xufVxuXG5BZ2VudC5wcm90b3R5cGUuZGVsID0gQWdlbnQucHJvdG90eXBlLmRlbGV0ZTtcbiJdfQ==

/***/ }),

/***/ 8539:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Stream = __webpack_require__(2781);

var util = __webpack_require__(3837);

var net = __webpack_require__(1808);

var tls = __webpack_require__(4404); // eslint-disable-next-line node/no-deprecated-api


var _require = __webpack_require__(7310),
    parse = _require.parse;

var process = __webpack_require__(7282);

var semverGte = __webpack_require__(420);

var http2;
if (semverGte(process.version, 'v10.10.0')) http2 = __webpack_require__(5158);else throw new Error('superagent: this version of Node.js does not support http2');
var _http2$constants = http2.constants,
    HTTP2_HEADER_PATH = _http2$constants.HTTP2_HEADER_PATH,
    HTTP2_HEADER_STATUS = _http2$constants.HTTP2_HEADER_STATUS,
    HTTP2_HEADER_METHOD = _http2$constants.HTTP2_HEADER_METHOD,
    HTTP2_HEADER_AUTHORITY = _http2$constants.HTTP2_HEADER_AUTHORITY,
    HTTP2_HEADER_HOST = _http2$constants.HTTP2_HEADER_HOST,
    HTTP2_HEADER_SET_COOKIE = _http2$constants.HTTP2_HEADER_SET_COOKIE,
    NGHTTP2_CANCEL = _http2$constants.NGHTTP2_CANCEL;

function setProtocol(protocol) {
  return {
    request: function request(options) {
      return new Request(protocol, options);
    }
  };
}

function Request(protocol, options) {
  var _this = this;

  Stream.call(this);
  var defaultPort = protocol === 'https:' ? 443 : 80;
  var defaultHost = 'localhost';
  var port = options.port || defaultPort;
  var host = options.host || defaultHost;
  delete options.port;
  delete options.host;
  this.method = options.method;
  this.path = options.path;
  this.protocol = protocol;
  this.host = host;
  delete options.method;
  delete options.path;

  var sessionOptions = _objectSpread({}, options);

  if (options.socketPath) {
    sessionOptions.socketPath = options.socketPath;
    sessionOptions.createConnection = this.createUnixConnection.bind(this);
  }

  this._headers = {};
  var session = http2.connect("".concat(protocol, "//").concat(host, ":").concat(port), sessionOptions);
  this.setHeader('host', "".concat(host, ":").concat(port));
  session.on('error', function (error) {
    return _this.emit('error', error);
  });
  this.session = session;
}
/**
 * Inherit from `Stream` (which inherits from `EventEmitter`).
 */


util.inherits(Request, Stream);

Request.prototype.createUnixConnection = function (authority, options) {
  switch (this.protocol) {
    case 'http:':
      return net.connect(options.socketPath);

    case 'https:':
      options.ALPNProtocols = ['h2'];
      options.servername = this.host;
      options.allowHalfOpen = true;
      return tls.connect(options.socketPath, options);

    default:
      throw new Error('Unsupported protocol', this.protocol);
  }
}; // eslint-disable-next-line no-unused-vars


Request.prototype.setNoDelay = function (bool) {// We can not use setNoDelay with HTTP/2.
  // Node 10 limits http2session.socket methods to ones safe to use with HTTP/2.
  // See also https://nodejs.org/api/http2.html#http2_http2session_socket
};

Request.prototype.getFrame = function () {
  var _method,
      _this2 = this;

  if (this.frame) {
    return this.frame;
  }

  var method = (_method = {}, _defineProperty(_method, HTTP2_HEADER_PATH, this.path), _defineProperty(_method, HTTP2_HEADER_METHOD, this.method), _method);
  var headers = this.mapToHttp2Header(this._headers);
  headers = Object.assign(headers, method);
  var frame = this.session.request(headers); // eslint-disable-next-line no-unused-vars

  frame.once('response', function (headers, flags) {
    headers = _this2.mapToHttpHeader(headers);
    frame.headers = headers;
    frame.statusCode = headers[HTTP2_HEADER_STATUS];
    frame.status = frame.statusCode;

    _this2.emit('response', frame);
  });
  this._headerSent = true;
  frame.once('drain', function () {
    return _this2.emit('drain');
  });
  frame.on('error', function (error) {
    return _this2.emit('error', error);
  });
  frame.on('close', function () {
    return _this2.session.close();
  });
  this.frame = frame;
  return frame;
};

Request.prototype.mapToHttpHeader = function (headers) {
  var keys = Object.keys(headers);
  var http2Headers = {};

  for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
    var key = _keys[_i];
    var value = headers[key];
    key = key.toLowerCase();

    switch (key) {
      case HTTP2_HEADER_SET_COOKIE:
        value = Array.isArray(value) ? value : [value];
        break;

      default:
        break;
    }

    http2Headers[key] = value;
  }

  return http2Headers;
};

Request.prototype.mapToHttp2Header = function (headers) {
  var keys = Object.keys(headers);
  var http2Headers = {};

  for (var _i2 = 0, _keys2 = keys; _i2 < _keys2.length; _i2++) {
    var key = _keys2[_i2];
    var value = headers[key];
    key = key.toLowerCase();

    switch (key) {
      case HTTP2_HEADER_HOST:
        key = HTTP2_HEADER_AUTHORITY;
        value = /^http:\/\/|^https:\/\//.test(value) ? parse(value).host : value;
        break;

      default:
        break;
    }

    http2Headers[key] = value;
  }

  return http2Headers;
};

Request.prototype.setHeader = function (name, value) {
  this._headers[name.toLowerCase()] = value;
};

Request.prototype.getHeader = function (name) {
  return this._headers[name.toLowerCase()];
};

Request.prototype.write = function (data, encoding) {
  var frame = this.getFrame();
  return frame.write(data, encoding);
};

Request.prototype.pipe = function (stream, options) {
  var frame = this.getFrame();
  return frame.pipe(stream, options);
};

Request.prototype.end = function (data) {
  var frame = this.getFrame();
  frame.end(data);
}; // eslint-disable-next-line no-unused-vars


Request.prototype.abort = function (data) {
  var frame = this.getFrame();
  frame.close(NGHTTP2_CANCEL);
  this.session.destroy();
};

exports.setProtocol = setProtocol;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2h0dHAyd3JhcHBlci5qcyJdLCJuYW1lcyI6WyJTdHJlYW0iLCJyZXF1aXJlIiwidXRpbCIsIm5ldCIsInRscyIsInBhcnNlIiwicHJvY2VzcyIsInNlbXZlckd0ZSIsImh0dHAyIiwidmVyc2lvbiIsIkVycm9yIiwiY29uc3RhbnRzIiwiSFRUUDJfSEVBREVSX1BBVEgiLCJIVFRQMl9IRUFERVJfU1RBVFVTIiwiSFRUUDJfSEVBREVSX01FVEhPRCIsIkhUVFAyX0hFQURFUl9BVVRIT1JJVFkiLCJIVFRQMl9IRUFERVJfSE9TVCIsIkhUVFAyX0hFQURFUl9TRVRfQ09PS0lFIiwiTkdIVFRQMl9DQU5DRUwiLCJzZXRQcm90b2NvbCIsInByb3RvY29sIiwicmVxdWVzdCIsIm9wdGlvbnMiLCJSZXF1ZXN0IiwiY2FsbCIsImRlZmF1bHRQb3J0IiwiZGVmYXVsdEhvc3QiLCJwb3J0IiwiaG9zdCIsIm1ldGhvZCIsInBhdGgiLCJzZXNzaW9uT3B0aW9ucyIsInNvY2tldFBhdGgiLCJjcmVhdGVDb25uZWN0aW9uIiwiY3JlYXRlVW5peENvbm5lY3Rpb24iLCJiaW5kIiwiX2hlYWRlcnMiLCJzZXNzaW9uIiwiY29ubmVjdCIsInNldEhlYWRlciIsIm9uIiwiZXJyb3IiLCJlbWl0IiwiaW5oZXJpdHMiLCJwcm90b3R5cGUiLCJhdXRob3JpdHkiLCJBTFBOUHJvdG9jb2xzIiwic2VydmVybmFtZSIsImFsbG93SGFsZk9wZW4iLCJzZXROb0RlbGF5IiwiYm9vbCIsImdldEZyYW1lIiwiZnJhbWUiLCJoZWFkZXJzIiwibWFwVG9IdHRwMkhlYWRlciIsIk9iamVjdCIsImFzc2lnbiIsIm9uY2UiLCJmbGFncyIsIm1hcFRvSHR0cEhlYWRlciIsInN0YXR1c0NvZGUiLCJzdGF0dXMiLCJfaGVhZGVyU2VudCIsImNsb3NlIiwia2V5cyIsImh0dHAySGVhZGVycyIsImtleSIsInZhbHVlIiwidG9Mb3dlckNhc2UiLCJBcnJheSIsImlzQXJyYXkiLCJ0ZXN0IiwibmFtZSIsImdldEhlYWRlciIsIndyaXRlIiwiZGF0YSIsImVuY29kaW5nIiwicGlwZSIsInN0cmVhbSIsImVuZCIsImFib3J0IiwiZGVzdHJveSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHQyxPQUFPLENBQUMsUUFBRCxDQUF0Qjs7QUFDQSxJQUFNQyxJQUFJLEdBQUdELE9BQU8sQ0FBQyxNQUFELENBQXBCOztBQUNBLElBQU1FLEdBQUcsR0FBR0YsT0FBTyxDQUFDLEtBQUQsQ0FBbkI7O0FBQ0EsSUFBTUcsR0FBRyxHQUFHSCxPQUFPLENBQUMsS0FBRCxDQUFuQixDLENBQ0E7OztBQUNBLGVBQWtCQSxPQUFPLENBQUMsS0FBRCxDQUF6QjtBQUFBLElBQVFJLEtBQVIsWUFBUUEsS0FBUjs7QUFDQSxJQUFNQyxPQUFPLEdBQUdMLE9BQU8sQ0FBQyxTQUFELENBQXZCOztBQUNBLElBQU1NLFNBQVMsR0FBR04sT0FBTyxDQUFDLHNCQUFELENBQXpCOztBQUVBLElBQUlPLEtBQUo7QUFFQSxJQUFJRCxTQUFTLENBQUNELE9BQU8sQ0FBQ0csT0FBVCxFQUFrQixVQUFsQixDQUFiLEVBQTRDRCxLQUFLLEdBQUdQLE9BQU8sQ0FBQyxPQUFELENBQWYsQ0FBNUMsS0FFRSxNQUFNLElBQUlTLEtBQUosQ0FBVSw0REFBVixDQUFOO0FBRUYsdUJBUUlGLEtBQUssQ0FBQ0csU0FSVjtBQUFBLElBQ0VDLGlCQURGLG9CQUNFQSxpQkFERjtBQUFBLElBRUVDLG1CQUZGLG9CQUVFQSxtQkFGRjtBQUFBLElBR0VDLG1CQUhGLG9CQUdFQSxtQkFIRjtBQUFBLElBSUVDLHNCQUpGLG9CQUlFQSxzQkFKRjtBQUFBLElBS0VDLGlCQUxGLG9CQUtFQSxpQkFMRjtBQUFBLElBTUVDLHVCQU5GLG9CQU1FQSx1QkFORjtBQUFBLElBT0VDLGNBUEYsb0JBT0VBLGNBUEY7O0FBVUEsU0FBU0MsV0FBVCxDQUFxQkMsUUFBckIsRUFBK0I7QUFDN0IsU0FBTztBQUNMQyxJQUFB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QUFWLEVBQWtCeEQsT0FBbEIsRUFBMkI7QUFDbEQsTUFBTThCLEtBQUssR0FBRyxLQUFLRCxRQUFMLEVBQWQ7QUFDQSxTQUFPQyxLQUFLLENBQUN5QixJQUFOLENBQVdDLE1BQVgsRUFBbUJ4RCxPQUFuQixDQUFQO0FBQ0QsQ0FIRDs7QUFLQUMsT0FBTyxDQUFDcUIsU0FBUixDQUFrQm1DLEdBQWxCLEdBQXdCLFVBQVVKLElBQVYsRUFBZ0I7QUFDdEMsTUFBTXZCLEtBQUssR0FBRyxLQUFLRCxRQUFMLEVBQWQ7QUFDQUMsRUFBQUEsS0FBSyxDQUFDMkIsR0FBTixDQUFVSixJQUFWO0FBQ0QsQ0FIRCxDLENBS0E7OztBQUNBcEQsT0FBTyxDQUFDcUIsU0FBUixDQUFrQm9DLEtBQWxCLEdBQTBCLFVBQVVMLElBQVYsRUFBZ0I7QUFDeEMsTUFBTXZCLEtBQUssR0FBRyxLQUFLRCxRQUFMLEVBQWQ7QUFDQUMsRUFBQUEsS0FBSyxDQUFDVyxLQUFOLENBQVk3QyxjQUFaO0FBQ0EsT0FBS21CLE9BQUwsQ0FBYTRDLE9BQWI7QUFDRCxDQUpEOztBQU1BQyxPQUFPLENBQUMvRCxXQUFSLEdBQXNCQSxXQUF0QiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFN0cmVhbSA9IHJlcXVpcmUoJ3N0cmVhbScpO1xuY29uc3QgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcbmNvbnN0IG5ldCA9IHJlcXVpcmUoJ25ldCcpO1xuY29uc3QgdGxzID0gcmVxdWlyZSgndGxzJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm9kZS9uby1kZXByZWNhdGVkLWFwaVxuY29uc3QgeyBwYXJzZSB9ID0gcmVxdWlyZSgndXJsJyk7XG5jb25zdCBwcm9jZXNzID0gcmVxdWlyZSgncHJvY2VzcycpO1xuY29uc3Qgc2VtdmVyR3RlID0gcmVxdWlyZSgnc2VtdmVyL2Z1bmN0aW9ucy9ndGUnKTtcblxubGV0IGh0dHAyO1xuXG5pZiAoc2VtdmVyR3RlKHByb2Nlc3MudmVyc2lvbiwgJ3YxMC4xMC4wJykpIGh0dHAyID0gcmVxdWlyZSgnaHR0cDInKTtcbmVsc2VcbiAgdGhyb3cgbmV3IEVycm9yKCdzdXBlcmFnZW50OiB0aGlzIHZlcnNpb24gb2YgTm9kZS5qcyBkb2VzIG5vdCBzdXBwb3J0IGh0dHAyJyk7XG5cbmNvbnN0IHtcbiAgSFRUUDJfSEVBREVSX1BBVEgsXG4gIEhUVFAyX0hFQURFUl9TVEFUVVMsXG4gIEhUVFAyX0hFQURFUl9NRVRIT0QsXG4gIEhUVFAyX0hFQURFUl9BVVRIT1JJVFksXG4gIEhUVFAyX0hFQURFUl9IT1NULFxuICBIVFRQMl9IRUFERVJfU0VUX0NPT0tJRSxcbiAgTkdIVFRQMl9DQU5DRUxcbn0gPSBodHRwMi5jb25zdGFudHM7XG5cbmZ1bmN0aW9uIHNldFByb3RvY29sKHByb3RvY29sKSB7XG4gIHJldHVybiB7XG4gICAgcmVxdWVzdChvcHRpb25zKSB7XG4gICAgICByZXR1cm4gbmV3IFJlcXVlc3QocHJvdG9jb2wsIG9wdGlvbnMpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gUmVxdWVzdChwcm90b2NvbCwgb3B0aW9ucykge1xuICBTdHJlYW0uY2FsbCh0aGlzKTtcbiAgY29uc3QgZGVmYXVsdFBvcnQgPSBwcm90b2NvbCA9PT0gJ2h0dHBzOicgPyA0NDMgOiA4MDtcbiAgY29uc3QgZGVmYXVsdEhvc3QgPSAnbG9jYWxob3N0JztcbiAgY29uc3QgcG9ydCA9IG9wdGlvbnMucG9ydCB8fCBkZWZhdWx0UG9ydDtcbiAgY29uc3QgaG9zdCA9IG9wdGlvbnMuaG9zdCB8fCBkZWZhdWx0SG9zdDtcblxuICBkZWxldGUgb3B0aW9ucy5wb3J0O1xuICBkZWxldGUgb3B0aW9ucy5ob3N0O1xuXG4gIHRoaXMubWV0aG9kID0gb3B0aW9ucy5tZXRob2Q7XG4gIHRoaXMucGF0aCA9IG9wdGlvbnMucGF0aDtcbiAgdGhpcy5wcm90b2NvbCA9IHByb3RvY29sO1xuICB0aGlzLmhvc3QgPSBob3N0O1xuXG4gIGRlbGV0ZSBvcHRpb25zLm1ldGhvZDtcbiAgZGVsZXRlIG9wdGlvbnMucGF0aDtcblxuICBjb25zdCBzZXNzaW9uT3B0aW9ucyA9IHsgLi4ub3B0aW9ucyB9O1xuICBpZiAob3B0aW9ucy5zb2NrZXRQYXRoKSB7XG4gICAgc2Vzc2lvbk9wdGlvbnMuc29ja2V0UGF0aCA9IG9wdGlvbnMuc29ja2V0UGF0aDtcbiAgICBzZXNzaW9uT3B0aW9ucy5jcmVhdGVDb25uZWN0aW9uID0gdGhpcy5jcmVhdGVVbml4Q29ubmVjdGlvbi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgdGhpcy5faGVhZGVycyA9IHt9O1xuXG4gIGNvbnN0IHNlc3Npb24gPSBodHRwMi5jb25uZWN0KGAke3Byb3RvY29sfS8vJHtob3N0fToke3BvcnR9YCwgc2Vzc2lvbk9wdGlvbnMpO1xuICB0aGlzLnNldEhlYWRlcignaG9zdCcsIGAke2hvc3R9OiR7cG9ydH1gKTtcblxuICBzZXNzaW9uLm9uKCdlcnJvcicsIChlcnJvcikgPT4gdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKSk7XG5cbiAgdGhpcy5zZXNzaW9uID0gc2Vzc2lvbjtcbn1cblxuLyoqXG4gKiBJbmhlcml0IGZyb20gYFN0cmVhbWAgKHdoaWNoIGluaGVyaXRzIGZyb20gYEV2ZW50RW1pdHRlcmApLlxuICovXG51dGlsLmluaGVyaXRzKFJlcXVlc3QsIFN0cmVhbSk7XG5cblJlcXVlc3QucHJvdG90eXBlLmNyZWF0ZVVuaXhDb25uZWN0aW9uID0gZnVuY3Rpb24gKGF1dGhvcml0eSwgb3B0aW9ucykge1xuICBzd2l0Y2ggKHRoaXMucHJvdG9jb2wpIHtcbiAgICBjYXNlICdodHRwOic6XG4gICAgICByZXR1cm4gbmV0LmNvbm5lY3Qob3B0aW9ucy5zb2NrZXRQYXRoKTtcbiAgICBjYXNlICdodHRwczonOlxuICAgICAgb3B0aW9ucy5BTFBOUHJvdG9jb2xzID0gWydoMiddO1xuICAgICAgb3B0aW9ucy5zZXJ2ZXJuYW1lID0gdGhpcy5ob3N0O1xuICAgICAgb3B0aW9ucy5hbGxvd0hhbGZPcGVuID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0bHMuY29ubmVjdChvcHRpb25zLnNvY2tldFBhdGgsIG9wdGlvbnMpO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIHByb3RvY29sJywgdGhpcy5wcm90b2NvbCk7XG4gIH1cbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuUmVxdWVzdC5wcm90b3R5cGUuc2V0Tm9EZWxheSA9IGZ1bmN0aW9uIChib29sKSB7XG4gIC8vIFdlIGNhbiBub3QgdXNlIHNldE5vRGVsYXkgd2l0aCBIVFRQLzIuXG4gIC8vIE5vZGUgMTAgbGltaXRzIGh0dHAyc2Vzc2lvbi5zb2NrZXQgbWV0aG9kcyB0byBvbmVzIHNhZmUgdG8gdXNlIHdpdGggSFRUUC8yLlxuICAvLyBTZWUgYWxzbyBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAyLmh0bWwjaHR0cDJfaHR0cDJzZXNzaW9uX3NvY2tldFxufTtcblxuUmVxdWVzdC5wcm90b3R5cGUuZ2V0RnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmZyYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWU7XG4gIH1cblxuICBjb25zdCBtZXRob2QgPSB7XG4gICAgW0hUVFAyX0hFQURFUl9QQVRIXTogdGhpcy5wYXRoLFxuICAgIFtIVFRQMl9IRUFERVJfTUVUSE9EXTogdGhpcy5tZXRob2RcbiAgfTtcblxuICBsZXQgaGVhZGVycyA9IHRoaXMubWFwVG9IdHRwMkhlYWRlcih0aGlzLl9oZWFkZXJzKTtcblxuICBoZWFkZXJzID0gT2JqZWN0LmFzc2lnbihoZWFkZXJzLCBtZXRob2QpO1xuXG4gIGNvbnN0IGZyYW1lID0gdGhpcy5zZXNzaW9uLnJlcXVlc3QoaGVhZGVycyk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBmcmFtZS5vbmNlKCdyZXNwb25zZScsIChoZWFkZXJzLCBmbGFncykgPT4ge1xuICAgIGhlYWRlcnMgPSB0aGlzLm1hcFRvSHR0cEhlYWRlcihoZWFkZXJzKTtcbiAgICBmcmFtZS5oZWFkZXJzID0gaGVhZGVycztcbiAgICBmcmFtZS5zdGF0dXNDb2RlID0gaGVhZGVyc1tIVFRQMl9IRUFERVJfU1RBVFVTXTtcbiAgICBmcmFtZS5zdGF0dXMgPSBmcmFtZS5zdGF0dXNDb2RlO1xuICAgIHRoaXMuZW1pdCgncmVzcG9uc2UnLCBmcmFtZSk7XG4gIH0pO1xuXG4gIHRoaXMuX2hlYWRlclNlbnQgPSB0cnVlO1xuXG4gIGZyYW1lLm9uY2UoJ2RyYWluJywgKCkgPT4gdGhpcy5lbWl0KCdkcmFpbicpKTtcbiAgZnJhbWUub24oJ2Vycm9yJywgKGVycm9yKSA9PiB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpKTtcbiAgZnJhbWUub24oJ2Nsb3NlJywgKCkgPT4gdGhpcy5zZXNzaW9uLmNsb3NlKCkpO1xuXG4gIHRoaXMuZnJhbWUgPSBmcmFtZTtcbiAgcmV0dXJuIGZyYW1lO1xufTtcblxuUmVxdWVzdC5wcm90b3R5cGUubWFwVG9IdHRwSGVhZGVyID0gZnVuY3Rpb24gKGhlYWRlcnMpIHtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGhlYWRlcnMpO1xuICBjb25zdCBodHRwMkhlYWRlcnMgPSB7fTtcbiAgZm9yIChsZXQga2V5IG9mIGtleXMpIHtcbiAgICBsZXQgdmFsdWUgPSBoZWFkZXJzW2tleV07XG4gICAga2V5ID0ga2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgc3dpdGNoIChrZXkpIHtcbiAgICAgIGNhc2UgSFRUUDJfSEVBREVSX1NFVF9DT09LSUU6XG4gICAgICAgIHZhbHVlID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaHR0cDJIZWFkZXJzW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBodHRwMkhlYWRlcnM7XG59O1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5tYXBUb0h0dHAySGVhZGVyID0gZnVuY3Rpb24gKGhlYWRlcnMpIHtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGhlYWRlcnMpO1xuICBjb25zdCBodHRwMkhlYWRlcnMgPSB7fTtcbiAgZm9yIChsZXQga2V5IG9mIGtleXMpIHtcbiAgICBsZXQgdmFsdWUgPSBoZWFkZXJzW2tleV07XG4gICAga2V5ID0ga2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgc3dpdGNoIChrZXkpIHtcbiAgICAgIGNhc2UgSFRUUDJfSEVBREVSX0hPU1Q6XG4gICAgICAgIGtleSA9IEhUVFAyX0hFQURFUl9BVVRIT1JJVFk7XG4gICAgICAgIHZhbHVlID0gL15odHRwOlxcL1xcL3xeaHR0cHM6XFwvXFwvLy50ZXN0KHZhbHVlKVxuICAgICAgICAgID8gcGFyc2UodmFsdWUpLmhvc3RcbiAgICAgICAgICA6IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGh0dHAySGVhZGVyc1trZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gaHR0cDJIZWFkZXJzO1xufTtcblxuUmVxdWVzdC5wcm90b3R5cGUuc2V0SGVhZGVyID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gIHRoaXMuX2hlYWRlcnNbbmFtZS50b0xvd2VyQ2FzZSgpXSA9IHZhbHVlO1xufTtcblxuUmVxdWVzdC5wcm90b3R5cGUuZ2V0SGVhZGVyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuX2hlYWRlcnNbbmFtZS50b0xvd2VyQ2FzZSgpXTtcbn07XG5cblJlcXVlc3QucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKGRhdGEsIGVuY29kaW5nKSB7XG4gIGNvbnN0IGZyYW1lID0gdGhpcy5nZXRGcmFtZSgpO1xuICByZXR1cm4gZnJhbWUud3JpdGUoZGF0YSwgZW5jb2RpbmcpO1xufTtcblxuUmVxdWVzdC5wcm90b3R5cGUucGlwZSA9IGZ1bmN0aW9uIChzdHJlYW0sIG9wdGlvbnMpIHtcbiAgY29uc3QgZnJhbWUgPSB0aGlzLmdldEZyYW1lKCk7XG4gIHJldHVybiBmcmFtZS5waXBlKHN0cmVhbSwgb3B0aW9ucyk7XG59O1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbiAoZGF0YSkge1xuICBjb25zdCBmcmFtZSA9IHRoaXMuZ2V0RnJhbWUoKTtcbiAgZnJhbWUuZW5kKGRhdGEpO1xufTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5SZXF1ZXN0LnByb3RvdHlwZS5hYm9ydCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIGNvbnN0IGZyYW1lID0gdGhpcy5nZXRGcmFtZSgpO1xuICBmcmFtZS5jbG9zZShOR0hUVFAyX0NBTkNFTCk7XG4gIHRoaXMuc2Vzc2lvbi5kZXN0cm95KCk7XG59O1xuXG5leHBvcnRzLnNldFByb3RvY29sID0gc2V0UHJvdG9jb2w7XG4iXX0=

/***/ }),

/***/ 4141:
/***/ ((module, exports, __webpack_require__) => {



function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/**
 * Module dependencies.
 */
// eslint-disable-next-line node/no-deprecated-api
var _require = __webpack_require__(7310),
    parse = _require.parse,
    format = _require.format,
    resolve = _require.resolve;

var Stream = __webpack_require__(2781);

var https = __webpack_require__(5687);

var http = __webpack_require__(3685);

var fs = __webpack_require__(7147);

var zlib = __webpack_require__(9796);

var util = __webpack_require__(3837);

var qs = __webpack_require__(7104);

var mime = __webpack_require__(9011);

var methods = __webpack_require__(4710);

var FormData = __webpack_require__(8941);

var formidable = __webpack_require__(2616);

var debug = __webpack_require__(6974)('superagent');

var CookieJar = __webpack_require__(3014);

var semverGte = __webpack_require__(420);

var safeStringify = __webpack_require__(5376);

var utils = __webpack_require__(4506);

var RequestBase = __webpack_require__(8899);

var _require2 = __webpack_require__(8570),
    unzip = _require2.unzip;

var Response = __webpack_require__(4435);

var mixin = utils.mixin,
    hasOwn = utils.hasOwn;
var http2;
if (semverGte(process.version, 'v10.10.0')) http2 = __webpack_require__(8539);

function request(method, url) {
  // callback
  if (typeof url === 'function') {
    return new exports.Request('GET', method).end(url);
  } // url first


  if (arguments.length === 1) {
    return new exports.Request('GET', method);
  }

  return new exports.Request(method, url);
}

module.exports = request;
exports = module.exports;
/**
 * Expose `Request`.
 */

exports.Request = Request;
/**
 * Expose the agent function
 */

exports.agent = __webpack_require__(1930);
/**
 * Noop.
 */

function noop() {}
/**
 * Expose `Response`.
 */


exports.Response = Response;
/**
 * Define "form" mime type.
 */

mime.define({
  'application/x-www-form-urlencoded': ['form', 'urlencoded', 'form-data']
}, true);
/**
 * Protocol map.
 */

exports.protocols = {
  'http:': http,
  'https:': https,
  'http2:': http2
};
/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */

exports.serialize = {
  'application/x-www-form-urlencoded': qs.stringify,
  'application/json': safeStringify
};
/**
 * Default parsers.
 *
 *     superagent.parse['application/xml'] = function(res, fn){
 *       fn(null, res);
 *     };
 *
 */

exports.parse = __webpack_require__(2099);
/**
 * Default buffering map. Can be used to set certain
 * response types to buffer/not buffer.
 *
 *     superagent.buffer['application/xml'] = true;
 */

exports.buffer = {};
/**
 * Initialize internal header tracking properties on a request instance.
 *
 * @param {Object} req the instance
 * @api private
 */

function _initHeaders(request_) {
  request_._header = {// coerces header names to lowercase
  };
  request_.header = {// preserves header name case
  };
}
/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String|Object} url
 * @api public
 */


function Request(method, url) {
  Stream.call(this);
  if (typeof url !== 'string') url = format(url);
  this._enableHttp2 = Boolean(process.env.HTTP2_TEST); // internal only

  this._agent = false;
  this._formData = null;
  this.method = method;
  this.url = url;

  _initHeaders(this);

  this.writable = true;
  this._redirects = 0;
  this.redirects(method === 'HEAD' ? 0 : 5);
  this.cookies = '';
  this.qs = {};
  this._query = [];
  this.qsRaw = this._query; // Unused, for backwards compatibility only

  this._redirectList = [];
  this._streamRequest = false;
  this.once('end', this.clearTimeout.bind(this));
}
/**
 * Inherit from `Stream` (which inherits from `EventEmitter`).
 * Mixin `RequestBase`.
 */


util.inherits(Request, Stream);
mixin(Request.prototype, RequestBase.prototype);
/**
 * Enable or Disable http2.
 *
 * Enable http2.
 *
 * ``` js
 * request.get('http://localhost/')
 *   .http2()
 *   .end(callback);
 *
 * request.get('http://localhost/')
 *   .http2(true)
 *   .end(callback);
 * ```
 *
 * Disable http2.
 *
 * ``` js
 * request = request.http2();
 * request.get('http://localhost/')
 *   .http2(false)
 *   .end(callback);
 * ```
 *
 * @param {Boolean} enable
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.http2 = function (bool) {
  if (exports.protocols['http2:'] === undefined) {
    throw new Error('superagent: this version of Node.js does not support http2');
  }

  this._enableHttp2 = bool === undefined ? true : bool;
  return this;
};
/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `options` (or filename).
 *
 * ``` js
 * request.post('http://localhost/upload')
 *   .attach('field', Buffer.from('<b>Hello world</b>'), 'hello.html')
 *   .end(callback);
 * ```
 *
 * A filename may also be used:
 *
 * ``` js
 * request.post('http://localhost/upload')
 *   .attach('files', 'image.jpg')
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {String|fs.ReadStream|Buffer} file
 * @param {String|Object} options
 * @return {Request} for chaining
 * @api public
 */


Request.prototype.attach = function (field, file, options) {
  var _this = this;

  if (file) {
    if (this._data) {
      throw new Error("superagent can't mix .send() and .attach()");
    }

    var o = options || {};

    if (typeof options === 'string') {
      o = {
        filename: options
      };
    }

    if (typeof file === 'string') {
      if (!o.filename) o.filename = file;
      debug('creating `fs.ReadStream` instance for file: %s', file);
      file = fs.createReadStream(file);
      file.on('error', function (error) {
        var formData = _this._getFormData();

        formData.emit('error', error);
      });
    } else if (!o.filename && file.path) {
      o.filename = file.path;
    }

    this._getFormData().append(field, file, o);
  }

  return this;
};

Request.prototype._getFormData = function () {
  var _this2 = this;

  if (!this._formData) {
    this._formData = new FormData();

    this._formData.on('error', function (error) {
      debug('FormData error', error);

      if (_this2.called) {
        // The request has already finished and the callback was called.
        // Silently ignore the error.
        return;
      }

      _this2.callback(error);

      _this2.abort();
    });
  }

  return this._formData;
};
/**
 * Gets/sets the `Agent` to use for this HTTP request. The default (if this
 * function is not called) is to opt out of connection pooling (`agent: false`).
 *
 * @param {http.Agent} agent
 * @return {http.Agent}
 * @api public
 */


Request.prototype.agent = function (agent) {
  if (arguments.length === 0) return this._agent;
  this._agent = agent;
  return this;
};
/**
 * Set _Content-Type_ response header passed through `mime.getType()`.
 *
 * Examples:
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('json')
 *        .send(jsonstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/json')
 *        .send(jsonstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */


Request.prototype.type = function (type) {
  return this.set('Content-Type', type.includes('/') ? type : mime.getType(type));
};
/**
 * Set _Accept_ response header passed through `mime.getType()`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */


Request.prototype.accept = function (type) {
  return this.set('Accept', type.includes('/') ? type : mime.getType(type));
};
/**
 * Add query-string `val`.
 *
 * Examples:
 *
 *   request.get('/shoes')
 *     .query('size=10')
 *     .query({ color: 'blue' })
 *
 * @param {Object|String} val
 * @return {Request} for chaining
 * @api public
 */


Request.prototype.query = function (value) {
  if (typeof value === 'string') {
    this._query.push(value);
  } else {
    Object.assign(this.qs, value);
  }

  return this;
};
/**
 * Write raw `data` / `encoding` to the socket.
 *
 * @param {Buffer|String} data
 * @param {String} encoding
 * @return {Boolean}
 * @api public
 */


Request.prototype.write = function (data, encoding) {
  var request_ = this.request();

  if (!this._streamRequest) {
    this._streamRequest = true;
  }

  return request_.write(data, encoding);
};
/**
 * Pipe the request body to `stream`.
 *
 * @param {Stream} stream
 * @param {Object} options
 * @return {Stream}
 * @api public
 */


Request.prototype.pipe = function (stream, options) {
  this.piped = true; // HACK...

  this.buffer(false);
  this.end();
  return this._pipeContinue(stream, options);
};

Request.prototype._pipeContinue = function (stream, options) {
  var _this3 = this;

  this.req.once('response', function (res) {
    // redirect
    if (isRedirect(res.statusCode) && _this3._redirects++ !== _this3._maxRedirects) {
      return _this3._redirect(res) === _this3 ? _this3._pipeContinue(stream, options) : undefined;
    }

    _this3.res = res;

    _this3._emitResponse();

    if (_this3._aborted) return;

    if (_this3._shouldUnzip(res)) {
      var unzipObject = zlib.createUnzip();
      unzipObject.on('error', function (error) {
        if (error && error.code === 'Z_BUF_ERROR') {
          // unexpected end of file is ignored by browsers and curl
          stream.emit('end');
          return;
        }

        stream.emit('error', error);
      });
      res.pipe(unzipObject).pipe(stream, options);
    } else {
      res.pipe(stream, options);
    }

    res.once('end', function () {
      _this3.emit('end');
    });
  });
  return stream;
};
/**
 * Enable / disable buffering.
 *
 * @return {Boolean} [val]
 * @return {Request} for chaining
 * @api public
 */


Request.prototype.buffer = function (value) {
  this._buffer = value !== false;
  return this;
};
/**
 * Redirect to `url
 *
 * @param {IncomingMessage} res
 * @return {Request} for chaining
 * @api private
 */


Request.prototype._redirect = function (res) {
  var url = res.headers.location;

  if (!url) {
    return this.callback(new Error('No location header for redirect'), res);
  }

  debug('redirect %s -> %s', this.url, url); // location

  url = resolve(this.url, url); // ensure the response is being consumed
  // this is required for Node v0.10+

  res.resume();
  var headers = this.req.getHeaders ? this.req.getHeaders() : this.req._headers;
  var changesOrigin = parse(url).host !== parse(this.url).host; // implementation of 302 following defacto standard

  if (res.statusCode === 301 || res.statusCode === 302) {
    // strip Content-* related fields
    // in case of POST etc
    headers = utils.cleanHeader(headers, changesOrigin); // force GET

    this.method = this.method === 'HEAD' ? 'HEAD' : 'GET'; // clear data

    this._data = null;
  } // 303 is always GET


  if (res.statusCode === 303) {
    // strip Content-* related fields
    // in case of POST etc
    headers = utils.cleanHeader(headers, changesOrigin); // force method

    this.method = 'GET'; // clear data

    this._data = null;
  } // 307 preserves method
  // 308 preserves method


  delete headers.host;
  delete this.req;
  delete this._formData; // remove all add header except User-Agent

  _initHeaders(this); // redirect


  this._endCalled = false;
  this.url = url;
  this.qs = {};
  this._query.length = 0;
  this.set(headers);
  this.emit('redirect', res);

  this._redirectList.push(this.url);

  this.end(this._callback);
  return this;
};
/**
 * Set Authorization field value with `user` and `pass`.
 *
 * Examples:
 *
 *   .auth('tobi', 'learnboost')
 *   .auth('tobi:learnboost')
 *   .auth('tobi')
 *   .auth(accessToken, { type: 'bearer' })
 *
 * @param {String} user
 * @param {String} [pass]
 * @param {Object} [options] options with authorization type 'basic' or 'bearer' ('basic' is default)
 * @return {Request} for chaining
 * @api public
 */


Request.prototype.auth = function (user, pass, options) {
  if (arguments.length === 1) pass = '';

  if (_typeof(pass) === 'object' && pass !== null) {
    // pass is optional and can be replaced with options
    options = pass;
    pass = '';
  }

  if (!options) {
    options = {
      type: 'basic'
    };
  }

  var encoder = function encoder(string) {
    return Buffer.from(string).toString('base64');
  };

  return this._auth(user, pass, options, encoder);
};
/**
 * Set the certificate authority option for https request.
 *
 * @param {Buffer | Array} cert
 * @return {Request} for chaining
 * @api public
 */


Request.prototype.ca = function (cert) {
  this._ca = cert;
  return this;
};
/**
 * Set the client certificate key option for https request.
 *
 * @param {Buffer | String} cert
 * @return {Request} for chaining
 * @api public
 */


Request.prototype.key = function (cert) {
  this._key = cert;
  return this;
};
/**
 * Set the key, certificate, and CA certs of the client in PFX or PKCS12 format.
 *
 * @param {Buffer | String} cert
 * @return {Request} for chaining
 * @api public
 */


Request.prototype.pfx = function (cert) {
  if (_typeof(cert) === 'object' && !Buffer.isBuffer(cert)) {
    this._pfx = cert.pfx;
    this._passphrase = cert.passphrase;
  } else {
    this._pfx = cert;
  }

  return this;
};
/**
 * Set the client certificate option for https request.
 *
 * @param {Buffer | String} cert
 * @return {Request} for chaining
 * @api public
 */


Request.prototype.cert = function (cert) {
  this._cert = cert;
  return this;
};
/**
 * Do not reject expired or invalid TLS certs.
 * sets `rejectUnauthorized=true`. Be warned that this allows MITM attacks.
 *
 * @return {Request} for chaining
 * @api public
 */


Request.prototype.disableTLSCerts = function () {
  this._disableTLSCerts = true;
  return this;
};
/**
 * Return an http[s] request.
 *
 * @return {OutgoingMessage}
 * @api private
 */
// eslint-disable-next-line complexity


Request.prototype.request = function () {
  var _this4 = this;

  if (this.req) return this.req;
  var options = {};

  try {
    var query = qs.stringify(this.qs, {
      indices: false,
      strictNullHandling: true
    });

    if (query) {
      this.qs = {};

      this._query.push(query);
    }

    this._finalizeQueryString();
  } catch (err) {
    return this.emit('error', err);
  }

  var url = this.url;
  var retries = this._retries; // Capture backticks as-is from the final query string built above.
  // Note: this'll only find backticks entered in req.query(String)
  // calls, because qs.stringify unconditionally encodes backticks.

  var queryStringBackticks;

  if (url.includes('`')) {
    var queryStartIndex = url.indexOf('?');

    if (queryStartIndex !== -1) {
      var queryString = url.slice(queryStartIndex + 1);
      queryStringBackticks = queryString.match(/`|%60/g);
    }
  } // default to http://


  if (url.indexOf('http') !== 0) url = "http://".concat(url);
  url = parse(url); // See https://github.com/visionmedia/superagent/issues/1367

  if (queryStringBackticks) {
    var i = 0;
    url.query = url.query.replace(/%60/g, function () {
      return queryStringBackticks[i++];
    });
    url.search = "?".concat(url.query);
    url.path = url.pathname + url.search;
  } // support unix sockets


  if (/^https?\+unix:/.test(url.protocol) === true) {
    // get the protocol
    url.protocol = "".concat(url.protocol.split('+')[0], ":"); // get the socket, path

    var unixParts = url.path.match(/^([^/]+)(.+)$/);
    options.socketPath = unixParts[1].replace(/%2F/g, '/');
    url.path = unixParts[2];
  } // Override IP address of a hostname


  if (this._connectOverride) {
    var _url = url,
        hostname = _url.hostname;
    var match = hostname in this._connectOverride ? this._connectOverride[hostname] : this._connectOverride['*'];

    if (match) {
      // backup the real host
      if (!this._header.host) {
        this.set('host', url.host);
      }

      var newHost;
      var newPort;

      if (_typeof(match) === 'object') {
        newHost = match.host;
        newPort = match.port;
      } else {
        newHost = match;
        newPort = url.port;
      } // wrap [ipv6]


      url.host = /:/.test(newHost) ? "[".concat(newHost, "]") : newHost;

      if (newPort) {
        url.host += ":".concat(newPort);
        url.port = newPort;
      }

      url.hostname = newHost;
    }
  } // options


  options.method = this.method;
  options.port = url.port;
  options.path = url.path;
  options.host = url.hostname;
  options.ca = this._ca;
  options.key = this._key;
  options.pfx = this._pfx;
  options.cert = this._cert;
  options.passphrase = this._passphrase;
  options.agent = this._agent;
  options.rejectUnauthorized = typeof this._disableTLSCerts === 'boolean' ? !this._disableTLSCerts : process.env.NODE_TLS_REJECT_UNAUTHORIZED !== '0'; // Allows request.get('https://1.2.3.4/').set('Host', 'example.com')

  if (this._header.host) {
    options.servername = this._header.host.replace(/:\d+$/, '');
  }

  if (this._trustLocalhost && /^(?:localhost|127\.0\.0\.\d+|(0*:)+:0*1)$/.test(url.hostname)) {
    options.rejectUnauthorized = false;
  } // initiate request


  var mod = this._enableHttp2 ? exports.protocols['http2:'].setProtocol(url.protocol) : exports.protocols[url.protocol]; // request

  this.req = mod.request(options);
  var req = this.req; // set tcp no delay

  req.setNoDelay(true);

  if (options.method !== 'HEAD') {
    req.setHeader('Accept-Encoding', 'gzip, deflate');
  }

  this.protocol = url.protocol;
  this.host = url.host; // expose events

  req.once('drain', function () {
    _this4.emit('drain');
  });
  req.on('error', function (error) {
    // flag abortion here for out timeouts
    // because node will emit a faux-error "socket hang up"
    // when request is aborted before a connection is made
    if (_this4._aborted) return; // if not the same, we are in the **old** (cancelled) request,
    // so need to continue (same as for above)

    if (_this4._retries !== retries) return; // if we've received a response then we don't want to let
    // an error in the request blow up the response

    if (_this4.response) return;

    _this4.callback(error);
  }); // auth

  if (url.auth) {
    var auth = url.auth.split(':');
    this.auth(auth[0], auth[1]);
  }

  if (this.username && this.password) {
    this.auth(this.username, this.password);
  }

  for (var key in this.header) {
    if (hasOwn(this.header, key)) req.setHeader(key, this.header[key]);
  } // add cookies


  if (this.cookies) {
    if (hasOwn(this._header, 'cookie')) {
      // merge
      var temporaryJar = new CookieJar.CookieJar();
      temporaryJar.setCookies(this._header.cookie.split(';'));
      temporaryJar.setCookies(this.cookies.split(';'));
      req.setHeader('Cookie', temporaryJar.getCookies(CookieJar.CookieAccessInfo.All).toValueString());
    } else {
      req.setHeader('Cookie', this.cookies);
    }
  }

  return req;
};
/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */


Request.prototype.callback = function (error, res) {
  if (this._shouldRetry(error, res)) {
    return this._retry();
  } // Avoid the error which is emitted from 'socket hang up' to cause the fn undefined error on JS runtime.


  var fn = this._callback || noop;
  this.clearTimeout();
  if (this.called) return console.warn('superagent: double callback bug');
  this.called = true;

  if (!error) {
    try {
      if (!this._isResponseOK(res)) {
        var message = 'Unsuccessful HTTP response';

        if (res) {
          message = http.STATUS_CODES[res.status] || message;
        }

        error = new Error(message);
        error.status = res ? res.status : undefined;
      }
    } catch (error_) {
      error = error_;
    }
  } // It's important that the callback is called outside try/catch
  // to avoid double callback


  if (!error) {
    return fn(null, res);
  }

  error.response = res;
  if (this._maxRetries) error.retries = this._retries - 1; // only emit error event if there is a listener
  // otherwise we assume the callback to `.end()` will get the error

  if (error && this.listeners('error').length > 0) {
    this.emit('error', error);
  }

  fn(error, res);
};
/**
 * Check if `obj` is a host object,
 *
 * @param {Object} obj host object
 * @return {Boolean} is a host object
 * @api private
 */


Request.prototype._isHost = function (object) {
  return Buffer.isBuffer(object) || object instanceof Stream || object instanceof FormData;
};
/**
 * Initiate request, invoking callback `fn(err, res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */


Request.prototype._emitResponse = function (body, files) {
  var response = new Response(this);
  this.response = response;
  response.redirects = this._redirectList;

  if (undefined !== body) {
    response.body = body;
  }

  response.files = files;

  if (this._endCalled) {
    response.pipe = function () {
      throw new Error("end() has already been called, so it's too late to start piping");
    };
  }

  this.emit('response', response);
  return response;
};

Request.prototype.end = function (fn) {
  this.request();
  debug('%s %s', this.method, this.url);

  if (this._endCalled) {
    throw new Error('.end() was called twice. This is not supported in superagent');
  }

  this._endCalled = true; // store callback

  this._callback = fn || noop;

  this._end();
};

Request.prototype._end = function () {
  var _this5 = this;

  if (this._aborted) return this.callback(new Error('The request has been aborted even before .end() was called'));
  var data = this._data;
  var req = this.req;
  var method = this.method;

  this._setTimeouts(); // body


  if (method !== 'HEAD' && !req._headerSent) {
    // serialize stuff
    if (typeof data !== 'string') {
      var contentType = req.getHeader('Content-Type'); // Parse out just the content type from the header (ignore the charset)

      if (contentType) contentType = contentType.split(';')[0];
      var serialize = this._serializer || exports.serialize[contentType];

      if (!serialize && isJSON(contentType)) {
        serialize = exports.serialize['application/json'];
      }

      if (serialize) data = serialize(data);
    } // content-length


    if (data && !req.getHeader('Content-Length')) {
      req.setHeader('Content-Length', Buffer.isBuffer(data) ? data.length : Buffer.byteLength(data));
    }
  } // response
  // eslint-disable-next-line complexity


  req.once('response', function (res) {
    debug('%s %s -> %s', _this5.method, _this5.url, res.statusCode);

    if (_this5._responseTimeoutTimer) {
      clearTimeout(_this5._responseTimeoutTimer);
    }

    if (_this5.piped) {
      return;
    }

    var max = _this5._maxRedirects;
    var mime = utils.type(res.headers['content-type'] || '') || 'text/plain';
    var type = mime.split('/')[0];
    if (type) type = type.toLowerCase().trim();
    var multipart = type === 'multipart';
    var redirect = isRedirect(res.statusCode);
    var responseType = _this5._responseType;
    _this5.res = res; // redirect

    if (redirect && _this5._redirects++ !== max) {
      return _this5._redirect(res);
    }

    if (_this5.method === 'HEAD') {
      _this5.emit('end');

      _this5.callback(null, _this5._emitResponse());

      return;
    } // zlib support


    if (_this5._shouldUnzip(res)) {
      unzip(req, res);
    }

    var buffer = _this5._buffer;

    if (buffer === undefined && mime in exports.buffer) {
      buffer = Boolean(exports.buffer[mime]);
    }

    var parser = _this5._parser;

    if (undefined === buffer && parser) {
      console.warn("A custom superagent parser has been set, but buffering strategy for the parser hasn't been configured. Call `req.buffer(true or false)` or set `superagent.buffer[mime] = true or false`");
      buffer = true;
    }

    if (!parser) {
      if (responseType) {
        parser = exports.parse.image; // It's actually a generic Buffer

        buffer = true;
      } else if (multipart) {
        var form = formidable();
        parser = form.parse.bind(form);
        buffer = true;
      } else if (isImageOrVideo(mime)) {
        parser = exports.parse.image;
        buffer = true; // For backwards-compatibility buffering default is ad-hoc MIME-dependent
      } else if (exports.parse[mime]) {
        parser = exports.parse[mime];
      } else if (type === 'text') {
        parser = exports.parse.text;
        buffer = buffer !== false; // everyone wants their own white-labeled json
      } else if (isJSON(mime)) {
        parser = exports.parse['application/json'];
        buffer = buffer !== false;
      } else if (buffer) {
        parser = exports.parse.text;
      } else if (undefined === buffer) {
        parser = exports.parse.image; // It's actually a generic Buffer

        buffer = true;
      }
    } // by default only buffer text/*, json and messed up thing from hell


    if (undefined === buffer && isText(mime) || isJSON(mime)) {
      buffer = true;
    }

    _this5._resBuffered = buffer;
    var parserHandlesEnd = false;

    if (buffer) {
      // Protectiona against zip bombs and other nuisance
      var responseBytesLeft = _this5._maxResponseSize || 200000000;
      res.on('data', function (buf) {
        responseBytesLeft -= buf.byteLength || buf.length > 0 ? buf.length : 0;

        if (responseBytesLeft < 0) {
          // This will propagate through error event
          var error = new Error('Maximum response size reached');
          error.code = 'ETOOLARGE'; // Parsers aren't required to observe error event,
          // so would incorrectly report success

          parserHandlesEnd = false; // Will not emit error event

          res.destroy(error); // so we do callback now

          _this5.callback(error, null);
        }
      });
    }

    if (parser) {
      try {
        // Unbuffered parsers are supposed to emit response early,
        // which is weird BTW, because response.body won't be there.
        parserHandlesEnd = buffer;
        parser(res, function (error, object, files) {
          if (_this5.timedout) {
            // Timeout has already handled all callbacks
            return;
          } // Intentional (non-timeout) abort is supposed to preserve partial response,
          // even if it doesn't parse.


          if (error && !_this5._aborted) {
            return _this5.callback(error);
          }

          if (parserHandlesEnd) {
            _this5.emit('end');

            _this5.callback(null, _this5._emitResponse(object, files));
          }
        });
      } catch (err) {
        _this5.callback(err);

        return;
      }
    }

    _this5.res = res; // unbuffered

    if (!buffer) {
      debug('unbuffered %s %s', _this5.method, _this5.url);

      _this5.callback(null, _this5._emitResponse());

      if (multipart) return; // allow multipart to handle end event

      res.once('end', function () {
        debug('end %s %s', _this5.method, _this5.url);

        _this5.emit('end');
      });
      return;
    } // terminating events


    res.once('error', function (error) {
      parserHandlesEnd = false;

      _this5.callback(error, null);
    });
    if (!parserHandlesEnd) res.once('end', function () {
      debug('end %s %s', _this5.method, _this5.url); // TODO: unless buffering emit earlier to stream

      _this5.emit('end');

      _this5.callback(null, _this5._emitResponse());
    });
  });
  this.emit('request', this);

  var getProgressMonitor = function getProgressMonitor() {
    var lengthComputable = true;
    var total = req.getHeader('Content-Length');
    var loaded = 0;
    var progress = new Stream.Transform();

    progress._transform = function (chunk, encoding, cb) {
      loaded += chunk.length;

      _this5.emit('progress', {
        direction: 'upload',
        lengthComputable: lengthComputable,
        loaded: loaded,
        total: total
      });

      cb(null, chunk);
    };

    return progress;
  };

  var bufferToChunks = function bufferToChunks(buffer) {
    var chunkSize = 16 * 1024; // default highWaterMark value

    var chunking = new Stream.Readable();
    var totalLength = buffer.length;
    var remainder = totalLength % chunkSize;
    var cutoff = totalLength - remainder;

    for (var i = 0; i < cutoff; i += chunkSize) {
      var chunk = buffer.slice(i, i + chunkSize);
      chunking.push(chunk);
    }

    if (remainder > 0) {
      var remainderBuffer = buffer.slice(-remainder);
      chunking.push(remainderBuffer);
    }

    chunking.push(null); // no more data

    return chunking;
  }; // if a FormData instance got created, then we send that as the request body


  var formData = this._formData;

  if (formData) {
    // set headers
    var headers = formData.getHeaders();

    for (var i in headers) {
      if (hasOwn(headers, i)) {
        debug('setting FormData header: "%s: %s"', i, headers[i]);
        req.setHeader(i, headers[i]);
      }
    } // attempt to get "Content-Length" header


    formData.getLength(function (error, length) {
      // TODO: Add chunked encoding when no length (if err)
      if (error) debug('formData.getLength had error', error, length);
      debug('got FormData Content-Length: %s', length);

      if (typeof length === 'number') {
        req.setHeader('Content-Length', length);
      }

      formData.pipe(getProgressMonitor()).pipe(req);
    });
  } else if (Buffer.isBuffer(data)) {
    bufferToChunks(data).pipe(getProgressMonitor()).pipe(req);
  } else {
    req.end(data);
  }
}; // Check whether response has a non-0-sized gzip-encoded body


Request.prototype._shouldUnzip = function (res) {
  if (res.statusCode === 204 || res.statusCode === 304) {
    // These aren't supposed to have any body
    return false;
  } // header content is a string, and distinction between 0 and no information is crucial


  if (res.headers['content-length'] === '0') {
    // We know that the body is empty (unfortunately, this check does not cover chunked encoding)
    return false;
  } // console.log(res);


  return /^\s*(?:deflate|gzip)\s*$/.test(res.headers['content-encoding']);
};
/**
 * Overrides DNS for selected hostnames. Takes object mapping hostnames to IP addresses.
 *
 * When making a request to a URL with a hostname exactly matching a key in the object,
 * use the given IP address to connect, instead of using DNS to resolve the hostname.
 *
 * A special host `*` matches every hostname (keep redirects in mind!)
 *
 *      request.connect({
 *        'test.example.com': '127.0.0.1',
 *        'ipv6.example.com': '::1',
 *      })
 */


Request.prototype.connect = function (connectOverride) {
  if (typeof connectOverride === 'string') {
    this._connectOverride = {
      '*': connectOverride
    };
  } else if (_typeof(connectOverride) === 'object') {
    this._connectOverride = connectOverride;
  } else {
    this._connectOverride = undefined;
  }

  return this;
};

Request.prototype.trustLocalhost = function (toggle) {
  this._trustLocalhost = toggle === undefined ? true : toggle;
  return this;
}; // generate HTTP verb methods


if (!methods.includes('del')) {
  // create a copy so we don't cause conflicts with
  // other packages using the methods package and
  // npm 3.x
  methods = _toConsumableArray(methods);
  methods.push('del');
}

var _iterator = _createForOfIteratorHelper(methods),
    _step;

try {
  var _loop = function _loop() {
    var method = _step.value;
    var name = method;
    method = method === 'del' ? 'delete' : method;
    method = method.toUpperCase();

    request[name] = function (url, data, fn) {
      var request_ = request(method, url);

      if (typeof data === 'function') {
        fn = data;
        data = null;
      }

      if (data) {
        if (method === 'GET' || method === 'HEAD') {
          request_.query(data);
        } else {
          request_.send(data);
        }
      }

      if (fn) request_.end(fn);
      return request_;
    };
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  }
  /**
   * Check if `mime` is text and should be buffered.
   *
   * @param {String} mime
   * @return {Boolean}
   * @api public
   */

} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

function isText(mime) {
  var parts = mime.split('/');
  var type = parts[0];
  if (type) type = type.toLowerCase().trim();
  var subtype = parts[1];
  if (subtype) subtype = subtype.toLowerCase().trim();
  return type === 'text' || subtype === 'x-www-form-urlencoded';
}

function isImageOrVideo(mime) {
  var type = mime.split('/')[0];
  if (type) type = type.toLowerCase().trim();
  return type === 'image' || type === 'video';
}
/**
 * Check if `mime` is json or has +json structured syntax suffix.
 *
 * @param {String} mime
 * @return {Boolean}
 * @api private
 */


function isJSON(mime) {
  // should match /json or +json
  // but not /json-seq
  return /[/+]json($|[^-\w])/i.test(mime);
}
/**
 * Check if we should follow the redirect `code`.
 *
 * @param {Number} code
 * @return {Boolean}
 * @api private
 */


function isRedirect(code) {
  return [301, 302, 303, 305, 307, 308].includes(code);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2luZGV4LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJwYXJzZSIsImZvcm1hdCIsInJlc29sdmUiLCJTdHJlYW0iLCJodHRwcyIsImh0dHAiLCJmcyIsInpsaWIiLCJ1dGlsIiwicXMiLCJtaW1lIiwibWV0aG9kcyIsIkZvcm1EYXRhIiwiZm9ybWlkYWJsZSIsImRlYnVnIiwiQ29va2llSmFyIiwic2VtdmVyR3RlIiwic2FmZVN0cmluZ2lmeSIsInV0aWxzIiwiUmVxdWVzdEJhc2UiLCJ1bnppcCIsIlJlc3BvbnNlIiwibWl4aW4iLCJoYXNPd24iLCJodHRwMiIsInByb2Nlc3MiLCJ2ZXJzaW9uIiwicmVxdWVzdCIsIm1ldGhvZCIsInVybCIsImV4cG9ydHMiLCJSZXF1ZXN0IiwiZW5kIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwibW9kdWxlIiwiYWdlbnQiLCJub29wIiwiZGVmaW5lIiwicHJvdG9jb2xzIiwic2VyaWFsaXplIiwic3RyaW5naWZ5IiwiYnVmZmVyIiwiX2luaXRIZWFkZXJzIiwicmVxdWVzdF8iLCJfaGVhZGVyIiwiaGVhZGVyIiwiY2FsbCIsIl9lbmFibGVIdHRwMiIsIkJvb2xlYW4iLCJlbnYiLCJIVFRQMl9URVNUIiwiX2FnZW50IiwiX2Zvcm1EYXRhIiwid3JpdGFibGUiLCJfcmVkaXJlY3RzIiwicmVkaXJlY3RzIiwiY29va2llcyIsIl9xdWVyeSIsInFzUmF3IiwiX3JlZGlyZWN0TGlzdCIsIl9zdHJlYW1SZXF1ZXN0Iiwib25jZSIsImNsZWFyVGltZW91dCIsImJpbmQiLCJpbmhlcml0cyIsInByb3RvdHlwZSIsImJvb2wiLCJ1bmRlZmluZWQiLCJFcnJvciIsImF0dGFjaCIsImZpZWxkIiwiZmlsZSIsIm9wdGlvbnMiLCJfZGF0YSIsIm8iLCJmaWxlbmFtZSIsImNyZWF0ZVJlYWRTdHJlYW0iLCJvbiIsImVycm9yIiwiZm9ybURhdGEiLCJfZ2V0Rm9ybURhdGEiLCJlbWl0IiwicGF0aCIsImFwcGVuZCIsImNhbGxlZCIsImNhbGxiYWNrIiwiYWJvcnQiLCJ0eXBlIiwic2V0IiwiaW5jbHVkZXMiLCJnZXRUeXBlIiwiYWNjZXB0IiwicXVlcnkiLCJ2YWx1ZSIsInB1c2giLCJPYmplY3QiLCJhc3NpZ24iLCJ3cml0ZSIsImRhdGEiLCJlbmNvZGluZyIsInBpcGUiLCJzdHJlYW0iLCJwaXBlZCIsIl9waXBlQ29udGludWUiLCJyZXEiLCJyZXMiLCJpc1JlZGlyZWN0Iiwic3RhdHVzQ29kZSIsIl9tYXhSZWRpcmVjdHMiLCJfcmVkaXJlY3QiLCJfZW1pdFJlc3BvbnNlIiwiX2Fib3J0ZWQiLCJfc2hvdWxkVW56aXAiLCJ1bnppcE9iamVjdCIsImNyZWF0ZVVuemlwIiwiY29kZSIsIl9idWZmZXIiLCJoZWFkZXJzIiwibG9jYXRpb24iLCJyZXN1bWUiLCJnZXRIZWFkZXJzIiwiX2hlYWRlcnMiLCJjaGFuZ2VzT3JpZ2luIiwiaG9zdCIsImNsZWFuSGVhZGVyIiwiX2VuZENhbGxlZCIsIl9jYWxsYmFjayIsImF1dGgiLCJ1c2VyIiwicGFzcyIsImVuY29kZXIiLCJzdHJpbmciLCJCdWZmZXIiLCJmcm9tIiwidG9TdHJpbmciLCJfYXV0aCIsImNhIiwiY2VydCIsIl9jYSIsImtleSIsIl9rZXkiLCJwZngiLCJpc0J1ZmZlciIsIl9wZngiLCJfcGFzc3BocmFzZSIsInBhc3NwaHJhc2UiLCJfY2VydCIsImRpc2FibGVUTFNDZXJ0cyIsIl9kaXNhYmxlVExTQ2VydHMiLCJpbmRpY2VzIiwic3RyaWN0TnVsbEhhbmRsaW5nIiwiX2ZpbmFsaXplUXVlcnlTdHJpbmciLCJlcnIiLCJyZXRyaWVzIiwiX3JldHJpZXMiLCJxdWVyeVN0cmluZ0JhY2t0aWNrcyIsInF1ZXJ5U3RhcnRJbmRleCIsImluZGV4T2YiLCJxdWVyeVN0cmluZyIsInNsaWNlIiwibWF0Y2giLCJpIiwicmVwbGFjZSIsInNlYXJjaCIsInBhdGhuYW1lIiwidGVzdCIsInByb3RvY29sIiwic3BsaXQiLCJ1bml4UGFydHMiLCJzb2NrZXRQYXRoIiwiX2Nvbm5lY3RPdmVycmlkZSIsImhvc3RuYW1lIiwibmV3SG9zdCIsIm5ld1BvcnQiLCJwb3J0IiwicmVqZWN0VW5hdXRob3JpemVkIiwiTk9ERV9UTFNfUkVKRUNUX1VOQVVUSE9SSVpFRCIsInNlcnZlcm5hbWUiLCJfdHJ1c3RMb2NhbGhvc3QiLCJtb2QiLCJzZXRQcm90b2NvbCIsInNldE5vRGVsYXkiLCJzZXRIZWFkZXIiLCJyZXNwb25zZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJ0ZW1wb3JhcnlKYXIiLCJzZXRDb29raWVzIiwiY29va2llIiwiZ2V0Q29va2llcyIsIkNvb2tpZUFjY2Vzc0luZm8iLCJBbGwiLCJ0b1ZhbHVlU3RyaW5nIiwiX3Nob3VsZFJldHJ5IiwiX3JldHJ5IiwiZm4iLCJjb25zb2xlIiwid2FybiIsIl9pc1Jlc3BvbnNlT0siLCJtZXNzYWdlIiwiU1RBVFVTX0NPREVTIiwic3RhdHVzIiwiZXJyb3JfIiwiX21heFJldHJpZXMiLCJsaXN0ZW5lcnMiLCJfaXNIb3N0Iiwib2JqZWN0IiwiYm9keSIsImZpbGVzIiwiX2VuZCIsIl9zZXRUaW1lb3V0cyIsIl9oZWFkZXJTZW50IiwiY29udGVudFR5cGUiLCJnZXRIZWFkZXIiLCJfc2VyaWFsaXplciIsImlzSlNPTiIsImJ5dGVMZW5ndGgiLCJfcmVzcG9uc2VUaW1lb3V0VGltZXIiLCJtYXgiLCJ0b0xvd2VyQ2FzZSIsInRyaW0iLCJtdWx0aXBhcnQiLCJyZWRpcmVjdCIsInJlc3BvbnNlVHlwZSIsIl9yZXNwb25zZVR5cGUiLCJwYXJzZXIiLCJfcGFyc2VyIiwiaW1hZ2UiLCJmb3JtIiwiaXNJbWFnZU9yVmlkZW8iLCJ0ZXh0IiwiaXNUZXh0IiwiX3Jlc0J1ZmZlcmVkIiwicGFyc2VySGFuZGxlc0VuZCIsInJlc3BvbnNlQnl0ZXNMZWZ0IiwiX21heFJlc3BvbnNlU2l6ZSIsImJ1ZiIsImRlc3Ryb3kiLCJ0aW1lZG91dCIsImdldFByb2dyZXNzTW9uaXRvciIsImxlbmd0aENvbXB1dGFibGUiLCJ0b3RhbCIsImxvYWRlZCIsInByb2dyZXNzIiwiVHJhbnNmb3JtIiwiX3RyYW5zZm9ybSIsImNodW5rIiwiY2IiLCJkaXJlY3Rpb24iLCJidWZmZXJUb0NodW5rcyIsImNodW5rU2l6ZSIsImNodW5raW5nIiwiUmVhZGFibGUiLCJ0b3RhbExlbmd0aCIsInJlbWFpbmRlciIsImN1dG9mZiIsInJlbWFpbmRlckJ1ZmZlciIsImdldExlbmd0aCIsImNvbm5lY3QiLCJjb25uZWN0T3ZlcnJpZGUiLCJ0cnVzdExvY2FsaG9zdCIsInRvZ2dsZSIsIm5hbWUiLCJ0b1VwcGVyQ2FzZSIsInNlbmQiLCJwYXJ0cyIsInN1YnR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsZUFBbUNBLE9BQU8sQ0FBQyxLQUFELENBQTFDO0FBQUEsSUFBUUMsS0FBUixZQUFRQSxLQUFSO0FBQUEsSUFBZUMsTUFBZixZQUFlQSxNQUFmO0FBQUEsSUFBdUJDLE9BQXZCLFlBQXVCQSxPQUF2Qjs7QUFDQSxJQUFNQyxNQUFNLEdBQUdKLE9BQU8sQ0FBQyxRQUFELENBQXRCOztBQUNBLElBQU1LLEtBQUssR0FBR0wsT0FBTyxDQUFDLE9BQUQsQ0FBckI7O0FBQ0EsSUFBTU0sSUFBSSxHQUFHTixPQUFPLENBQUMsTUFBRCxDQUFwQjs7QUFDQSxJQUFNTyxFQUFFLEdBQUdQLE9BQU8sQ0FBQyxJQUFELENBQWxCOztBQUNBLElBQU1RLElBQUksR0FBR1IsT0FBTyxDQUFDLE1BQUQsQ0FBcEI7O0FBQ0EsSUFBTVMsSUFBSSxHQUFHVCxPQUFPLENBQUMsTUFBRCxDQUFwQjs7QUFDQSxJQUFNVSxFQUFFLEdBQUdWLE9BQU8sQ0FBQyxJQUFELENBQWxCOztBQUNBLElBQU1XLElBQUksR0FBR1gsT0FBTyxDQUFDLE1BQUQsQ0FBcEI7O0FBQ0EsSUFBSVksT0FBTyxHQUFHWixPQUFPLENBQUMsU0FBRCxDQUFyQjs7QUFDQSxJQUFNYSxRQUFRLEdBQUdiLE9BQU8sQ0FBQyxXQUFELENBQXhCOztBQUNBLElBQU1jLFVBQVUs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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU2dJLE1BQVQsQ0FBZ0I5TSxJQUFoQixFQUFzQjtBQUNwQjtBQUNBO0FBQ0EsU0FBTyxzQkFBc0I0SixJQUF0QixDQUEyQjVKLElBQTNCLENBQVA7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFTaUcsVUFBVCxDQUFvQlMsSUFBcEIsRUFBMEI7QUFDeEIsU0FBTyxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixHQUFyQixFQUEwQixHQUExQixFQUErQjFCLFFBQS9CLENBQXdDMEIsSUFBeEMsQ0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBub2RlL25vLWRlcHJlY2F0ZWQtYXBpXG5jb25zdCB7IHBhcnNlLCBmb3JtYXQsIHJlc29sdmUgfSA9IHJlcXVpcmUoJ3VybCcpO1xuY29uc3QgU3RyZWFtID0gcmVxdWlyZSgnc3RyZWFtJyk7XG5jb25zdCBodHRwcyA9IHJlcXVpcmUoJ2h0dHBzJyk7XG5jb25zdCBodHRwID0gcmVxdWlyZSgnaHR0cCcpO1xuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuY29uc3QgemxpYiA9IHJlcXVpcmUoJ3psaWInKTtcbmNvbnN0IHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG5jb25zdCBxcyA9IHJlcXVpcmUoJ3FzJyk7XG5jb25zdCBtaW1lID0gcmVxdWlyZSgnbWltZScpO1xubGV0IG1ldGhvZHMgPSByZXF1aXJlKCdtZXRob2RzJyk7XG5jb25zdCBGb3JtRGF0YSA9IHJlcXVpcmUoJ2Zvcm0tZGF0YScpO1xuY29uc3QgZm9ybWlkYWJsZSA9IHJlcXVpcmUoJ2Zvcm1pZGFibGUnKTtcbmNvbnN0IGRlYnVnID0gcmVxdWlyZSgnZGVidWcnKSgnc3VwZXJhZ2VudCcpO1xuY29uc3QgQ29va2llSmFyID0gcmVxdWlyZSgnY29va2llamFyJyk7XG5jb25zdCBzZW12ZXJHdGUgPSByZXF1aXJlKCdzZW12ZXIvZnVuY3Rpb25zL2d0ZScpO1xuY29uc3Qgc2FmZVN0cmluZ2lmeSA9IHJlcXVpcmUoJ2Zhc3Qtc2FmZS1zdHJpbmdpZnknKTtcblxuY29uc3QgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuY29uc3QgUmVxdWVzdEJhc2UgPSByZXF1aXJlKCcuLi9yZXF1ZXN0LWJhc2UnKTtcbmNvbnN0IHsgdW56aXAgfSA9IHJlcXVpcmUoJy4vdW56aXAnKTtcbmNvbnN0IFJlc3BvbnNlID0gcmVxdWlyZSgnLi9yZXNwb25zZScpO1xuXG5jb25zdCB7IG1peGluLCBoYXNPd24gfSA9IHV0aWxzO1xuXG5sZXQgaHR0cDI7XG5cbmlmIChzZW12ZXJHdGUocHJvY2Vzcy52ZXJzaW9uLCAndjEwLjEwLjAnKSkgaHR0cDIgPSByZXF1aXJlKCcuL2h0dHAyd3JhcHBlcicpO1xuXG5mdW5jdGlvbiByZXF1ZXN0KG1ldGhvZCwgdXJsKSB7XG4gIC8vIGNhbGxiYWNrXG4gIGlmICh0eXBlb2YgdXJsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG5ldyBleHBvcnRzLlJlcXVlc3QoJ0dFVCcsIG1ldGhvZCkuZW5kKHVybCk7XG4gIH1cblxuICAvLyB1cmwgZmlyc3RcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gbmV3IGV4cG9ydHMuUmVxdWVzdCgnR0VUJywgbWV0aG9kKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgZXhwb3J0cy5SZXF1ZXN0KG1ldGhvZCwgdXJsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZXF1ZXN0O1xuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzO1xuXG4vKipcbiAqIEV4cG9zZSBgUmVxdWVzdGAuXG4gKi9cblxuZXhwb3J0cy5SZXF1ZXN0ID0gUmVxdWVzdDtcblxuLyoqXG4gKiBFeHBvc2UgdGhlIGFnZW50IGZ1bmN0aW9uXG4gKi9cblxuZXhwb3J0cy5hZ2VudCA9IHJlcXVpcmUoJy4vYWdlbnQnKTtcblxuLyoqXG4gKiBOb29wLlxuICovXG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG4vKipcbiAqIEV4cG9zZSBgUmVzcG9uc2VgLlxuICovXG5cbmV4cG9ydHMuUmVzcG9uc2UgPSBSZXNwb25zZTtcblxuLyoqXG4gKiBEZWZpbmUgXCJmb3JtXCIgbWltZSB0eXBlLlxuICovXG5cbm1pbWUuZGVmaW5lKFxuICB7XG4gICAgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc6IFsnZm9ybScsICd1cmxlbmNvZGVkJywgJ2Zvcm0tZGF0YSddXG4gIH0sXG4gIHRydWVcbik7XG5cbi8qKlxuICogUHJvdG9jb2wgbWFwLlxuICovXG5cbmV4cG9ydHMucHJvdG9jb2xzID0ge1xuICAnaHR0cDonOiBodHRwLFxuICAnaHR0cHM6JzogaHR0cHMsXG4gICdodHRwMjonOiBodHRwMlxufTtcblxuLyoqXG4gKiBEZWZhdWx0IHNlcmlhbGl6YXRpb24gbWFwLlxuICpcbiAqICAgICBzdXBlcmFnZW50LnNlcmlhbGl6ZVsnYXBwbGljYXRpb24veG1sJ10gPSBmdW5jdGlvbihvYmope1xuICogICAgICAgcmV0dXJuICdnZW5lcmF0ZWQgeG1sIGhlcmUnO1xuICogICAgIH07XG4gKlxuICovXG5cbmV4cG9ydHMuc2VyaWFsaXplID0ge1xuICAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJzogcXMuc3RyaW5naWZ5LFxuICAnYXBwbGljYXRpb24vanNvbic6IHNhZmVTdHJpbmdpZnlcbn07XG5cbi8qKlxuICogRGVmYXVsdCBwYXJzZXJzLlxuICpcbiAqICAgICBzdXBlcmFnZW50LnBhcnNlWydhcHBsaWNhdGlvbi94bWwnXSA9IGZ1bmN0aW9uKHJlcywgZm4pe1xuICogICAgICAgZm4obnVsbCwgcmVzKTtcbiAqICAgICB9O1xuICpcbiAqL1xuXG5leHBvcnRzLnBhcnNlID0gcmVxdWlyZSgnLi9wYXJzZXJzJyk7XG5cbi8qKlxuICogRGVmYXVsdCBidWZmZXJpbmcgbWFwLiBDYW4gYmUgdXNlZCB0byBzZXQgY2VydGFpblxuICogcmVzcG9uc2UgdHlwZXMgdG8gYnVmZmVyL25vdCBidWZmZXIuXG4gKlxuICogICAgIHN1cGVyYWdlbnQuYnVmZmVyWydhcHBsaWNhdGlvbi94bWwnXSA9IHRydWU7XG4gKi9cbmV4cG9ydHMuYnVmZmVyID0ge307XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBpbnRlcm5hbCBoZWFkZXIgdHJhY2tpbmcgcHJvcGVydGllcyBvbiBhIHJlcXVlc3QgaW5zdGFuY2UuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHJlcSB0aGUgaW5zdGFuY2VcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBfaW5pdEhlYWRlcnMocmVxdWVzdF8pIHtcbiAgcmVxdWVzdF8uX2hlYWRlciA9IHtcbiAgICAvLyBjb2VyY2VzIGhlYWRlciBuYW1lcyB0byBsb3dlcmNhc2VcbiAgfTtcbiAgcmVxdWVzdF8uaGVhZGVyID0ge1xuICAgIC8vIHByZXNlcnZlcyBoZWFkZXIgbmFtZSBjYXNlXG4gIH07XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgUmVxdWVzdGAgd2l0aCB0aGUgZ2l2ZW4gYG1ldGhvZGAgYW5kIGB1cmxgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gdXJsXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIFJlcXVlc3QobWV0aG9kLCB1cmwpIHtcbiAgU3RyZWFtLmNhbGwodGhpcyk7XG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykgdXJsID0gZm9ybWF0KHVybCk7XG4gIHRoaXMuX2VuYWJsZUh0dHAyID0gQm9vbGVhbihwcm9jZXNzLmVudi5IVFRQMl9URVNUKTsgLy8gaW50ZXJuYWwgb25seVxuICB0aGlzLl9hZ2VudCA9IGZhbHNlO1xuICB0aGlzLl9mb3JtRGF0YSA9IG51bGw7XG4gIHRoaXMubWV0aG9kID0gbWV0aG9kO1xuICB0aGlzLnVybCA9IHVybDtcbiAgX2luaXRIZWFkZXJzKHRoaXMpO1xuICB0aGlzLndyaXRhYmxlID0gdHJ1ZTtcbiAgdGhpcy5fcmVkaXJlY3RzID0gMDtcbiAgdGhpcy5yZWRpcmVjdHMobWV0aG9kID09PSAnSEVBRCcgPyAwIDogNSk7XG4gIHRoaXMuY29va2llcyA9ICcnO1xuICB0aGlzLnFzID0ge307XG4gIHRoaXMuX3F1ZXJ5ID0gW107XG4gIHRoaXMucXNSYXcgPSB0aGlzLl9xdWVyeTsgLy8gVW51c2VkLCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgb25seVxuICB0aGlzLl9yZWRpcmVjdExpc3QgPSBbXTtcbiAgdGhpcy5fc3RyZWFtUmVxdWVzdCA9IGZhbHNlO1xuICB0aGlzLm9uY2UoJ2VuZCcsIHRoaXMuY2xlYXJUaW1lb3V0LmJpbmQodGhpcykpO1xufVxuXG4vKipcbiAqIEluaGVyaXQgZnJvbSBgU3RyZWFtYCAod2hpY2ggaW5oZXJpdHMgZnJvbSBgRXZlbnRFbWl0dGVyYCkuXG4gKiBNaXhpbiBgUmVxdWVzdEJhc2VgLlxuICovXG51dGlsLmluaGVyaXRzKFJlcXVlc3QsIFN0cmVhbSk7XG5cbm1peGluKFJlcXVlc3QucHJvdG90eXBlLCBSZXF1ZXN0QmFzZS5wcm90b3R5cGUpO1xuXG4vKipcbiAqIEVuYWJsZSBvciBEaXNhYmxlIGh0dHAyLlxuICpcbiAqIEVuYWJsZSBodHRwMi5cbiAqXG4gKiBgYGAganNcbiAqIHJlcXVlc3QuZ2V0KCdodHRwOi8vbG9jYWxob3N0LycpXG4gKiAgIC5odHRwMigpXG4gKiAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIHJlcXVlc3QuZ2V0KCdodHRwOi8vbG9jYWxob3N0LycpXG4gKiAgIC5odHRwMih0cnVlKVxuICogICAuZW5kKGNhbGxiYWNrKTtcbiAqIGBgYFxuICpcbiAqIERpc2FibGUgaHR0cDIuXG4gKlxuICogYGBgIGpzXG4gKiByZXF1ZXN0ID0gcmVxdWVzdC5odHRwMigpO1xuICogcmVxdWVzdC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3QvJylcbiAqICAgLmh0dHAyKGZhbHNlKVxuICogICAuZW5kKGNhbGxiYWNrKTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gZW5hYmxlXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuaHR0cDIgPSBmdW5jdGlvbiAoYm9vbCkge1xuICBpZiAoZXhwb3J0cy5wcm90b2NvbHNbJ2h0dHAyOiddID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnc3VwZXJhZ2VudDogdGhpcyB2ZXJzaW9uIG9mIE5vZGUuanMgZG9lcyBub3Qgc3VwcG9ydCBodHRwMidcbiAgICApO1xuICB9XG5cbiAgdGhpcy5fZW5hYmxlSHR0cDIgPSBib29sID09PSB1bmRlZmluZWQgPyB0cnVlIDogYm9vbDtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFF1ZXVlIHRoZSBnaXZlbiBgZmlsZWAgYXMgYW4gYXR0YWNobWVudCB0byB0aGUgc3BlY2lmaWVkIGBmaWVsZGAsXG4gKiB3aXRoIG9wdGlvbmFsIGBvcHRpb25zYCAob3IgZmlsZW5hbWUpLlxuICpcbiAqIGBgYCBqc1xuICogcmVxdWVzdC5wb3N0KCdodHRwOi8vbG9jYWxob3N0L3VwbG9hZCcpXG4gKiAgIC5hdHRhY2goJ2ZpZWxkJywgQnVmZmVyLmZyb20oJzxiPkhlbGxvIHdvcmxkPC9iPicpLCAnaGVsbG8uaHRtbCcpXG4gKiAgIC5lbmQoY2FsbGJhY2spO1xuICogYGBgXG4gKlxuICogQSBmaWxlbmFtZSBtYXkgYWxzbyBiZSB1c2VkOlxuICpcbiAqIGBgYCBqc1xuICogcmVxdWVzdC5wb3N0KCdodHRwOi8vbG9jYWxob3N0L3VwbG9hZCcpXG4gKiAgIC5hdHRhY2goJ2ZpbGVzJywgJ2ltYWdlLmpwZycpXG4gKiAgIC5lbmQoY2FsbGJhY2spO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkXG4gKiBAcGFyYW0ge1N0cmluZ3xmcy5SZWFkU3RyZWFtfEJ1ZmZlcn0gZmlsZVxuICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuYXR0YWNoID0gZnVuY3Rpb24gKGZpZWxkLCBmaWxlLCBvcHRpb25zKSB7XG4gIGlmIChmaWxlKSB7XG4gICAgaWYgKHRoaXMuX2RhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInN1cGVyYWdlbnQgY2FuJ3QgbWl4IC5zZW5kKCkgYW5kIC5hdHRhY2goKVwiKTtcbiAgICB9XG5cbiAgICBsZXQgbyA9IG9wdGlvbnMgfHwge307XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykge1xuICAgICAgbyA9IHsgZmlsZW5hbWU6IG9wdGlvbnMgfTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGZpbGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoIW8uZmlsZW5hbWUpIG8uZmlsZW5hbWUgPSBmaWxlO1xuICAgICAgZGVidWcoJ2NyZWF0aW5nIGBmcy5SZWFkU3RyZWFtYCBpbnN0YW5jZSBmb3IgZmlsZTogJXMnLCBmaWxlKTtcbiAgICAgIGZpbGUgPSBmcy5jcmVhdGVSZWFkU3RyZWFtKGZpbGUpO1xuICAgICAgZmlsZS5vbignZXJyb3InLCAoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSB0aGlzLl9nZXRGb3JtRGF0YSgpO1xuICAgICAgICBmb3JtRGF0YS5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoIW8uZmlsZW5hbWUgJiYgZmlsZS5wYXRoKSB7XG4gICAgICBvLmZpbGVuYW1lID0gZmlsZS5wYXRoO1xuICAgIH1cblxuICAgIHRoaXMuX2dldEZvcm1EYXRhKCkuYXBwZW5kKGZpZWxkLCBmaWxlLCBvKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuUmVxdWVzdC5wcm90b3R5cGUuX2dldEZvcm1EYXRhID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMuX2Zvcm1EYXRhKSB7XG4gICAgdGhpcy5fZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICB0aGlzLl9mb3JtRGF0YS5vbignZXJyb3InLCAoZXJyb3IpID0+IHtcbiAgICAgIGRlYnVnKCdGb3JtRGF0YSBlcnJvcicsIGVycm9yKTtcbiAgICAgIGlmICh0aGlzLmNhbGxlZCkge1xuICAgICAgICAvLyBUaGUgcmVxdWVzdCBoYXMgYWxyZWFkeSBmaW5pc2hlZCBhbmQgdGhlIGNhbGxiYWNrIHdhcyBjYWxsZWQuXG4gICAgICAgIC8vIFNpbGVudGx5IGlnbm9yZSB0aGUgZXJyb3IuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jYWxsYmFjayhlcnJvcik7XG4gICAgICB0aGlzLmFib3J0KCk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5fZm9ybURhdGE7XG59O1xuXG4vKipcbiAqIEdldHMvc2V0cyB0aGUgYEFnZW50YCB0byB1c2UgZm9yIHRoaXMgSFRUUCByZXF1ZXN0LiBUaGUgZGVmYXVsdCAoaWYgdGhpc1xuICogZnVuY3Rpb24gaXMgbm90IGNhbGxlZCkgaXMgdG8gb3B0IG91dCBvZiBjb25uZWN0aW9uIHBvb2xpbmcgKGBhZ2VudDogZmFsc2VgKS5cbiAqXG4gKiBAcGFyYW0ge2h0dHAuQWdlbnR9IGFnZW50XG4gKiBAcmV0dXJuIHtodHRwLkFnZW50fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5hZ2VudCA9IGZ1bmN0aW9uIChhZ2VudCkge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHRoaXMuX2FnZW50O1xuICB0aGlzLl9hZ2VudCA9IGFnZW50O1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IF9Db250ZW50LVR5cGVfIHJlc3BvbnNlIGhlYWRlciBwYXNzZWQgdGhyb3VnaCBgbWltZS5nZXRUeXBlKClgLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgcmVxdWVzdC5wb3N0KCcvJylcbiAqICAgICAgICAudHlwZSgneG1sJylcbiAqICAgICAgICAuc2VuZCh4bWxzdHJpbmcpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogICAgICByZXF1ZXN0LnBvc3QoJy8nKVxuICogICAgICAgIC50eXBlKCdqc29uJylcbiAqICAgICAgICAuc2VuZChqc29uc3RyaW5nKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqICAgICAgcmVxdWVzdC5wb3N0KCcvJylcbiAqICAgICAgICAudHlwZSgnYXBwbGljYXRpb24vanNvbicpXG4gKiAgICAgICAgLnNlbmQoanNvbnN0cmluZylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnR5cGUgPSBmdW5jdGlvbiAodHlwZSkge1xuICByZXR1cm4gdGhpcy5zZXQoXG4gICAgJ0NvbnRlbnQtVHlwZScsXG4gICAgdHlwZS5pbmNsdWRlcygnLycpID8gdHlwZSA6IG1pbWUuZ2V0VHlwZSh0eXBlKVxuICApO1xufTtcblxuLyoqXG4gKiBTZXQgX0FjY2VwdF8gcmVzcG9uc2UgaGVhZGVyIHBhc3NlZCB0aHJvdWdoIGBtaW1lLmdldFR5cGUoKWAuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgICBzdXBlcmFnZW50LnR5cGVzLmpzb24gPSAnYXBwbGljYXRpb24vanNvbic7XG4gKlxuICogICAgICByZXF1ZXN0LmdldCgnL2FnZW50JylcbiAqICAgICAgICAuYWNjZXB0KCdqc29uJylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiAgICAgIHJlcXVlc3QuZ2V0KCcvYWdlbnQnKVxuICogICAgICAgIC5hY2NlcHQoJ2FwcGxpY2F0aW9uL2pzb24nKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBhY2NlcHRcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5hY2NlcHQgPSBmdW5jdGlvbiAodHlwZSkge1xuICByZXR1cm4gdGhpcy5zZXQoJ0FjY2VwdCcsIHR5cGUuaW5jbHVkZXMoJy8nKSA/IHR5cGUgOiBtaW1lLmdldFR5cGUodHlwZSkpO1xufTtcblxuLyoqXG4gKiBBZGQgcXVlcnktc3RyaW5nIGB2YWxgLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgcmVxdWVzdC5nZXQoJy9zaG9lcycpXG4gKiAgICAgLnF1ZXJ5KCdzaXplPTEwJylcbiAqICAgICAucXVlcnkoeyBjb2xvcjogJ2JsdWUnIH0pXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSB2YWxcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHRoaXMuX3F1ZXJ5LnB1c2godmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5xcywgdmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFdyaXRlIHJhdyBgZGF0YWAgLyBgZW5jb2RpbmdgIHRvIHRoZSBzb2NrZXQuXG4gKlxuICogQHBhcmFtIHtCdWZmZXJ8U3RyaW5nfSBkYXRhXG4gKiBAcGFyYW0ge1N0cmluZ30gZW5jb2RpbmdcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKGRhdGEsIGVuY29kaW5nKSB7XG4gIGNvbnN0IHJlcXVlc3RfID0gdGhpcy5yZXF1ZXN0KCk7XG4gIGlmICghdGhpcy5fc3RyZWFtUmVxdWVzdCkge1xuICAgIHRoaXMuX3N0cmVhbVJlcXVlc3QgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHJlcXVlc3RfLndyaXRlKGRhdGEsIGVuY29kaW5nKTtcbn07XG5cbi8qKlxuICogUGlwZSB0aGUgcmVxdWVzdCBib2R5IHRvIGBzdHJlYW1gLlxuICpcbiAqIEBwYXJhbSB7U3RyZWFtfSBzdHJlYW1cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtTdHJlYW19XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnBpcGUgPSBmdW5jdGlvbiAoc3RyZWFtLCBvcHRpb25zKSB7XG4gIHRoaXMucGlwZWQgPSB0cnVlOyAvLyBIQUNLLi4uXG4gIHRoaXMuYnVmZmVyKGZhbHNlKTtcbiAgdGhpcy5lbmQoKTtcbiAgcmV0dXJuIHRoaXMuX3BpcGVDb250aW51ZShzdHJlYW0sIG9wdGlvbnMpO1xufTtcblxuUmVxdWVzdC5wcm90b3R5cGUuX3BpcGVDb250aW51ZSA9IGZ1bmN0aW9uIChzdHJlYW0sIG9wdGlvbnMpIHtcbiAgdGhpcy5yZXEub25jZSgncmVzcG9uc2UnLCAocmVzKSA9PiB7XG4gICAgLy8gcmVkaXJlY3RcbiAgICBpZiAoXG4gICAgICBpc1JlZGlyZWN0KHJlcy5zdGF0dXNDb2RlKSAmJlxuICAgICAgdGhpcy5fcmVkaXJlY3RzKysgIT09IHRoaXMuX21heFJlZGlyZWN0c1xuICAgICkge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlZGlyZWN0KHJlcykgPT09IHRoaXNcbiAgICAgICAgPyB0aGlzLl9waXBlQ29udGludWUoc3RyZWFtLCBvcHRpb25zKVxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB0aGlzLnJlcyA9IHJlcztcbiAgICB0aGlzLl9lbWl0UmVzcG9uc2UoKTtcbiAgICBpZiAodGhpcy5fYWJvcnRlZCkgcmV0dXJuO1xuXG4gICAgaWYgKHRoaXMuX3Nob3VsZFVuemlwKHJlcykpIHtcbiAgICAgIGNvbnN0IHVuemlwT2JqZWN0ID0gemxpYi5jcmVhdGVVbnppcCgpO1xuICAgICAgdW56aXBPYmplY3Qub24oJ2Vycm9yJywgKGVycm9yKSA9PiB7XG4gICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5jb2RlID09PSAnWl9CVUZfRVJST1InKSB7XG4gICAgICAgICAgLy8gdW5leHBlY3RlZCBlbmQgb2YgZmlsZSBpcyBpZ25vcmVkIGJ5IGJyb3dzZXJzIGFuZCBjdXJsXG4gICAgICAgICAgc3RyZWFtLmVtaXQoJ2VuZCcpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0cmVhbS5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgIH0pO1xuICAgICAgcmVzLnBpcGUodW56aXBPYmplY3QpLnBpcGUoc3RyZWFtLCBvcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzLnBpcGUoc3RyZWFtLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICByZXMub25jZSgnZW5kJywgKCkgPT4ge1xuICAgICAgdGhpcy5lbWl0KCdlbmQnKTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBzdHJlYW07XG59O1xuXG4vKipcbiAqIEVuYWJsZSAvIGRpc2FibGUgYnVmZmVyaW5nLlxuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59IFt2YWxdXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuYnVmZmVyID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHRoaXMuX2J1ZmZlciA9IHZhbHVlICE9PSBmYWxzZTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlZGlyZWN0IHRvIGB1cmxcbiAqXG4gKiBAcGFyYW0ge0luY29taW5nTWVzc2FnZX0gcmVzXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLl9yZWRpcmVjdCA9IGZ1bmN0aW9uIChyZXMpIHtcbiAgbGV0IHVybCA9IHJlcy5oZWFkZXJzLmxvY2F0aW9uO1xuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB0aGlzLmNhbGxiYWNrKG5ldyBFcnJvcignTm8gbG9jYXRpb24gaGVhZGVyIGZvciByZWRpcmVjdCcpLCByZXMpO1xuICB9XG5cbiAgZGVidWcoJ3JlZGlyZWN0ICVzIC0+ICVzJywgdGhpcy51cmwsIHVybCk7XG5cbiAgLy8gbG9jYXRpb25cbiAgdXJsID0gcmVzb2x2ZSh0aGlzLnVybCwgdXJsKTtcblxuICAvLyBlbnN1cmUgdGhlIHJlc3BvbnNlIGlzIGJlaW5nIGNvbnN1bWVkXG4gIC8vIHRoaXMgaXMgcmVxdWlyZWQgZm9yIE5vZGUgdjAuMTArXG4gIHJlcy5yZXN1bWUoKTtcblxuICBsZXQgaGVhZGVycyA9IHRoaXMucmVxLmdldEhlYWRlcnMgPyB0aGlzLnJlcS5nZXRIZWFkZXJzKCkgOiB0aGlzLnJlcS5faGVhZGVycztcblxuICBjb25zdCBjaGFuZ2VzT3JpZ2luID0gcGFyc2UodXJsKS5ob3N0ICE9PSBwYXJzZSh0aGlzLnVybCkuaG9zdDtcblxuICAvLyBpbXBsZW1lbnRhdGlvbiBvZiAzMDIgZm9sbG93aW5nIGRlZmFjdG8gc3RhbmRhcmRcbiAgaWYgKHJlcy5zdGF0dXNDb2RlID09PSAzMDEgfHwgcmVzLnN0YXR1c0NvZGUgPT09IDMwMikge1xuICAgIC8vIHN0cmlwIENvbnRlbnQtKiByZWxhdGVkIGZpZWxkc1xuICAgIC8vIGluIGNhc2Ugb2YgUE9TVCBldGNcbiAgICBoZWFkZXJzID0gdXRpbHMuY2xlYW5IZWFkZXIoaGVhZGVycywgY2hhbmdlc09yaWdpbik7XG5cbiAgICAvLyBmb3JjZSBHRVRcbiAgICB0aGlzLm1ldGhvZCA9IHRoaXMubWV0aG9kID09PSAnSEVBRCcgPyAnSEVBRCcgOiAnR0VUJztcblxuICAgIC8vIGNsZWFyIGRhdGFcbiAgICB0aGlzLl9kYXRhID0gbnVsbDtcbiAgfVxuXG4gIC8vIDMwMyBpcyBhbHdheXMgR0VUXG4gIGlmIChyZXMuc3RhdHVzQ29kZSA9PT0gMzAzKSB7XG4gICAgLy8gc3RyaXAgQ29udGVudC0qIHJlbGF0ZWQgZmllbGRzXG4gICAgLy8gaW4gY2FzZSBvZiBQT1NUIGV0Y1xuICAgIGhlYWRlcnMgPSB1dGlscy5jbGVhbkhlYWRlcihoZWFkZXJzLCBjaGFuZ2VzT3JpZ2luKTtcblxuICAgIC8vIGZvcmNlIG1ldGhvZFxuICAgIHRoaXMubWV0aG9kID0gJ0dFVCc7XG5cbiAgICAvLyBjbGVhciBkYXRhXG4gICAgdGhpcy5fZGF0YSA9IG51bGw7XG4gIH1cblxuICAvLyAzMDcgcHJlc2VydmVzIG1ldGhvZFxuICAvLyAzMDggcHJlc2VydmVzIG1ldGhvZFxuICBkZWxldGUgaGVhZGVycy5ob3N0O1xuXG4gIGRlbGV0ZSB0aGlzLnJlcTtcbiAgZGVsZXRlIHRoaXMuX2Zvcm1EYXRhO1xuXG4gIC8vIHJlbW92ZSBhbGwgYWRkIGhlYWRlciBleGNlcHQgVXNlci1BZ2VudFxuICBfaW5pdEhlYWRlcnModGhpcyk7XG5cbiAgLy8gcmVkaXJlY3RcbiAgdGhpcy5fZW5kQ2FsbGVkID0gZmFsc2U7XG4gIHRoaXMudXJsID0gdXJsO1xuICB0aGlzLnFzID0ge307XG4gIHRoaXMuX3F1ZXJ5Lmxlbmd0aCA9IDA7XG4gIHRoaXMuc2V0KGhlYWRlcnMpO1xuICB0aGlzLmVtaXQoJ3JlZGlyZWN0JywgcmVzKTtcbiAgdGhpcy5fcmVkaXJlY3RMaXN0LnB1c2godGhpcy51cmwpO1xuICB0aGlzLmVuZCh0aGlzLl9jYWxsYmFjayk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgQXV0aG9yaXphdGlvbiBmaWVsZCB2YWx1ZSB3aXRoIGB1c2VyYCBhbmQgYHBhc3NgLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgLmF1dGgoJ3RvYmknLCAnbGVhcm5ib29zdCcpXG4gKiAgIC5hdXRoKCd0b2JpOmxlYXJuYm9vc3QnKVxuICogICAuYXV0aCgndG9iaScpXG4gKiAgIC5hdXRoKGFjY2Vzc1Rva2VuLCB7IHR5cGU6ICdiZWFyZXInIH0pXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVzZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBbcGFzc11cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gb3B0aW9ucyB3aXRoIGF1dGhvcml6YXRpb24gdHlwZSAnYmFzaWMnIG9yICdiZWFyZXInICgnYmFzaWMnIGlzIGRlZmF1bHQpXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuYXV0aCA9IGZ1bmN0aW9uICh1c2VyLCBwYXNzLCBvcHRpb25zKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSBwYXNzID0gJyc7XG4gIGlmICh0eXBlb2YgcGFzcyA9PT0gJ29iamVjdCcgJiYgcGFzcyAhPT0gbnVsbCkge1xuICAgIC8vIHBhc3MgaXMgb3B0aW9uYWwgYW5kIGNhbiBiZSByZXBsYWNlZCB3aXRoIG9wdGlvbnNcbiAgICBvcHRpb25zID0gcGFzcztcbiAgICBwYXNzID0gJyc7XG4gIH1cblxuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0geyB0eXBlOiAnYmFzaWMnIH07XG4gIH1cblxuICBjb25zdCBlbmNvZGVyID0gKHN0cmluZykgPT4gQnVmZmVyLmZyb20oc3RyaW5nKS50b1N0cmluZygnYmFzZTY0Jyk7XG5cbiAgcmV0dXJuIHRoaXMuX2F1dGgodXNlciwgcGFzcywgb3B0aW9ucywgZW5jb2Rlcik7XG59O1xuXG4vKipcbiAqIFNldCB0aGUgY2VydGlmaWNhdGUgYXV0aG9yaXR5IG9wdGlvbiBmb3IgaHR0cHMgcmVxdWVzdC5cbiAqXG4gKiBAcGFyYW0ge0J1ZmZlciB8IEFycmF5fSBjZXJ0XG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuY2EgPSBmdW5jdGlvbiAoY2VydCkge1xuICB0aGlzLl9jYSA9IGNlcnQ7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgdGhlIGNsaWVudCBjZXJ0aWZpY2F0ZSBrZXkgb3B0aW9uIGZvciBodHRwcyByZXF1ZXN0LlxuICpcbiAqIEBwYXJhbSB7QnVmZmVyIHwgU3RyaW5nfSBjZXJ0XG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUua2V5ID0gZnVuY3Rpb24gKGNlcnQpIHtcbiAgdGhpcy5fa2V5ID0gY2VydDtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCB0aGUga2V5LCBjZXJ0aWZpY2F0ZSwgYW5kIENBIGNlcnRzIG9mIHRoZSBjbGllbnQgaW4gUEZYIG9yIFBLQ1MxMiBmb3JtYXQuXG4gKlxuICogQHBhcmFtIHtCdWZmZXIgfCBTdHJpbmd9IGNlcnRcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5wZnggPSBmdW5jdGlvbiAoY2VydCkge1xuICBpZiAodHlwZW9mIGNlcnQgPT09ICdvYmplY3QnICYmICFCdWZmZXIuaXNCdWZmZXIoY2VydCkpIHtcbiAgICB0aGlzLl9wZnggPSBjZXJ0LnBmeDtcbiAgICB0aGlzLl9wYXNzcGhyYXNlID0gY2VydC5wYXNzcGhyYXNlO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuX3BmeCA9IGNlcnQ7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IHRoZSBjbGllbnQgY2VydGlmaWNhdGUgb3B0aW9uIGZvciBodHRwcyByZXF1ZXN0LlxuICpcbiAqIEBwYXJhbSB7QnVmZmVyIHwgU3RyaW5nfSBjZXJ0XG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuY2VydCA9IGZ1bmN0aW9uIChjZXJ0KSB7XG4gIHRoaXMuX2NlcnQgPSBjZXJ0O1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRG8gbm90IHJlamVjdCBleHBpcmVkIG9yIGludmFsaWQgVExTIGNlcnRzLlxuICogc2V0cyBgcmVqZWN0VW5hdXRob3JpemVkPXRydWVgLiBCZSB3YXJuZWQgdGhhdCB0aGlzIGFsbG93cyBNSVRNIGF0dGFja3MuXG4gKlxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmRpc2FibGVUTFNDZXJ0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fZGlzYWJsZVRMU0NlcnRzID0gdHJ1ZTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJldHVybiBhbiBodHRwW3NdIHJlcXVlc3QuXG4gKlxuICogQHJldHVybiB7T3V0Z29pbmdNZXNzYWdlfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcblJlcXVlc3QucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLnJlcSkgcmV0dXJuIHRoaXMucmVxO1xuXG4gIGNvbnN0IG9wdGlvbnMgPSB7fTtcblxuICB0cnkge1xuICAgIGNvbnN0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KHRoaXMucXMsIHtcbiAgICAgIGluZGljZXM6IGZhbHNlLFxuICAgICAgc3RyaWN0TnVsbEhhbmRsaW5nOiB0cnVlXG4gICAgfSk7XG4gICAgaWYgKHF1ZXJ5KSB7XG4gICAgICB0aGlzLnFzID0ge307XG4gICAgICB0aGlzLl9xdWVyeS5wdXNoKHF1ZXJ5KTtcbiAgICB9XG5cbiAgICB0aGlzLl9maW5hbGl6ZVF1ZXJ5U3RyaW5nKCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyKTtcbiAgfVxuXG4gIGxldCB7IHVybCB9ID0gdGhpcztcbiAgY29uc3QgcmV0cmllcyA9IHRoaXMuX3JldHJpZXM7XG5cbiAgLy8gQ2FwdHVyZSBiYWNrdGlja3MgYXMtaXMgZnJvbSB0aGUgZmluYWwgcXVlcnkgc3RyaW5nIGJ1aWx0IGFib3ZlLlxuICAvLyBOb3RlOiB0aGlzJ2xsIG9ubHkgZmluZCBiYWNrdGlja3MgZW50ZXJlZCBpbiByZXEucXVlcnkoU3RyaW5nKVxuICAvLyBjYWxscywgYmVjYXVzZSBxcy5zdHJpbmdpZnkgdW5jb25kaXRpb25hbGx5IGVuY29kZXMgYmFja3RpY2tzLlxuICBsZXQgcXVlcnlTdHJpbmdCYWNrdGlja3M7XG4gIGlmICh1cmwuaW5jbHVkZXMoJ2AnKSkge1xuICAgIGNvbnN0IHF1ZXJ5U3RhcnRJbmRleCA9IHVybC5pbmRleE9mKCc/Jyk7XG5cbiAgICBpZiAocXVlcnlTdGFydEluZGV4ICE9PSAtMSkge1xuICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPSB1cmwuc2xpY2UocXVlcnlTdGFydEluZGV4ICsgMSk7XG4gICAgICBxdWVyeVN0cmluZ0JhY2t0aWNrcyA9IHF1ZXJ5U3RyaW5nLm1hdGNoKC9gfCU2MC9nKTtcbiAgICB9XG4gIH1cblxuICAvLyBkZWZhdWx0IHRvIGh0dHA6Ly9cbiAgaWYgKHVybC5pbmRleE9mKCdodHRwJykgIT09IDApIHVybCA9IGBodHRwOi8vJHt1cmx9YDtcbiAgdXJsID0gcGFyc2UodXJsKTtcblxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3Zpc2lvbm1lZGlhL3N1cGVyYWdlbnQvaXNzdWVzLzEzNjdcbiAgaWYgKHF1ZXJ5U3RyaW5nQmFja3RpY2tzKSB7XG4gICAgbGV0IGkgPSAwO1xuICAgIHVybC5xdWVyeSA9IHVybC5xdWVyeS5yZXBsYWNlKC8lNjAvZywgKCkgPT4gcXVlcnlTdHJpbmdCYWNrdGlja3NbaSsrXSk7XG4gICAgdXJsLnNlYXJjaCA9IGA/JHt1cmwucXVlcnl9YDtcbiAgICB1cmwucGF0aCA9IHVybC5wYXRobmFtZSArIHVybC5zZWFyY2g7XG4gIH1cblxuICAvLyBzdXBwb3J0IHVuaXggc29ja2V0c1xuICBpZiAoL15odHRwcz9cXCt1bml4Oi8udGVzdCh1cmwucHJvdG9jb2wpID09PSB0cnVlKSB7XG4gICAgLy8gZ2V0IHRoZSBwcm90b2NvbFxuICAgIHVybC5wcm90b2NvbCA9IGAke3VybC5wcm90b2NvbC5zcGxpdCgnKycpWzBdfTpgO1xuXG4gICAgLy8gZ2V0IHRoZSBzb2NrZXQsIHBhdGhcbiAgICBjb25zdCB1bml4UGFydHMgPSB1cmwucGF0aC5tYXRjaCgvXihbXi9dKykoLispJC8pO1xuICAgIG9wdGlvbnMuc29ja2V0UGF0aCA9IHVuaXhQYXJ0c1sxXS5yZXBsYWNlKC8lMkYvZywgJy8nKTtcbiAgICB1cmwucGF0aCA9IHVuaXhQYXJ0c1syXTtcbiAgfVxuXG4gIC8vIE92ZXJyaWRlIElQIGFkZHJlc3Mgb2YgYSBob3N0bmFtZVxuICBpZiAodGhpcy5fY29ubmVjdE92ZXJyaWRlKSB7XG4gICAgY29uc3QgeyBob3N0bmFtZSB9ID0gdXJsO1xuICAgIGNvbnN0IG1hdGNoID1cbiAgICAgIGhvc3RuYW1lIGluIHRoaXMuX2Nvbm5lY3RPdmVycmlkZVxuICAgICAgICA/IHRoaXMuX2Nvbm5lY3RPdmVycmlkZVtob3N0bmFtZV1cbiAgICAgICAgOiB0aGlzLl9jb25uZWN0T3ZlcnJpZGVbJyonXTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIC8vIGJhY2t1cCB0aGUgcmVhbCBob3N0XG4gICAgICBpZiAoIXRoaXMuX2hlYWRlci5ob3N0KSB7XG4gICAgICAgIHRoaXMuc2V0KCdob3N0JywgdXJsLmhvc3QpO1xuICAgICAgfVxuXG4gICAgICBsZXQgbmV3SG9zdDtcbiAgICAgIGxldCBuZXdQb3J0O1xuXG4gICAgICBpZiAodHlwZW9mIG1hdGNoID09PSAnb2JqZWN0Jykge1xuICAgICAgICBuZXdIb3N0ID0gbWF0Y2guaG9zdDtcbiAgICAgICAgbmV3UG9ydCA9IG1hdGNoLnBvcnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdIb3N0ID0gbWF0Y2g7XG4gICAgICAgIG5ld1BvcnQgPSB1cmwucG9ydDtcbiAgICAgIH1cblxuICAgICAgLy8gd3JhcCBbaXB2Nl1cbiAgICAgIHVybC5ob3N0ID0gLzovLnRlc3QobmV3SG9zdCkgPyBgWyR7bmV3SG9zdH1dYCA6IG5ld0hvc3Q7XG4gICAgICBpZiAobmV3UG9ydCkge1xuICAgICAgICB1cmwuaG9zdCArPSBgOiR7bmV3UG9ydH1gO1xuICAgICAgICB1cmwucG9ydCA9IG5ld1BvcnQ7XG4gICAgICB9XG5cbiAgICAgIHVybC5ob3N0bmFtZSA9IG5ld0hvc3Q7XG4gICAgfVxuICB9XG5cbiAgLy8gb3B0aW9uc1xuICBvcHRpb25zLm1ldGhvZCA9IHRoaXMubWV0aG9kO1xuICBvcHRpb25zLnBvcnQgPSB1cmwucG9ydDtcbiAgb3B0aW9ucy5wYXRoID0gdXJsLnBhdGg7XG4gIG9wdGlvbnMuaG9zdCA9IHVybC5ob3N0bmFtZTtcbiAgb3B0aW9ucy5jYSA9IHRoaXMuX2NhO1xuICBvcHRpb25zLmtleSA9IHRoaXMuX2tleTtcbiAgb3B0aW9ucy5wZnggPSB0aGlzLl9wZng7XG4gIG9wdGlvbnMuY2VydCA9IHRoaXMuX2NlcnQ7XG4gIG9wdGlvbnMucGFzc3BocmFzZSA9IHRoaXMuX3Bhc3NwaHJhc2U7XG4gIG9wdGlvbnMuYWdlbnQgPSB0aGlzLl9hZ2VudDtcbiAgb3B0aW9ucy5yZWplY3RVbmF1dGhvcml6ZWQgPVxuICAgIHR5cGVvZiB0aGlzLl9kaXNhYmxlVExTQ2VydHMgPT09ICdib29sZWFuJ1xuICAgICAgPyAhdGhpcy5fZGlzYWJsZVRMU0NlcnRzXG4gICAgICA6IHByb2Nlc3MuZW52Lk5PREVfVExTX1JFSkVDVF9VTkFVVEhPUklaRUQgIT09ICcwJztcblxuICAvLyBBbGxvd3MgcmVxdWVzdC5nZXQoJ2h0dHBzOi8vMS4yLjMuNC8nKS5zZXQoJ0hvc3QnLCAnZXhhbXBsZS5jb20nKVxuICBpZiAodGhpcy5faGVhZGVyLmhvc3QpIHtcbiAgICBvcHRpb25zLnNlcnZlcm5hbWUgPSB0aGlzLl9oZWFkZXIuaG9zdC5yZXBsYWNlKC86XFxkKyQvLCAnJyk7XG4gIH1cblxuICBpZiAoXG4gICAgdGhpcy5fdHJ1c3RMb2NhbGhvc3QgJiZcbiAgICAvXig/OmxvY2FsaG9zdHwxMjdcXC4wXFwuMFxcLlxcZCt8KDAqOikrOjAqMSkkLy50ZXN0KHVybC5ob3N0bmFtZSlcbiAgKSB7XG4gICAgb3B0aW9ucy5yZWplY3RVbmF1dGhvcml6ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8vIGluaXRpYXRlIHJlcXVlc3RcbiAgY29uc3QgbW9kID0gdGhpcy5fZW5hYmxlSHR0cDJcbiAgICA/IGV4cG9ydHMucHJvdG9jb2xzWydodHRwMjonXS5zZXRQcm90b2NvbCh1cmwucHJvdG9jb2wpXG4gICAgOiBleHBvcnRzLnByb3RvY29sc1t1cmwucHJvdG9jb2xdO1xuXG4gIC8vIHJlcXVlc3RcbiAgdGhpcy5yZXEgPSBtb2QucmVxdWVzdChvcHRpb25zKTtcbiAgY29uc3QgeyByZXEgfSA9IHRoaXM7XG5cbiAgLy8gc2V0IHRjcCBubyBkZWxheVxuICByZXEuc2V0Tm9EZWxheSh0cnVlKTtcblxuICBpZiAob3B0aW9ucy5tZXRob2QgIT09ICdIRUFEJykge1xuICAgIHJlcS5zZXRIZWFkZXIoJ0FjY2VwdC1FbmNvZGluZycsICdnemlwLCBkZWZsYXRlJyk7XG4gIH1cblxuICB0aGlzLnByb3RvY29sID0gdXJsLnByb3RvY29sO1xuICB0aGlzLmhvc3QgPSB1cmwuaG9zdDtcblxuICAvLyBleHBvc2UgZXZlbnRzXG4gIHJlcS5vbmNlKCdkcmFpbicsICgpID0+IHtcbiAgICB0aGlzLmVtaXQoJ2RyYWluJyk7XG4gIH0pO1xuXG4gIHJlcS5vbignZXJyb3InLCAoZXJyb3IpID0+IHtcbiAgICAvLyBmbGFnIGFib3J0aW9uIGhlcmUgZm9yIG91dCB0aW1lb3V0c1xuICAgIC8vIGJlY2F1c2Ugbm9kZSB3aWxsIGVtaXQgYSBmYXV4LWVycm9yIFwic29ja2V0IGhhbmcgdXBcIlxuICAgIC8vIHdoZW4gcmVxdWVzdCBpcyBhYm9ydGVkIGJlZm9yZSBhIGNvbm5lY3Rpb24gaXMgbWFkZVxuICAgIGlmICh0aGlzLl9hYm9ydGVkKSByZXR1cm47XG4gICAgLy8gaWYgbm90IHRoZSBzYW1lLCB3ZSBhcmUgaW4gdGhlICoqb2xkKiogKGNhbmNlbGxlZCkgcmVxdWVzdCxcbiAgICAvLyBzbyBuZWVkIHRvIGNvbnRpbnVlIChzYW1lIGFzIGZvciBhYm92ZSlcbiAgICBpZiAodGhpcy5fcmV0cmllcyAhPT0gcmV0cmllcykgcmV0dXJuO1xuICAgIC8vIGlmIHdlJ3ZlIHJlY2VpdmVkIGEgcmVzcG9uc2UgdGhlbiB3ZSBkb24ndCB3YW50IHRvIGxldFxuICAgIC8vIGFuIGVycm9yIGluIHRoZSByZXF1ZXN0IGJsb3cgdXAgdGhlIHJlc3BvbnNlXG4gICAgaWYgKHRoaXMucmVzcG9uc2UpIHJldHVybjtcbiAgICB0aGlzLmNhbGxiYWNrKGVycm9yKTtcbiAgfSk7XG5cbiAgLy8gYXV0aFxuICBpZiAodXJsLmF1dGgpIHtcbiAgICBjb25zdCBhdXRoID0gdXJsLmF1dGguc3BsaXQoJzonKTtcbiAgICB0aGlzLmF1dGgoYXV0aFswXSwgYXV0aFsxXSk7XG4gIH1cblxuICBpZiAodGhpcy51c2VybmFtZSAmJiB0aGlzLnBhc3N3b3JkKSB7XG4gICAgdGhpcy5hdXRoKHRoaXMudXNlcm5hbWUsIHRoaXMucGFzc3dvcmQpO1xuICB9XG5cbiAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5oZWFkZXIpIHtcbiAgICBpZiAoaGFzT3duKHRoaXMuaGVhZGVyLCBrZXkpKSByZXEuc2V0SGVhZGVyKGtleSwgdGhpcy5oZWFkZXJba2V5XSk7XG4gIH1cblxuICAvLyBhZGQgY29va2llc1xuICBpZiAodGhpcy5jb29raWVzKSB7XG4gICAgaWYgKGhhc093bih0aGlzLl9oZWFkZXIsICdjb29raWUnKSkge1xuICAgICAgLy8gbWVyZ2VcbiAgICAgIGNvbnN0IHRlbXBvcmFyeUphciA9IG5ldyBDb29raWVKYXIuQ29va2llSmFyKCk7XG4gICAgICB0ZW1wb3JhcnlKYXIuc2V0Q29va2llcyh0aGlzLl9oZWFkZXIuY29va2llLnNwbGl0KCc7JykpO1xuICAgICAgdGVtcG9yYXJ5SmFyLnNldENvb2tpZXModGhpcy5jb29raWVzLnNwbGl0KCc7JykpO1xuICAgICAgcmVxLnNldEhlYWRlcihcbiAgICAgICAgJ0Nvb2tpZScsXG4gICAgICAgIHRlbXBvcmFyeUphci5nZXRDb29raWVzKENvb2tpZUphci5Db29raWVBY2Nlc3NJbmZvLkFsbCkudG9WYWx1ZVN0cmluZygpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXEuc2V0SGVhZGVyKCdDb29raWUnLCB0aGlzLmNvb2tpZXMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIEludm9rZSB0aGUgY2FsbGJhY2sgd2l0aCBgZXJyYCBhbmQgYHJlc2BcbiAqIGFuZCBoYW5kbGUgYXJpdHkgY2hlY2suXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyXG4gKiBAcGFyYW0ge1Jlc3BvbnNlfSByZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmNhbGxiYWNrID0gZnVuY3Rpb24gKGVycm9yLCByZXMpIHtcbiAgaWYgKHRoaXMuX3Nob3VsZFJldHJ5KGVycm9yLCByZXMpKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JldHJ5KCk7XG4gIH1cblxuICAvLyBBdm9pZCB0aGUgZXJyb3Igd2hpY2ggaXMgZW1pdHRlZCBmcm9tICdzb2NrZXQgaGFuZyB1cCcgdG8gY2F1c2UgdGhlIGZuIHVuZGVmaW5lZCBlcnJvciBvbiBKUyBydW50aW1lLlxuICBjb25zdCBmbiA9IHRoaXMuX2NhbGxiYWNrIHx8IG5vb3A7XG4gIHRoaXMuY2xlYXJUaW1lb3V0KCk7XG4gIGlmICh0aGlzLmNhbGxlZCkgcmV0dXJuIGNvbnNvbGUud2Fybignc3VwZXJhZ2VudDogZG91YmxlIGNhbGxiYWNrIGJ1ZycpO1xuICB0aGlzLmNhbGxlZCA9IHRydWU7XG5cbiAgaWYgKCFlcnJvcikge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIXRoaXMuX2lzUmVzcG9uc2VPSyhyZXMpKSB7XG4gICAgICAgIGxldCBtZXNzYWdlID0gJ1Vuc3VjY2Vzc2Z1bCBIVFRQIHJlc3BvbnNlJztcbiAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgIG1lc3NhZ2UgPSBodHRwLlNUQVRVU19DT0RFU1tyZXMuc3RhdHVzXSB8fCBtZXNzYWdlO1xuICAgICAgICB9XG5cbiAgICAgICAgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICAgIGVycm9yLnN0YXR1cyA9IHJlcyA/IHJlcy5zdGF0dXMgOiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3JfKSB7XG4gICAgICBlcnJvciA9IGVycm9yXztcbiAgICB9XG4gIH1cblxuICAvLyBJdCdzIGltcG9ydGFudCB0aGF0IHRoZSBjYWxsYmFjayBpcyBjYWxsZWQgb3V0c2lkZSB0cnkvY2F0Y2hcbiAgLy8gdG8gYXZvaWQgZG91YmxlIGNhbGxiYWNrXG4gIGlmICghZXJyb3IpIHtcbiAgICByZXR1cm4gZm4obnVsbCwgcmVzKTtcbiAgfVxuXG4gIGVycm9yLnJlc3BvbnNlID0gcmVzO1xuICBpZiAodGhpcy5fbWF4UmV0cmllcykgZXJyb3IucmV0cmllcyA9IHRoaXMuX3JldHJpZXMgLSAxO1xuXG4gIC8vIG9ubHkgZW1pdCBlcnJvciBldmVudCBpZiB0aGVyZSBpcyBhIGxpc3RlbmVyXG4gIC8vIG90aGVyd2lzZSB3ZSBhc3N1bWUgdGhlIGNhbGxiYWNrIHRvIGAuZW5kKClgIHdpbGwgZ2V0IHRoZSBlcnJvclxuICBpZiAoZXJyb3IgJiYgdGhpcy5saXN0ZW5lcnMoJ2Vycm9yJykubGVuZ3RoID4gMCkge1xuICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gIH1cblxuICBmbihlcnJvciwgcmVzKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYG9iamAgaXMgYSBob3N0IG9iamVjdCxcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIGhvc3Qgb2JqZWN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSBpcyBhIGhvc3Qgb2JqZWN0XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuUmVxdWVzdC5wcm90b3R5cGUuX2lzSG9zdCA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgcmV0dXJuIChcbiAgICBCdWZmZXIuaXNCdWZmZXIob2JqZWN0KSB8fFxuICAgIG9iamVjdCBpbnN0YW5jZW9mIFN0cmVhbSB8fFxuICAgIG9iamVjdCBpbnN0YW5jZW9mIEZvcm1EYXRhXG4gICk7XG59O1xuXG4vKipcbiAqIEluaXRpYXRlIHJlcXVlc3QsIGludm9raW5nIGNhbGxiYWNrIGBmbihlcnIsIHJlcylgXG4gKiB3aXRoIGFuIGluc3RhbmNlb2YgYFJlc3BvbnNlYC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLl9lbWl0UmVzcG9uc2UgPSBmdW5jdGlvbiAoYm9keSwgZmlsZXMpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UodGhpcyk7XG4gIHRoaXMucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgcmVzcG9uc2UucmVkaXJlY3RzID0gdGhpcy5fcmVkaXJlY3RMaXN0O1xuICBpZiAodW5kZWZpbmVkICE9PSBib2R5KSB7XG4gICAgcmVzcG9uc2UuYm9keSA9IGJvZHk7XG4gIH1cblxuICByZXNwb25zZS5maWxlcyA9IGZpbGVzO1xuICBpZiAodGhpcy5fZW5kQ2FsbGVkKSB7XG4gICAgcmVzcG9uc2UucGlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJlbmQoKSBoYXMgYWxyZWFkeSBiZWVuIGNhbGxlZCwgc28gaXQncyB0b28gbGF0ZSB0byBzdGFydCBwaXBpbmdcIlxuICAgICAgKTtcbiAgICB9O1xuICB9XG5cbiAgdGhpcy5lbWl0KCdyZXNwb25zZScsIHJlc3BvbnNlKTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuUmVxdWVzdC5wcm90b3R5cGUuZW5kID0gZnVuY3Rpb24gKGZuKSB7XG4gIHRoaXMucmVxdWVzdCgpO1xuICBkZWJ1ZygnJXMgJXMnLCB0aGlzLm1ldGhvZCwgdGhpcy51cmwpO1xuXG4gIGlmICh0aGlzLl9lbmRDYWxsZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnLmVuZCgpIHdhcyBjYWxsZWQgdHdpY2UuIFRoaXMgaXMgbm90IHN1cHBvcnRlZCBpbiBzdXBlcmFnZW50J1xuICAgICk7XG4gIH1cblxuICB0aGlzLl9lbmRDYWxsZWQgPSB0cnVlO1xuXG4gIC8vIHN0b3JlIGNhbGxiYWNrXG4gIHRoaXMuX2NhbGxiYWNrID0gZm4gfHwgbm9vcDtcblxuICB0aGlzLl9lbmQoKTtcbn07XG5cblJlcXVlc3QucHJvdG90eXBlLl9lbmQgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLl9hYm9ydGVkKVxuICAgIHJldHVybiB0aGlzLmNhbGxiYWNrKFxuICAgICAgbmV3IEVycm9yKCdUaGUgcmVxdWVzdCBoYXMgYmVlbiBhYm9ydGVkIGV2ZW4gYmVmb3JlIC5lbmQoKSB3YXMgY2FsbGVkJylcbiAgICApO1xuXG4gIGxldCBkYXRhID0gdGhpcy5fZGF0YTtcbiAgY29uc3QgeyByZXEgfSA9IHRoaXM7XG4gIGNvbnN0IHsgbWV0aG9kIH0gPSB0aGlzO1xuXG4gIHRoaXMuX3NldFRpbWVvdXRzKCk7XG5cbiAgLy8gYm9keVxuICBpZiAobWV0aG9kICE9PSAnSEVBRCcgJiYgIXJlcS5faGVhZGVyU2VudCkge1xuICAgIC8vIHNlcmlhbGl6ZSBzdHVmZlxuICAgIGlmICh0eXBlb2YgZGF0YSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGxldCBjb250ZW50VHlwZSA9IHJlcS5nZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScpO1xuICAgICAgLy8gUGFyc2Ugb3V0IGp1c3QgdGhlIGNvbnRlbnQgdHlwZSBmcm9tIHRoZSBoZWFkZXIgKGlnbm9yZSB0aGUgY2hhcnNldClcbiAgICAgIGlmIChjb250ZW50VHlwZSkgY29udGVudFR5cGUgPSBjb250ZW50VHlwZS5zcGxpdCgnOycpWzBdO1xuICAgICAgbGV0IHNlcmlhbGl6ZSA9IHRoaXMuX3NlcmlhbGl6ZXIgfHwgZXhwb3J0cy5zZXJpYWxpemVbY29udGVudFR5cGVdO1xuICAgICAgaWYgKCFzZXJpYWxpemUgJiYgaXNKU09OKGNvbnRlbnRUeXBlKSkge1xuICAgICAgICBzZXJpYWxpemUgPSBleHBvcnRzLnNlcmlhbGl6ZVsnYXBwbGljYXRpb24vanNvbiddO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2VyaWFsaXplKSBkYXRhID0gc2VyaWFsaXplKGRhdGEpO1xuICAgIH1cblxuICAgIC8vIGNvbnRlbnQtbGVuZ3RoXG4gICAgaWYgKGRhdGEgJiYgIXJlcS5nZXRIZWFkZXIoJ0NvbnRlbnQtTGVuZ3RoJykpIHtcbiAgICAgIHJlcS5zZXRIZWFkZXIoXG4gICAgICAgICdDb250ZW50LUxlbmd0aCcsXG4gICAgICAgIEJ1ZmZlci5pc0J1ZmZlcihkYXRhKSA/IGRhdGEubGVuZ3RoIDogQnVmZmVyLmJ5dGVMZW5ndGgoZGF0YSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLy8gcmVzcG9uc2VcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbiAgcmVxLm9uY2UoJ3Jlc3BvbnNlJywgKHJlcykgPT4ge1xuICAgIGRlYnVnKCclcyAlcyAtPiAlcycsIHRoaXMubWV0aG9kLCB0aGlzLnVybCwgcmVzLnN0YXR1c0NvZGUpO1xuXG4gICAgaWYgKHRoaXMuX3Jlc3BvbnNlVGltZW91dFRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fcmVzcG9uc2VUaW1lb3V0VGltZXIpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnBpcGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbWF4ID0gdGhpcy5fbWF4UmVkaXJlY3RzO1xuICAgIGNvbnN0IG1pbWUgPSB1dGlscy50eXBlKHJlcy5oZWFkZXJzWydjb250ZW50LXR5cGUnXSB8fCAnJykgfHwgJ3RleHQvcGxhaW4nO1xuICAgIGxldCB0eXBlID0gbWltZS5zcGxpdCgnLycpWzBdO1xuICAgIGlmICh0eXBlKSB0eXBlID0gdHlwZS50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcbiAgICBjb25zdCBtdWx0aXBhcnQgPSB0eXBlID09PSAnbXVsdGlwYXJ0JztcbiAgICBjb25zdCByZWRpcmVjdCA9IGlzUmVkaXJlY3QocmVzLnN0YXR1c0NvZGUpO1xuICAgIGNvbnN0IHJlc3BvbnNlVHlwZSA9IHRoaXMuX3Jlc3BvbnNlVHlwZTtcblxuICAgIHRoaXMucmVzID0gcmVzO1xuXG4gICAgLy8gcmVkaXJlY3RcbiAgICBpZiAocmVkaXJlY3QgJiYgdGhpcy5fcmVkaXJlY3RzKysgIT09IG1heCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlZGlyZWN0KHJlcyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubWV0aG9kID09PSAnSEVBRCcpIHtcbiAgICAgIHRoaXMuZW1pdCgnZW5kJyk7XG4gICAgICB0aGlzLmNhbGxiYWNrKG51bGwsIHRoaXMuX2VtaXRSZXNwb25zZSgpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyB6bGliIHN1cHBvcnRcbiAgICBpZiAodGhpcy5fc2hvdWxkVW56aXAocmVzKSkge1xuICAgICAgdW56aXAocmVxLCByZXMpO1xuICAgIH1cblxuICAgIGxldCBidWZmZXIgPSB0aGlzLl9idWZmZXI7XG4gICAgaWYgKGJ1ZmZlciA9PT0gdW5kZWZpbmVkICYmIG1pbWUgaW4gZXhwb3J0cy5idWZmZXIpIHtcbiAgICAgIGJ1ZmZlciA9IEJvb2xlYW4oZXhwb3J0cy5idWZmZXJbbWltZV0pO1xuICAgIH1cblxuICAgIGxldCBwYXJzZXIgPSB0aGlzLl9wYXJzZXI7XG4gICAgaWYgKHVuZGVmaW5lZCA9PT0gYnVmZmVyICYmIHBhcnNlcikge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBcIkEgY3VzdG9tIHN1cGVyYWdlbnQgcGFyc2VyIGhhcyBiZWVuIHNldCwgYnV0IGJ1ZmZlcmluZyBzdHJhdGVneSBmb3IgdGhlIHBhcnNlciBoYXNuJ3QgYmVlbiBjb25maWd1cmVkLiBDYWxsIGByZXEuYnVmZmVyKHRydWUgb3IgZmFsc2UpYCBvciBzZXQgYHN1cGVyYWdlbnQuYnVmZmVyW21pbWVdID0gdHJ1ZSBvciBmYWxzZWBcIlxuICAgICAgKTtcbiAgICAgIGJ1ZmZlciA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFwYXJzZXIpIHtcbiAgICAgIGlmIChyZXNwb25zZVR5cGUpIHtcbiAgICAgICAgcGFyc2VyID0gZXhwb3J0cy5wYXJzZS5pbWFnZTsgLy8gSXQncyBhY3R1YWxseSBhIGdlbmVyaWMgQnVmZmVyXG4gICAgICAgIGJ1ZmZlciA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKG11bHRpcGFydCkge1xuICAgICAgICBjb25zdCBmb3JtID0gZm9ybWlkYWJsZSgpO1xuICAgICAgICBwYXJzZXIgPSBmb3JtLnBhcnNlLmJpbmQoZm9ybSk7XG4gICAgICAgIGJ1ZmZlciA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKGlzSW1hZ2VPclZpZGVvKG1pbWUpKSB7XG4gICAgICAgIHBhcnNlciA9IGV4cG9ydHMucGFyc2UuaW1hZ2U7XG4gICAgICAgIGJ1ZmZlciA9IHRydWU7IC8vIEZvciBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eSBidWZmZXJpbmcgZGVmYXVsdCBpcyBhZC1ob2MgTUlNRS1kZXBlbmRlbnRcbiAgICAgIH0gZWxzZSBpZiAoZXhwb3J0cy5wYXJzZVttaW1lXSkge1xuICAgICAgICBwYXJzZXIgPSBleHBvcnRzLnBhcnNlW21pbWVdO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgcGFyc2VyID0gZXhwb3J0cy5wYXJzZS50ZXh0O1xuICAgICAgICBidWZmZXIgPSBidWZmZXIgIT09IGZhbHNlO1xuXG4gICAgICAgIC8vIGV2ZXJ5b25lIHdhbnRzIHRoZWlyIG93biB3aGl0ZS1sYWJlbGVkIGpzb25cbiAgICAgIH0gZWxzZSBpZiAoaXNKU09OKG1pbWUpKSB7XG4gICAgICAgIHBhcnNlciA9IGV4cG9ydHMucGFyc2VbJ2FwcGxpY2F0aW9uL2pzb24nXTtcbiAgICAgICAgYnVmZmVyID0gYnVmZmVyICE9PSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoYnVmZmVyKSB7XG4gICAgICAgIHBhcnNlciA9IGV4cG9ydHMucGFyc2UudGV4dDtcbiAgICAgIH0gZWxzZSBpZiAodW5kZWZpbmVkID09PSBidWZmZXIpIHtcbiAgICAgICAgcGFyc2VyID0gZXhwb3J0cy5wYXJzZS5pbWFnZTsgLy8gSXQncyBhY3R1YWxseSBhIGdlbmVyaWMgQnVmZmVyXG4gICAgICAgIGJ1ZmZlciA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gYnkgZGVmYXVsdCBvbmx5IGJ1ZmZlciB0ZXh0LyosIGpzb24gYW5kIG1lc3NlZCB1cCB0aGluZyBmcm9tIGhlbGxcbiAgICBpZiAoKHVuZGVmaW5lZCA9PT0gYnVmZmVyICYmIGlzVGV4dChtaW1lKSkgfHwgaXNKU09OKG1pbWUpKSB7XG4gICAgICBidWZmZXIgPSB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMuX3Jlc0J1ZmZlcmVkID0gYnVmZmVyO1xuICAgIGxldCBwYXJzZXJIYW5kbGVzRW5kID0gZmFsc2U7XG4gICAgaWYgKGJ1ZmZlcikge1xuICAgICAgLy8gUHJvdGVjdGlvbmEgYWdhaW5zdCB6aXAgYm9tYnMgYW5kIG90aGVyIG51aXNhbmNlXG4gICAgICBsZXQgcmVzcG9uc2VCeXRlc0xlZnQgPSB0aGlzLl9tYXhSZXNwb25zZVNpemUgfHwgMjAwXzAwMF8wMDA7XG4gICAgICByZXMub24oJ2RhdGEnLCAoYnVmKSA9PiB7XG4gICAgICAgIHJlc3BvbnNlQnl0ZXNMZWZ0IC09IGJ1Zi5ieXRlTGVuZ3RoIHx8IGJ1Zi5sZW5ndGggPiAwID8gYnVmLmxlbmd0aCA6IDA7XG4gICAgICAgIGlmIChyZXNwb25zZUJ5dGVzTGVmdCA8IDApIHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgcHJvcGFnYXRlIHRocm91Z2ggZXJyb3IgZXZlbnRcbiAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcignTWF4aW11bSByZXNwb25zZSBzaXplIHJlYWNoZWQnKTtcbiAgICAgICAgICBlcnJvci5jb2RlID0gJ0VUT09MQVJHRSc7XG4gICAgICAgICAgLy8gUGFyc2VycyBhcmVuJ3QgcmVxdWlyZWQgdG8gb2JzZXJ2ZSBlcnJvciBldmVudCxcbiAgICAgICAgICAvLyBzbyB3b3VsZCBpbmNvcnJlY3RseSByZXBvcnQgc3VjY2Vzc1xuICAgICAgICAgIHBhcnNlckhhbmRsZXNFbmQgPSBmYWxzZTtcbiAgICAgICAgICAvLyBXaWxsIG5vdCBlbWl0IGVycm9yIGV2ZW50XG4gICAgICAgICAgcmVzLmRlc3Ryb3koZXJyb3IpO1xuICAgICAgICAgIC8vIHNvIHdlIGRvIGNhbGxiYWNrIG5vd1xuICAgICAgICAgIHRoaXMuY2FsbGJhY2soZXJyb3IsIG51bGwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocGFyc2VyKSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBVbmJ1ZmZlcmVkIHBhcnNlcnMgYXJlIHN1cHBvc2VkIHRvIGVtaXQgcmVzcG9uc2UgZWFybHksXG4gICAgICAgIC8vIHdoaWNoIGlzIHdlaXJkIEJUVywgYmVjYXVzZSByZXNwb25zZS5ib2R5IHdvbid0IGJlIHRoZXJlLlxuICAgICAgICBwYXJzZXJIYW5kbGVzRW5kID0gYnVmZmVyO1xuXG4gICAgICAgIHBhcnNlcihyZXMsIChlcnJvciwgb2JqZWN0LCBmaWxlcykgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLnRpbWVkb3V0KSB7XG4gICAgICAgICAgICAvLyBUaW1lb3V0IGhhcyBhbHJlYWR5IGhhbmRsZWQgYWxsIGNhbGxiYWNrc1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEludGVudGlvbmFsIChub24tdGltZW91dCkgYWJvcnQgaXMgc3VwcG9zZWQgdG8gcHJlc2VydmUgcGFydGlhbCByZXNwb25zZSxcbiAgICAgICAgICAvLyBldmVuIGlmIGl0IGRvZXNuJ3QgcGFyc2UuXG4gICAgICAgICAgaWYgKGVycm9yICYmICF0aGlzLl9hYm9ydGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYWxsYmFjayhlcnJvcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHBhcnNlckhhbmRsZXNFbmQpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnZW5kJyk7XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrKG51bGwsIHRoaXMuX2VtaXRSZXNwb25zZShvYmplY3QsIGZpbGVzKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB0aGlzLmNhbGxiYWNrKGVycik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnJlcyA9IHJlcztcblxuICAgIC8vIHVuYnVmZmVyZWRcbiAgICBpZiAoIWJ1ZmZlcikge1xuICAgICAgZGVidWcoJ3VuYnVmZmVyZWQgJXMgJXMnLCB0aGlzLm1ldGhvZCwgdGhpcy51cmwpO1xuICAgICAgdGhpcy5jYWxsYmFjayhudWxsLCB0aGlzLl9lbWl0UmVzcG9uc2UoKSk7XG4gICAgICBpZiAobXVsdGlwYXJ0KSByZXR1cm47IC8vIGFsbG93IG11bHRpcGFydCB0byBoYW5kbGUgZW5kIGV2ZW50XG4gICAgICByZXMub25jZSgnZW5kJywgKCkgPT4ge1xuICAgICAgICBkZWJ1ZygnZW5kICVzICVzJywgdGhpcy5tZXRob2QsIHRoaXMudXJsKTtcbiAgICAgICAgdGhpcy5lbWl0KCdlbmQnKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHRlcm1pbmF0aW5nIGV2ZW50c1xuICAgIHJlcy5vbmNlKCdlcnJvcicsIChlcnJvcikgPT4ge1xuICAgICAgcGFyc2VySGFuZGxlc0VuZCA9IGZhbHNlO1xuICAgICAgdGhpcy5jYWxsYmFjayhlcnJvciwgbnVsbCk7XG4gICAgfSk7XG4gICAgaWYgKCFwYXJzZXJIYW5kbGVzRW5kKVxuICAgICAgcmVzLm9uY2UoJ2VuZCcsICgpID0+IHtcbiAgICAgICAgZGVidWcoJ2VuZCAlcyAlcycsIHRoaXMubWV0aG9kLCB0aGlzLnVybCk7XG4gICAgICAgIC8vIFRPRE86IHVubGVzcyBidWZmZXJpbmcgZW1pdCBlYXJsaWVyIHRvIHN0cmVhbVxuICAgICAgICB0aGlzLmVtaXQoJ2VuZCcpO1xuICAgICAgICB0aGlzLmNhbGxiYWNrKG51bGwsIHRoaXMuX2VtaXRSZXNwb25zZSgpKTtcbiAgICAgIH0pO1xuICB9KTtcblxuICB0aGlzLmVtaXQoJ3JlcXVlc3QnLCB0aGlzKTtcblxuICBjb25zdCBnZXRQcm9ncmVzc01vbml0b3IgPSAoKSA9PiB7XG4gICAgY29uc3QgbGVuZ3RoQ29tcHV0YWJsZSA9IHRydWU7XG4gICAgY29uc3QgdG90YWwgPSByZXEuZ2V0SGVhZGVyKCdDb250ZW50LUxlbmd0aCcpO1xuICAgIGxldCBsb2FkZWQgPSAwO1xuXG4gICAgY29uc3QgcHJvZ3Jlc3MgPSBuZXcgU3RyZWFtLlRyYW5zZm9ybSgpO1xuICAgIHByb2dyZXNzLl90cmFuc2Zvcm0gPSAoY2h1bmssIGVuY29kaW5nLCBjYikgPT4ge1xuICAgICAgbG9hZGVkICs9IGNodW5rLmxlbmd0aDtcbiAgICAgIHRoaXMuZW1pdCgncHJvZ3Jlc3MnLCB7XG4gICAgICAgIGRpcmVjdGlvbjogJ3VwbG9hZCcsXG4gICAgICAgIGxlbmd0aENvbXB1dGFibGUsXG4gICAgICAgIGxvYWRlZCxcbiAgICAgICAgdG90YWxcbiAgICAgIH0pO1xuICAgICAgY2IobnVsbCwgY2h1bmspO1xuICAgIH07XG5cbiAgICByZXR1cm4gcHJvZ3Jlc3M7XG4gIH07XG5cbiAgY29uc3QgYnVmZmVyVG9DaHVua3MgPSAoYnVmZmVyKSA9PiB7XG4gICAgY29uc3QgY2h1bmtTaXplID0gMTYgKiAxMDI0OyAvLyBkZWZhdWx0IGhpZ2hXYXRlck1hcmsgdmFsdWVcbiAgICBjb25zdCBjaHVua2luZyA9IG5ldyBTdHJlYW0uUmVhZGFibGUoKTtcbiAgICBjb25zdCB0b3RhbExlbmd0aCA9IGJ1ZmZlci5sZW5ndGg7XG4gICAgY29uc3QgcmVtYWluZGVyID0gdG90YWxMZW5ndGggJSBjaHVua1NpemU7XG4gICAgY29uc3QgY3V0b2ZmID0gdG90YWxMZW5ndGggLSByZW1haW5kZXI7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1dG9mZjsgaSArPSBjaHVua1NpemUpIHtcbiAgICAgIGNvbnN0IGNodW5rID0gYnVmZmVyLnNsaWNlKGksIGkgKyBjaHVua1NpemUpO1xuICAgICAgY2h1bmtpbmcucHVzaChjaHVuayk7XG4gICAgfVxuXG4gICAgaWYgKHJlbWFpbmRlciA+IDApIHtcbiAgICAgIGNvbnN0IHJlbWFpbmRlckJ1ZmZlciA9IGJ1ZmZlci5zbGljZSgtcmVtYWluZGVyKTtcbiAgICAgIGNodW5raW5nLnB1c2gocmVtYWluZGVyQnVmZmVyKTtcbiAgICB9XG5cbiAgICBjaHVua2luZy5wdXNoKG51bGwpOyAvLyBubyBtb3JlIGRhdGFcblxuICAgIHJldHVybiBjaHVua2luZztcbiAgfTtcblxuICAvLyBpZiBhIEZvcm1EYXRhIGluc3RhbmNlIGdvdCBjcmVhdGVkLCB0aGVuIHdlIHNlbmQgdGhhdCBhcyB0aGUgcmVxdWVzdCBib2R5XG4gIGNvbnN0IGZvcm1EYXRhID0gdGhpcy5fZm9ybURhdGE7XG4gIGlmIChmb3JtRGF0YSkge1xuICAgIC8vIHNldCBoZWFkZXJzXG4gICAgY29uc3QgaGVhZGVycyA9IGZvcm1EYXRhLmdldEhlYWRlcnMoKTtcbiAgICBmb3IgKGNvbnN0IGkgaW4gaGVhZGVycykge1xuICAgICAgaWYgKGhhc093bihoZWFkZXJzLCBpKSkge1xuICAgICAgICBkZWJ1Zygnc2V0dGluZyBGb3JtRGF0YSBoZWFkZXI6IFwiJXM6ICVzXCInLCBpLCBoZWFkZXJzW2ldKTtcbiAgICAgICAgcmVxLnNldEhlYWRlcihpLCBoZWFkZXJzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhdHRlbXB0IHRvIGdldCBcIkNvbnRlbnQtTGVuZ3RoXCIgaGVhZGVyXG4gICAgZm9ybURhdGEuZ2V0TGVuZ3RoKChlcnJvciwgbGVuZ3RoKSA9PiB7XG4gICAgICAvLyBUT0RPOiBBZGQgY2h1bmtlZCBlbmNvZGluZyB3aGVuIG5vIGxlbmd0aCAoaWYgZXJyKVxuICAgICAgaWYgKGVycm9yKSBkZWJ1ZygnZm9ybURhdGEuZ2V0TGVuZ3RoIGhhZCBlcnJvcicsIGVycm9yLCBsZW5ndGgpO1xuXG4gICAgICBkZWJ1ZygnZ290IEZvcm1EYXRhIENvbnRlbnQtTGVuZ3RoOiAlcycsIGxlbmd0aCk7XG4gICAgICBpZiAodHlwZW9mIGxlbmd0aCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmVxLnNldEhlYWRlcignQ29udGVudC1MZW5ndGgnLCBsZW5ndGgpO1xuICAgICAgfVxuXG4gICAgICBmb3JtRGF0YS5waXBlKGdldFByb2dyZXNzTW9uaXRvcigpKS5waXBlKHJlcSk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoQnVmZmVyLmlzQnVmZmVyKGRhdGEpKSB7XG4gICAgYnVmZmVyVG9DaHVua3MoZGF0YSkucGlwZShnZXRQcm9ncmVzc01vbml0b3IoKSkucGlwZShyZXEpO1xuICB9IGVsc2Uge1xuICAgIHJlcS5lbmQoZGF0YSk7XG4gIH1cbn07XG5cbi8vIENoZWNrIHdoZXRoZXIgcmVzcG9uc2UgaGFzIGEgbm9uLTAtc2l6ZWQgZ3ppcC1lbmNvZGVkIGJvZHlcblJlcXVlc3QucHJvdG90eXBlLl9zaG91bGRVbnppcCA9IChyZXMpID0+IHtcbiAgaWYgKHJlcy5zdGF0dXNDb2RlID09PSAyMDQgfHwgcmVzLnN0YXR1c0NvZGUgPT09IDMwNCkge1xuICAgIC8vIFRoZXNlIGFyZW4ndCBzdXBwb3NlZCB0byBoYXZlIGFueSBib2R5XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gaGVhZGVyIGNvbnRlbnQgaXMgYSBzdHJpbmcsIGFuZCBkaXN0aW5jdGlvbiBiZXR3ZWVuIDAgYW5kIG5vIGluZm9ybWF0aW9uIGlzIGNydWNpYWxcbiAgaWYgKHJlcy5oZWFkZXJzWydjb250ZW50LWxlbmd0aCddID09PSAnMCcpIHtcbiAgICAvLyBXZSBrbm93IHRoYXQgdGhlIGJvZHkgaXMgZW1wdHkgKHVuZm9ydHVuYXRlbHksIHRoaXMgY2hlY2sgZG9lcyBub3QgY292ZXIgY2h1bmtlZCBlbmNvZGluZylcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBjb25zb2xlLmxvZyhyZXMpO1xuICByZXR1cm4gL15cXHMqKD86ZGVmbGF0ZXxnemlwKVxccyokLy50ZXN0KHJlcy5oZWFkZXJzWydjb250ZW50LWVuY29kaW5nJ10pO1xufTtcblxuLyoqXG4gKiBPdmVycmlkZXMgRE5TIGZvciBzZWxlY3RlZCBob3N0bmFtZXMuIFRha2VzIG9iamVjdCBtYXBwaW5nIGhvc3RuYW1lcyB0byBJUCBhZGRyZXNzZXMuXG4gKlxuICogV2hlbiBtYWtpbmcgYSByZXF1ZXN0IHRvIGEgVVJMIHdpdGggYSBob3N0bmFtZSBleGFjdGx5IG1hdGNoaW5nIGEga2V5IGluIHRoZSBvYmplY3QsXG4gKiB1c2UgdGhlIGdpdmVuIElQIGFkZHJlc3MgdG8gY29ubmVjdCwgaW5zdGVhZCBvZiB1c2luZyBETlMgdG8gcmVzb2x2ZSB0aGUgaG9zdG5hbWUuXG4gKlxuICogQSBzcGVjaWFsIGhvc3QgYCpgIG1hdGNoZXMgZXZlcnkgaG9zdG5hbWUgKGtlZXAgcmVkaXJlY3RzIGluIG1pbmQhKVxuICpcbiAqICAgICAgcmVxdWVzdC5jb25uZWN0KHtcbiAqICAgICAgICAndGVzdC5leGFtcGxlLmNvbSc6ICcxMjcuMC4wLjEnLFxuICogICAgICAgICdpcHY2LmV4YW1wbGUuY29tJzogJzo6MScsXG4gKiAgICAgIH0pXG4gKi9cblJlcXVlc3QucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbiAoY29ubmVjdE92ZXJyaWRlKSB7XG4gIGlmICh0eXBlb2YgY29ubmVjdE92ZXJyaWRlID09PSAnc3RyaW5nJykge1xuICAgIHRoaXMuX2Nvbm5lY3RPdmVycmlkZSA9IHsgJyonOiBjb25uZWN0T3ZlcnJpZGUgfTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgY29ubmVjdE92ZXJyaWRlID09PSAnb2JqZWN0Jykge1xuICAgIHRoaXMuX2Nvbm5lY3RPdmVycmlkZSA9IGNvbm5lY3RPdmVycmlkZTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9jb25uZWN0T3ZlcnJpZGUgPSB1bmRlZmluZWQ7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cblJlcXVlc3QucHJvdG90eXBlLnRydXN0TG9jYWxob3N0ID0gZnVuY3Rpb24gKHRvZ2dsZSkge1xuICB0aGlzLl90cnVzdExvY2FsaG9zdCA9IHRvZ2dsZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IHRvZ2dsZTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBnZW5lcmF0ZSBIVFRQIHZlcmIgbWV0aG9kc1xuaWYgKCFtZXRob2RzLmluY2x1ZGVzKCdkZWwnKSkge1xuICAvLyBjcmVhdGUgYSBjb3B5IHNvIHdlIGRvbid0IGNhdXNlIGNvbmZsaWN0cyB3aXRoXG4gIC8vIG90aGVyIHBhY2thZ2VzIHVzaW5nIHRoZSBtZXRob2RzIHBhY2thZ2UgYW5kXG4gIC8vIG5wbSAzLnhcbiAgbWV0aG9kcyA9IFsuLi5tZXRob2RzXTtcbiAgbWV0aG9kcy5wdXNoKCdkZWwnKTtcbn1cblxuZm9yIChsZXQgbWV0aG9kIG9mIG1ldGhvZHMpIHtcbiAgY29uc3QgbmFtZSA9IG1ldGhvZDtcbiAgbWV0aG9kID0gbWV0aG9kID09PSAnZGVsJyA/ICdkZWxldGUnIDogbWV0aG9kO1xuXG4gIG1ldGhvZCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpO1xuICByZXF1ZXN0W25hbWVdID0gKHVybCwgZGF0YSwgZm4pID0+IHtcbiAgICBjb25zdCByZXF1ZXN0XyA9IHJlcXVlc3QobWV0aG9kLCB1cmwpO1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZm4gPSBkYXRhO1xuICAgICAgZGF0YSA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIGlmIChtZXRob2QgPT09ICdHRVQnIHx8IG1ldGhvZCA9PT0gJ0hFQUQnKSB7XG4gICAgICAgIHJlcXVlc3RfLnF1ZXJ5KGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVxdWVzdF8uc2VuZChkYXRhKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZm4pIHJlcXVlc3RfLmVuZChmbik7XG4gICAgcmV0dXJuIHJlcXVlc3RfO1xuICB9O1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGBtaW1lYCBpcyB0ZXh0IGFuZCBzaG91bGQgYmUgYnVmZmVyZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1pbWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGlzVGV4dChtaW1lKSB7XG4gIGNvbnN0IHBhcnRzID0gbWltZS5zcGxpdCgnLycpO1xuICBsZXQgdHlwZSA9IHBhcnRzWzBdO1xuICBpZiAodHlwZSkgdHlwZSA9IHR5cGUudG9Mb3dlckNhc2UoKS50cmltKCk7XG4gIGxldCBzdWJ0eXBlID0gcGFydHNbMV07XG4gIGlmIChzdWJ0eXBlKSBzdWJ0eXBlID0gc3VidHlwZS50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcblxuICByZXR1cm4gdHlwZSA9PT0gJ3RleHQnIHx8IHN1YnR5cGUgPT09ICd4LXd3dy1mb3JtLXVybGVuY29kZWQnO1xufVxuXG5mdW5jdGlvbiBpc0ltYWdlT3JWaWRlbyhtaW1lKSB7XG4gIGxldCB0eXBlID0gbWltZS5zcGxpdCgnLycpWzBdO1xuICBpZiAodHlwZSkgdHlwZSA9IHR5cGUudG9Mb3dlckNhc2UoKS50cmltKCk7XG5cbiAgcmV0dXJuIHR5cGUgPT09ICdpbWFnZScgfHwgdHlwZSA9PT0gJ3ZpZGVvJztcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBgbWltZWAgaXMganNvbiBvciBoYXMgK2pzb24gc3RydWN0dXJlZCBzeW50YXggc3VmZml4LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtaW1lXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gaXNKU09OKG1pbWUpIHtcbiAgLy8gc2hvdWxkIG1hdGNoIC9qc29uIG9yICtqc29uXG4gIC8vIGJ1dCBub3QgL2pzb24tc2VxXG4gIHJldHVybiAvWy8rXWpzb24oJHxbXi1cXHddKS9pLnRlc3QobWltZSk7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgd2Ugc2hvdWxkIGZvbGxvdyB0aGUgcmVkaXJlY3QgYGNvZGVgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb2RlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gaXNSZWRpcmVjdChjb2RlKSB7XG4gIHJldHVybiBbMzAxLCAzMDIsIDMwMywgMzA1LCAzMDcsIDMwOF0uaW5jbHVkZXMoY29kZSk7XG59XG4iXX0=

/***/ }),

/***/ 3787:
/***/ ((module) => {



module.exports = function (res, fn) {
  var data = []; // Binary data needs binary storage

  res.on('data', function (chunk) {
    data.push(chunk);
  });
  res.on('end', function () {
    fn(null, Buffer.concat(data));
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3BhcnNlcnMvaW1hZ2UuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInJlcyIsImZuIiwiZGF0YSIsIm9uIiwiY2h1bmsiLCJwdXNoIiwiQnVmZmVyIiwiY29uY2F0Il0sIm1hcHBpbmdzIjoiOztBQUFBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBQ0MsR0FBRCxFQUFNQyxFQUFOLEVBQWE7QUFDNUIsTUFBTUMsSUFBSSxHQUFHLEVBQWIsQ0FENEIsQ0FDWDs7QUFFakJGLEVBQUFBLEdBQUcsQ0FBQ0csRUFBSixDQUFPLE1BQVAsRUFBZSxVQUFDQyxLQUFELEVBQVc7QUFDeEJGLElBQUFBLElBQUksQ0FBQ0csSUFBTCxDQUFVRCxLQUFWO0FBQ0QsR0FGRDtBQUdBSixFQUFBQSxHQUFHLENBQUNHLEVBQUosQ0FBTyxLQUFQLEVBQWMsWUFBTTtBQUNsQkYsSUFBQUEsRUFBRSxDQUFDLElBQUQsRUFBT0ssTUFBTSxDQUFDQyxNQUFQLENBQWNMLElBQWQsQ0FBUCxDQUFGO0FBQ0QsR0FGRDtBQUdELENBVEQiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IChyZXMsIGZuKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBbXTsgLy8gQmluYXJ5IGRhdGEgbmVlZHMgYmluYXJ5IHN0b3JhZ2VcblxuICByZXMub24oJ2RhdGEnLCAoY2h1bmspID0+IHtcbiAgICBkYXRhLnB1c2goY2h1bmspO1xuICB9KTtcbiAgcmVzLm9uKCdlbmQnLCAoKSA9PiB7XG4gICAgZm4obnVsbCwgQnVmZmVyLmNvbmNhdChkYXRhKSk7XG4gIH0pO1xufTtcbiJdfQ==

/***/ }),

/***/ 2099:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



exports["application/x-www-form-urlencoded"] = __webpack_require__(7979);
exports["application/json"] = __webpack_require__(2600);
exports.text = __webpack_require__(2975);

var binary = __webpack_require__(3787);

exports["application/octet-stream"] = binary;
exports["application/pdf"] = binary;
exports.image = binary;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3BhcnNlcnMvaW5kZXguanMiXSwibmFtZXMiOlsiZXhwb3J0cyIsInJlcXVpcmUiLCJ0ZXh0IiwiYmluYXJ5IiwiaW1hZ2UiXSwibWFwcGluZ3MiOiI7O0FBQUFBLE9BQU8sQ0FBQyxtQ0FBRCxDQUFQLEdBQStDQyxPQUFPLENBQUMsY0FBRCxDQUF0RDtBQUNBRCxPQUFPLENBQUMsa0JBQUQsQ0FBUCxHQUE4QkMsT0FBTyxDQUFDLFFBQUQsQ0FBckM7QUFDQUQsT0FBTyxDQUFDRSxJQUFSLEdBQWVELE9BQU8sQ0FBQyxRQUFELENBQXRCOztBQUVBLElBQU1FLE1BQU0sR0FBR0YsT0FBTyxDQUFDLFNBQUQsQ0FBdEI7O0FBRUFELE9BQU8sQ0FBQywwQkFBRCxDQUFQLEdBQXNDRyxNQUF0QztBQUNBSCxPQUFPLENBQUMsaUJBQUQsQ0FBUCxHQUE2QkcsTUFBN0I7QUFDQUgsT0FBTyxDQUFDSSxLQUFSLEdBQWdCRCxNQUFoQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHNbJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCddID0gcmVxdWlyZSgnLi91cmxlbmNvZGVkJyk7XG5leHBvcnRzWydhcHBsaWNhdGlvbi9qc29uJ10gPSByZXF1aXJlKCcuL2pzb24nKTtcbmV4cG9ydHMudGV4dCA9IHJlcXVpcmUoJy4vdGV4dCcpO1xuXG5jb25zdCBiaW5hcnkgPSByZXF1aXJlKCcuL2ltYWdlJyk7XG5cbmV4cG9ydHNbJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSddID0gYmluYXJ5O1xuZXhwb3J0c1snYXBwbGljYXRpb24vcGRmJ10gPSBiaW5hcnk7XG5leHBvcnRzLmltYWdlID0gYmluYXJ5O1xuIl19

/***/ }),

/***/ 2600:
/***/ ((module) => {



module.exports = function (res, fn) {
  res.text = '';
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    res.text += chunk;
  });
  res.on('end', function () {
    var body;
    var error;

    try {
      body = res.text && JSON.parse(res.text);
    } catch (error_) {
      error = error_; // issue #675: return the raw response if the response parsing fails

      error.rawResponse = res.text || null; // issue #876: return the http status code if the response parsing fails

      error.statusCode = res.statusCode;
    } finally {
      fn(error, body);
    }
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3BhcnNlcnMvanNvbi5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwicmVzIiwiZm4iLCJ0ZXh0Iiwic2V0RW5jb2RpbmciLCJvbiIsImNodW5rIiwiYm9keSIsImVycm9yIiwiSlNPTiIsInBhcnNlIiwiZXJyb3JfIiwicmF3UmVzcG9uc2UiLCJzdGF0dXNDb2RlIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVUMsR0FBVixFQUFlQyxFQUFmLEVBQW1CO0FBQ2xDRCxFQUFBQSxHQUFHLENBQUNFLElBQUosR0FBVyxFQUFYO0FBQ0FGLEVBQUFBLEdBQUcsQ0FBQ0csV0FBSixDQUFnQixNQUFoQjtBQUNBSCxFQUFBQSxHQUFHLENBQUNJLEVBQUosQ0FBTyxNQUFQLEVBQWUsVUFBQ0MsS0FBRCxFQUFXO0FBQ3hCTCxJQUFBQSxHQUFHLENBQUNFLElBQUosSUFBWUcsS0FBWjtBQUNELEdBRkQ7QUFHQUwsRUFBQUEsR0FBRyxDQUFDSSxFQUFKLENBQU8sS0FBUCxFQUFjLFlBQU07QUFDbEIsUUFBSUUsSUFBSjtBQUNBLFFBQUlDLEtBQUo7O0FBQ0EsUUFBSTtBQUNGRCxNQUFBQSxJQUFJLEdBQUdOLEdBQUcsQ0FBQ0UsSUFBSixJQUFZTSxJQUFJLENBQUNDLEtBQUwsQ0FBV1QsR0FBRyxDQUFDRSxJQUFmLENBQW5CO0FBQ0QsS0FGRCxDQUVFLE9BQU9RLE1BQVAsRUFBZTtBQUNmSCxNQUFBQSxLQUFLLEdBQUdHLE1BQVIsQ0FEZSxDQUVmOztBQUNBSCxNQUFBQSxLQUFLLENBQUNJLFdBQU4sR0FBb0JYLEdBQUcsQ0FBQ0UsSUFBSixJQUFZLElBQWhDLENBSGUsQ0FJZjs7QUFDQUssTUFBQUEsS0FBSyxDQUFDSyxVQUFOLEdBQW1CWixHQUFHLENBQUNZLFVBQXZCO0FBQ0QsS0FSRCxTQVFVO0FBQ1JYLE1BQUFBLEVBQUUsQ0FBQ00sS0FBRCxFQUFRRCxJQUFSLENBQUY7QUFDRDtBQUNGLEdBZEQ7QUFlRCxDQXJCRCIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHJlcywgZm4pIHtcbiAgcmVzLnRleHQgPSAnJztcbiAgcmVzLnNldEVuY29kaW5nKCd1dGY4Jyk7XG4gIHJlcy5vbignZGF0YScsIChjaHVuaykgPT4ge1xuICAgIHJlcy50ZXh0ICs9IGNodW5rO1xuICB9KTtcbiAgcmVzLm9uKCdlbmQnLCAoKSA9PiB7XG4gICAgbGV0IGJvZHk7XG4gICAgbGV0IGVycm9yO1xuICAgIHRyeSB7XG4gICAgICBib2R5ID0gcmVzLnRleHQgJiYgSlNPTi5wYXJzZShyZXMudGV4dCk7XG4gICAgfSBjYXRjaCAoZXJyb3JfKSB7XG4gICAgICBlcnJvciA9IGVycm9yXztcbiAgICAgIC8vIGlzc3VlICM2NzU6IHJldHVybiB0aGUgcmF3IHJlc3BvbnNlIGlmIHRoZSByZXNwb25zZSBwYXJzaW5nIGZhaWxzXG4gICAgICBlcnJvci5yYXdSZXNwb25zZSA9IHJlcy50ZXh0IHx8IG51bGw7XG4gICAgICAvLyBpc3N1ZSAjODc2OiByZXR1cm4gdGhlIGh0dHAgc3RhdHVzIGNvZGUgaWYgdGhlIHJlc3BvbnNlIHBhcnNpbmcgZmFpbHNcbiAgICAgIGVycm9yLnN0YXR1c0NvZGUgPSByZXMuc3RhdHVzQ29kZTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgZm4oZXJyb3IsIGJvZHkpO1xuICAgIH1cbiAgfSk7XG59O1xuIl19

/***/ }),

/***/ 2975:
/***/ ((module) => {



module.exports = function (res, fn) {
  res.text = '';
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    res.text += chunk;
  });
  res.on('end', fn);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3BhcnNlcnMvdGV4dC5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwicmVzIiwiZm4iLCJ0ZXh0Iiwic2V0RW5jb2RpbmciLCJvbiIsImNodW5rIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBQ0MsR0FBRCxFQUFNQyxFQUFOLEVBQWE7QUFDNUJELEVBQUFBLEdBQUcsQ0FBQ0UsSUFBSixHQUFXLEVBQVg7QUFDQUYsRUFBQUEsR0FBRyxDQUFDRyxXQUFKLENBQWdCLE1BQWhCO0FBQ0FILEVBQUFBLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLE1BQVAsRUFBZSxVQUFDQyxLQUFELEVBQVc7QUFDeEJMLElBQUFBLEdBQUcsQ0FBQ0UsSUFBSixJQUFZRyxLQUFaO0FBQ0QsR0FGRDtBQUdBTCxFQUFBQSxHQUFHLENBQUNJLEVBQUosQ0FBTyxLQUFQLEVBQWNILEVBQWQ7QUFDRCxDQVBEIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSAocmVzLCBmbikgPT4ge1xuICByZXMudGV4dCA9ICcnO1xuICByZXMuc2V0RW5jb2RpbmcoJ3V0ZjgnKTtcbiAgcmVzLm9uKCdkYXRhJywgKGNodW5rKSA9PiB7XG4gICAgcmVzLnRleHQgKz0gY2h1bms7XG4gIH0pO1xuICByZXMub24oJ2VuZCcsIGZuKTtcbn07XG4iXX0=

/***/ }),

/***/ 7979:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/**
 * Module dependencies.
 */
var qs = __webpack_require__(7104);

module.exports = function (res, fn) {
  res.text = '';
  res.setEncoding('ascii');
  res.on('data', function (chunk) {
    res.text += chunk;
  });
  res.on('end', function () {
    try {
      fn(null, qs.parse(res.text));
    } catch (err) {
      fn(err);
    }
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3BhcnNlcnMvdXJsZW5jb2RlZC5qcyJdLCJuYW1lcyI6WyJxcyIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVzIiwiZm4iLCJ0ZXh0Iiwic2V0RW5jb2RpbmciLCJvbiIsImNodW5rIiwicGFyc2UiLCJlcnIiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsRUFBRSxHQUFHQyxPQUFPLENBQUMsSUFBRCxDQUFsQjs7QUFFQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQUNDLEdBQUQsRUFBTUMsRUFBTixFQUFhO0FBQzVCRCxFQUFBQSxHQUFHLENBQUNFLElBQUosR0FBVyxFQUFYO0FBQ0FGLEVBQUFBLEdBQUcsQ0FBQ0csV0FBSixDQUFnQixPQUFoQjtBQUNBSCxFQUFBQSxHQUFHLENBQUNJLEVBQUosQ0FBTyxNQUFQLEVBQWUsVUFBQ0MsS0FBRCxFQUFXO0FBQ3hCTCxJQUFBQSxHQUFHLENBQUNFLElBQUosSUFBWUcsS0FBWjtBQUNELEdBRkQ7QUFHQUwsRUFBQUEsR0FBRyxDQUFDSSxFQUFKLENBQU8sS0FBUCxFQUFjLFlBQU07QUFDbEIsUUFBSTtBQUNGSCxNQUFBQSxFQUFFLENBQUMsSUFBRCxFQUFPTCxFQUFFLENBQUNVLEtBQUgsQ0FBU04sR0FBRyxDQUFDRSxJQUFiLENBQVAsQ0FBRjtBQUNELEtBRkQsQ0FFRSxPQUFPSyxHQUFQLEVBQVk7QUFDWk4sTUFBQUEsRUFBRSxDQUFDTSxHQUFELENBQUY7QUFDRDtBQUNGLEdBTkQ7QUFPRCxDQWJEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbmNvbnN0IHFzID0gcmVxdWlyZSgncXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAocmVzLCBmbikgPT4ge1xuICByZXMudGV4dCA9ICcnO1xuICByZXMuc2V0RW5jb2RpbmcoJ2FzY2lpJyk7XG4gIHJlcy5vbignZGF0YScsIChjaHVuaykgPT4ge1xuICAgIHJlcy50ZXh0ICs9IGNodW5rO1xuICB9KTtcbiAgcmVzLm9uKCdlbmQnLCAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGZuKG51bGwsIHFzLnBhcnNlKHJlcy50ZXh0KSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBmbihlcnIpO1xuICAgIH1cbiAgfSk7XG59O1xuIl19

/***/ }),

/***/ 4435:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/**
 * Module dependencies.
 */
var util = __webpack_require__(3837);

var Stream = __webpack_require__(2781);

var ResponseBase = __webpack_require__(1097);

var _require = __webpack_require__(4506),
    mixin = _require.mixin;
/**
 * Expose `Response`.
 */


module.exports = Response;
/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * @param {Request} req
 * @param {Object} options
 * @constructor
 * @extends {Stream}
 * @implements {ReadableStream}
 * @api private
 */

function Response(request) {
  Stream.call(this);
  this.res = request.res;
  var res = this.res;
  this.request = request;
  this.req = request.req;
  this.text = res.text;
  this.files = res.files || {};
  this.buffered = request._resBuffered;
  this.headers = res.headers;
  this.header = this.headers;

  this._setStatusProperties(res.statusCode);

  this._setHeaderProperties(this.header);

  this.setEncoding = res.setEncoding.bind(res);
  res.on('data', this.emit.bind(this, 'data'));
  res.on('end', this.emit.bind(this, 'end'));
  res.on('close', this.emit.bind(this, 'close'));
  res.on('error', this.emit.bind(this, 'error'));
} // Lazy access res.body.
// https://github.com/nodejs/node/pull/39520#issuecomment-889697136


Object.defineProperty(Response.prototype, 'body', {
  get: function get() {
    return this._body !== undefined ? this._body : this.res.body !== undefined ? this.res.body : {};
  },
  set: function set(value) {
    this._body = value;
  }
});
/**
 * Inherit from `Stream`.
 */

util.inherits(Response, Stream);
mixin(Response.prototype, ResponseBase.prototype);
/**
 * Implements methods of a `ReadableStream`
 */

Response.prototype.destroy = function (error) {
  this.res.destroy(error);
};
/**
 * Pause.
 */


Response.prototype.pause = function () {
  this.res.pause();
};
/**
 * Resume.
 */


Response.prototype.resume = function () {
  this.res.resume();
};
/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */


Response.prototype.toError = function () {
  var req = this.req;
  var method = req.method;
  var path = req.path;
  var message = "cannot ".concat(method, " ").concat(path, " (").concat(this.status, ")");
  var error = new Error(message);
  error.status = this.status;
  error.text = this.text;
  error.method = method;
  error.path = path;
  return error;
};

Response.prototype.setStatusProperties = function (status) {
  console.warn('In superagent 2.x setStatusProperties is a private method');
  return this._setStatusProperties(status);
};
/**
 * To json.
 *
 * @return {Object}
 * @api public
 */


Response.prototype.toJSON = function () {
  return {
    req: this.request.toJSON(),
    header: this.header,
    status: this.status,
    text: this.text
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Jlc3BvbnNlLmpzIl0sIm5hbWVzIjpbInV0aWwiLCJyZXF1aXJlIiwiU3RyZWFtIiwiUmVzcG9uc2VCYXNlIiwibWl4aW4iLCJtb2R1bGUiLCJleHBvcnRzIiwiUmVzcG9uc2UiLCJyZXF1ZXN0IiwiY2FsbCIsInJlcyIsInJlcSIsInRleHQiLCJmaWxlcyIsImJ1ZmZlcmVkIiwiX3Jlc0J1ZmZlcmVkIiwiaGVhZGVycyIsImhlYWRlciIsIl9zZXRTdGF0dXNQcm9wZXJ0aWVzIiwic3RhdHVzQ29kZSIsIl9zZXRIZWFkZXJQcm9wZXJ0aWVzIiwic2V0RW5jb2RpbmciLCJiaW5kIiwib24iLCJlbWl0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJwcm90b3R5cGUiLCJnZXQiLCJfYm9keSIsInVuZGVmaW5lZCIsImJvZHkiLCJzZXQiLCJ2YWx1ZSIsImluaGVyaXRzIiwiZGVzdHJveSIsImVycm9yIiwicGF1c2UiLCJyZXN1bWUiLCJ0b0Vycm9yIiwibWV0aG9kIiwicGF0aCIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJFcnJvciIsInNldFN0YXR1c1Byb3BlcnRpZXMiLCJjb25zb2xlIiwid2FybiIsInRvSlNPTiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXBCOztBQUNBLElBQU1DLE1BQU0sR0FBR0QsT0FBTyxDQUFDLFFBQUQsQ0FBdEI7O0FBQ0EsSUFBTUUsWUFBWSxHQUFHRixPQUFPLENBQUMsa0JBQUQsQ0FBNUI7O0FBQ0EsZUFBa0JBLE9BQU8sQ0FBQyxVQUFELENBQXpCO0FBQUEsSUFBUUcsS0FBUixZQUFRQSxLQUFSO0FBRUE7QUFDQTtBQUNBOzs7QUFFQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCQyxRQUFqQjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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ZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxuY29uc3QgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcbmNvbnN0IFN0cmVhbSA9IHJlcXVpcmUoJ3N0cmVhbScpO1xuY29uc3QgUmVzcG9uc2VCYXNlID0gcmVxdWlyZSgnLi4vcmVzcG9uc2UtYmFzZScpO1xuY29uc3QgeyBtaXhpbiB9ID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBFeHBvc2UgYFJlc3BvbnNlYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlc3BvbnNlO1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSBuZXcgYFJlc3BvbnNlYCB3aXRoIHRoZSBnaXZlbiBgeGhyYC5cbiAqXG4gKiAgLSBzZXQgZmxhZ3MgKC5vaywgLmVycm9yLCBldGMpXG4gKiAgLSBwYXJzZSBoZWFkZXJcbiAqXG4gKiBAcGFyYW0ge1JlcXVlc3R9IHJlcVxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBjb25zdHJ1Y3RvclxuICogQGV4dGVuZHMge1N0cmVhbX1cbiAqIEBpbXBsZW1lbnRzIHtSZWFkYWJsZVN0cmVhbX1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIFJlc3BvbnNlKHJlcXVlc3QpIHtcbiAgU3RyZWFtLmNhbGwodGhpcyk7XG4gIHRoaXMucmVzID0gcmVxdWVzdC5yZXM7XG4gIGNvbnN0IHsgcmVzIH0gPSB0aGlzO1xuICB0aGlzLnJlcXVlc3QgPSByZXF1ZXN0O1xuICB0aGlzLnJlcSA9IHJlcXVlc3QucmVxO1xuICB0aGlzLnRleHQgPSByZXMudGV4dDtcbiAgdGhpcy5maWxlcyA9IHJlcy5maWxlcyB8fCB7fTtcbiAgdGhpcy5idWZmZXJlZCA9IHJlcXVlc3QuX3Jlc0J1ZmZlcmVkO1xuICB0aGlzLmhlYWRlcnMgPSByZXMuaGVhZGVycztcbiAgdGhpcy5oZWFkZXIgPSB0aGlzLmhlYWRlcnM7XG4gIHRoaXMuX3NldFN0YXR1c1Byb3BlcnRpZXMocmVzLnN0YXR1c0NvZGUpO1xuICB0aGlzLl9zZXRIZWFkZXJQcm9wZXJ0aWVzKHRoaXMuaGVhZGVyKTtcbiAgdGhpcy5zZXRFbmNvZGluZyA9IHJlcy5zZXRFbmNvZGluZy5iaW5kKHJlcyk7XG4gIHJlcy5vbignZGF0YScsIHRoaXMuZW1pdC5iaW5kKHRoaXMsICdkYXRhJykpO1xuICByZXMub24oJ2VuZCcsIHRoaXMuZW1pdC5iaW5kKHRoaXMsICdlbmQnKSk7XG4gIHJlcy5vbignY2xvc2UnLCB0aGlzLmVtaXQuYmluZCh0aGlzLCAnY2xvc2UnKSk7XG4gIHJlcy5vbignZXJyb3InLCB0aGlzLmVtaXQuYmluZCh0aGlzLCAnZXJyb3InKSk7XG59XG5cbi8vIExhenkgYWNjZXNzIHJlcy5ib2R5LlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9ub2RlL3B1bGwvMzk1MjAjaXNzdWVjb21tZW50LTg4OTY5NzEzNlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlc3BvbnNlLnByb3RvdHlwZSwgJ2JvZHknLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYm9keSAhPT0gdW5kZWZpbmVkXG4gICAgICA/IHRoaXMuX2JvZHlcbiAgICAgIDogdGhpcy5yZXMuYm9keSAhPT0gdW5kZWZpbmVkXG4gICAgICA/IHRoaXMucmVzLmJvZHlcbiAgICAgIDoge307XG4gIH0sXG4gIHNldCh2YWx1ZSkge1xuICAgIHRoaXMuX2JvZHkgPSB2YWx1ZTtcbiAgfVxufSk7XG5cbi8qKlxuICogSW5oZXJpdCBmcm9tIGBTdHJlYW1gLlxuICovXG5cbnV0aWwuaW5oZXJpdHMoUmVzcG9uc2UsIFN0cmVhbSk7XG5cbm1peGluKFJlc3BvbnNlLnByb3RvdHlwZSwgUmVzcG9uc2VCYXNlLnByb3RvdHlwZSk7XG5cbi8qKlxuICogSW1wbGVtZW50cyBtZXRob2RzIG9mIGEgYFJlYWRhYmxlU3RyZWFtYFxuICovXG5cblJlc3BvbnNlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gIHRoaXMucmVzLmRlc3Ryb3koZXJyb3IpO1xufTtcblxuLyoqXG4gKiBQYXVzZS5cbiAqL1xuXG5SZXNwb25zZS5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMucmVzLnBhdXNlKCk7XG59O1xuXG4vKipcbiAqIFJlc3VtZS5cbiAqL1xuXG5SZXNwb25zZS5wcm90b3R5cGUucmVzdW1lID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnJlcy5yZXN1bWUoKTtcbn07XG5cbi8qKlxuICogUmV0dXJuIGFuIGBFcnJvcmAgcmVwcmVzZW50YXRpdmUgb2YgdGhpcyByZXNwb25zZS5cbiAqXG4gKiBAcmV0dXJuIHtFcnJvcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVzcG9uc2UucHJvdG90eXBlLnRvRXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHsgcmVxIH0gPSB0aGlzO1xuICBjb25zdCB7IG1ldGhvZCB9ID0gcmVxO1xuICBjb25zdCB7IHBhdGggfSA9IHJlcTtcblxuICBjb25zdCBtZXNzYWdlID0gYGNhbm5vdCAke21ldGhvZH0gJHtwYXRofSAoJHt0aGlzLnN0YXR1c30pYDtcbiAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIGVycm9yLnN0YXR1cyA9IHRoaXMuc3RhdHVzO1xuICBlcnJvci50ZXh0ID0gdGhpcy50ZXh0O1xuICBlcnJvci5tZXRob2QgPSBtZXRob2Q7XG4gIGVycm9yLnBhdGggPSBwYXRoO1xuXG4gIHJldHVybiBlcnJvcjtcbn07XG5cblJlc3BvbnNlLnByb3RvdHlwZS5zZXRTdGF0dXNQcm9wZXJ0aWVzID0gZnVuY3Rpb24gKHN0YXR1cykge1xuICBjb25zb2xlLndhcm4oJ0luIHN1cGVyYWdlbnQgMi54IHNldFN0YXR1c1Byb3BlcnRpZXMgaXMgYSBwcml2YXRlIG1ldGhvZCcpO1xuICByZXR1cm4gdGhpcy5fc2V0U3RhdHVzUHJvcGVydGllcyhzdGF0dXMpO1xufTtcblxuLyoqXG4gKiBUbyBqc29uLlxuICpcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVzcG9uc2UucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICByZXE6IHRoaXMucmVxdWVzdC50b0pTT04oKSxcbiAgICBoZWFkZXI6IHRoaXMuaGVhZGVyLFxuICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgdGV4dDogdGhpcy50ZXh0XG4gIH07XG59O1xuIl19

/***/ }),

/***/ 8570:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



/**
 * Module dependencies.
 */
var _require = __webpack_require__(6330),
    StringDecoder = _require.StringDecoder;

var Stream = __webpack_require__(2781);

var zlib = __webpack_require__(9796);
/**
 * Buffers response data events and re-emits when they're unzipped.
 *
 * @param {Request} req
 * @param {Response} res
 * @api private
 */


exports.unzip = function (request, res) {
  var unzip = zlib.createUnzip();
  var stream = new Stream();
  var decoder; // make node responseOnEnd() happy

  stream.req = request;
  unzip.on('error', function (error) {
    if (error && error.code === 'Z_BUF_ERROR') {
      // unexpected end of file is ignored by browsers and curl
      stream.emit('end');
      return;
    }

    stream.emit('error', error);
  }); // pipe to unzip

  res.pipe(unzip); // override `setEncoding` to capture encoding

  res.setEncoding = function (type) {
    decoder = new StringDecoder(type);
  }; // decode upon decompressing with captured encoding


  unzip.on('data', function (buf) {
    if (decoder) {
      var string_ = decoder.write(buf);
      if (string_.length > 0) stream.emit('data', string_);
    } else {
      stream.emit('data', buf);
    }
  });
  unzip.on('end', function () {
    stream.emit('end');
  }); // override `on` to capture data listeners

  var _on = res.on;

  res.on = function (type, fn) {
    if (type === 'data' || type === 'end') {
      stream.on(type, fn.bind(res));
    } else if (type === 'error') {
      stream.on(type, fn.bind(res));

      _on.call(res, type, fn);
    } else {
      _on.call(res, type, fn);
    }

    return this;
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3VuemlwLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJTdHJpbmdEZWNvZGVyIiwiU3RyZWFtIiwiemxpYiIsImV4cG9ydHMiLCJ1bnppcCIsInJlcXVlc3QiLCJyZXMiLCJjcmVhdGVVbnppcCIsInN0cmVhbSIsImRlY29kZXIiLCJyZXEiLCJvbiIsImVycm9yIiwiY29kZSIsImVtaXQiLCJwaXBlIiwic2V0RW5jb2RpbmciLCJ0eXBlIiwiYnVmIiwic3RyaW5nXyIsIndyaXRlIiwibGVuZ3RoIiwiX29uIiwiZm4iLCJiaW5kIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxlQUEwQkEsT0FBTyxDQUFDLGdCQUFELENBQWpDO0FBQUEsSUFBUUMsYUFBUixZQUFRQSxhQUFSOztBQUNBLElBQU1DLE1BQU0sR0FBR0YsT0FBTyxDQUFDLFFBQUQsQ0FBdEI7O0FBQ0EsSUFBTUcsSUFBSSxHQUFHSCxPQUFPLENBQUMsTUFBRCxDQUFwQjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQUksT0FBTyxDQUFDQyxLQUFSLEdBQWdCLFVBQUNDLE9BQUQsRUFBVUMsR0FBVixFQUFrQjtBQUNoQyxNQUFNRixLQUFLLEdBQUdGLElBQUksQ0FBQ0ssV0FBTCxFQUFkO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLElBQUlQLE1BQUosRUFBZjtBQUNBLE1BQUlRLE9BQUosQ0FIZ0MsQ0FLaEM7O0FBQ0FELEVBQUFBLE1BQU0sQ0FBQ0UsR0FBUCxHQUFhTCxPQUFiO0FBRUFELEVBQUFBLEtBQUssQ0FBQ08sRUFBTixDQUFTLE9BQVQsRUFBa0IsVUFBQ0MsS0FBRCxFQUFXO0FBQzNCLFFBQUlBLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxJQUFOLEtBQWUsYUFBNUIsRUFBMkM7QUFDekM7QUFDQUwsTUFBQUEsTUFBTSxDQUFDTSxJQUFQLENBQVksS0FBWjtBQUNBO0FBQ0Q7O0FBRUROLElBQUFBLE1BQU0sQ0FBQ00sSUFBUCxDQUFZLE9BQVosRUFBcUJGLEtBQXJCO0FBQ0QsR0FSRCxFQVJnQyxDQWtCaEM7O0FBQ0FOLEVBQUFBLEdBQUcsQ0FBQ1MsSUFBSixDQUFTWCxLQUFULEVBbkJnQyxDQXFCaEM7O0FBQ0FFLEVBQUFBLEdBQUcsQ0FBQ1UsV0FBSixHQUFrQixVQUFDQyxJQUFELEVBQVU7QUFDMUJSLElBQUFBLE9BQU8sR0FBRyxJQUFJVCxhQUFKLENBQWtCaUIsSUFBbEIsQ0FBVjtBQUNELEdBRkQsQ0F0QmdDLENBMEJoQzs7O0FBQ0FiLEVBQUFBLEtBQUssQ0FBQ08sRUFBTixDQUFTLE1BQVQsRUFBaUIsVUFBQ08sR0FBRCxFQUFTO0FBQ3hCLFFBQUlULE9BQUosRUFBYTtBQUNYLFVBQU1VLE9BQU8sR0FBR1YsT0FBTyxDQUFDVyxLQUFSLENBQWNGLEdBQWQsQ0FBaEI7QUFDQSxVQUFJQyxPQUFPLENBQUNFLE1BQVIsR0FBaUIsQ0FBckIsRUFBd0JiLE1BQU0sQ0FBQ00sSUFBUCxDQUFZLE1BQVosRUFBb0JLLE9BQXBCO0FBQ3pCLEtBSEQsTUFHTztBQUNMWCxNQUFBQSxNQUFNLENBQUNNLElBQVAsQ0FBWSxNQUFaLEVBQW9CSSxHQUFwQjtBQUNEO0FBQ0YsR0FQRDtBQVNBZCxFQUFBQSxLQUFLLENBQUNPLEVBQU4sQ0FBUyxLQUFULEVBQWdCLFlBQU07QUFDcEJILElBQUFBLE1BQU0sQ0FBQ00sSUFBUCxDQUFZLEtBQVo7QUFDRCxHQUZELEVBcENnQyxDQXdDaEM7O0FBQ0EsTUFBTVEsR0FBRyxHQUFHaEIsR0FBRyxDQUFDSyxFQUFoQjs7QUFDQUwsRUFBQUEsR0FBRyxDQUFDSyxFQUFKLEdBQVMsVUFBVU0sSUFBVixFQUFnQk0sRUFBaEIsRUFBb0I7QUFDM0IsUUFBSU4sSUFBSSxLQUFLLE1BQVQsSUFBbUJBLElBQUksS0FBSyxLQUFoQyxFQUF1QztBQUNyQ1QsTUFBQUEsTUFBTSxDQUFDRyxFQUFQLENBQVVNLElBQVYsRUFBZ0JNLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRbEIsR0FBUixDQUFoQjtBQUNELEtBRkQsTUFFTyxJQUFJVyxJQUFJLEtBQUssT0FBYixFQUFzQjtBQUMzQlQsTUFBQUEsTUFBTSxDQUFDRyxFQUFQLENBQVVNLElBQVYsRUFBZ0JNLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRbEIsR0FBUixDQUFoQjs7QUFDQWdCLE1BQUFBLEdBQUcsQ0FBQ0csSUFBSixDQUFTbkIsR0FBVCxFQUFjVyxJQUFkLEVBQW9CTSxFQUFwQjtBQUNELEtBSE0sTUFHQTtBQUNMRCxNQUFBQSxHQUFHLENBQUNHLElBQUosQ0FBU25CLEdBQVQsRUFBY1csSUFBZCxFQUFvQk0sRUFBcEI7QUFDRDs7QUFFRCxXQUFPLElBQVA7QUFDRCxHQVhEO0FBWUQsQ0F0REQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxuY29uc3QgeyBTdHJpbmdEZWNvZGVyIH0gPSByZXF1aXJlKCdzdHJpbmdfZGVjb2RlcicpO1xuY29uc3QgU3RyZWFtID0gcmVxdWlyZSgnc3RyZWFtJyk7XG5jb25zdCB6bGliID0gcmVxdWlyZSgnemxpYicpO1xuXG4vKipcbiAqIEJ1ZmZlcnMgcmVzcG9uc2UgZGF0YSBldmVudHMgYW5kIHJlLWVtaXRzIHdoZW4gdGhleSdyZSB1bnppcHBlZC5cbiAqXG4gKiBAcGFyYW0ge1JlcXVlc3R9IHJlcVxuICogQHBhcmFtIHtSZXNwb25zZX0gcmVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLnVuemlwID0gKHJlcXVlc3QsIHJlcykgPT4ge1xuICBjb25zdCB1bnppcCA9IHpsaWIuY3JlYXRlVW56aXAoKTtcbiAgY29uc3Qgc3RyZWFtID0gbmV3IFN0cmVhbSgpO1xuICBsZXQgZGVjb2RlcjtcblxuICAvLyBtYWtlIG5vZGUgcmVzcG9uc2VPbkVuZCgpIGhhcHB5XG4gIHN0cmVhbS5yZXEgPSByZXF1ZXN0O1xuXG4gIHVuemlwLm9uKCdlcnJvcicsIChlcnJvcikgPT4ge1xuICAgIGlmIChlcnJvciAmJiBlcnJvci5jb2RlID09PSAnWl9CVUZfRVJST1InKSB7XG4gICAgICAvLyB1bmV4cGVjdGVkIGVuZCBvZiBmaWxlIGlzIGlnbm9yZWQgYnkgYnJvd3NlcnMgYW5kIGN1cmxcbiAgICAgIHN0cmVhbS5lbWl0KCdlbmQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzdHJlYW0uZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gIH0pO1xuXG4gIC8vIHBpcGUgdG8gdW56aXBcbiAgcmVzLnBpcGUodW56aXApO1xuXG4gIC8vIG92ZXJyaWRlIGBzZXRFbmNvZGluZ2AgdG8gY2FwdHVyZSBlbmNvZGluZ1xuICByZXMuc2V0RW5jb2RpbmcgPSAodHlwZSkgPT4ge1xuICAgIGRlY29kZXIgPSBuZXcgU3RyaW5nRGVjb2Rlcih0eXBlKTtcbiAgfTtcblxuICAvLyBkZWNvZGUgdXBvbiBkZWNvbXByZXNzaW5nIHdpdGggY2FwdHVyZWQgZW5jb2RpbmdcbiAgdW56aXAub24oJ2RhdGEnLCAoYnVmKSA9PiB7XG4gICAgaWYgKGRlY29kZXIpIHtcbiAgICAgIGNvbnN0IHN0cmluZ18gPSBkZWNvZGVyLndyaXRlKGJ1Zik7XG4gICAgICBpZiAoc3RyaW5nXy5sZW5ndGggPiAwKSBzdHJlYW0uZW1pdCgnZGF0YScsIHN0cmluZ18pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHJlYW0uZW1pdCgnZGF0YScsIGJ1Zik7XG4gICAgfVxuICB9KTtcblxuICB1bnppcC5vbignZW5kJywgKCkgPT4ge1xuICAgIHN0cmVhbS5lbWl0KCdlbmQnKTtcbiAgfSk7XG5cbiAgLy8gb3ZlcnJpZGUgYG9uYCB0byBjYXB0dXJlIGRhdGEgbGlzdGVuZXJzXG4gIGNvbnN0IF9vbiA9IHJlcy5vbjtcbiAgcmVzLm9uID0gZnVuY3Rpb24gKHR5cGUsIGZuKSB7XG4gICAgaWYgKHR5cGUgPT09ICdkYXRhJyB8fCB0eXBlID09PSAnZW5kJykge1xuICAgICAgc3RyZWFtLm9uKHR5cGUsIGZuLmJpbmQocmVzKSk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnZXJyb3InKSB7XG4gICAgICBzdHJlYW0ub24odHlwZSwgZm4uYmluZChyZXMpKTtcbiAgICAgIF9vbi5jYWxsKHJlcywgdHlwZSwgZm4pO1xuICAgIH0gZWxzZSB7XG4gICAgICBfb24uY2FsbChyZXMsIHR5cGUsIGZuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbn07XG4iXX0=

/***/ }),

/***/ 8899:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var semver = __webpack_require__(912);
/**
 * Module of mixed-in functions shared between node and client code
 */


var _require = __webpack_require__(4506),
    isObject = _require.isObject,
    hasOwn = _require.hasOwn;
/**
 * Expose `RequestBase`.
 */


module.exports = RequestBase;
/**
 * Initialize a new `RequestBase`.
 *
 * @api public
 */

function RequestBase() {}
/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.clearTimeout = function () {
  clearTimeout(this._timer);
  clearTimeout(this._responseTimeoutTimer);
  clearTimeout(this._uploadTimeoutTimer);
  delete this._timer;
  delete this._responseTimeoutTimer;
  delete this._uploadTimeoutTimer;
  return this;
};
/**
 * Override default response body parser
 *
 * This function will be called to convert incoming data into request.body
 *
 * @param {Function}
 * @api public
 */


RequestBase.prototype.parse = function (fn) {
  this._parser = fn;
  return this;
};
/**
 * Set format of binary response body.
 * In browser valid formats are 'blob' and 'arraybuffer',
 * which return Blob and ArrayBuffer, respectively.
 *
 * In Node all values result in Buffer.
 *
 * Examples:
 *
 *      req.get('/')
 *        .responseType('blob')
 *        .end(callback);
 *
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.responseType = function (value) {
  this._responseType = value;
  return this;
};
/**
 * Override default request body serializer
 *
 * This function will be called to convert data set via .send or .attach into payload to send
 *
 * @param {Function}
 * @api public
 */


RequestBase.prototype.serialize = function (fn) {
  this._serializer = fn;
  return this;
};
/**
 * Set timeouts.
 *
 * - response timeout is time between sending request and receiving the first byte of the response. Includes DNS and connection time.
 * - deadline is the time from start of the request to receiving response body in full. If the deadline is too short large files may not load at all on slow connections.
 * - upload is the time  since last bit of data was sent or received. This timeout works only if deadline timeout is off
 *
 * Value of 0 or false means no timeout.
 *
 * @param {Number|Object} ms or {response, deadline}
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.timeout = function (options) {
  if (!options || _typeof(options) !== 'object') {
    this._timeout = options;
    this._responseTimeout = 0;
    this._uploadTimeout = 0;
    return this;
  }

  for (var option in options) {
    if (hasOwn(options, option)) {
      switch (option) {
        case 'deadline':
          this._timeout = options.deadline;
          break;

        case 'response':
          this._responseTimeout = options.response;
          break;

        case 'upload':
          this._uploadTimeout = options.upload;
          break;

        default:
          console.warn('Unknown timeout option', option);
      }
    }
  }

  return this;
};
/**
 * Set number of retry attempts on error.
 *
 * Failed requests will be retried 'count' times if timeout or err.code >= 500.
 *
 * @param {Number} count
 * @param {Function} [fn]
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.retry = function (count, fn) {
  // Default to 1 if no count passed or true
  if (arguments.length === 0 || count === true) count = 1;
  if (count <= 0) count = 0;
  this._maxRetries = count;
  this._retries = 0;
  this._retryCallback = fn;
  return this;
}; //
// NOTE: we do not include ESOCKETTIMEDOUT because that is from `request` package
//       <https://github.com/sindresorhus/got/pull/537>
//
// NOTE: we do not include EADDRINFO because it was removed from libuv in 2014
//       <https://github.com/libuv/libuv/commit/02e1ebd40b807be5af46343ea873331b2ee4e9c1>
//       <https://github.com/request/request/search?q=ESOCKETTIMEDOUT&unscoped_q=ESOCKETTIMEDOUT>
//
//
// TODO: expose these as configurable defaults
//


var ERROR_CODES = new Set(['ETIMEDOUT', 'ECONNRESET', 'EADDRINUSE', 'ECONNREFUSED', 'EPIPE', 'ENOTFOUND', 'ENETUNREACH', 'EAI_AGAIN']);
var STATUS_CODES = new Set([408, 413, 429, 500, 502, 503, 504, 521, 522, 524]); // TODO: we would need to make this easily configurable before adding it in (e.g. some might want to add POST)
// const METHODS = new Set(['GET', 'PUT', 'HEAD', 'DELETE', 'OPTIONS', 'TRACE']);

/**
 * Determine if a request should be retried.
 * (Inspired by https://github.com/sindresorhus/got#retry)
 *
 * @param {Error} err an error
 * @param {Response} [res] response
 * @returns {Boolean} if segment should be retried
 */

RequestBase.prototype._shouldRetry = function (error, res) {
  if (!this._maxRetries || this._retries++ >= this._maxRetries) {
    return false;
  }

  if (this._retryCallback) {
    try {
      var override = this._retryCallback(error, res);

      if (override === true) return true;
      if (override === false) return false; // undefined falls back to defaults
    } catch (error_) {
      console.error(error_);
    }
  } // TODO: we would need to make this easily configurable before adding it in (e.g. some might want to add POST)

  /*
  if (
    this.req &&
    this.req.method &&
    !METHODS.has(this.req.method.toUpperCase())
  )
    return false;
  */


  if (res && res.status && STATUS_CODES.has(res.status)) return true;

  if (error) {
    if (error.code && ERROR_CODES.has(error.code)) return true; // Superagent timeout

    if (error.timeout && error.code === 'ECONNABORTED') return true;
    if (error.crossDomain) return true;
  }

  return false;
};
/**
 * Retry request
 *
 * @return {Request} for chaining
 * @api private
 */


RequestBase.prototype._retry = function () {
  this.clearTimeout(); // node

  if (this.req) {
    this.req = null;
    this.req = this.request();
  }

  this._aborted = false;
  this.timedout = false;
  this.timedoutError = null;
  return this._end();
};
/**
 * Promise support
 *
 * @param {Function} resolve
 * @param {Function} [reject]
 * @return {Request}
 */


RequestBase.prototype.then = function (resolve, reject) {
  var _this = this;

  if (!this._fullfilledPromise) {
    var self = this;

    if (this._endCalled) {
      console.warn('Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises');
    }

    this._fullfilledPromise = new Promise(function (resolve, reject) {
      self.on('abort', function () {
        if (_this._maxRetries && _this._maxRetries > _this._retries) {
          return;
        }

        if (_this.timedout && _this.timedoutError) {
          reject(_this.timedoutError);
          return;
        }

        var error = new Error('Aborted');
        error.code = 'ABORTED';
        error.status = _this.status;
        error.method = _this.method;
        error.url = _this.url;
        reject(error);
      });
      self.end(function (error, res) {
        if (error) reject(error);else resolve(res);
      });
    });
  }

  return this._fullfilledPromise.then(resolve, reject);
};

RequestBase.prototype.catch = function (cb) {
  return this.then(undefined, cb);
};
/**
 * Allow for extension
 */


RequestBase.prototype.use = function (fn) {
  fn(this);
  return this;
};

RequestBase.prototype.ok = function (cb) {
  if (typeof cb !== 'function') throw new Error('Callback required');
  this._okCallback = cb;
  return this;
};

RequestBase.prototype._isResponseOK = function (res) {
  if (!res) {
    return false;
  }

  if (this._okCallback) {
    return this._okCallback(res);
  }

  return res.status >= 200 && res.status < 300;
};
/**
 * Get request header `field`.
 * Case-insensitive.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */


RequestBase.prototype.get = function (field) {
  return this._header[field.toLowerCase()];
};
/**
 * Get case-insensitive header `field` value.
 * This is a deprecated internal API. Use `.get(field)` instead.
 *
 * (getHeader is no longer used internally by the superagent code base)
 *
 * @param {String} field
 * @return {String}
 * @api private
 * @deprecated
 */


RequestBase.prototype.getHeader = RequestBase.prototype.get;
/**
 * Set header `field` to `val`, or multiple fields with one object.
 * Case-insensitive.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.set = function (field, value) {
  if (isObject(field)) {
    for (var key in field) {
      if (hasOwn(field, key)) this.set(key, field[key]);
    }

    return this;
  }

  this._header[field.toLowerCase()] = value;
  this.header[field] = value;
  return this;
};
/**
 * Remove header `field`.
 * Case-insensitive.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field field name
 */


RequestBase.prototype.unset = function (field) {
  delete this._header[field.toLowerCase()];
  delete this.header[field];
  return this;
};
/**
 * Write the field `name` and `val`, or multiple fields with one object
 * for "multipart/form-data" request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 *
 * request.post('/upload')
 *   .field({ foo: 'bar', baz: 'qux' })
 *   .end(callback);
 * ```
 *
 * @param {String|Object} name name of field
 * @param {String|Blob|File|Buffer|fs.ReadStream} val value of field
 * @param {String} options extra options, e.g. 'blob'
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.field = function (name, value, options) {
  // name should be either a string or an object.
  if (name === null || undefined === name) {
    throw new Error('.field(name, val) name can not be empty');
  }

  if (this._data) {
    throw new Error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObject(name)) {
    for (var key in name) {
      if (hasOwn(name, key)) this.field(key, name[key]);
    }

    return this;
  }

  if (Array.isArray(value)) {
    for (var i in value) {
      if (hasOwn(value, i)) this.field(name, value[i]);
    }

    return this;
  } // val should be defined now


  if (value === null || undefined === value) {
    throw new Error('.field(name, val) val can not be empty');
  }

  if (typeof value === 'boolean') {
    value = String(value);
  }

  this._getFormData().append(name, value, options);

  return this;
};
/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request} request
 * @api public
 */


RequestBase.prototype.abort = function () {
  if (this._aborted) {
    return this;
  }

  this._aborted = true;
  if (this.xhr) this.xhr.abort(); // browser

  if (this.req) {
    // Node v13 has major differences in `abort()`
    // https://github.com/nodejs/node/blob/v12.x/lib/internal/streams/end-of-stream.js
    // https://github.com/nodejs/node/blob/v13.x/lib/internal/streams/end-of-stream.js
    // https://github.com/nodejs/node/blob/v14.x/lib/internal/streams/end-of-stream.js
    // (if you run a diff across these you will see the differences)
    //
    // References:
    // <https://github.com/nodejs/node/issues/31630>
    // <https://github.com/visionmedia/superagent/pull/1084/commits/dc18679a7c5ccfc6046d882015e5126888973bc8>
    //
    // Thanks to @shadowgate15 and @niftylettuce
    if (semver.gte(process.version, 'v13.0.0') && semver.lt(process.version, 'v14.0.0')) {
      // Note that the reason this doesn't work is because in v13 as compared to v14
      // there is no `callback = nop` set in end-of-stream.js above
      throw new Error('Superagent does not work in v13 properly with abort() due to Node.js core changes');
    } else if (semver.gte(process.version, 'v14.0.0')) {
      // We have to manually set `destroyed` to `true` in order for this to work
      // (see core internals of end-of-stream.js above in v14 branch as compared to v12)
      this.req.destroyed = true;
    }

    this.req.abort(); // node
  }

  this.clearTimeout();
  this.emit('abort');
  return this;
};

RequestBase.prototype._auth = function (user, pass, options, base64Encoder) {
  switch (options.type) {
    case 'basic':
      this.set('Authorization', "Basic ".concat(base64Encoder("".concat(user, ":").concat(pass))));
      break;

    case 'auto':
      this.username = user;
      this.password = pass;
      break;

    case 'bearer':
      // usage would be .auth(accessToken, { type: 'bearer' })
      this.set('Authorization', "Bearer ".concat(user));
      break;

    default:
      break;
  }

  return this;
};
/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 *
 * @api public
 */


RequestBase.prototype.withCredentials = function (on) {
  // This is browser-only functionality. Node side is no-op.
  if (on === undefined) on = true;
  this._withCredentials = on;
  return this;
};
/**
 * Set the max redirects to `n`. Does nothing in browser XHR implementation.
 *
 * @param {Number} n
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.redirects = function (n) {
  this._maxRedirects = n;
  return this;
};
/**
 * Maximum size of buffered response body, in bytes. Counts uncompressed size.
 * Default 200MB.
 *
 * @param {Number} n number of bytes
 * @return {Request} for chaining
 */


RequestBase.prototype.maxResponseSize = function (n) {
  if (typeof n !== 'number') {
    throw new TypeError('Invalid argument');
  }

  this._maxResponseSize = n;
  return this;
};
/**
 * Convert to a plain javascript object (not JSON string) of scalar properties.
 * Note as this method is designed to return a useful non-this value,
 * it cannot be chained.
 *
 * @return {Object} describing method, url, and data of this request
 * @api public
 */


RequestBase.prototype.toJSON = function () {
  return {
    method: this.method,
    url: this.url,
    data: this._data,
    headers: this._header
  };
};
/**
 * Send `data` as the request body, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"}')
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
 *      request.post('/user')
 *        .send('name=tobi')
 *        .send('species=ferret')
 *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */
// eslint-disable-next-line complexity


RequestBase.prototype.send = function (data) {
  var isObject_ = isObject(data);
  var type = this._header['content-type'];

  if (this._formData) {
    throw new Error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObject_ && !this._data) {
    if (Array.isArray(data)) {
      this._data = [];
    } else if (!this._isHost(data)) {
      this._data = {};
    }
  } else if (data && this._data && this._isHost(this._data)) {
    throw new Error("Can't merge these send calls");
  } // merge


  if (isObject_ && isObject(this._data)) {
    for (var key in data) {
      if (hasOwn(data, key)) this._data[key] = data[key];
    }
  } else if (typeof data === 'string') {
    // default to x-www-form-urlencoded
    if (!type) this.type('form');
    type = this._header['content-type'];
    if (type) type = type.toLowerCase().trim();

    if (type === 'application/x-www-form-urlencoded') {
      this._data = this._data ? "".concat(this._data, "&").concat(data) : data;
    } else {
      this._data = (this._data || '') + data;
    }
  } else {
    this._data = data;
  }

  if (!isObject_ || this._isHost(data)) {
    return this;
  } // default to json


  if (!type) this.type('json');
  return this;
};
/**
 * Sort `querystring` by the sort function
 *
 *
 * Examples:
 *
 *       // default order
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery()
 *         .end(callback)
 *
 *       // customized sort function
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery(function(a, b){
 *           return a.length - b.length;
 *         })
 *         .end(callback)
 *
 *
 * @param {Function} sort
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.sortQuery = function (sort) {
  // _sort default to true but otherwise can be a function or boolean
  this._sort = typeof sort === 'undefined' ? true : sort;
  return this;
};
/**
 * Compose querystring to append to req.url
 *
 * @api private
 */


RequestBase.prototype._finalizeQueryString = function () {
  var query = this._query.join('&');

  if (query) {
    this.url += (this.url.includes('?') ? '&' : '?') + query;
  }

  this._query.length = 0; // Makes the call idempotent

  if (this._sort) {
    var index = this.url.indexOf('?');

    if (index >= 0) {
      var queryArray = this.url.slice(index + 1).split('&');

      if (typeof this._sort === 'function') {
        queryArray.sort(this._sort);
      } else {
        queryArray.sort();
      }

      this.url = this.url.slice(0, index) + '?' + queryArray.join('&');
    }
  }
}; // For backwards compat only


RequestBase.prototype._appendQueryString = function () {
  console.warn('Unsupported');
};
/**
 * Invoke callback with timeout error.
 *
 * @api private
 */


RequestBase.prototype._timeoutError = function (reason, timeout, errno) {
  if (this._aborted) {
    return;
  }

  var error = new Error("".concat(reason + timeout, "ms exceeded"));
  error.timeout = timeout;
  error.code = 'ECONNABORTED';
  error.errno = errno;
  this.timedout = true;
  this.timedoutError = error;
  this.abort();
  this.callback(error);
};

RequestBase.prototype._setTimeouts = function () {
  var self = this; // deadline

  if (this._timeout && !this._timer) {
    this._timer = setTimeout(function () {
      self._timeoutError('Timeout of ', self._timeout, 'ETIME');
    }, this._timeout);
  } // response timeout


  if (this._responseTimeout && !this._responseTimeoutTimer) {
    this._responseTimeoutTimer = setTimeout(function () {
      self._timeoutError('Response timeout of ', self._responseTimeout, 'ETIMEDOUT');
    }, this._responseTimeout);
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXF1ZXN0LWJhc2UuanMiXSwibmFtZXMiOlsic2VtdmVyIiwicmVxdWlyZSIsImlzT2JqZWN0IiwiaGFzT3duIiwibW9kdWxlIiwiZXhwb3J0cyIsIlJlcXVlc3RCYXNlIiwicHJvdG90eXBlIiwiY2xlYXJUaW1lb3V0IiwiX3RpbWVyIiwiX3Jlc3BvbnNlVGltZW91dFRpbWVyIiwiX3VwbG9hZFRpbWVvdXRUaW1lciIsInBhcnNlIiwiZm4iLCJfcGFyc2VyIiwicmVzcG9uc2VUeXBlIiwidmFsdWUiLCJfcmVzcG9uc2VUeXBlIiwic2VyaWFsaXplIiwiX3NlcmlhbGl6ZXIiLCJ0aW1lb3V0Iiwib3B0aW9ucyIsIl90aW1lb3V0IiwiX3Jlc3BvbnNlVGltZW91dCIsIl91cGxvYWRUaW1lb3V0Iiwib3B0aW9uIiwiZGVhZGxpbmUiLCJyZXNwb25zZSIsInVwbG9hZCIsImNvbnNvbGUiLCJ3YXJuIiwicmV0cnkiLCJjb3VudCIsImFyZ3VtZW50cyIsImxlbmd0aCIsIl9tYXhSZXRyaWVzIiwiX3JldHJpZXMiLCJfcmV0cnlDYWxsYmFjayIsIkVSUk9SX0NPREVTIiwiU2V0IiwiU1RBVFVTX0NPREVTIiwiX3Nob3VsZFJldHJ5IiwiZXJyb3IiLCJyZXMiLCJvdmVycmlkZSIsImVycm9yXyIsInN0YXR1cyIsImhhcyIsImNvZGUiLCJjcm9zc0RvbWFpbiIsIl9yZXRyeSIsInJlcSIsInJlcXVlc3QiLCJfYWJvcnRlZCIsInRpbWVkb3V0IiwidGltZWRvdXRFcnJvciIsIl9lbmQiLCJ0aGVuIiwicmVzb2x2ZSIsInJlamVjdCIsIl9mdWxsZmlsbGVkUHJvbWlzZSIsInNlbGYiLCJfZW5kQ2FsbGVkIiwiUHJvbWlzZSIsIm9uIiwiRXJyb3IiLCJtZXRob2QiLCJ1cmwiLCJlbmQiLCJjYXRjaCIsImNiIiwidW5kZWZpbmVkIiwidXNlIiwib2siLCJfb2tDYWxsYmFjayIsIl9pc1Jlc3BvbnNlT0siLCJnZXQiLCJmaWVsZCIsIl9oZWFkZXIiLCJ0b0xvd2VyQ2FzZSIsImdldEhlYWRlciIsInNldCIsImtleSIsImhlYWRlciIsInVuc2V0IiwibmFtZSIsIl9kYXRhIiwiQXJyYXkiLCJpc0FycmF5IiwiaSIsIlN0cmluZyIsIl9nZXRGb3JtRGF0YSIsImFwcGVuZCIsImFib3J0IiwieGhyIiwiZ3RlIiwicHJvY2VzcyIsInZlcnNpb24iLCJsdCIsImRlc3Ryb3llZCIsImVtaXQiLCJfYXV0aCIsInVzZXIiLCJwYXNzIiwiYmFzZTY0RW5jb2RlciIsInR5cGUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwid2l0aENyZWRlbnRpYWxzIiwiX3dpdGhDcmVkZW50aWFscyIsInJlZGlyZWN0cyIsIm4iLCJfbWF4UmVkaXJlY3RzIiwibWF4UmVzcG9uc2VTaXplIiwiVHlwZUVycm9yIiwiX21heFJlc3BvbnNlU2l6ZSIsInRvSlNPTiIsImRhdGEiLCJoZWFkZXJzIiwic2VuZCIsImlzT2JqZWN0XyIsIl9mb3JtRGF0YSIsIl9pc0hvc3QiLCJ0cmltIiwic29ydFF1ZXJ5Iiwic29ydCIsIl9zb3J0IiwiX2ZpbmFsaXplUXVlcnlTdHJpbmciLCJxdWVyeSIsIl9xdWVyeSIsImpvaW4iLCJpbmNsdWRlcyIsImluZGV4IiwiaW5kZXhPZiIsInF1ZXJ5QXJyYXkiLCJzbGljZSIsInNwbGl0IiwiX2FwcGVuZFF1ZXJ5U3RyaW5nIiwiX3RpbWVvdXRFcnJvciIsInJlYXNvbiIsImVycm5vIiwiY2FsbGJhY2siLCJfc2V0VGltZW91dHMiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHQyxPQUFPLENBQUMsUUFBRCxDQUF0QjtBQUVBO0FBQ0E7QUFDQTs7O0FBQ0EsZUFBNkJBLE9BQU8sQ0FBQyxTQUFELENBQXBDO0FBQUEsSUFBUUMsUUFBUixZQUFRQSxRQUFSO0FBQUEsSUFBa0JDLE1BQWxCLFlBQWtCQSxNQUFsQjtBQUVBO0FBQ0E7QUFDQTs7O0FBRUFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkMsV0FBakI7QUFFQTtBQUNBO0FB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SixXQUFhMEUsTUFBTSxHQUFHdkgsT0FBdEIsaUJBQWQ7QUFDQXNCLEVBQUFBLEtBQUssQ0FBQ3RCLE9BQU4sR0FBZ0JBLE9BQWhCO0FBQ0FzQixFQUFBQSxLQUFLLENBQUNNLElBQU4sR0FBYSxjQUFiO0FBQ0FOLEVBQUFBLEtBQUssQ0FBQ2tHLEtBQU4sR0FBY0EsS0FBZDtBQUNBLE9BQUt0RixRQUFMLEdBQWdCLElBQWhCO0FBQ0EsT0FBS0MsYUFBTCxHQUFxQmIsS0FBckI7QUFDQSxPQUFLbUQsS0FBTDtBQUNBLE9BQUtnRCxRQUFMLENBQWNuRyxLQUFkO0FBQ0QsQ0FiRDs7QUFlQXBDLFdBQVcsQ0FBQ0MsU0FBWixDQUFzQnVJLFlBQXRCLEdBQXFDLFlBQVk7QUFDL0MsTUFBTWpGLElBQUksR0FBRyxJQUFiLENBRCtDLENBRy9DOztBQUNBLE1BQUksS0FBS3ZDLFFBQUwsSUFBaUIsQ0FBQyxLQUFLYixNQUEzQixFQUFtQztBQUNqQyxTQUFLQSxNQUFMLEdBQWNzSSxVQUFVLENBQUMsWUFBTTtBQUM3QmxGLE1BQUFBLElBQUksQ0FBQzZFLGFBQUwsQ0FBbUIsYUFBbkIsRUFBa0M3RSxJQUFJLENBQUN2QyxRQUF2QyxFQUFpRCxPQUFqRDtBQUNELEtBRnVCLEVBRXJCLEtBQUtBLFFBRmdCLENBQXhCO0FBR0QsR0FSOEMsQ0FVL0M7OztBQUNBLE1BQUksS0FBS0MsZ0JBQUwsSUFBeUIsQ0FBQyxLQUFLYixxQkFBbkMsRUFBMEQ7QUFDeEQsU0FBS0EscUJBQUwsR0FBNkJxSSxVQUFVLENBQUMsWUFBTTtBQUM1Q2xGLE1BQUFBLElBQUksQ0FBQzZFLGFBQUwsQ0FDRSxzQkFERixFQUVFN0UsSUFBSSxDQUFDdEMsZ0JBRlAsRUFHRSxXQUhGO0FBS0QsS0FOc0MsRUFNcEMsS0FBS0EsZ0JBTitCLENBQXZDO0FBT0Q7QUFDRixDQXBCRCIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNlbXZlciA9IHJlcXVpcmUoJ3NlbXZlcicpO1xuXG4vKipcbiAqIE1vZHVsZSBvZiBtaXhlZC1pbiBmdW5jdGlvbnMgc2hhcmVkIGJldHdlZW4gbm9kZSBhbmQgY2xpZW50IGNvZGVcbiAqL1xuY29uc3QgeyBpc09iamVjdCwgaGFzT3duIH0gPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbi8qKlxuICogRXhwb3NlIGBSZXF1ZXN0QmFzZWAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBSZXF1ZXN0QmFzZTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbmV3IGBSZXF1ZXN0QmFzZWAuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBSZXF1ZXN0QmFzZSgpIHt9XG5cbi8qKlxuICogQ2xlYXIgcHJldmlvdXMgdGltZW91dC5cbiAqXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLmNsZWFyVGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVyKTtcbiAgY2xlYXJUaW1lb3V0KHRoaXMuX3Jlc3BvbnNlVGltZW91dFRpbWVyKTtcbiAgY2xlYXJUaW1lb3V0KHRoaXMuX3VwbG9hZFRpbWVvdXRUaW1lcik7XG4gIGRlbGV0ZSB0aGlzLl90aW1lcjtcbiAgZGVsZXRlIHRoaXMuX3Jlc3BvbnNlVGltZW91dFRpbWVyO1xuICBkZWxldGUgdGhpcy5fdXBsb2FkVGltZW91dFRpbWVyO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogT3ZlcnJpZGUgZGVmYXVsdCByZXNwb25zZSBib2R5IHBhcnNlclxuICpcbiAqIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgdG8gY29udmVydCBpbmNvbWluZyBkYXRhIGludG8gcmVxdWVzdC5ib2R5XG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gKGZuKSB7XG4gIHRoaXMuX3BhcnNlciA9IGZuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IGZvcm1hdCBvZiBiaW5hcnkgcmVzcG9uc2UgYm9keS5cbiAqIEluIGJyb3dzZXIgdmFsaWQgZm9ybWF0cyBhcmUgJ2Jsb2InIGFuZCAnYXJyYXlidWZmZXInLFxuICogd2hpY2ggcmV0dXJuIEJsb2IgYW5kIEFycmF5QnVmZmVyLCByZXNwZWN0aXZlbHkuXG4gKlxuICogSW4gTm9kZSBhbGwgdmFsdWVzIHJlc3VsdCBpbiBCdWZmZXIuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgICByZXEuZ2V0KCcvJylcbiAqICAgICAgICAucmVzcG9uc2VUeXBlKCdibG9iJylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLnJlc3BvbnNlVHlwZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB0aGlzLl9yZXNwb25zZVR5cGUgPSB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIE92ZXJyaWRlIGRlZmF1bHQgcmVxdWVzdCBib2R5IHNlcmlhbGl6ZXJcbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIHRvIGNvbnZlcnQgZGF0YSBzZXQgdmlhIC5zZW5kIG9yIC5hdHRhY2ggaW50byBwYXlsb2FkIHRvIHNlbmRcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuc2VyaWFsaXplID0gZnVuY3Rpb24gKGZuKSB7XG4gIHRoaXMuX3NlcmlhbGl6ZXIgPSBmbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCB0aW1lb3V0cy5cbiAqXG4gKiAtIHJlc3BvbnNlIHRpbWVvdXQgaXMgdGltZSBiZXR3ZWVuIHNlbmRpbmcgcmVxdWVzdCBhbmQgcmVjZWl2aW5nIHRoZSBmaXJzdCBieXRlIG9mIHRoZSByZXNwb25zZS4gSW5jbHVkZXMgRE5TIGFuZCBjb25uZWN0aW9uIHRpbWUuXG4gKiAtIGRlYWRsaW5lIGlzIHRoZSB0aW1lIGZyb20gc3RhcnQgb2YgdGhlIHJlcXVlc3QgdG8gcmVjZWl2aW5nIHJlc3BvbnNlIGJvZHkgaW4gZnVsbC4gSWYgdGhlIGRlYWRsaW5lIGlzIHRvbyBzaG9ydCBsYXJnZSBmaWxlcyBtYXkgbm90IGxvYWQgYXQgYWxsIG9uIHNsb3cgY29ubmVjdGlvbnMuXG4gKiAtIHVwbG9hZCBpcyB0aGUgdGltZSAgc2luY2UgbGFzdCBiaXQgb2YgZGF0YSB3YXMgc2VudCBvciByZWNlaXZlZC4gVGhpcyB0aW1lb3V0IHdvcmtzIG9ubHkgaWYgZGVhZGxpbmUgdGltZW91dCBpcyBvZmZcbiAqXG4gKiBWYWx1ZSBvZiAwIG9yIGZhbHNlIG1lYW5zIG5vIHRpbWVvdXQuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ8T2JqZWN0fSBtcyBvciB7cmVzcG9uc2UsIGRlYWRsaW5lfVxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS50aW1lb3V0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zIHx8IHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge1xuICAgIHRoaXMuX3RpbWVvdXQgPSBvcHRpb25zO1xuICAgIHRoaXMuX3Jlc3BvbnNlVGltZW91dCA9IDA7XG4gICAgdGhpcy5fdXBsb2FkVGltZW91dCA9IDA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBmb3IgKGNvbnN0IG9wdGlvbiBpbiBvcHRpb25zKSB7XG4gICAgaWYgKGhhc093bihvcHRpb25zLCBvcHRpb24pKSB7XG4gICAgICBzd2l0Y2ggKG9wdGlvbikge1xuICAgICAgICBjYXNlICdkZWFkbGluZSc6XG4gICAgICAgICAgdGhpcy5fdGltZW91dCA9IG9wdGlvbnMuZGVhZGxpbmU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3Jlc3BvbnNlJzpcbiAgICAgICAgICB0aGlzLl9yZXNwb25zZVRpbWVvdXQgPSBvcHRpb25zLnJlc3BvbnNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd1cGxvYWQnOlxuICAgICAgICAgIHRoaXMuX3VwbG9hZFRpbWVvdXQgPSBvcHRpb25zLnVwbG9hZDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1Vua25vd24gdGltZW91dCBvcHRpb24nLCBvcHRpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgbnVtYmVyIG9mIHJldHJ5IGF0dGVtcHRzIG9uIGVycm9yLlxuICpcbiAqIEZhaWxlZCByZXF1ZXN0cyB3aWxsIGJlIHJldHJpZWQgJ2NvdW50JyB0aW1lcyBpZiB0aW1lb3V0IG9yIGVyci5jb2RlID49IDUwMC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gY291bnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtmbl1cbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUucmV0cnkgPSBmdW5jdGlvbiAoY291bnQsIGZuKSB7XG4gIC8vIERlZmF1bHQgdG8gMSBpZiBubyBjb3VudCBwYXNzZWQgb3IgdHJ1ZVxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCB8fCBjb3VudCA9PT0gdHJ1ZSkgY291bnQgPSAxO1xuICBpZiAoY291bnQgPD0gMCkgY291bnQgPSAwO1xuICB0aGlzLl9tYXhSZXRyaWVzID0gY291bnQ7XG4gIHRoaXMuX3JldHJpZXMgPSAwO1xuICB0aGlzLl9yZXRyeUNhbGxiYWNrID0gZm47XG4gIHJldHVybiB0aGlzO1xufTtcblxuLy9cbi8vIE5PVEU6IHdlIGRvIG5vdCBpbmNsdWRlIEVTT0NLRVRUSU1FRE9VVCBiZWNhdXNlIHRoYXQgaXMgZnJvbSBgcmVxdWVzdGAgcGFja2FnZVxuLy8gICAgICAgPGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvZ290L3B1bGwvNTM3PlxuLy9cbi8vIE5PVEU6IHdlIGRvIG5vdCBpbmNsdWRlIEVBRERSSU5GTyBiZWNhdXNlIGl0IHdhcyByZW1vdmVkIGZyb20gbGlidXYgaW4gMjAxNFxuLy8gICAgICAgPGh0dHBzOi8vZ2l0aHViLmNvbS9saWJ1di9saWJ1di9jb21taXQvMDJlMWViZDQwYjgwN2JlNWFmNDYzNDNlYTg3MzMzMWIyZWU0ZTljMT5cbi8vICAgICAgIDxodHRwczovL2dpdGh1Yi5jb20vcmVxdWVzdC9yZXF1ZXN0L3NlYXJjaD9xPUVTT0NLRVRUSU1FRE9VVCZ1bnNjb3BlZF9xPUVTT0NLRVRUSU1FRE9VVD5cbi8vXG4vL1xuLy8gVE9ETzogZXhwb3NlIHRoZXNlIGFzIGNvbmZpZ3VyYWJsZSBkZWZhdWx0c1xuLy9cbmNvbnN0IEVSUk9SX0NPREVTID0gbmV3IFNldChbXG4gICdFVElNRURPVVQnLFxuICAnRUNPTk5SRVNFVCcsXG4gICdFQUREUklOVVNFJyxcbiAgJ0VDT05OUkVGVVNFRCcsXG4gICdFUElQRScsXG4gICdFTk9URk9VTkQnLFxuICAnRU5FVFVOUkVBQ0gnLFxuICAnRUFJX0FHQUlOJ1xuXSk7XG5cbmNvbnN0IFNUQVRVU19DT0RFUyA9IG5ldyBTZXQoW1xuICA0MDgsIDQxMywgNDI5LCA1MDAsIDUwMiwgNTAzLCA1MDQsIDUyMSwgNTIyLCA1MjRcbl0pO1xuXG4vLyBUT0RPOiB3ZSB3b3VsZCBuZWVkIHRvIG1ha2UgdGhpcyBlYXNpbHkgY29uZmlndXJhYmxlIGJlZm9yZSBhZGRpbmcgaXQgaW4gKGUuZy4gc29tZSBtaWdodCB3YW50IHRvIGFkZCBQT1NUKVxuLy8gY29uc3QgTUVUSE9EUyA9IG5ldyBTZXQoWydHRVQnLCAnUFVUJywgJ0hFQUQnLCAnREVMRVRFJywgJ09QVElPTlMnLCAnVFJBQ0UnXSk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgcmVxdWVzdCBzaG91bGQgYmUgcmV0cmllZC5cbiAqIChJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL2dvdCNyZXRyeSlcbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnIgYW4gZXJyb3JcbiAqIEBwYXJhbSB7UmVzcG9uc2V9IFtyZXNdIHJlc3BvbnNlXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gaWYgc2VnbWVudCBzaG91bGQgYmUgcmV0cmllZFxuICovXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuX3Nob3VsZFJldHJ5ID0gZnVuY3Rpb24gKGVycm9yLCByZXMpIHtcbiAgaWYgKCF0aGlzLl9tYXhSZXRyaWVzIHx8IHRoaXMuX3JldHJpZXMrKyA+PSB0aGlzLl9tYXhSZXRyaWVzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHRoaXMuX3JldHJ5Q2FsbGJhY2spIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgb3ZlcnJpZGUgPSB0aGlzLl9yZXRyeUNhbGxiYWNrKGVycm9yLCByZXMpO1xuICAgICAgaWYgKG92ZXJyaWRlID09PSB0cnVlKSByZXR1cm4gdHJ1ZTtcbiAgICAgIGlmIChvdmVycmlkZSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgICAgIC8vIHVuZGVmaW5lZCBmYWxscyBiYWNrIHRvIGRlZmF1bHRzXG4gICAgfSBjYXRjaCAoZXJyb3JfKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yXyk7XG4gICAgfVxuICB9XG5cbiAgLy8gVE9ETzogd2Ugd291bGQgbmVlZCB0byBtYWtlIHRoaXMgZWFzaWx5IGNvbmZpZ3VyYWJsZSBiZWZvcmUgYWRkaW5nIGl0IGluIChlLmcuIHNvbWUgbWlnaHQgd2FudCB0byBhZGQgUE9TVClcbiAgLypcbiAgaWYgKFxuICAgIHRoaXMucmVxICYmXG4gICAgdGhpcy5yZXEubWV0aG9kICYmXG4gICAgIU1FVEhPRFMuaGFzKHRoaXMucmVxLm1ldGhvZC50b1VwcGVyQ2FzZSgpKVxuICApXG4gICAgcmV0dXJuIGZhbHNlO1xuICAqL1xuICBpZiAocmVzICYmIHJlcy5zdGF0dXMgJiYgU1RBVFVTX0NPREVTLmhhcyhyZXMuc3RhdHVzKSkgcmV0dXJuIHRydWU7XG4gIGlmIChlcnJvcikge1xuICAgIGlmIChlcnJvci5jb2RlICYmIEVSUk9SX0NPREVTLmhhcyhlcnJvci5jb2RlKSkgcmV0dXJuIHRydWU7XG4gICAgLy8gU3VwZXJhZ2VudCB0aW1lb3V0XG4gICAgaWYgKGVycm9yLnRpbWVvdXQgJiYgZXJyb3IuY29kZSA9PT0gJ0VDT05OQUJPUlRFRCcpIHJldHVybiB0cnVlO1xuICAgIGlmIChlcnJvci5jcm9zc0RvbWFpbikgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIFJldHJ5IHJlcXVlc3RcbiAqXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5fcmV0cnkgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY2xlYXJUaW1lb3V0KCk7XG5cbiAgLy8gbm9kZVxuICBpZiAodGhpcy5yZXEpIHtcbiAgICB0aGlzLnJlcSA9IG51bGw7XG4gICAgdGhpcy5yZXEgPSB0aGlzLnJlcXVlc3QoKTtcbiAgfVxuXG4gIHRoaXMuX2Fib3J0ZWQgPSBmYWxzZTtcbiAgdGhpcy50aW1lZG91dCA9IGZhbHNlO1xuICB0aGlzLnRpbWVkb3V0RXJyb3IgPSBudWxsO1xuXG4gIHJldHVybiB0aGlzLl9lbmQoKTtcbn07XG5cbi8qKlxuICogUHJvbWlzZSBzdXBwb3J0XG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3JlamVjdF1cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKi9cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gIGlmICghdGhpcy5fZnVsbGZpbGxlZFByb21pc2UpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBpZiAodGhpcy5fZW5kQ2FsbGVkKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdXYXJuaW5nOiBzdXBlcmFnZW50IHJlcXVlc3Qgd2FzIHNlbnQgdHdpY2UsIGJlY2F1c2UgYm90aCAuZW5kKCkgYW5kIC50aGVuKCkgd2VyZSBjYWxsZWQuIE5ldmVyIGNhbGwgLmVuZCgpIGlmIHlvdSB1c2UgcHJvbWlzZXMnXG4gICAgICApO1xuICAgIH1cblxuICAgIHRoaXMuX2Z1bGxmaWxsZWRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc2VsZi5vbignYWJvcnQnLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9tYXhSZXRyaWVzICYmIHRoaXMuX21heFJldHJpZXMgPiB0aGlzLl9yZXRyaWVzKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudGltZWRvdXQgJiYgdGhpcy50aW1lZG91dEVycm9yKSB7XG4gICAgICAgICAgcmVqZWN0KHRoaXMudGltZWRvdXRFcnJvcik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoJ0Fib3J0ZWQnKTtcbiAgICAgICAgZXJyb3IuY29kZSA9ICdBQk9SVEVEJztcbiAgICAgICAgZXJyb3Iuc3RhdHVzID0gdGhpcy5zdGF0dXM7XG4gICAgICAgIGVycm9yLm1ldGhvZCA9IHRoaXMubWV0aG9kO1xuICAgICAgICBlcnJvci51cmwgPSB0aGlzLnVybDtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH0pO1xuICAgICAgc2VsZi5lbmQoKGVycm9yLCByZXMpID0+IHtcbiAgICAgICAgaWYgKGVycm9yKSByZWplY3QoZXJyb3IpO1xuICAgICAgICBlbHNlIHJlc29sdmUocmVzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuX2Z1bGxmaWxsZWRQcm9taXNlLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbn07XG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5jYXRjaCA9IGZ1bmN0aW9uIChjYikge1xuICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgY2IpO1xufTtcblxuLyoqXG4gKiBBbGxvdyBmb3IgZXh0ZW5zaW9uXG4gKi9cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIChmbikge1xuICBmbih0aGlzKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUub2sgPSBmdW5jdGlvbiAoY2IpIHtcbiAgaWYgKHR5cGVvZiBjYiAhPT0gJ2Z1bmN0aW9uJykgdGhyb3cgbmV3IEVycm9yKCdDYWxsYmFjayByZXF1aXJlZCcpO1xuICB0aGlzLl9va0NhbGxiYWNrID0gY2I7XG4gIHJldHVybiB0aGlzO1xufTtcblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLl9pc1Jlc3BvbnNlT0sgPSBmdW5jdGlvbiAocmVzKSB7XG4gIGlmICghcmVzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHRoaXMuX29rQ2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5fb2tDYWxsYmFjayhyZXMpO1xuICB9XG5cbiAgcmV0dXJuIHJlcy5zdGF0dXMgPj0gMjAwICYmIHJlcy5zdGF0dXMgPCAzMDA7XG59O1xuXG4vKipcbiAqIEdldCByZXF1ZXN0IGhlYWRlciBgZmllbGRgLlxuICogQ2FzZS1pbnNlbnNpdGl2ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChmaWVsZCkge1xuICByZXR1cm4gdGhpcy5faGVhZGVyW2ZpZWxkLnRvTG93ZXJDYXNlKCldO1xufTtcblxuLyoqXG4gKiBHZXQgY2FzZS1pbnNlbnNpdGl2ZSBoZWFkZXIgYGZpZWxkYCB2YWx1ZS5cbiAqIFRoaXMgaXMgYSBkZXByZWNhdGVkIGludGVybmFsIEFQSS4gVXNlIGAuZ2V0KGZpZWxkKWAgaW5zdGVhZC5cbiAqXG4gKiAoZ2V0SGVhZGVyIGlzIG5vIGxvbmdlciB1c2VkIGludGVybmFsbHkgYnkgdGhlIHN1cGVyYWdlbnQgY29kZSBiYXNlKVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKiBAZGVwcmVjYXRlZFxuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5nZXRIZWFkZXIgPSBSZXF1ZXN0QmFzZS5wcm90b3R5cGUuZ2V0O1xuXG4vKipcbiAqIFNldCBoZWFkZXIgYGZpZWxkYCB0byBgdmFsYCwgb3IgbXVsdGlwbGUgZmllbGRzIHdpdGggb25lIG9iamVjdC5cbiAqIENhc2UtaW5zZW5zaXRpdmUuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgICByZXEuZ2V0KCcvJylcbiAqICAgICAgICAuc2V0KCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpXG4gKiAgICAgICAgLnNldCgnWC1BUEktS2V5JywgJ2Zvb2JhcicpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogICAgICByZXEuZ2V0KCcvJylcbiAqICAgICAgICAuc2V0KHsgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsICdYLUFQSS1LZXknOiAnZm9vYmFyJyB9KVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gZmllbGRcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWxcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKGZpZWxkLCB2YWx1ZSkge1xuICBpZiAoaXNPYmplY3QoZmllbGQpKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gZmllbGQpIHtcbiAgICAgIGlmIChoYXNPd24oZmllbGQsIGtleSkpIHRoaXMuc2V0KGtleSwgZmllbGRba2V5XSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB0aGlzLl9oZWFkZXJbZmllbGQudG9Mb3dlckNhc2UoKV0gPSB2YWx1ZTtcbiAgdGhpcy5oZWFkZXJbZmllbGRdID0gdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgaGVhZGVyIGBmaWVsZGAuXG4gKiBDYXNlLWluc2Vuc2l0aXZlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgICByZXEuZ2V0KCcvJylcbiAqICAgICAgICAudW5zZXQoJ1VzZXItQWdlbnQnKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZCBmaWVsZCBuYW1lXG4gKi9cblJlcXVlc3RCYXNlLnByb3RvdHlwZS51bnNldCA9IGZ1bmN0aW9uIChmaWVsZCkge1xuICBkZWxldGUgdGhpcy5faGVhZGVyW2ZpZWxkLnRvTG93ZXJDYXNlKCldO1xuICBkZWxldGUgdGhpcy5oZWFkZXJbZmllbGRdO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogV3JpdGUgdGhlIGZpZWxkIGBuYW1lYCBhbmQgYHZhbGAsIG9yIG11bHRpcGxlIGZpZWxkcyB3aXRoIG9uZSBvYmplY3RcbiAqIGZvciBcIm11bHRpcGFydC9mb3JtLWRhdGFcIiByZXF1ZXN0IGJvZGllcy5cbiAqXG4gKiBgYGAganNcbiAqIHJlcXVlc3QucG9zdCgnL3VwbG9hZCcpXG4gKiAgIC5maWVsZCgnZm9vJywgJ2JhcicpXG4gKiAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIHJlcXVlc3QucG9zdCgnL3VwbG9hZCcpXG4gKiAgIC5maWVsZCh7IGZvbzogJ2JhcicsIGJhejogJ3F1eCcgfSlcbiAqICAgLmVuZChjYWxsYmFjayk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IG5hbWUgbmFtZSBvZiBmaWVsZFxuICogQHBhcmFtIHtTdHJpbmd8QmxvYnxGaWxlfEJ1ZmZlcnxmcy5SZWFkU3RyZWFtfSB2YWwgdmFsdWUgb2YgZmllbGRcbiAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zIGV4dHJhIG9wdGlvbnMsIGUuZy4gJ2Jsb2InXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5maWVsZCA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xuICAvLyBuYW1lIHNob3VsZCBiZSBlaXRoZXIgYSBzdHJpbmcgb3IgYW4gb2JqZWN0LlxuICBpZiAobmFtZSA9PT0gbnVsbCB8fCB1bmRlZmluZWQgPT09IG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJy5maWVsZChuYW1lLCB2YWwpIG5hbWUgY2FuIG5vdCBiZSBlbXB0eScpO1xuICB9XG5cbiAgaWYgKHRoaXMuX2RhdGEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBcIi5maWVsZCgpIGNhbid0IGJlIHVzZWQgaWYgLnNlbmQoKSBpcyB1c2VkLiBQbGVhc2UgdXNlIG9ubHkgLnNlbmQoKSBvciBvbmx5IC5maWVsZCgpICYgLmF0dGFjaCgpXCJcbiAgICApO1xuICB9XG5cbiAgaWYgKGlzT2JqZWN0KG5hbWUpKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gbmFtZSkge1xuICAgICAgaWYgKGhhc093bihuYW1lLCBrZXkpKSB0aGlzLmZpZWxkKGtleSwgbmFtZVtrZXldKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIGZvciAoY29uc3QgaSBpbiB2YWx1ZSkge1xuICAgICAgaWYgKGhhc093bih2YWx1ZSwgaSkpIHRoaXMuZmllbGQobmFtZSwgdmFsdWVbaV0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gdmFsIHNob3VsZCBiZSBkZWZpbmVkIG5vd1xuICBpZiAodmFsdWUgPT09IG51bGwgfHwgdW5kZWZpbmVkID09PSB2YWx1ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignLmZpZWxkKG5hbWUsIHZhbCkgdmFsIGNhbiBub3QgYmUgZW1wdHknKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xuICAgIHZhbHVlID0gU3RyaW5nKHZhbHVlKTtcbiAgfVxuXG4gIHRoaXMuX2dldEZvcm1EYXRhKCkuYXBwZW5kKG5hbWUsIHZhbHVlLCBvcHRpb25zKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEFib3J0IHRoZSByZXF1ZXN0LCBhbmQgY2xlYXIgcG90ZW50aWFsIHRpbWVvdXQuXG4gKlxuICogQHJldHVybiB7UmVxdWVzdH0gcmVxdWVzdFxuICogQGFwaSBwdWJsaWNcbiAqL1xuUmVxdWVzdEJhc2UucHJvdG90eXBlLmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5fYWJvcnRlZCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdGhpcy5fYWJvcnRlZCA9IHRydWU7XG4gIGlmICh0aGlzLnhocikgdGhpcy54aHIuYWJvcnQoKTsgLy8gYnJvd3NlclxuICBpZiAodGhpcy5yZXEpIHtcbiAgICAvLyBOb2RlIHYxMyBoYXMgbWFqb3IgZGlmZmVyZW5jZXMgaW4gYGFib3J0KClgXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9ub2RlL2Jsb2IvdjEyLngvbGliL2ludGVybmFsL3N0cmVhbXMvZW5kLW9mLXN0cmVhbS5qc1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9ibG9iL3YxMy54L2xpYi9pbnRlcm5hbC9zdHJlYW1zL2VuZC1vZi1zdHJlYW0uanNcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvYmxvYi92MTQueC9saWIvaW50ZXJuYWwvc3RyZWFtcy9lbmQtb2Ytc3RyZWFtLmpzXG4gICAgLy8gKGlmIHlvdSBydW4gYSBkaWZmIGFjcm9zcyB0aGVzZSB5b3Ugd2lsbCBzZWUgdGhlIGRpZmZlcmVuY2VzKVxuICAgIC8vXG4gICAgLy8gUmVmZXJlbmNlczpcbiAgICAvLyA8aHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9ub2RlL2lzc3Vlcy8zMTYzMD5cbiAgICAvLyA8aHR0cHM6Ly9naXRodWIuY29tL3Zpc2lvbm1lZGlhL3N1cGVyYWdlbnQvcHVsbC8xMDg0L2NvbW1pdHMvZGMxODY3OWE3YzVjY2ZjNjA0NmQ4ODIwMTVlNTEyNjg4ODk3M2JjOD5cbiAgICAvL1xuICAgIC8vIFRoYW5rcyB0byBAc2hhZG93Z2F0ZTE1IGFuZCBAbmlmdHlsZXR0dWNlXG4gICAgaWYgKFxuICAgICAgc2VtdmVyLmd0ZShwcm9jZXNzLnZlcnNpb24sICd2MTMuMC4wJykgJiZcbiAgICAgIHNlbXZlci5sdChwcm9jZXNzLnZlcnNpb24sICd2MTQuMC4wJylcbiAgICApIHtcbiAgICAgIC8vIE5vdGUgdGhhdCB0aGUgcmVhc29uIHRoaXMgZG9lc24ndCB3b3JrIGlzIGJlY2F1c2UgaW4gdjEzIGFzIGNvbXBhcmVkIHRvIHYxNFxuICAgICAgLy8gdGhlcmUgaXMgbm8gYGNhbGxiYWNrID0gbm9wYCBzZXQgaW4gZW5kLW9mLXN0cmVhbS5qcyBhYm92ZVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnU3VwZXJhZ2VudCBkb2VzIG5vdCB3b3JrIGluIHYxMyBwcm9wZXJseSB3aXRoIGFib3J0KCkgZHVlIHRvIE5vZGUuanMgY29yZSBjaGFuZ2VzJ1xuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHNlbXZlci5ndGUocHJvY2Vzcy52ZXJzaW9uLCAndjE0LjAuMCcpKSB7XG4gICAgICAvLyBXZSBoYXZlIHRvIG1hbnVhbGx5IHNldCBgZGVzdHJveWVkYCB0byBgdHJ1ZWAgaW4gb3JkZXIgZm9yIHRoaXMgdG8gd29ya1xuICAgICAgLy8gKHNlZSBjb3JlIGludGVybmFscyBvZiBlbmQtb2Ytc3RyZWFtLmpzIGFib3ZlIGluIHYxNCBicmFuY2ggYXMgY29tcGFyZWQgdG8gdjEyKVxuICAgICAgdGhpcy5yZXEuZGVzdHJveWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB0aGlzLnJlcS5hYm9ydCgpOyAvLyBub2RlXG4gIH1cblxuICB0aGlzLmNsZWFyVGltZW91dCgpO1xuICB0aGlzLmVtaXQoJ2Fib3J0Jyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLl9hdXRoID0gZnVuY3Rpb24gKHVzZXIsIHBhc3MsIG9wdGlvbnMsIGJhc2U2NEVuY29kZXIpIHtcbiAgc3dpdGNoIChvcHRpb25zLnR5cGUpIHtcbiAgICBjYXNlICdiYXNpYyc6XG4gICAgICB0aGlzLnNldCgnQXV0aG9yaXphdGlvbicsIGBCYXNpYyAke2Jhc2U2NEVuY29kZXIoYCR7dXNlcn06JHtwYXNzfWApfWApO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdhdXRvJzpcbiAgICAgIHRoaXMudXNlcm5hbWUgPSB1c2VyO1xuICAgICAgdGhpcy5wYXNzd29yZCA9IHBhc3M7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2JlYXJlcic6IC8vIHVzYWdlIHdvdWxkIGJlIC5hdXRoKGFjY2Vzc1Rva2VuLCB7IHR5cGU6ICdiZWFyZXInIH0pXG4gICAgICB0aGlzLnNldCgnQXV0aG9yaXphdGlvbicsIGBCZWFyZXIgJHt1c2VyfWApO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEVuYWJsZSB0cmFuc21pc3Npb24gb2YgY29va2llcyB3aXRoIHgtZG9tYWluIHJlcXVlc3RzLlxuICpcbiAqIE5vdGUgdGhhdCBmb3IgdGhpcyB0byB3b3JrIHRoZSBvcmlnaW4gbXVzdCBub3QgYmVcbiAqIHVzaW5nIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCIgd2l0aCBhIHdpbGRjYXJkLFxuICogYW5kIGFsc28gbXVzdCBzZXQgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFsc1wiXG4gKiB0byBcInRydWVcIi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS53aXRoQ3JlZGVudGlhbHMgPSBmdW5jdGlvbiAob24pIHtcbiAgLy8gVGhpcyBpcyBicm93c2VyLW9ubHkgZnVuY3Rpb25hbGl0eS4gTm9kZSBzaWRlIGlzIG5vLW9wLlxuICBpZiAob24gPT09IHVuZGVmaW5lZCkgb24gPSB0cnVlO1xuICB0aGlzLl93aXRoQ3JlZGVudGlhbHMgPSBvbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCB0aGUgbWF4IHJlZGlyZWN0cyB0byBgbmAuIERvZXMgbm90aGluZyBpbiBicm93c2VyIFhIUiBpbXBsZW1lbnRhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gblxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5yZWRpcmVjdHMgPSBmdW5jdGlvbiAobikge1xuICB0aGlzLl9tYXhSZWRpcmVjdHMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogTWF4aW11bSBzaXplIG9mIGJ1ZmZlcmVkIHJlc3BvbnNlIGJvZHksIGluIGJ5dGVzLiBDb3VudHMgdW5jb21wcmVzc2VkIHNpemUuXG4gKiBEZWZhdWx0IDIwME1CLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBuIG51bWJlciBvZiBieXRlc1xuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKi9cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5tYXhSZXNwb25zZVNpemUgPSBmdW5jdGlvbiAobikge1xuICBpZiAodHlwZW9mIG4gIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBhcmd1bWVudCcpO1xuICB9XG5cbiAgdGhpcy5fbWF4UmVzcG9uc2VTaXplID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIENvbnZlcnQgdG8gYSBwbGFpbiBqYXZhc2NyaXB0IG9iamVjdCAobm90IEpTT04gc3RyaW5nKSBvZiBzY2FsYXIgcHJvcGVydGllcy5cbiAqIE5vdGUgYXMgdGhpcyBtZXRob2QgaXMgZGVzaWduZWQgdG8gcmV0dXJuIGEgdXNlZnVsIG5vbi10aGlzIHZhbHVlLFxuICogaXQgY2Fubm90IGJlIGNoYWluZWQuXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSBkZXNjcmliaW5nIG1ldGhvZCwgdXJsLCBhbmQgZGF0YSBvZiB0aGlzIHJlcXVlc3RcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICBtZXRob2Q6IHRoaXMubWV0aG9kLFxuICAgIHVybDogdGhpcy51cmwsXG4gICAgZGF0YTogdGhpcy5fZGF0YSxcbiAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJcbiAgfTtcbn07XG5cbi8qKlxuICogU2VuZCBgZGF0YWAgYXMgdGhlIHJlcXVlc3QgYm9keSwgZGVmYXVsdGluZyB0aGUgYC50eXBlKClgIHRvIFwianNvblwiIHdoZW5cbiAqIGFuIG9iamVjdCBpcyBnaXZlbi5cbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICAgICAvLyBtYW51YWwganNvblxuICogICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgIC50eXBlKCdqc29uJylcbiAqICAgICAgICAgLnNlbmQoJ3tcIm5hbWVcIjpcInRqXCJ9JylcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBhdXRvIGpzb25cbiAqICAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICogICAgICAgICAuc2VuZCh7IG5hbWU6ICd0aicgfSlcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBtYW51YWwgeC13d3ctZm9ybS11cmxlbmNvZGVkXG4gKiAgICAgICByZXF1ZXN0LnBvc3QoJy91c2VyJylcbiAqICAgICAgICAgLnR5cGUoJ2Zvcm0nKVxuICogICAgICAgICAuc2VuZCgnbmFtZT10aicpXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gYXV0byB4LXd3dy1mb3JtLXVybGVuY29kZWRcbiAqICAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICogICAgICAgICAudHlwZSgnZm9ybScpXG4gKiAgICAgICAgIC5zZW5kKHsgbmFtZTogJ3RqJyB9KVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIGRlZmF1bHRzIHRvIHgtd3d3LWZvcm0tdXJsZW5jb2RlZFxuICogICAgICByZXF1ZXN0LnBvc3QoJy91c2VyJylcbiAqICAgICAgICAuc2VuZCgnbmFtZT10b2JpJylcbiAqICAgICAgICAuc2VuZCgnc3BlY2llcz1mZXJyZXQnKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBkYXRhXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcblJlcXVlc3RCYXNlLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgY29uc3QgaXNPYmplY3RfID0gaXNPYmplY3QoZGF0YSk7XG4gIGxldCB0eXBlID0gdGhpcy5faGVhZGVyWydjb250ZW50LXR5cGUnXTtcblxuICBpZiAodGhpcy5fZm9ybURhdGEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBcIi5zZW5kKCkgY2FuJ3QgYmUgdXNlZCBpZiAuYXR0YWNoKCkgb3IgLmZpZWxkKCkgaXMgdXNlZC4gUGxlYXNlIHVzZSBvbmx5IC5zZW5kKCkgb3Igb25seSAuZmllbGQoKSAmIC5hdHRhY2goKVwiXG4gICAgKTtcbiAgfVxuXG4gIGlmIChpc09iamVjdF8gJiYgIXRoaXMuX2RhdGEpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgdGhpcy5fZGF0YSA9IFtdO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuX2lzSG9zdChkYXRhKSkge1xuICAgICAgdGhpcy5fZGF0YSA9IHt9O1xuICAgIH1cbiAgfSBlbHNlIGlmIChkYXRhICYmIHRoaXMuX2RhdGEgJiYgdGhpcy5faXNIb3N0KHRoaXMuX2RhdGEpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgbWVyZ2UgdGhlc2Ugc2VuZCBjYWxsc1wiKTtcbiAgfVxuXG4gIC8vIG1lcmdlXG4gIGlmIChpc09iamVjdF8gJiYgaXNPYmplY3QodGhpcy5fZGF0YSkpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XG4gICAgICBpZiAoaGFzT3duKGRhdGEsIGtleSkpIHRoaXMuX2RhdGFba2V5XSA9IGRhdGFba2V5XTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZGVmYXVsdCB0byB4LXd3dy1mb3JtLXVybGVuY29kZWRcbiAgICBpZiAoIXR5cGUpIHRoaXMudHlwZSgnZm9ybScpO1xuICAgIHR5cGUgPSB0aGlzLl9oZWFkZXJbJ2NvbnRlbnQtdHlwZSddO1xuICAgIGlmICh0eXBlKSB0eXBlID0gdHlwZS50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcbiAgICBpZiAodHlwZSA9PT0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpIHtcbiAgICAgIHRoaXMuX2RhdGEgPSB0aGlzLl9kYXRhID8gYCR7dGhpcy5fZGF0YX0mJHtkYXRhfWAgOiBkYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kYXRhID0gKHRoaXMuX2RhdGEgfHwgJycpICsgZGF0YTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gIH1cblxuICBpZiAoIWlzT2JqZWN0XyB8fCB0aGlzLl9pc0hvc3QoZGF0YSkpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIGRlZmF1bHQgdG8ganNvblxuICBpZiAoIXR5cGUpIHRoaXMudHlwZSgnanNvbicpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU29ydCBgcXVlcnlzdHJpbmdgIGJ5IHRoZSBzb3J0IGZ1bmN0aW9uXG4gKlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgIC8vIGRlZmF1bHQgb3JkZXJcbiAqICAgICAgIHJlcXVlc3QuZ2V0KCcvdXNlcicpXG4gKiAgICAgICAgIC5xdWVyeSgnbmFtZT1OaWNrJylcbiAqICAgICAgICAgLnF1ZXJ5KCdzZWFyY2g9TWFubnknKVxuICogICAgICAgICAuc29ydFF1ZXJ5KClcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBjdXN0b21pemVkIHNvcnQgZnVuY3Rpb25cbiAqICAgICAgIHJlcXVlc3QuZ2V0KCcvdXNlcicpXG4gKiAgICAgICAgIC5xdWVyeSgnbmFtZT1OaWNrJylcbiAqICAgICAgICAgLnF1ZXJ5KCdzZWFyY2g9TWFubnknKVxuICogICAgICAgICAuc29ydFF1ZXJ5KGZ1bmN0aW9uKGEsIGIpe1xuICogICAgICAgICAgIHJldHVybiBhLmxlbmd0aCAtIGIubGVuZ3RoO1xuICogICAgICAgICB9KVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzb3J0XG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLnNvcnRRdWVyeSA9IGZ1bmN0aW9uIChzb3J0KSB7XG4gIC8vIF9zb3J0IGRlZmF1bHQgdG8gdHJ1ZSBidXQgb3RoZXJ3aXNlIGNhbiBiZSBhIGZ1bmN0aW9uIG9yIGJvb2xlYW5cbiAgdGhpcy5fc29ydCA9IHR5cGVvZiBzb3J0ID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBzb3J0O1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQ29tcG9zZSBxdWVyeXN0cmluZyB0byBhcHBlbmQgdG8gcmVxLnVybFxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuX2ZpbmFsaXplUXVlcnlTdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHF1ZXJ5ID0gdGhpcy5fcXVlcnkuam9pbignJicpO1xuICBpZiAocXVlcnkpIHtcbiAgICB0aGlzLnVybCArPSAodGhpcy51cmwuaW5jbHVkZXMoJz8nKSA/ICcmJyA6ICc/JykgKyBxdWVyeTtcbiAgfVxuXG4gIHRoaXMuX3F1ZXJ5Lmxlbmd0aCA9IDA7IC8vIE1ha2VzIHRoZSBjYWxsIGlkZW1wb3RlbnRcblxuICBpZiAodGhpcy5fc29ydCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy51cmwuaW5kZXhPZignPycpO1xuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICBjb25zdCBxdWVyeUFycmF5ID0gdGhpcy51cmwuc2xpY2UoaW5kZXggKyAxKS5zcGxpdCgnJicpO1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zb3J0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHF1ZXJ5QXJyYXkuc29ydCh0aGlzLl9zb3J0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXJ5QXJyYXkuc29ydCgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnVybCA9IHRoaXMudXJsLnNsaWNlKDAsIGluZGV4KSArICc/JyArIHF1ZXJ5QXJyYXkuam9pbignJicpO1xuICAgIH1cbiAgfVxufTtcblxuLy8gRm9yIGJhY2t3YXJkcyBjb21wYXQgb25seVxuUmVxdWVzdEJhc2UucHJvdG90eXBlLl9hcHBlbmRRdWVyeVN0cmluZyA9ICgpID0+IHtcbiAgY29uc29sZS53YXJuKCdVbnN1cHBvcnRlZCcpO1xufTtcblxuLyoqXG4gKiBJbnZva2UgY2FsbGJhY2sgd2l0aCB0aW1lb3V0IGVycm9yLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5fdGltZW91dEVycm9yID0gZnVuY3Rpb24gKHJlYXNvbiwgdGltZW91dCwgZXJybm8pIHtcbiAgaWYgKHRoaXMuX2Fib3J0ZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgJHtyZWFzb24gKyB0aW1lb3V0fW1zIGV4Y2VlZGVkYCk7XG4gIGVycm9yLnRpbWVvdXQgPSB0aW1lb3V0O1xuICBlcnJvci5jb2RlID0gJ0VDT05OQUJPUlRFRCc7XG4gIGVycm9yLmVycm5vID0gZXJybm87XG4gIHRoaXMudGltZWRvdXQgPSB0cnVlO1xuICB0aGlzLnRpbWVkb3V0RXJyb3IgPSBlcnJvcjtcbiAgdGhpcy5hYm9ydCgpO1xuICB0aGlzLmNhbGxiYWNrKGVycm9yKTtcbn07XG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5fc2V0VGltZW91dHMgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gIC8vIGRlYWRsaW5lXG4gIGlmICh0aGlzLl90aW1lb3V0ICYmICF0aGlzLl90aW1lcikge1xuICAgIHRoaXMuX3RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZWxmLl90aW1lb3V0RXJyb3IoJ1RpbWVvdXQgb2YgJywgc2VsZi5fdGltZW91dCwgJ0VUSU1FJyk7XG4gICAgfSwgdGhpcy5fdGltZW91dCk7XG4gIH1cblxuICAvLyByZXNwb25zZSB0aW1lb3V0XG4gIGlmICh0aGlzLl9yZXNwb25zZVRpbWVvdXQgJiYgIXRoaXMuX3Jlc3BvbnNlVGltZW91dFRpbWVyKSB7XG4gICAgdGhpcy5fcmVzcG9uc2VUaW1lb3V0VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNlbGYuX3RpbWVvdXRFcnJvcihcbiAgICAgICAgJ1Jlc3BvbnNlIHRpbWVvdXQgb2YgJyxcbiAgICAgICAgc2VsZi5fcmVzcG9uc2VUaW1lb3V0LFxuICAgICAgICAnRVRJTUVET1VUJ1xuICAgICAgKTtcbiAgICB9LCB0aGlzLl9yZXNwb25zZVRpbWVvdXQpO1xuICB9XG59O1xuIl19

/***/ }),

/***/ 1097:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/**
 * Module dependencies.
 */
var utils = __webpack_require__(4506);
/**
 * Expose `ResponseBase`.
 */


module.exports = ResponseBase;
/**
 * Initialize a new `ResponseBase`.
 *
 * @api public
 */

function ResponseBase() {}
/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */


ResponseBase.prototype.get = function (field) {
  return this.header[field.toLowerCase()];
};
/**
 * Set header related properties:
 *
 *   - `.type` the content type without params
 *
 * A response of "Content-Type: text/plain; charset=utf-8"
 * will provide you with a `.type` of "text/plain".
 *
 * @param {Object} header
 * @api private
 */


ResponseBase.prototype._setHeaderProperties = function (header) {
  // TODO: moar!
  // TODO: make this a util
  // content-type
  var ct = header['content-type'] || '';
  this.type = utils.type(ct); // params

  var parameters = utils.params(ct);

  for (var key in parameters) {
    if (Object.prototype.hasOwnProperty.call(parameters, key)) this[key] = parameters[key];
  }

  this.links = {}; // links

  try {
    if (header.link) {
      this.links = utils.parseLinks(header.link);
    }
  } catch (_unused) {// ignore
  }
};
/**
 * Set flags such as `.ok` based on `status`.
 *
 * For example a 2xx response will give you a `.ok` of __true__
 * whereas 5xx will be __false__ and `.error` will be __true__. The
 * `.clientError` and `.serverError` are also available to be more
 * specific, and `.statusType` is the class of error ranging from 1..5
 * sometimes useful for mapping respond colors etc.
 *
 * "sugar" properties are also defined for common cases. Currently providing:
 *
 *   - .noContent
 *   - .badRequest
 *   - .unauthorized
 *   - .notAcceptable
 *   - .notFound
 *
 * @param {Number} status
 * @api private
 */


ResponseBase.prototype._setStatusProperties = function (status) {
  var type = Math.trunc(status / 100); // status / class

  this.statusCode = status;
  this.status = this.statusCode;
  this.statusType = type; // basics

  this.info = type === 1;
  this.ok = type === 2;
  this.redirect = type === 3;
  this.clientError = type === 4;
  this.serverError = type === 5;
  this.error = type === 4 || type === 5 ? this.toError() : false; // sugar

  this.created = status === 201;
  this.accepted = status === 202;
  this.noContent = status === 204;
  this.badRequest = status === 400;
  this.unauthorized = status === 401;
  this.notAcceptable = status === 406;
  this.forbidden = status === 403;
  this.notFound = status === 404;
  this.unprocessableEntity = status === 422;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXNwb25zZS1iYXNlLmpzIl0sIm5hbWVzIjpbInV0aWxzIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJSZXNwb25zZUJhc2UiLCJwcm90b3R5cGUiLCJnZXQiLCJmaWVsZCIsImhlYWRlciIsInRvTG93ZXJDYXNlIiwiX3NldEhlYWRlclByb3BlcnRpZXMiLCJjdCIsInR5cGUiLCJwYXJhbWV0ZXJzIiwicGFyYW1zIiwia2V5IiwiT2JqZWN0IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwibGlua3MiLCJsaW5rIiwicGFyc2VMaW5rcyIsIl9zZXRTdGF0dXNQcm9wZXJ0aWVzIiwic3RhdHVzIiwiTWF0aCIsInRydW5jIiwic3RhdHVzQ29kZSIsInN0YXR1c1R5cGUiLCJpbmZvIiwib2siLCJyZWRpcmVjdCIsImNsaWVudEVycm9yIiwic2VydmVyRXJyb3IiLCJlcnJvciIsInRvRXJyb3IiLCJjcmVhdGVkIiwiYWNjZXB0ZWQiLCJub0NvbnRlbnQiLCJiYWRSZXF1ZXN0IiwidW5hdXRob3JpemVkIiwibm90QWNjZXB0YWJsZSIsImZvcmJpZGRlbiIsIm5vdEZvdW5kIiwidW5wcm9jZXNzYWJsZUVudGl0eSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUdDLE9BQU8sQ0FBQyxTQUFELENBQXJCO0FBRUE7QUFDQTtBQUNBOzs7QUFFQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCQyxZQUFqQjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsWUFBVCxHQUF3QixDQUFFO0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQUEsWUFBWSxDQUFDQyxTQUFiLENBQXVCQyxHQUF2QixHQUE2QixVQUFVQyxLQUFWLEVBQWlCO0FBQzVDLFNBQU8sS0FBS0MsTUFBTCxDQUFZRCxLQUFLLENBQUNFLFdBQU4sRUFBWixDQUFQO0FBQ0QsQ0FGRDtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBTCxZQUFZLENBQUNDLFNBQWIsQ0FBdUJLLG9CQUF2QixHQUE4QyxVQUFVRixNQUFWLEVBQWtCO0FBQzlEO0FBQ0E7QUFFQTtBQUNBLE1BQU1HLEVBQUUsR0FBR0gsTUFBTSxDQUFDLGNBQUQsQ0FBTixJQUEwQixFQUFyQztBQUNBLE9BQUtJLElBQUwsR0FBWVosS0FBSyxDQUFDWSxJQUFOLENBQVdELEVBQVgsQ0FBWixDQU44RCxDQVE5RDs7QUFDQSxNQUFNRSxVQUFVLEdBQUdiLEtBQUssQ0FBQ2MsTUFBTixDQUFhSCxFQUFiLENBQW5COztBQUNBLE9BQUssSUFBTUksR0FBWCxJQUFrQkYsVUFBbEIsRUFBOEI7QUFDNUIsUUFBSUcsTUFBTSxDQUFDWCxTQUFQLENBQWlCWSxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUNMLFVBQXJDLEVBQWlERSxHQUFqRCxDQUFKLEVBQ0UsS0FBS0EsR0FBTCxJQUFZRixVQUFVLENBQUNFLEdBQUQsQ0FBdEI7QUFDSDs7QUFFRCxPQUFLSSxLQUFMLEdBQWEsRUFBYixDQWY4RCxDQWlCOUQ7O0FBQ0EsTUFBSTtBQUNGLFFBQUlYLE1BQU0sQ0FBQ1ksSUFBWCxFQUFpQjtBQUNmLFdBQUtELEtBQUwsR0FBYW5CLEtBQUssQ0FBQ3FCLFVBQU4sQ0FBaUJiLE1BQU0sQ0FBQ1ksSUFBeEIsQ0FBYjtBQUNEO0FBQ0YsR0FKRCxDQUlFLGdCQUFNLENBQ047QUFDRDtBQUNGLENBekJEO0FBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBaEIsWUFBWSxDQUFDQyxTQUFiLENBQXVCaUIsb0JBQXZCLEdBQThDLFVBQVVDLE1BQVYsRUFBa0I7QUFDOUQsTUFBTVgsSUFBSSxHQUFHWSxJQUFJLENBQUNDLEtBQUwsQ0FBV0YsTUFBTSxHQUFHLEdBQXBCLENBQWIsQ0FEOEQsQ0FHOUQ7O0FBQ0EsT0FBS0csVUFBTCxHQUFrQkgsTUFBbEI7QUFDQSxPQUFLQSxNQUFMLEdBQWMsS0FBS0csVUFBbkI7QUFDQSxPQUFLQyxVQUFMLEdBQWtCZixJQUFsQixDQU44RCxDQVE5RDs7QUFDQSxPQUFLZ0IsSUFBTCxHQUFZaEIsSUFBSSxLQUFLLENBQXJCO0FBQ0EsT0FBS2lCLEVBQUwsR0FBVWpCLElBQUksS0FBSyxDQUFuQjtBQUNBLE9BQUtrQixRQUFMLEdBQWdCbEIsSUFBSSxLQUFLLENBQXpCO0FBQ0EsT0FBS21CLFdBQUwsR0FBbUJuQixJQUFJLEtBQUssQ0FBNUI7QUFDQSxPQUFLb0IsV0FBTCxHQUFtQnBCLElBQUksS0FBSyxDQUE1QjtBQUNBLE9BQUtxQixLQUFMLEdBQWFyQixJQUFJLEtBQUssQ0FBVCxJQUFjQSxJQUFJLEtBQUssQ0FBdkIsR0FBMkIsS0FBS3NCLE9BQUwsRUFBM0IsR0FBNEMsS0FBekQsQ0FkOEQsQ0FnQjlEOztBQUNBLE9BQUtDLE9BQUwsR0FBZVosTUFBTSxLQUFLLEdBQTFCO0FBQ0EsT0FBS2EsUUFBTCxHQUFnQmIsTUFBTSxLQUFLLEdBQTNCO0FBQ0EsT0FBS2MsU0FBTCxHQUFpQmQsTUFBTSxLQUFLLEdBQTVCO0FBQ0EsT0FBS2UsVUFBTCxHQUFrQmYsTUFBTSxLQUFLLEdBQTdCO0FBQ0EsT0FBS2dCLFlBQUwsR0FBb0JoQixNQUFNLEtBQUssR0FBL0I7QUFDQSxPQUFLaUIsYUFBTCxHQUFxQmpCLE1BQU0sS0FBSyxHQUFoQztBQUNBLE9BQUtrQixTQUFMLEdBQWlCbEIsTUFBTSxLQUFLLEdBQTVCO0FBQ0EsT0FBS21CLFFBQUwsR0FBZ0JuQixNQUFNLEtBQUssR0FBM0I7QUFDQSxPQUFLb0IsbUJBQUwsR0FBMkJwQixNQUFNLEtBQUssR0FBdEM7QUFDRCxDQTFCRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG5jb25zdCB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxuLyoqXG4gKiBFeHBvc2UgYFJlc3BvbnNlQmFzZWAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBSZXNwb25zZUJhc2U7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgUmVzcG9uc2VCYXNlYC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIFJlc3BvbnNlQmFzZSgpIHt9XG5cbi8qKlxuICogR2V0IGNhc2UtaW5zZW5zaXRpdmUgYGZpZWxkYCB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVzcG9uc2VCYXNlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoZmllbGQpIHtcbiAgcmV0dXJuIHRoaXMuaGVhZGVyW2ZpZWxkLnRvTG93ZXJDYXNlKCldO1xufTtcblxuLyoqXG4gKiBTZXQgaGVhZGVyIHJlbGF0ZWQgcHJvcGVydGllczpcbiAqXG4gKiAgIC0gYC50eXBlYCB0aGUgY29udGVudCB0eXBlIHdpdGhvdXQgcGFyYW1zXG4gKlxuICogQSByZXNwb25zZSBvZiBcIkNvbnRlbnQtVHlwZTogdGV4dC9wbGFpbjsgY2hhcnNldD11dGYtOFwiXG4gKiB3aWxsIHByb3ZpZGUgeW91IHdpdGggYSBgLnR5cGVgIG9mIFwidGV4dC9wbGFpblwiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBoZWFkZXJcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlc3BvbnNlQmFzZS5wcm90b3R5cGUuX3NldEhlYWRlclByb3BlcnRpZXMgPSBmdW5jdGlvbiAoaGVhZGVyKSB7XG4gIC8vIFRPRE86IG1vYXIhXG4gIC8vIFRPRE86IG1ha2UgdGhpcyBhIHV0aWxcblxuICAvLyBjb250ZW50LXR5cGVcbiAgY29uc3QgY3QgPSBoZWFkZXJbJ2NvbnRlbnQtdHlwZSddIHx8ICcnO1xuICB0aGlzLnR5cGUgPSB1dGlscy50eXBlKGN0KTtcblxuICAvLyBwYXJhbXNcbiAgY29uc3QgcGFyYW1ldGVycyA9IHV0aWxzLnBhcmFtcyhjdCk7XG4gIGZvciAoY29uc3Qga2V5IGluIHBhcmFtZXRlcnMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmFtZXRlcnMsIGtleSkpXG4gICAgICB0aGlzW2tleV0gPSBwYXJhbWV0ZXJzW2tleV07XG4gIH1cblxuICB0aGlzLmxpbmtzID0ge307XG5cbiAgLy8gbGlua3NcbiAgdHJ5IHtcbiAgICBpZiAoaGVhZGVyLmxpbmspIHtcbiAgICAgIHRoaXMubGlua3MgPSB1dGlscy5wYXJzZUxpbmtzKGhlYWRlci5saW5rKTtcbiAgICB9XG4gIH0gY2F0Y2gge1xuICAgIC8vIGlnbm9yZVxuICB9XG59O1xuXG4vKipcbiAqIFNldCBmbGFncyBzdWNoIGFzIGAub2tgIGJhc2VkIG9uIGBzdGF0dXNgLlxuICpcbiAqIEZvciBleGFtcGxlIGEgMnh4IHJlc3BvbnNlIHdpbGwgZ2l2ZSB5b3UgYSBgLm9rYCBvZiBfX3RydWVfX1xuICogd2hlcmVhcyA1eHggd2lsbCBiZSBfX2ZhbHNlX18gYW5kIGAuZXJyb3JgIHdpbGwgYmUgX190cnVlX18uIFRoZVxuICogYC5jbGllbnRFcnJvcmAgYW5kIGAuc2VydmVyRXJyb3JgIGFyZSBhbHNvIGF2YWlsYWJsZSB0byBiZSBtb3JlXG4gKiBzcGVjaWZpYywgYW5kIGAuc3RhdHVzVHlwZWAgaXMgdGhlIGNsYXNzIG9mIGVycm9yIHJhbmdpbmcgZnJvbSAxLi41XG4gKiBzb21ldGltZXMgdXNlZnVsIGZvciBtYXBwaW5nIHJlc3BvbmQgY29sb3JzIGV0Yy5cbiAqXG4gKiBcInN1Z2FyXCIgcHJvcGVydGllcyBhcmUgYWxzbyBkZWZpbmVkIGZvciBjb21tb24gY2FzZXMuIEN1cnJlbnRseSBwcm92aWRpbmc6XG4gKlxuICogICAtIC5ub0NvbnRlbnRcbiAqICAgLSAuYmFkUmVxdWVzdFxuICogICAtIC51bmF1dGhvcml6ZWRcbiAqICAgLSAubm90QWNjZXB0YWJsZVxuICogICAtIC5ub3RGb3VuZFxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdGF0dXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlc3BvbnNlQmFzZS5wcm90b3R5cGUuX3NldFN0YXR1c1Byb3BlcnRpZXMgPSBmdW5jdGlvbiAoc3RhdHVzKSB7XG4gIGNvbnN0IHR5cGUgPSBNYXRoLnRydW5jKHN0YXR1cyAvIDEwMCk7XG5cbiAgLy8gc3RhdHVzIC8gY2xhc3NcbiAgdGhpcy5zdGF0dXNDb2RlID0gc3RhdHVzO1xuICB0aGlzLnN0YXR1cyA9IHRoaXMuc3RhdHVzQ29kZTtcbiAgdGhpcy5zdGF0dXNUeXBlID0gdHlwZTtcblxuICAvLyBiYXNpY3NcbiAgdGhpcy5pbmZvID0gdHlwZSA9PT0gMTtcbiAgdGhpcy5vayA9IHR5cGUgPT09IDI7XG4gIHRoaXMucmVkaXJlY3QgPSB0eXBlID09PSAzO1xuICB0aGlzLmNsaWVudEVycm9yID0gdHlwZSA9PT0gNDtcbiAgdGhpcy5zZXJ2ZXJFcnJvciA9IHR5cGUgPT09IDU7XG4gIHRoaXMuZXJyb3IgPSB0eXBlID09PSA0IHx8IHR5cGUgPT09IDUgPyB0aGlzLnRvRXJyb3IoKSA6IGZhbHNlO1xuXG4gIC8vIHN1Z2FyXG4gIHRoaXMuY3JlYXRlZCA9IHN0YXR1cyA9PT0gMjAxO1xuICB0aGlzLmFjY2VwdGVkID0gc3RhdHVzID09PSAyMDI7XG4gIHRoaXMubm9Db250ZW50ID0gc3RhdHVzID09PSAyMDQ7XG4gIHRoaXMuYmFkUmVxdWVzdCA9IHN0YXR1cyA9PT0gNDAwO1xuICB0aGlzLnVuYXV0aG9yaXplZCA9IHN0YXR1cyA9PT0gNDAxO1xuICB0aGlzLm5vdEFjY2VwdGFibGUgPSBzdGF0dXMgPT09IDQwNjtcbiAgdGhpcy5mb3JiaWRkZW4gPSBzdGF0dXMgPT09IDQwMztcbiAgdGhpcy5ub3RGb3VuZCA9IHN0YXR1cyA9PT0gNDA0O1xuICB0aGlzLnVucHJvY2Vzc2FibGVFbnRpdHkgPSBzdGF0dXMgPT09IDQyMjtcbn07XG4iXX0=

/***/ }),

/***/ 4506:
/***/ ((__unused_webpack_module, exports) => {



function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */
exports.type = function (string_) {
  return string_.split(/ *; */).shift();
};
/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */


exports.params = function (value) {
  var object = {};

  var _iterator = _createForOfIteratorHelper(value.split(/ *; */)),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var string_ = _step.value;
      var parts = string_.split(/ *= */);
      var key = parts.shift();

      var _value = parts.shift();

      if (key && _value) object[key] = _value;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return object;
};
/**
 * Parse Link header fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */


exports.parseLinks = function (value) {
  var object = {};

  var _iterator2 = _createForOfIteratorHelper(value.split(/ *, */)),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var string_ = _step2.value;
      var parts = string_.split(/ *; */);
      var url = parts[0].slice(1, -1);
      var rel = parts[1].split(/ *= */)[1].slice(1, -1);
      object[rel] = url;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return object;
};
/**
 * Strip content related fields from `header`.
 *
 * @param {Object} header
 * @return {Object} header
 * @api private
 */


exports.cleanHeader = function (header, changesOrigin) {
  delete header['content-type'];
  delete header['content-length'];
  delete header['transfer-encoding'];
  delete header.host; // secuirty

  if (changesOrigin) {
    delete header.authorization;
    delete header.cookie;
  }

  return header;
};
/**
 * Check if `obj` is an object.
 *
 * @param {Object} object
 * @return {Boolean}
 * @api private
 */


exports.isObject = function (object) {
  return object !== null && _typeof(object) === 'object';
};
/**
 * Object.hasOwn fallback/polyfill.
 *
 * @type {(object: object, property: string) => boolean} object
 * @api private
 */


exports.hasOwn = Object.hasOwn || function (object, property) {
  if (object == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  return Object.prototype.hasOwnProperty.call(new Object(object), property);
};

exports.mixin = function (target, source) {
  for (var key in source) {
    if (exports.hasOwn(source, key)) {
      target[key] = source[key];
    }
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlscy5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwidHlwZSIsInN0cmluZ18iLCJzcGxpdCIsInNoaWZ0IiwicGFyYW1zIiwidmFsdWUiLCJvYmplY3QiLCJwYXJ0cyIsImtleSIsInBhcnNlTGlua3MiLCJ1cmwiLCJzbGljZSIsInJlbCIsImNsZWFuSGVhZGVyIiwiaGVhZGVyIiwiY2hhbmdlc09yaWdpbiIsImhvc3QiLCJhdXRob3JpemF0aW9uIiwiY29va2llIiwiaXNPYmplY3QiLCJoYXNPd24iLCJPYmplY3QiLCJwcm9wZXJ0eSIsIlR5cGVFcnJvciIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIm1peGluIiwidGFyZ2V0Iiwic291cmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsT0FBTyxDQUFDQyxJQUFSLEdBQWUsVUFBQ0MsT0FBRDtBQUFBLFNBQWFBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLE9BQWQsRUFBdUJDLEtBQXZCLEVBQWI7QUFBQSxDQUFmO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBSixPQUFPLENBQUNLLE1BQVIsR0FBaUIsVUFBQ0MsS0FBRCxFQUFXO0FBQzFCLE1BQU1DLE1BQU0sR0FBRyxFQUFmOztBQUQwQiw2Q0FFSkQsS0FBSyxDQUFDSCxLQUFOLENBQVksT0FBWixDQUZJO0FBQUE7O0FBQUE7QUFFMUIsd0RBQTRDO0FBQUEsVUFBakNELE9BQWlDO0FBQzFDLFVBQU1NLEtBQUssR0FBR04sT0FBTyxDQUFDQyxLQUFSLENBQWMsT0FBZCxDQUFkO0FBQ0EsVUFBTU0sR0FBRyxHQUFHRCxLQUFLLENBQUNKLEtBQU4sRUFBWjs7QUFDQSxVQUFNRSxNQUFLLEdBQUdFLEtBQUssQ0FBQ0osS0FBTixFQUFkOztBQUVBLFVBQUlLLEdBQUcsSUFBSUgsTUFBWCxFQUFrQkMsTUFBTSxDQUFDRSxHQUFELENBQU4sR0FBY0gsTUFBZDtBQUNuQjtBQVJ5QjtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVUxQixTQUFPQyxNQUFQO0FBQ0QsQ0FYRDtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQVAsT0FBTyxDQUFDVSxVQUFSLEdBQXFCLFVBQUNKLEtBQUQsRUFBVztBQUM5QixNQUFNQyxNQUFNLEdBQUcsRUFBZjs7QUFEOEIsOENBRVJELEtBQUssQ0FBQ0gsS0FBTixDQUFZLE9BQVosQ0FGUTtBQUFBOztBQUFBO0FBRTlCLDJEQUE0QztBQUFBLFVBQWpDRCxPQUFpQztBQUMxQyxVQUFNTSxLQUFLLEdBQUdOLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLE9BQWQsQ0FBZDtBQUNBLFVBQU1RLEdBQUcsR0FBR0gsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTSSxLQUFULENBQWUsQ0FBZixFQUFrQixDQUFDLENBQW5CLENBQVo7QUFDQSxVQUFNQyxHQUFHLEdBQUdMLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU0wsS0FBVCxDQUFlLE9BQWYsRUFBd0IsQ0FBeEIsRUFBMkJTLEtBQTNCLENBQWlDLENBQWpDLEVBQW9DLENBQUMsQ0FBckMsQ0FBWjtBQUNBTCxNQUFBQSxNQUFNLENBQUNNLEdBQUQsQ0FBTixHQUFjRixHQUFkO0FBQ0Q7QUFQNkI7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFTOUIsU0FBT0osTUFBUDtBQUNELENBVkQ7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUFQLE9BQU8sQ0FBQ2MsV0FBUixHQUFzQixVQUFDQyxNQUFELEVBQVNDLGFBQVQsRUFBMkI7QUFDL0MsU0FBT0QsTUFBTSxDQUFDLGNBQUQsQ0FBYjtBQUNBLFNBQU9BLE1BQU0sQ0FBQyxnQkFBRCxDQUFiO0FBQ0EsU0FBT0EsTUFBTSxDQUFDLG1CQUFELENBQWI7QUFDQSxTQUFPQSxNQUFNLENBQUNFLElBQWQsQ0FKK0MsQ0FLL0M7O0FBQ0EsTUFBSUQsYUFBSixFQUFtQjtBQUNqQixXQUFPRCxNQUFNLENBQUNHLGFBQWQ7QUFDQSxXQUFPSCxNQUFNLENBQUNJLE1BQWQ7QUFDRDs7QUFFRCxTQUFPSixNQUFQO0FBQ0QsQ0FaRDtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQWYsT0FBTyxDQUFDb0IsUUFBUixHQUFtQixVQUFDYixNQUFELEVBQVk7QUFDN0IsU0FBT0EsTUFBTSxLQUFLLElBQVgsSUFBbUIsUUFBT0EsTUFBUCxNQUFrQixRQUE1QztBQUNELENBRkQ7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBUCxPQUFPLENBQUNxQixNQUFSLEdBQ0VDLE1BQU0sQ0FBQ0QsTUFBUCxJQUNBLFVBQVVkLE1BQVYsRUFBa0JnQixRQUFsQixFQUE0QjtBQUMxQixNQUFJaEIsTUFBTSxJQUFJLElBQWQsRUFBb0I7QUFDbEIsVUFBTSxJQUFJaUIsU0FBSixDQUFjLDRDQUFkLENBQU47QUFDRDs7QUFFRCxTQUFPRixNQUFNLENBQUNHLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQyxJQUFJTCxNQUFKLENBQVdmLE1BQVgsQ0FBckMsRUFBeURnQixRQUF6RCxDQUFQO0FBQ0QsQ0FSSDs7QUFVQXZCLE9BQU8sQ0FBQzRCLEtBQVIsR0FBZ0IsVUFBQ0MsTUFBRCxFQUFTQyxNQUFULEVBQW9CO0FBQ2xDLE9BQUssSUFBTXJCLEdBQVgsSUFBa0JxQixNQUFsQixFQUEwQjtBQUN4QixRQUFJOUIsT0FBTyxDQUFDcUIsTUFBUixDQUFlUyxNQUFmLEVBQXVCckIsR0FBdkIsQ0FBSixFQUFpQztBQUMvQm9CLE1BQUFBLE1BQU0sQ0FBQ3BCLEdBQUQsQ0FBTixHQUFjcUIsTUFBTSxDQUFDckIsR0FBRCxDQUFwQjtBQUNEO0FBQ0Y7QUFDRixDQU5EIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZXR1cm4gdGhlIG1pbWUgdHlwZSBmb3IgdGhlIGdpdmVuIGBzdHJgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMudHlwZSA9IChzdHJpbmdfKSA9PiBzdHJpbmdfLnNwbGl0KC8gKjsgKi8pLnNoaWZ0KCk7XG5cbi8qKlxuICogUmV0dXJuIGhlYWRlciBmaWVsZCBwYXJhbWV0ZXJzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMucGFyYW1zID0gKHZhbHVlKSA9PiB7XG4gIGNvbnN0IG9iamVjdCA9IHt9O1xuICBmb3IgKGNvbnN0IHN0cmluZ18gb2YgdmFsdWUuc3BsaXQoLyAqOyAqLykpIHtcbiAgICBjb25zdCBwYXJ0cyA9IHN0cmluZ18uc3BsaXQoLyAqPSAqLyk7XG4gICAgY29uc3Qga2V5ID0gcGFydHMuc2hpZnQoKTtcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnRzLnNoaWZ0KCk7XG5cbiAgICBpZiAoa2V5ICYmIHZhbHVlKSBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cbi8qKlxuICogUGFyc2UgTGluayBoZWFkZXIgZmllbGRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMucGFyc2VMaW5rcyA9ICh2YWx1ZSkgPT4ge1xuICBjb25zdCBvYmplY3QgPSB7fTtcbiAgZm9yIChjb25zdCBzdHJpbmdfIG9mIHZhbHVlLnNwbGl0KC8gKiwgKi8pKSB7XG4gICAgY29uc3QgcGFydHMgPSBzdHJpbmdfLnNwbGl0KC8gKjsgKi8pO1xuICAgIGNvbnN0IHVybCA9IHBhcnRzWzBdLnNsaWNlKDEsIC0xKTtcbiAgICBjb25zdCByZWwgPSBwYXJ0c1sxXS5zcGxpdCgvICo9ICovKVsxXS5zbGljZSgxLCAtMSk7XG4gICAgb2JqZWN0W3JlbF0gPSB1cmw7XG4gIH1cblxuICByZXR1cm4gb2JqZWN0O1xufTtcblxuLyoqXG4gKiBTdHJpcCBjb250ZW50IHJlbGF0ZWQgZmllbGRzIGZyb20gYGhlYWRlcmAuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGhlYWRlclxuICogQHJldHVybiB7T2JqZWN0fSBoZWFkZXJcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMuY2xlYW5IZWFkZXIgPSAoaGVhZGVyLCBjaGFuZ2VzT3JpZ2luKSA9PiB7XG4gIGRlbGV0ZSBoZWFkZXJbJ2NvbnRlbnQtdHlwZSddO1xuICBkZWxldGUgaGVhZGVyWydjb250ZW50LWxlbmd0aCddO1xuICBkZWxldGUgaGVhZGVyWyd0cmFuc2Zlci1lbmNvZGluZyddO1xuICBkZWxldGUgaGVhZGVyLmhvc3Q7XG4gIC8vIHNlY3VpcnR5XG4gIGlmIChjaGFuZ2VzT3JpZ2luKSB7XG4gICAgZGVsZXRlIGhlYWRlci5hdXRob3JpemF0aW9uO1xuICAgIGRlbGV0ZSBoZWFkZXIuY29va2llO1xuICB9XG5cbiAgcmV0dXJuIGhlYWRlcjtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYG9iamAgaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZXhwb3J0cy5pc09iamVjdCA9IChvYmplY3QpID0+IHtcbiAgcmV0dXJuIG9iamVjdCAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0Jztcbn07XG5cbi8qKlxuICogT2JqZWN0Lmhhc093biBmYWxsYmFjay9wb2x5ZmlsbC5cbiAqXG4gKiBAdHlwZSB7KG9iamVjdDogb2JqZWN0LCBwcm9wZXJ0eTogc3RyaW5nKSA9PiBib29sZWFufSBvYmplY3RcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5leHBvcnRzLmhhc093biA9XG4gIE9iamVjdC5oYXNPd24gfHxcbiAgZnVuY3Rpb24gKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IHVuZGVmaW5lZCBvciBudWxsIHRvIG9iamVjdCcpO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobmV3IE9iamVjdChvYmplY3QpLCBwcm9wZXJ0eSk7XG4gIH07XG5cbmV4cG9ydHMubWl4aW4gPSAodGFyZ2V0LCBzb3VyY2UpID0+IHtcbiAgZm9yIChjb25zdCBrZXkgaW4gc291cmNlKSB7XG4gICAgaWYgKGV4cG9ydHMuaGFzT3duKHNvdXJjZSwga2V5KSkge1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cbn07XG4iXX0=

/***/ })

};
;