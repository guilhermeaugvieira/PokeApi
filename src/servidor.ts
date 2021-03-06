import express, { Request, Response } from "express";
import { rotas } from './config.routes';
import cors from 'cors';

const servidor = express();

servidor.use(express.json());
servidor.use(express.urlencoded({extended: false}));
servidor.use(cors());
servidor.use("/api/", rotas);

servidor.get("/", (requisicao: Request, resposta: Response) => {
  resposta.send("Servidor funcionando");
});

export { servidor };
