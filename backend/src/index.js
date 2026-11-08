import express from "express";
import cors from "cors";
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 3000;

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