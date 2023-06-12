import { Characters } from "../interfaces/characters";


export const getCharactersByName = async(name: string): Promise<Characters> => {

  const url = `https://rickandmortyapi.com/api/character/?name=${name}`;
  const res = await fetch(url);
  const data = await res.json();

  console.log(data);

  return data
} 