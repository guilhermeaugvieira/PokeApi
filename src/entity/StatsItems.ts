import { Stats } from './Stats';
import { Entity, Column, OneToMany } from 'typeorm';

@Entity({name: 'tbl__stats_items'})
export class StatsItems{

  @Column({name: 'si_id', primary: true})
  id: number;

  @Column({name: 'si_name', length: 30, nullable: false})
  name: string;

  @OneToMany(() => Stats, stats => stats.statsItem)
  stats: Stats[];
}
