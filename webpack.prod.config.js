const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

const config = merge(commonConfig, {
  mode: "production",
});

module.exports = config;
