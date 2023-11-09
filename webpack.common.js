const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
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
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV === "production"
            ? MiniCssExtractPlugin.loader
            : "style-loader",
          "css-loader",
        ],
      },
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
    new HtmlWebpackPlugin({
      title: "Hello_World",
      description: "configuration_webpack",
    }),
    ...[
      process.env.NODE_ENV === "production" ? new MiniCssExtractPlugin() : "",
    ],
  ],
};

module.exports = config;
