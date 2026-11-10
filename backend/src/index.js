import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import pool from "./db/pool.js";
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 3000;
const saltRounds = process.env.HASH || 12

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
})

app.get('/', (req, res) => {
    res.json({Server: "Rodando"})
})

app.listen(port, () => {
  console.log(`Server Rodando na Porta: ${port}`);
})