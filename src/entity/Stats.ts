import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Pokemons } from './Pokemons';
import { StatsItems } from './StatsItems';

@Entity({name: 'tbl__stats'})
export class Stats{
  @PrimaryGeneratedColumn({name: 'stats_id'})
  id: number;

  @Column({name: 'stats_base_stat', nullable: false})
  baseStat: number;

  @Column({name: 'stats_effort', nullable: false})
  effort: number;

  @ManyToOne(() => StatsItems, statsItems => statsItems.stats)
  statsItem: StatsItems;

  @ManyToOne(() => Pokemons, pokemon => pokemon.stats)
  pokemon: Pokemons;
}