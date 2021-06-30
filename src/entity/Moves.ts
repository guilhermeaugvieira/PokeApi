import { Entity, Column, OneToMany } from 'typeorm';
import { Pokemons_Moves } from './Pokemons_Moves';

@Entity({name: 'tbl__moves'})
export class Moves{

  @Column({name: 'move_id', primary: true})
  id: number;

  @Column({name: 'move_name', nullable: false, length: 30})
  name: string;

  @OneToMany(() => Pokemons_Moves, pm => pm.move)
  pokemons: Pokemons_Moves[];
}