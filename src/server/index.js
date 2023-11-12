const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;
app.use("/", express.static("dist"));

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "../", "../", "dist", "index.html");
  res.sendFile(filePath);
});

app.listen(PORT, () => console.log(`Working in ${PORT}`));
