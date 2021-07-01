import { getRepository} from 'typeorm';
import { IResponse_Pokemon } from "../../../../shared/DTO/Pokemon.DTO"
import { IStats } from '../interface/IPokemon.services';
import { Pokemons } from '../../../../entity/Pokemons';
import { StatsItems } from '../../../../entity/StatsItems';
import { Stats } from '../../../../entity/Stats';


export class StatsUseCase implements IStats {
  execute = async (resultPokeApi: IResponse_Pokemon, registroPokemon: Pokemons): Promise<void> => {    
    for(const statsSelected of resultPokeApi.stats){
      const registroStatsItem = new StatsItems();
      registroStatsItem.id = +statsSelected.stat.url.split('/')[6];
      registroStatsItem.name = statsSelected.stat.name;

      const countStatItems = await getRepository(StatsItems).count({where: {id: registroStatsItem.id}});
      if(countStatItems === 0) await getRepository(StatsItems).save(registroStatsItem);

      const registroStats = new Stats();
      registroStats.baseStat = statsSelected.base_stat;
      registroStats.effort = statsSelected.effort;
      registroStats.statsItem = registroStatsItem;
      registroStats.pokemon = registroPokemon;

      const countStats = await getRepository(Stats).count({where: {pokemon: registroStats.pokemon, statsItem: registroStats.statsItem}});
      if(countStats === 0) await getRepository(Stats).save(registroStats);
    }
  }
}