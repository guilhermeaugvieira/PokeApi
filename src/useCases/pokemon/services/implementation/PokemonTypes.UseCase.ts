import { getRepository} from 'typeorm';
import { IResponse_Pokemon } from "../../../../shared/DTO/Pokemon.DTO"
import { IPokemonTypes } from '../interface/IPokemon.services';
import { Pokemons } from '../../../../entity/Pokemons';
import { PokemonTypes } from '../../../../entity/PokemonTypes';
import { Types_Pokemons } from '../../../../entity/Types_Pokemons';


export class PokemonTypesUseCase implements IPokemonTypes {
  execute = async (resultPokeApi: IResponse_Pokemon, registroPokemon: Pokemons): Promise<void> => {    
    for(const typeSelected of resultPokeApi.types){
      const registroType = new PokemonTypes();
      registroType.id = +typeSelected.type.url.split('/')[6];
      registroType.name = typeSelected.type.name;

      const countPokemonTypes = await getRepository(PokemonTypes).count({where: {id: registroType.id}});
      if(countPokemonTypes === 0) await getRepository(PokemonTypes).save(registroType);

      const registroTypesPokemons = new Types_Pokemons();
      registroTypesPokemons.pokemon = registroPokemon;
      registroTypesPokemons.slot = typeSelected.slot;
      registroTypesPokemons.type = registroType;

      const countTypesPokemons = await getRepository(Types_Pokemons).count({where: {
        pokemon: registroTypesPokemons.pokemon,
        type: registroTypesPokemons.type,
      }});
      if(countTypesPokemons === 0) await getRepository(Types_Pokemons).save(registroTypesPokemons);
    }
  }
}