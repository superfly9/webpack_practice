import "./heading.scss";

class Heading {
  render(title) {
    const h1 = document.createElement("h1");
    const body = document.querySelector("body");
    h1.innerHTML = title;
    body.appendChild(h1);
  }
}

export default Heading;
