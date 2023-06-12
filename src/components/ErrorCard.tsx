
import React from 'react'
import { useNavigate } from 'react-router-dom';

type errorCard = {
    desc: string;
    color: string
};

const ErrorCard:React.FC<errorCard> = ({color, desc}) => {

    const navigate = useNavigate();
    
    const handleGoBack = () => {
        navigate('/');
    };

  return (
    <div className={`${color === `black` ? `min-h-screen` : `min-h-96`} 
    min-w-full md:flex-row md:flex flex flex-col justify-center items-center m-3`}>
        <div>
            <img
            className='h-80 w-80 md:h-96 md:w-96 ' 
            src="https://www.pngmart.com/files/3/Rick-And-Morty-PNG-Transparent-Image.png" alt="fail img" />
        </div>
        <div className={`h-96 w-96 grid grid-rows-2 ${color === `black` ? `text-black` : `text-white`}`}>
            <div className='flex justify-center items-end mb-4'>
                <h4 className='font-extrabold text-xl md:text-2xl'>404 - Not found</h4>
            </div>
            <div className='font-extrabold text-xl px-3'>
                <p className='text-center'>{desc}</p>
            </div>
            {color === 'black' ? <div className='w-96 flex justify-center items-center'>
                <button 
                onClick={handleGoBack}
                className='text-white h-11 w-32 rounded-2xl bg-black'
                >Go back</button>
            </div> : ''}
        </div>
    </div>
  )
}

export default ErrorCard