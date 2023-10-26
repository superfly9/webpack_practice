const path = require("path");
module.exports = {
  mode: "development",
  entry: {
    main: "/src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(process.cwd(), "dist"),
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }],
  },
};
