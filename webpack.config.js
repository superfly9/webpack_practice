const webpack = require("webpack"); //to access built-in plugins
const path = require("path");
const banner = require("./plugins/Banner");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    // writes to disk  ./dist/main.js , ./dist/math.js 생성
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner,
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
};
