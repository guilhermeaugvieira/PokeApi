import { celebrate, errors, Joi, Segments } from "celebrate";
import { Router } from 'express';
import { PokemonController } from "../useCases/pokemon/controller/Pokemon.controller";

const rotasPokemon = Router();

const controladorPokemon = new PokemonController();

rotasPokemon.post("/:id", celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required().min(1).max(898),
  }),
}), controladorPokemon.ler);

rotasPokemon.use(errors());

export { rotasPokemon };