import { add, MathCalculator } from "./math.js";
import HelloWorldButton from "./components/hello-world-button/hello-world-button.js";
import Heading from "./components/heading/heading.js";
import ilSanImage from "./ilsan_park.jpg";
import "./timer";
import "./index.css";

console.log("[ilSanImage]:", ilSanImage);

/* multiply main.js에 포함되지 X 
=> export 대상을 실제로 호출해서 써야 main.js에 포함
=> MathCalculator의 minus는 실제 호출은 안 하지만, 클래스를 import 해오면서 같이 딸려오기에 main.js에 포함
 */
const obj = new MathCalculator(10, 20, -5);
obj.add();

console.log(add(500, 220));

const heading = new Heading();
heading.render();
const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

if (process.env.NODE_ENV === "production") {
  console.log("Production mode");
} else if (process.env.NODE_ENV === "development") {
  console.log("Development mode");
}
