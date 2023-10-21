const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
    math: "./src/math.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve("dist"),
    // writes to disk  ./dist/main.js , ./dist/math.js 생성
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
