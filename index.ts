import express from "express";
// const express = require("express");

import {calculator} from "./calculate";


const app = express();


app.get("/ping", (_req, res) => {
  res.send("pong");
});

app.post("/calculate", (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { value1, value2, op } = req.body;
  if (!value1 || isNaN(Number(value1))) {
    return res.send({error: "value1 is not a valid number"}).status(400);
  }

  if (!value2 || isNaN(Number(value2))) {
    return res.send({error: "value2 is not a valid number"}).status(400);
  }

  const validOperations = ["add", "multiply", "divide"];
  if (!validOperations.includes(String(op))) {
    return res.send({error: "Selected operation is not valid"}).status(400);
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const result = calculator(Number(value1), Number(value2), op);
  return res.send(result);
});

const PORT = 3303;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

