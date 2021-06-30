import { Entity, Column, OneToMany } from 'typeorm';
import { Pokemons_Abilities } from './Pokemons_Abilities';

@Entity({name: "tbl__abilities"})
export class Abilities{
  @Column({name: "ability_id", primary: true})
  id: number;

  @Column({name: "ability_name", length: 30, nullable: false})
  name: string;

  @OneToMany(() => Pokemons_Abilities, pa => pa.abilities)
  pokemons: Pokemons_Abilities[];
}