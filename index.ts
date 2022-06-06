import express from "express";
// const express = require("express");

import {calculator} from "./calculate";


const app = express();


app.get("/ping", (_req, res) => {
  res.send("pong");
});

app.post("/calculate", (req, res) => {
  const {value1, value2, op} = req.body;

  const result = calculator(value1, value2, op);
  res.send(result);
});

const PORT = 3303;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

