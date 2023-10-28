const config1 = {
  // 이러면 화살표 함수도 es5이하의 코드로 잘 바뀜 => preset이 잘 적용
  presets: ["@babel/preset-env"],
};

const config2 = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          edge: "17",
          firefox: "60",
          chrome: "67",
          safari: "11.1",
        },
        useBuiltIns: "usage",
        // core-js사용 여부 결정 => 이거 없으면 core-js를 Promise사용시 require('core-js')하지 않는다.
        // preset이 제대로 되지 않는것 같다.
      },
    ],
  ],
};
// // babel.config.js말고 json으로 하면 빌드시 caching 처리가 잘 된다
// // npx babel을 쓸 때나, webpack을 통해 babel-loader를 쓸 떄나 둘 다 출력된다.
// // 즉, config.js가 언제나 쓰인다.
console.log("config");
module.exports = config2;
