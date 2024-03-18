const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/healthcheck", (req, res) => {
  res.send("ok");
});

app.get("/api/message", (req, res) => {
  res.json({ message2: "Hola desde el backend 2" });
});

const PORT = process.env.PORT || 9020;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
