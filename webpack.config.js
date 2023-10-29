const webpack = require("webpack"); //to access built-in plugins
const banner = require("./plugins/Banner");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(process.cwd(), "chunkhash_dist"),
    clean: true,
    // writes to disk  ./dist/main.js , ./dist/math.js 생성
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
              presets: [["@babel/preset-env", { targets: "defaults" }]],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(jpg | png)$/,
        loader: "file-loader",
        options: {
          sourceMap: true,
        },
        // use: ["file-loader"],
      },
      // {
      //   test: /\.(js|tsx|jsx)$/,
      //   use: path.resolve(__dirname, "src", "cityLoader"),
      //   // use: path.resolve("./src/cityLoader"), 이렇게도 가능
      //   // use: "./src/cityLoader.js",
      // },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash].css",
    }),
  ],
};
