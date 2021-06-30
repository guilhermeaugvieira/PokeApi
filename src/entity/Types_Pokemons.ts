import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToMany, ManyToOne } from 'typeorm';
import { Pokemons } from './Pokemons';
import { PokemonTypes } from './PokemonTypes';

@Entity({name: 'tbl__types__pokemons'})
export class Types_Pokemons{
  @PrimaryGeneratedColumn({name: 'tp_id'})
  id: number;

  @Column({name: 'tp_slot', nullable: false})
  slot: number;

  @ManyToOne(() => PokemonTypes, pt => pt.pokemons)
  type: PokemonTypes;

  @ManyToOne(() => Pokemons, pokemons => pokemons.types)
  pokemon: Pokemons;
}