const path = require("path");
module.exports = {
  mode: "development",
  entry: {
    main: "/src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(process.cwd(), "dist"),
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
    ],
  },
};
