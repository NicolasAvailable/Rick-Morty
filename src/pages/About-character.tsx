import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


import { OneCharacter } from '../interfaces/one-character';

export default function AboutCharacter() {

  // manejar el error de si es undefined
  const {id} = useParams();

  const [character, setCharacter] = useState<OneCharacter>()
  useEffect(() => {
    async function getCharacterNow() {
      const fetchUrl = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const data = await fetchUrl.json();
      setCharacter(data)
      return 
    }
    getCharacterNow()
  }, [character])
  


  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/characters');
  };

  return (
    <div className="min-h-screen md:h-screen w-full grid grid-rows-2 md:grid md:grid-cols-2 md:grid-rows-1 justify-center items-center bg-gradient-to-b 
    from-teal-100 to-cyan-600">
      <div className="col-span-1 flex justify-center items-center">
        <img className="h-60 w-64 md:w-96 my-8 rounded-xl" src={character?.image} alt={character?.name} />
      </div>
      <div className="col-span-1 h-64 w-80">
        <div className="h-12 w-full flex justify-center">
          <h3 className="text-3xl font-extrabold">{character?.name}</h3>
        </div>
        <ul className="h-36 grid grid-cols-2 content-center w-full text-lg pb-4">
          <li> <strong>Gender:</strong> {character?.gender} </li>
          <li> <strong>Sprecie:</strong> {character?.species} </li>
          <li> <strong>Status:</strong> {character?.status} </li>
          <li> <strong>From:</strong> {character?.origin.name} </li>
        </ul>
        <div className='h-14 w-full'>
        <button className='h-11 w-full flex justify-center items-center text-cyan-600 bg-white 
        hover:bg-transparent hover:text-white hover:border-2 hover:border-white rounded-3xl 
        transition duration-300 font-extrabold' 
        onClick={handleGoBack}>Go back</button>
        </div>
      </div>
    </div>
  )
}
