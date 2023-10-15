const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

class MathCalculator {
  constructor(...numbers) {
    this.numbers = numbers;
    this.currentValue = 0;
  }
  add(currentValue) {
    this.currentValue = this.numbers.reduce(
      (acc, cur) => acc + cur,
      currentValue || this.currentValue
    );
  }
  minus(currentValue) {
    this.currentValue = this.numbers.reduce(
      (acc, cur) => acc - cur,
      currentValue || this.currentValue
    );
  }
}

export { MathCalculator, add, multiply };

// index.js에서 class.minus는 호출 X지만 main.js에는 포함
