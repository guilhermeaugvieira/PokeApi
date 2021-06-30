import { Entity, Column, OneToMany } from 'typeorm';
import { VersionGroupDetails } from './VersionGroupDetails';

@Entity({name: 'tbl__move_learn_method'})
export class MoveLearnMethod{

  @Column({name: 'mlm_id', primary: true})
  id: number;

  @Column({name: 'mlm_name', nullable: false, length: 30})
  name: string;

  @OneToMany(() => VersionGroupDetails, vgd => vgd.moveLearnMethod)
  versionGroupDetails: VersionGroupDetails[];

}