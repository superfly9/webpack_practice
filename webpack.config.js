const webpack = require("webpack"); //to access built-in plugins
const path = require("path");
const banner = require("./plugins/Banner");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [{}],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner,
    }),
  ],
};
