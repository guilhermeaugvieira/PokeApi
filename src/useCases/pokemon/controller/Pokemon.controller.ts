import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { GameIndices } from '../../../entity/GameIndices';
import { Pokemons } from '../../../entity/Pokemons';
import { AbilitiesUseCase } from '../services/implementation/Abilities.UseCase';
import { GameIndicesUseCase } from '../services/implementation/GameIndices.UseCase';
import { HeldItemsUseCase } from '../services/implementation/HeldItems.UseCase';
import { MovesUseCase } from '../services/implementation/Moves.UseCase';
import { PokeApiUseCase } from '../services/implementation/PokeApi.UseCase';
import { PokemonsUseCase } from '../services/implementation/Pokemon.UseCase';
import { PokemonTypesUseCase } from '../services/implementation/PokemonTypes.UseCase';
import { SpritesUseCase } from '../services/implementation/Sprites.UseCase';
import { StatsUseCase } from '../services/implementation/Stats.UseCase';

export class PokemonController {
  ler = async (requisicao: Request, resposta: Response): Promise<Response> => {
    const id = +requisicao.params.id;
    let dadosPokemon: Pokemons;
    let responseMessage;

    const _pokeApi = container.resolve(PokeApiUseCase);
    const dadosPokeApi = await _pokeApi.execute(id);

    if(!dadosPokeApi) {      
      try {
        // Recebe os dados do pokemon
        const _pokemon = container.resolve(PokemonsUseCase);
        dadosPokemon = await _pokemon.execute(dadosPokeApi);

        if(!dadosPokemon){
          const _abilities = container.resolve(AbilitiesUseCase);
          await _abilities.execute(dadosPokeApi, dadosPokemon);

          const _gameIndices = container.resolve(GameIndicesUseCase);
          await _gameIndices.execute(dadosPokeApi, dadosPokemon);
                    
          const _heldItems = container.resolve(HeldItemsUseCase);
          await _heldItems.execute(dadosPokeApi, dadosPokemon);

          const _moves = container.resolve(MovesUseCase);
          await _moves.execute(dadosPokeApi, dadosPokemon);
          
          const _sprites = container.resolve(SpritesUseCase);
          await _sprites.execute(dadosPokeApi, dadosPokemon);
          
          const _stats = container.resolve(StatsUseCase);
          await _stats.execute(dadosPokeApi, dadosPokemon);
          
          const _pokemonTypes = container.resolve(PokemonTypesUseCase);
          await _pokemonTypes.execute(dadosPokeApi, dadosPokemon);

          responseMessage = `Pokemon ${dadosPokemon.id}: ${dadosPokemon.name} incluído`;
        }
      } catch (error) {
        responseMessage = `Erro ao inserir o pokemon ${dadosPokemon.id}: ${dadosPokemon.name}`
        throw error;
      }
    }else{
      responseMessage = `Pokemon ${dadosPokemon.id} não encontrado`;
    }

    return resposta.json(responseMessage);
  }
}