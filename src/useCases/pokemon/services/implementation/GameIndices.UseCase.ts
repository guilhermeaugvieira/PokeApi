import { getRepository} from 'typeorm';
import { IResponse_Pokemon } from "../../../../shared/DTO/Pokemon.DTO"
import { IGameIndices } from '../interface/IPokemon.services';
import { Pokemons } from '../../../../entity/Pokemons';
import { Versions } from '../../../../entity/Versions';
import { GameIndices } from '../../../../entity/GameIndices';


export class GameIndicesUseCase implements IGameIndices {
  execute = async (resultPokeApi: IResponse_Pokemon, registroPokemon: Pokemons): Promise<void> => {  
    for(const gameIndex of resultPokeApi.game_indices){
      const registroVersion = new Versions();
      registroVersion.id = +gameIndex.version.url.split("/")[6];
      registroVersion.name = gameIndex.version.name;

      const countVersion = await getRepository(Versions).count({where: {id: registroVersion.id}})
      
      if(countVersion === 0) await getRepository(Versions).save(registroVersion);

      const registroGameIndices = new GameIndices();
      registroGameIndices.gameIndex = gameIndex.game_index;
      registroGameIndices.pokemon = registroPokemon;
      registroGameIndices.version = registroVersion;
      
      await getRepository(GameIndices).save(registroGameIndices);
    };
  }
}