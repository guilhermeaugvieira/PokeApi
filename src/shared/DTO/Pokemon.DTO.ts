// Interfaces necessárias Response
export interface IResponse_Pokemon {
  abilities: IResponse_Abilities[],
  base_experience: number,
  game_indices: IResponse_GameIndices[],
  height: number,
  held_items: IResponse_HeldItems[],
  id: number,
  is_default: boolean,
  moves: IResponse_Moves[],
  name: string,
  order: number,
  sprites: IResponse_Sprite,
  stats: IResponse_Stats[],
  types: IResponse_Types[],
  weight: number,
}

interface IResponse_Abilities {
  ability: IResponse_Ability,
  is_hidden: boolean,
  slot: number,
}

interface IResponse_Ability{
  name: string,
  url: string,
}

interface IResponse_GameIndices{
  game_index: number,
  version: IResponse_Version,
}

interface IResponse_Version{
  name: string,
  url: string,
}

interface IResponse_HeldItems{
  item: IResponse_PokemonItem,
  version_details: IResponse_VersionDetails[],
}

interface IResponse_PokemonItem{
  name: string,
  url: string,
}

interface IResponse_VersionDetails{
  rarity: number,
  version: IResponse_Version,
}

interface IResponse_Moves{
  move: IResponse_Move,
  version_group_details: IResponse_VersionGroupDetails[],
}

interface IResponse_Move{
  name: string,
  url: string,
}

interface IResponse_VersionGroupDetails{
  level_learned_at: number,
  move_learn_method: IResponse_MoveLearnMethod,
  version_group: IResponse_VersionGroup,
}

interface IResponse_MoveLearnMethod{
  name: string,
  url: string,
}

interface IResponse_VersionGroup{
  name: string,
  url: string,
}

interface IResponse_Sprite{
  back_default: string,
  back_female: string,
  back_shiny: string,
  back_shiny_female: string,
  front_default: string,
  front_female: string,
  front_shiny: string,
  front_shiny_female: string,
}

interface IResponse_Stats{
  base_stat: number,
  effort: number,
  stat: IResponse_StatsItem,
}

interface IResponse_StatsItem{
  name: string,
  url: string,
}

interface IResponse_Types{
  slot: number,
  type: IResponse_PokemonType
}

interface IResponse_PokemonType{
  name: string,
  url: string,
}

// Interfaces necessárias para a resposta
export interface IRequest_Pokemon{
  abilities?: IRequest_Abilities[],
  baseExperience?: number,
  gameIndices?: IRequest_GameIndices[],
  height?: number,
  heldItems?: IRequest_HeldItems[],
  id?: number,
  isDefault?: boolean,
  moves?: IRequest_Moves[],
  name?: string,
  order?: number,
  sprites?: IRequest_Sprites,
  stats?: IRequest_Stats[],
  types?: IRequest_Types[],
  weight?: number,
}

export interface IRequest_Abilities{
  ability?: number,
  hidden?: boolean,
  slot?: number,  
}

export interface IRequest_GameIndices{
  gameIndex?: number,
  version?: number,
}

export interface IRequest_HeldItems{
  item?: number,
  versionDetails?: IRequest_VersionDetails[],
}

export interface IRequest_VersionDetails{
  rarity?: number,
  version?: number,
}

export interface IRequest_Moves{
  move?: number,
  versionGroupDetails?: IRequest_VersionGroupDetails[],
}

export interface IRequest_VersionGroupDetails{
  levelLearnedAt?: number,
  moveLearnMethod?: number,
  versionGroup?: number,
}

export interface IRequest_Sprites{
  backDefault?: string,
  backFemale?: string,
  backShiny?: string,
  backShinyFemale?: string,
  frontDefault?: string,
  frontFemale?: string,
  frontShiny?: string,
  frontShinyFemale?: string,
}

export interface IRequest_Stats{
  baseStat?: number,
  effort?: number,
  stat?: number,
}

export interface IRequest_Types{
  slot?: number,
  type?: number,
}