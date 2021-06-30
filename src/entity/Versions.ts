import { Entity, Column, OneToMany } from 'typeorm';
import { GameIndices } from './GameIndices';
import { VersionDetails } from './VersionDetails';

@Entity({name: 'tbl__versions'})
export class Versions{
  @Column({name: 'version_id', primary: true})
  id: number;

  @Column({name: "version_name", length: 30, nullable: false})
  name: string;

  @OneToMany(() => GameIndices, gi => gi.version)
  gameIndices: GameIndices[];

  @OneToMany(() => VersionDetails, vd => vd.version)
  versionDetail: VersionDetails[];
}