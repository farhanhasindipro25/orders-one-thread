import express, { Application } from "express";
const app: Application = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("");
});

export default app;
