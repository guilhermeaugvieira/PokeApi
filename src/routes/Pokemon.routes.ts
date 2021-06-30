import { celebrate, Segments, Joi, errors } from "celebrate";
import { Router } from 'express';
import { PokemonController } from "../useCases/pokemon/controller/Pokemon.controller";

const rotasPokemon = Router();

const controladorPokemon = new PokemonController();

rotasPokemon.post("/:id", controladorPokemon.ler);

rotasPokemon.use(errors());

export { rotasPokemon };