const path = require("path");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

const config = (env, args) =>
  merge(commonConfig(env, args), {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
      port: 9000,
      static: {
        directory: path.resolve(__dirname, "dist"),
      },
      devMiddleware: {
        writeToDisk: true, // dev-server 실행시 빌드 결과물을 disk에 생성해주는 용도 (없으면 dist/ 생성 안 된다)
      },
      hot: true,
    },
  });

module.exports = config;
