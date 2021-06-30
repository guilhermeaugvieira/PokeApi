import axios from "axios";
import { IResponse_Pokemon } from "../../../../shared/DTO/Pokemon.DTO";
import { IPokeApi } from "../interface/IPokemon.services";

export class PokeApiUseCase implements IPokeApi{
  async execute(id: number): Promise<IResponse_Pokemon> {
    const {data: dadosPokeApi} = await axios.get<IResponse_Pokemon>(`${process.env.API_ENDERECO}pokemon/${id}`);

    return dadosPokeApi;
  }

}