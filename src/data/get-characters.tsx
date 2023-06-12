import { Characters } from "../interfaces/characters";

// TODO: Guardar la url en algun archivo env
export const getCharacters = async() => {

  const url = 'https://rickandmortyapi.com/api/character';
  const res = await fetch(url);
  const data = await res.json();

  return data
}





