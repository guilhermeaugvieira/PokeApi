import { getRepository} from 'typeorm';
import { IResponse_Pokemon } from "../../../../shared/DTO/Pokemon.DTO"
import { ISprites } from '../interface/IPokemon.services';
import { Pokemons } from '../../../../entity/Pokemons';
import { Sprites } from '../../../../entity/Sprites';

export class SpritesUseCase implements ISprites {
  execute = async (resultPokeApi: IResponse_Pokemon, registroPokemon: Pokemons): Promise<void> => {    
    const registroSprites = new Sprites();
    registroSprites.backDefault = resultPokeApi.sprites.back_default;
    registroSprites.backFemale = resultPokeApi.sprites.back_female;
    registroSprites.backShiny = resultPokeApi.sprites.back_shiny;
    registroSprites.backShinyfemale = resultPokeApi.sprites.back_shiny_female;
    registroSprites.frontDefault = resultPokeApi.sprites.front_default;
    registroSprites.frontFemale = resultPokeApi.sprites.front_female;
    registroSprites.frontShiny = resultPokeApi.sprites.front_shiny;
    registroSprites.frontShinyFemale= resultPokeApi.sprites.front_shiny_female;
    registroSprites.id = registroPokemon;

    const countSprites = await getRepository(Sprites).count({where: {id: registroSprites.id}});

    if(countSprites === 0) await getRepository(Sprites).save(registroSprites);
  }
}