"use strict";

require("core-js/modules/es7.promise.finally.js");
new Promise(res => setTimeout(() => {
  console.log("[Timer]");
  res();
}, 1000));
Promise.resolve().finally();