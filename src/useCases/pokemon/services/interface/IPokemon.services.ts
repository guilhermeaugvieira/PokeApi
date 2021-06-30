import { Pokemons } from "../../../../entity/Pokemons";
import {
  IResponse_Pokemon,
} from "../../../../shared/DTO/Pokemon.DTO";

export interface IPokeApi {
  execute(id: number): Promise<IResponse_Pokemon>
}

export interface IPokemon {
  execute(resultadoPokeApi: IResponse_Pokemon): Promise<Pokemons>;
}

export interface IAbilities {
  execute(resultadoPokeApi: IResponse_Pokemon, registroPokemon: Pokemons): Promise<void>;
}

export interface IGameIndices {
  execute(resultadoPokeApi: IResponse_Pokemon, registroPokemon: Pokemons): Promise<void>;
}

export interface IHeldItems {
  execute(resultadoPokeApi: IResponse_Pokemon, registroPokemon: Pokemons): Promise<void>;
}
export interface IMoves {
  execute(resultadoPokeApi: IResponse_Pokemon, registroPokemon: Pokemons): Promise<void>;
}

export interface IPokemonTypes {
  execute(resultadoPokeApi: IResponse_Pokemon, registroPokemon: Pokemons): Promise<void>;
}

export interface ISprites {
  execute(resultadoPokeApi: IResponse_Pokemon, registroPokemon: Pokemons): Promise<void>;
}

export interface IStats {
  execute(resultadoPokeApi: IResponse_Pokemon, registroPokemon: Pokemons): Promise<void>;
}


