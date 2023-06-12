import { useEffect, useState } from 'react';

import Navbar from '../components/navbar';
import CharacterCard from '../components/Character-card';
import Pagination from '../components/Pagination';
import SearchNameContext from '../context/SearchNameContext';
import ErrorCard from '../components/ErrorCard';
import Footer from '../components/Footer';

import { Result } from '../interfaces/characters';
import { OneCharacter } from '../interfaces/one-character';

export default function Characters() {

  //Manejar los errores
  // guardar la url en env
  const [characters, setCharacters] = useState<Result[]>([]);
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>('');
  
  useEffect( () => {
    async function getCharactersNow() {
      try {
        const fetchUrl = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
        const data = await fetchUrl.json();
        setCharacters(data.results)
        return 
      } catch (error) {
        console.log(error);
      }
    }
    getCharactersNow()
  }, [page]);
  

  const characterFiltered = characters.filter( character => 
  character.name.toLowerCase().includes(search.toLowerCase()) );
  
  
  
  return (
    <SearchNameContext.Provider value={{search, setSearch}}>
      <div className="min-h-screen w-full flex flex-col bg-gradient-to-b from-teal-100 to-cyan-600">
        <div>
          <Navbar/>
        </div>
        <section className={`grid justify-center items-center
        ${characterFiltered.length === 0 ? `grid-cols-1` : `grid-cols-1 xl:grid-cols-4`} py-8 px-7`}>

          {characterFiltered.length === 0 
            ? <ErrorCard color='white' desc={'We could not find the character that you wanted. Try to write his name again!'}/> 
            : characterFiltered.map((character: OneCharacter) => (
            <CharacterCard key={character.id} character={character}/>
          ))}
        </section>
          {characterFiltered.length === 0 ? '' : <Pagination page={page} setPage={setPage}/> }
        <Footer/>
      </div>
    </SearchNameContext.Provider>
  );
}
