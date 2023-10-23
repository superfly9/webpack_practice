const webpack = require("webpack"); //to access built-in plugins
const path = require("path");
const banner = require("./plugins/Banner");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  }
  output: {
    filename: "[name].js",
    path: path.resolve("dist"),
    clean:true,
    // writes to disk  ./dist/main.js , ./dist/math.js 생성
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg | png)$/,
        loader: "file-loader",
        options: {
          sourceMap: true,
        },
        // use: ["file-loader"],
      },
      {
        test: /\.(js|tsx|jsx)$/,
        use: path.resolve(__dirname, "src", "cityLoader"),
        // use: path.resolve("./src/cityLoader"), 이렇게도 가능
        // use: "./src/cityLoader.js",
      },
    ],
  },
};
