import { Entity, Column, OneToMany } from 'typeorm';
import { HeldItems } from './HeldItems';
import { Pokemons } from './Pokemons';

@Entity({name: 'tbl__pokemon_items'})
export class PokemonItems{

  @Column({name: 'pi_id', primary: true})
  id: number;

  @Column({name: 'pi_name', length: 30, nullable: false})
  name: string;

  @OneToMany(() => HeldItems, hi => hi.pokemonItem)
  heldItems: HeldItems[];
}