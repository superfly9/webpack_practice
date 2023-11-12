import Heading from "./components/heading/heading.js";
import HelloWorldButton from "./components/hello-world-button/hello-world-button.js";
import { upperCase } from "lodash-es";

const heading = new Heading();
heading.render(upperCase("duplicate"));
const helloWorldButton = new HelloWorldButton();
helloWorldButton.render("November");
