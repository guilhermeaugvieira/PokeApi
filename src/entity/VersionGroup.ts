import { Entity, Column, OneToMany } from 'typeorm';
import { VersionGroupDetails } from './VersionGroupDetails';

@Entity({name: 'tbl__version_group'})
export class VersionGroups{

  @Column({name: 'vg_id', primary: true})
  id: number;

  @Column({name: 'vg_name', nullable: false, length: 30})
  name: string;

  @OneToMany(() => VersionGroupDetails, vgd => vgd.versionGroup)
  versionGroupDetails: VersionGroupDetails[];
}