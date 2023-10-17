const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    seoul: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./city"),
  },
};
