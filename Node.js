const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.get("/proxy", async (req, res) => {
  const url = req.query.url;
  try {
    const response = await fetch(url);
    const text = await response.text();
    res.set("Access-Control-Allow-Origin", "*");
    res.send(text);
  } catch (e) {
    res.status(500).send("Error fetching URL");
  }
});

app.listen(3000);
