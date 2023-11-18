new Promise<void>((res) =>
  setTimeout(() => {
    console.log("[Timer]");
    res();
  }, 1000)
);

Promise.resolve().finally();
