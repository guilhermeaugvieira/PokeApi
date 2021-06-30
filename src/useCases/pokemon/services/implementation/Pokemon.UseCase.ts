import { getRepository} from 'typeorm';
import { IResponse_Pokemon } from "../../../../shared/DTO/Pokemon.DTO"
import { IPokemon } from '../interface/IPokemon.services';
import { Pokemons } from '../../../../entity/Pokemons';


export class PokemonsUseCase implements IPokemon {
  execute = async (resultPokeApi: IResponse_Pokemon): Promise<Pokemons> => {
    let resultInsert: Pokemons = null;
    
    const registroPokemon = new Pokemons();
    registroPokemon.baseExperience = resultPokeApi.base_experience;
    registroPokemon.height = resultPokeApi.height;
    registroPokemon.id = resultPokeApi.id;
    registroPokemon.isDefault = resultPokeApi.is_default;
    registroPokemon.name = resultPokeApi.name;
    registroPokemon.order = resultPokeApi.order;
    registroPokemon.weight = resultPokeApi.weight;

    const countPokemons = await getRepository(Pokemons).count({where: {id: registroPokemon.id}});

    if(countPokemons === 0){
      resultInsert = await getRepository(Pokemons).save(registroPokemon);
    }

    return resultInsert;
  }
}