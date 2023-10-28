"use strict";

var _math = require("./math.js");
require("./timer");
require("./index.css");
/* multiply main.js에 포함되지 X 
=> export 대상을 실제로 호출해서 써야 main.js에 포함
=> MathCalculator의 minus는 실제 호출은 안 하지만, 클래스를 import 해오면서 같이 딸려오기에 main.js에 포함
 */
var obj = new _math.MathCalculator(10, 20, -5);
obj.add();
console.log((0, _math.add)(500, 220));