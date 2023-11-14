const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

const config = (env, args) =>
  merge(commonConfig(env, args), {
    mode: "production",
  });

module.exports = config;
