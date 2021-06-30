import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Pokemons } from './Pokemons';
import { Versions } from './Versions';

@Entity({name: 'tbl__game_indices'})
export class GameIndices{
  @PrimaryGeneratedColumn({name: 'gi_id'})
  id: number;

  @Column({name: 'gi_game_index', nullable: false})
  gameIndex: number;

  @ManyToOne(() => Versions, version => version.gameIndices)
  version: Versions;

  @ManyToOne(() => Pokemons, pokemon => pokemon.gameIndices)
  pokemon: Pokemons;
}