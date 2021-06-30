import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, ManyToOne } from 'typeorm';
import { PokemonItems } from './PokemonItems';
import { Pokemons } from './Pokemons';
import { VersionDetails } from './VersionDetails';

@Entity({name: 'tbl__held_items'})
export class HeldItems{
  @PrimaryGeneratedColumn({name: 'hi_id'})
  id: number;

  @ManyToOne(() => PokemonItems, pi => pi.heldItems)
  pokemonItem: PokemonItems;

  @ManyToOne(() => Pokemons, pokemon => pokemon.heldItem)
  pokemon: Pokemons;

  @OneToMany(() => VersionDetails, vd => vd.heldItem)
  versionDetails: VersionDetails[];
}