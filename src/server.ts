import express from "express";
import "reflect-metadata";
import './database';

const app = express();
const PORT = 8081;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT} !!`);
});
