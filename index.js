// import { createClient } from "redis";

const express = require("express");
const redis = require("redis");

const app = express();
const PORT = 8081;

const client = redis.createClient({
  host: "redis-server",
  port: 6379,
});

client.set("visits", 0);

app.get("/", (req, res) => {
  client.get("visits", (err, visits) => {
    res.send("Number of visits is " + visits);
    client.set("visits", parseInt(visits) + 1);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
