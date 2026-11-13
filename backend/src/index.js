import express from "express";
import cors from "cors";
import { z } from "zod";
import bcrypt from "bcrypt";
import pool from "./db/pool.js";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3000;
const saltRounds = Number(process.env.HASH) || 12;

app.use(cors());
app.use(express.json());

const SchemaCadastro = z.object({
  email: z.string().email(),
  name: z.string().min(3),
  password: z.string().min(5),
});

const SchemaLogin = z.object({
  name: z.string().min(3),
  password: z.string().min(5),
});

app.post("/cadastro", async (req, res) => {
  try {
    const resultado = SchemaCadastro.safeParse(req.body);

    if (!resultado.success) {
      return res.status(400).json({ error: "Requisição invalida" });
    }

    const data = resultado.data;

    const hash = await bcrypt.hash(data.password, saltRounds);

    const registrarBanco = await pool.query(
      "INSERT INTO tbUser (email, name, hash) VALUES ($1, $2, $3)",
      [data.email, data.name, hash],
    );

    return res.status(201).json({ message: "Usuario registrado com sucesso" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
});

app.post("/login", async (req, res) => {
  const resultado = SchemaLogin.safeParse(req.body);

  if (!resultado.success) {
    return res.status(400).json({ error: "Requisição invalida" });
  }

  const dados = resultado.data;

  const consulta = await pool.query("SELECT * FROM tbUser WHERE name = $1", [
    dados.name,
  ]);

  if (consulta.rowCount === 0) {
    return res.status(404).json({ error: "Usuario não encontrado" });
  }

  const usuario = consulta.rows[0];

  const verificarSenha = await bcrypt.compare(dados.password, usuario.hash);

  if (!verificarSenha) {
    return res.status(400).json({ Senha: "Incorreta" });
  }
});

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.get("/", (req, res) => {
  res.json({ Server: "Rodando" });
});

app.listen(port, () => {
  console.log(`Server Rodando na Porta: ${port}`);
});
