"use strict";

new Promise(function (res) {
  return setTimeout(function () {
    console.log("[Timer]");
    res();
  }, 1000);
});
Promise.resolve()["finally"]();