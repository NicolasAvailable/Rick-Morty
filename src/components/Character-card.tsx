import React from 'react';
import { Link } from 'react-router-dom';
import { OneCharacter } from '../interfaces/one-character';

type CharacterCardProps = {
  character: OneCharacter;
};

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div className='flex justify-center items-center'>
        <div className="flex flex-col w-64 h-96 sm:w-72 mx-2 my-3 bg-white rounded-lg">
          <div>
            <img className="h-44 w-full rounded-t-lg" src={character.image} alt={character.name} />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-center items-center h-16 text-center">
              <h4 className="text-2xl font-extrabold">{character.name}</h4>
            </div>
            <ul className="h-16 grid grid-cols-2 content-center text-center">
              <li>
                <strong>Status:</strong> {character.status}
              </li>
              <li>
                <strong>Specie:</strong> {character.species}
              </li>
            </ul>
            <div className="h-14 flex justify-center items-center">
              <Link
                className="h-8 w-20 flex justify-center items-center bg-teal-100 text-white font-bold rounded-xl hover:text-teal-100 hover:bg-white hover:border-2 hover:border-teal-100 transition duration-300"
                to={character.id.toString()}
              >
                More
              </Link>
            </div>
          </div>
        </div>
    </div>
  );
};

export default CharacterCard;

