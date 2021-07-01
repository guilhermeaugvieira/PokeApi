import { getRepository} from 'typeorm';
import { IResponse_Pokemon } from "../../../../shared/DTO/Pokemon.DTO"
import { IHeldItems, IPokemon } from '../interface/IPokemon.services';
import { Pokemons } from '../../../../entity/Pokemons';
import { Versions } from '../../../../entity/Versions';
import { PokemonItems } from '../../../../entity/PokemonItems';
import { HeldItems } from '../../../../entity/HeldItems';
import { VersionDetails } from '../../../../entity/VersionDetails';

export class HeldItemsUseCase implements IHeldItems {
  execute = async (resultPokeApi: IResponse_Pokemon, registroPokemon: Pokemons): Promise<void> => {        
    for(const heldItem of resultPokeApi.held_items){
      const registroPokemonItem = new PokemonItems();
      registroPokemonItem.id = +heldItem.item.url.split('/')[6];
      registroPokemonItem.name = heldItem.item.name;

      const countPokemonItem = await getRepository(PokemonItems).count({where: {id: registroPokemonItem.id}});
      if(countPokemonItem === 0) await getRepository(PokemonItems).save(registroPokemonItem);

      const registroHeldItem = new HeldItems();
      registroHeldItem.pokemon = registroPokemon;
      registroHeldItem.pokemonItem = registroPokemonItem;

      let saveHeldItem: HeldItems;
      const countHeldItem = await getRepository(HeldItems).count({where: {pokemon: registroPokemon, pokemonItem: registroPokemonItem}});
      if(countHeldItem === 0) saveHeldItem = await getRepository(HeldItems).save(registroHeldItem);
      else saveHeldItem = await getRepository(HeldItems).findOne({where: {pokemon: registroPokemonItem, pokemonItem: registroPokemonItem}});     

      for(const vd_result of heldItem.version_details){    
        const registroVersion = new Versions();
        registroVersion.id = +vd_result.version.url.split('/')[6];
        registroVersion.name = vd_result.version.name;

        const countVersion = await getRepository(Versions).count({where: {id: registroVersion.id}});        
        if(countVersion === 0) await getRepository(Versions).save(registroVersion);

        const registroVersionDetails = new VersionDetails();
        registroVersionDetails.rarity = vd_result.rarity;
        registroVersionDetails.version = registroVersion;
        registroVersionDetails.heldItem = saveHeldItem;

        const countVersionDetails = await getRepository(VersionDetails).count({where: {heldItem: registroVersionDetails.heldItem, version: registroVersionDetails.version}});
        if (countVersionDetails === 0) await getRepository(VersionDetails).save(registroVersionDetails);
      }
    }
  }
}