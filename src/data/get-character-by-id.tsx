import { OneCharacter } from "../interfaces/one-character";


export const getCharactersById = async(id: number): Promise<OneCharacter> => {

    const url = `https://rickandmortyapi.com/api/character/${id}`;
    const res = await fetch(url);
    const data = await res.json();
  
    console.log(data);
  
    return data
}