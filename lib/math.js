"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multiply = exports.add = exports.MathCalculator = void 0;
const add = (a, b) => a + b;
exports.add = add;
const multiply = (a, b) => a * b;
exports.multiply = multiply;
class MathCalculator {
  constructor() {
    for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
      numbers[_key] = arguments[_key];
    }
    this.numbers = numbers;
    this.currentValue = 0;
  }
  add(currentValue) {
    this.currentValue = this.numbers.reduce((acc, cur) => acc + cur, currentValue || this.currentValue);
  }
  minus(currentValue) {
    this.currentValue = this.numbers.reduce((acc, cur) => acc - cur, currentValue || this.currentValue);
  }
}

// index.js에서 class.minus는 호출 X지만 main.js에는 포함
//node node_modules/.bin/babel src/math.js --presets @babel/preset-env와 같이 실행도 가능
exports.MathCalculator = MathCalculator;