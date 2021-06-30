import { Router } from 'express';
import { rotasPokemon } from './routes/Pokemon.routes';

const rotas = Router();

rotas.use("/pokemon/", rotasPokemon);

export { rotas };
