import HelloWorldButton from "./components/hello-world-button/hello-world-button.js";
import Heading from "./components/heading/heading.js";
import "./timer";
import "./main.scss";
import { upperCase } from "lodash-es";

const heading = new Heading();
heading.render(upperCase("main"));
const helloWorldButton = new HelloWorldButton();
helloWorldButton.render("Hello World");

if (process.env.NODE_ENV === "production") {
  console.log("Production mode");
} else if (process.env.NODE_ENV === "development") {
  console.log("Development mode");
}
