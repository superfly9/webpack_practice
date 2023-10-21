const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
    math: "./src/math.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve("dist"),
    // writes to disk  ./dist/main.js , ./dist/math.js 생성
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg | png)$/,
        loader: "file-loader",
        options: {
          sourceMap: true,
        },
        // use: ["file-loader"],
      },
      {
        test: /\.(js|tsx|jsx)$/,
        use: path.resolve(__dirname, "src", "cityLoader"),
        // use: path.resolve("./src/cityLoader"), 이렇게도 가능
        // use: "./src/cityLoader.js",
      },
    ],
  },
};
