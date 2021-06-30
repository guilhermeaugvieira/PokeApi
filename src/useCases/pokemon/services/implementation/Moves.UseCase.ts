import { getRepository} from 'typeorm';
import { IResponse_Pokemon } from "../../../../shared/DTO/Pokemon.DTO"
import { IMoves } from '../interface/IPokemon.services';
import { Pokemons } from '../../../../entity/Pokemons';
import { Moves } from '../../../../entity/Moves';
import { Pokemons_Moves } from '../../../../entity/Pokemons_Moves';
import { MoveLearnMethod } from '../../../../entity/MoveLearnMethod';
import { VersionGroups } from '../../../../entity/VersionGroup';
import { VersionGroupDetails } from '../../../../entity/VersionGroupDetails';


export class MovesUseCase implements IMoves {
  execute = async (resultPokeApi: IResponse_Pokemon, registroPokemon: Pokemons): Promise<void> => {    
    for(const moveSelected of resultPokeApi.moves){
      const registroMove = new Moves();
      registroMove.id = +moveSelected.move.url.split('/')[6];
      registroMove.name = moveSelected.move.name;

      const countMoves = await getRepository(Moves).count({where: {id: registroMove.id}})

      if(countMoves === 0) await getRepository(Moves).save(registroMove);        

      const registroPokemonMove = new Pokemons_Moves();
      registroPokemonMove.move = registroMove;
      registroPokemonMove.pokemon = registroPokemon;

      const savePokemonMove = await getRepository(Pokemons_Moves).save(registroPokemonMove);

      for(const vgd_result of moveSelected.version_group_details){
        const registroMoveLearnMethod = new MoveLearnMethod();
        registroMoveLearnMethod.id = +vgd_result.move_learn_method.url.split('/')[6];
        registroMoveLearnMethod.name = vgd_result.move_learn_method.name;

        const countMoveLearnMethod = await getRepository(MoveLearnMethod).count({where: {id: registroMoveLearnMethod.id}});

        if(!countMoveLearnMethod){
          await getRepository(MoveLearnMethod).save(registroMoveLearnMethod);
        }

        const registroVersionGroup = new VersionGroups();
        registroVersionGroup.id = +vgd_result.version_group.url.split('/')[6];
        registroVersionGroup.name = vgd_result.version_group.name;

        const countVersionGroups = await getRepository(VersionGroups).count({where: {id: registroVersionGroup.id}});

        if(countVersionGroups === 0) await getRepository(VersionGroups).save(registroVersionGroup);

        const registroVersionGroupDetails = new VersionGroupDetails()
        registroVersionGroupDetails.levelLearnedAt = vgd_result.level_learned_at;
        registroVersionGroupDetails.moveLearnMethod = registroMoveLearnMethod;
        registroVersionGroupDetails.versionGroup = registroVersionGroup;
        registroVersionGroupDetails.pokemonMoves = savePokemonMove;

        const countVersionGroupDetails = await getRepository(VersionGroupDetails).count({where: {
          moveLearnMethod: registroVersionGroupDetails.moveLearnMethod,
          versionGroup: registroVersionGroupDetails.versionGroup,
          pokemonMoves: registroVersionGroupDetails.pokemonMoves,
        }});

        if(countVersionGroupDetails === 0) await getRepository(VersionGroupDetails).save(registroVersionGroupDetails);        
      }
    }    
  }
}