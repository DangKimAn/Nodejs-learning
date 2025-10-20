console.log("hello i'm an ")



const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(__dirname)); // cho phép truy cập file index.html

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
