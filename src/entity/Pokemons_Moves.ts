import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, ManyToOne } from 'typeorm';
import { Moves } from './Moves';
import { Pokemons } from './Pokemons';
import { VersionGroupDetails } from './VersionGroupDetails';

@Entity({name: 'tbl__pokemons__moves'})
export class Pokemons_Moves{
  @PrimaryGeneratedColumn({name: 'pm_id'})
  id: number;

  @ManyToOne(() => Moves, moves => moves.pokemons)
  move: Moves;

  @ManyToOne(() => Pokemons, pokemons => pokemons.moves)
  pokemon: Pokemons;

  @OneToMany(() => VersionGroupDetails, vgd => vgd.pokemonMoves)
  versionGroupDetails: VersionGroupDetails[];
}

