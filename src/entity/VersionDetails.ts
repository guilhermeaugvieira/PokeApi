import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne} from 'typeorm';
import { HeldItems } from './HeldItems';
import { Versions } from './Versions';

@Entity({name: 'tbl__version_details'})
export class VersionDetails{
  @PrimaryGeneratedColumn({name: 'vd_id'})
  id: number;

  @Column({name: 'vd_rarity', nullable: false})
  rarity: number;

  @ManyToOne(() => HeldItems, hi => hi.versionDetails)
  heldItem: HeldItems;

  @ManyToOne(() => Versions, version => version.versionDetail)
  version: Versions;
}