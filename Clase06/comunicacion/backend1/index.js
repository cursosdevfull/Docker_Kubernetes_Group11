const express = require("express");
const cors = require("cors");
const axios = require("axios");

const pathBackend2 =
  process.env.SERVICE_BACKEND2 || "http://localhost:9020/api/message";

const app = express();

app.use(cors());

app.get("/healthcheck", (req, res) => {
  res.send("ok");
});

app.get("/api/message", async (req, res) => {
  const messageFromBackend2 = await axios.get(pathBackend2);
  // {"message2":"Hola desde el backend 2"}

  res.json({
    message1: "Hola desde el backend 1",
    ...messageFromBackend2.data,
  });
  // { message1: "Hola desde el backend 1", "message2":"Hola desde el backend 2"}
});

const PORT = process.env.PORT || 9010;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
