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
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          ...[
            process.env.NODE_ENV === "production"
              ? MiniCssExtractPlugin.loader
              : "style-loader",
          ],
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner,
    }),
    new CleanWebpackPlugin(),
    ...(process.env.NODE_ENV === "production"
      ? new MiniCssExtractPlugin()
      : ""),
  ],
};
