import { Stats } from './Stats';
import { Entity, Column, OneToMany } from 'typeorm';
import { GameIndices } from './GameIndices';
import { HeldItems } from './HeldItems';
import { Pokemons_Abilities } from './Pokemons_Abilities';
import { Pokemons_Moves } from './Pokemons_Moves';
import { Types_Pokemons } from './Types_Pokemons';

@Entity({name: 'tbl__pokemons'})
export class Pokemons{
  
  @Column({name: "pokemon_id", primary: true})
  id: number;

  @Column({name: "pokemon_base_experience", nullable: false})
  baseExperience: number;

  @Column({name: "pokemon_height", nullable: false})
  height: number;

  @Column({name: "pokemon_default", nullable: false})
  isDefault: boolean;

  @Column({name: "pokemon_name", length: 30, nullable: false})
  name: string;

  @Column({name: "pokemon_order", nullable: false})
  order: number;

  @Column({name: "pokemon_weight", nullable: false})
  weight: number;

  @OneToMany(() => Pokemons_Abilities, pa => pa.pokemons)
  pokemon: Pokemons_Abilities[];

  @OneToMany(() => HeldItems, hi => hi.pokemon)
  heldItem: HeldItems[];

  @OneToMany(() => Pokemons_Moves, pm => pm.pokemon)
  moves: Pokemons_Moves[];

  @OneToMany(() => Types_Pokemons, tp => tp.pokemon)
  types: Types_Pokemons[];

  @OneToMany(() => GameIndices, gi => gi.pokemon)
  gameIndices: GameIndices[]

  @OneToMany(() => Stats, stats => stats.pokemon)
  stats: Stats[];
}