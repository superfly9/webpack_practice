module.exports = (contents) => {
  // conents: 번들링 대상인 js파일들의 소스코드
  console.log("[WEBPACK CUSTOM LOADER]:", contents);
  return contents;
};
