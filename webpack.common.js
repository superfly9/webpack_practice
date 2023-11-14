const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = (env, args) => {
  return {
    entry: {
      main: "./src/main.js",
      duplicate: "./src/duplicate.js",
    },
    output: {
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "dist"),
    },
    optimization: {
      splitChunks: {
        chunks: "all",
        minSize: 2000,
        //omit minSize in real use case to use the default of 30kb
      },
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
          test: /\.scss$/,
          use: [
            env.production ? MiniCssExtractPlugin.loader : "style-loader",
            ,
            "css-loader",
            "sass-loader",
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
        title: "main",
        description: "configuration_webpack",
        filename: "main.html",
        minify: false,
        chunks: ["main"],
      }),
      new HtmlWebpackPlugin({
        title: "Duplication",
        filename: "duplication.html",
        description: "configuration_webpack",
        minify: false,
        chunks: ["duplicate"],
      }),
      new CleanWebpackPlugin({
        verbose: true, // 어떤 파일이 삭제되었는지 로그 남겨줌
      }),
      ...[env.production ? new MiniCssExtractPlugin() : ""],
    ],
  };
};

module.exports = config;
