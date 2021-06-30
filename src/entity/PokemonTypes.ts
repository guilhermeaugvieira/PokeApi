import { Entity, Column, OneToMany } from 'typeorm';
import { Types_Pokemons } from './Types_Pokemons';

@Entity({name: 'tbl__pokemon_types'})
export class PokemonTypes{
  @Column({name: 'pt_id', primary: true})
  id: number;

  @Column({name: 'pt_name', nullable: false, length: 20})
  name: string;

  @OneToMany(() => Types_Pokemons, tp => tp.type)
  pokemons: Types_Pokemons[];
}