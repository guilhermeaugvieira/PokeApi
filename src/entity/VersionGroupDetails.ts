import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { MoveLearnMethod } from "./MoveLearnMethod";
import { Pokemons_Moves } from "./Pokemons_Moves";
import { VersionGroups } from "./VersionGroup";

@Entity({name: 'tbl__version_group_details'})
export class VersionGroupDetails{
  
  @PrimaryGeneratedColumn({name: 'vgd_id'})
  id: number;

  @Column({name: 'vgd_level_learned_at', nullable: false})
  levelLearnedAt: number;

  @ManyToOne(() => Pokemons_Moves, pm => pm.versionGroupDetails)
  pokemonMoves: Pokemons_Moves;

  @ManyToOne(() => MoveLearnMethod, mlm => mlm.versionGroupDetails)
  moveLearnMethod: MoveLearnMethod;

  @ManyToOne(() => VersionGroups, vg => vg.versionGroupDetails)
  versionGroup: VersionGroups;
}