"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multiply = exports.add = exports.MathCalculator = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var add = exports.add = function add(a, b) {
  return a + b;
};
var multiply = exports.multiply = function multiply(a, b) {
  return a * b;
};
var MathCalculator = exports.MathCalculator = /*#__PURE__*/function () {
  function MathCalculator() {
    _classCallCheck(this, MathCalculator);
    for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
      numbers[_key] = arguments[_key];
    }
    this.numbers = numbers;
    this.currentValue = 0;
  }
  _createClass(MathCalculator, [{
    key: "add",
    value: function add(currentValue) {
      this.currentValue = this.numbers.reduce(function (acc, cur) {
        return acc + cur;
      }, currentValue || this.currentValue);
    }
  }, {
    key: "minus",
    value: function minus(currentValue) {
      this.currentValue = this.numbers.reduce(function (acc, cur) {
        return acc - cur;
      }, currentValue || this.currentValue);
    }
  }]);
  return MathCalculator;
}(); // index.js에서 class.minus는 호출 X지만 main.js에는 포함
//node node_modules/.bin/babel src/math.js --presets @babel/preset-env와 같이 실행도 가능