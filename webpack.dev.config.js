const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 9000,
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    devMiddleware: {
      writeToDisk: true, // dev-servera 실행시 빌드 결과물을 disk에 생성해주는 용도 (없으면 dist/ 생성 안 된다)
    },
    hot: true,
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
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
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
    new CleanWebpackPlugin({
      verbose: true, // 어떤 파일이 삭제되었는지 로그 남겨줌
    }),
    new HtmlWebpackPlugin({
      title: "Hello_DEV_ENV",
      minify: false,
      description: "dev_configuration_webpack",
    }),
  ],
};
