import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';
import { Abilities } from './Abilities';
import { Pokemons } from './Pokemons';

@Entity({name: 'tbl__pokemons__abilities'})
export class Pokemons_Abilities{
  @PrimaryGeneratedColumn({name: 'pa_id'})
  id: number;

  @Column({name: 'pa_hidden', nullable: false})
  hidden: boolean;

  @Column({name: 'pa_slot', nullable: false})
  slot: number;

  @ManyToOne(() => Abilities, abilities => abilities.pokemons)
  abilities: Abilities;

  @ManyToOne(() => Pokemons, pokemons => pokemons.pokemon)
  pokemons: Pokemons;
}