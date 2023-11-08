const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
      {
        // 파일을 생성해주는 역할
        test: /\.(jpg|png)$/,
        type: "asset/resource",
        generator: {
          filename: "images/[hash][ext]",
        },
      },
      {
        test: /\.svg$/,
        type: "asset/inline",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      title: "Hello_PROD_ENV",
      description: "prod_configuration_webpack",
    }),
  ],
};
