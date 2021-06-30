import { getRepository} from 'typeorm';
import { IResponse_Pokemon } from "../../../../shared/DTO/Pokemon.DTO"
import { IAbilities } from '../interface/IPokemon.services';
import { Abilities } from '../../../../entity/Abilities';
import { Pokemons } from '../../../../entity/Pokemons';
import { Pokemons_Abilities } from '../../../../entity/Pokemons_Abilities';

export class AbilitiesUseCase implements IAbilities {
  execute = async (resultPokeApi: IResponse_Pokemon, registroPokemon: Pokemons): Promise<void> => {
    for(const ability of resultPokeApi.abilities){
      const registroAbility = new Abilities()
      registroAbility.id = +ability.ability.url.split('/')[6];
      registroAbility.name = ability.ability.name;
      
      const countAbility = await getRepository(Abilities).count({where: {id: registroAbility.id}});

      if(countAbility === 0) await getRepository(Abilities).save(registroAbility);

      const registroPokemonAbilities = new Pokemons_Abilities();
      registroPokemonAbilities.hidden = ability.is_hidden;
      registroPokemonAbilities.slot = ability.slot;
      registroPokemonAbilities.abilities = registroAbility;
      registroPokemonAbilities.pokemons = registroPokemon;

      const countpokemonAbilities = await getRepository(Pokemons_Abilities).count({where: {pokemons: registroPokemon, abilities: registroAbility}});

      if(countpokemonAbilities === 0) await getRepository(Pokemons_Abilities).save(registroPokemonAbilities);
    }
  }
}