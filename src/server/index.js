const express = require("express");

const app = express();

const PORT = 3000;
app.use("/", express.static("dist"));

app.get("/", (req, res) => {
  res.send("Index.html");
});

app.listen(PORT, () => console.log(`Working in ${PORT}`));
