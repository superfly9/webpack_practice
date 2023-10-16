const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    entryTest: path.resolve("src", "index.js"),
    mathTest: path.resolve("src", "math.js"),
  },
};
