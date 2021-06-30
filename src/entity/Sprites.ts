import { Entity, Column, OneToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { Pokemons } from './Pokemons';

@Entity({name: "tbl__sprites"})
export class Sprites{
  
  @Column({name: 'sprite_back_default', nullable: true, length: 100})
  backDefault: string;

  @Column({name: 'sprite_back_female', nullable: true, length: 100})
  backFemale: string;

  @Column({name: 'sprite_back_shiny', nullable: true, length: 100})
  backShiny: string;

  @Column({name: 'sprite_back_shiny_female', nullable: true, length: 100})
  backShinyfemale: string;

  @Column({name: 'sprite_front_default', nullable: true, length: 100})
  frontDefault: string;

  @Column({name: 'sprite_front_female', nullable: true, length: 100})
  frontFemale: string;

  @Column({name: 'sprite_front_shiny', nullable: true, length: 100})
  frontShiny: string;

  @Column({name: 'sprite_front_shiny_female', nullable: true, length: 100})
  frontShinyFemale: string;

  @OneToOne(() => Pokemons, {primary: true, cascade: true})
  @JoinColumn({name: 'fk_pokemon_id'})
  id: Pokemons;
}