import { Link } from 'react-router-dom';

export default function Home() {

  return (
    <div className='h-screen w-full px-20 p-14 bg-gradient-to-r from-teal-200 to-lime-200'>
        <section className='flex flex-col justify-center items-center'>
            <div className=''>
                <h1 className='text-center text-4xl font-extrabold text-violet-950'>Rick and Morty</h1>
            </div>
            <div className='h-96 flex justify-center items-center my-5'>
                <img className='h-72 w-72 sm:w-80 sm:h-80' 
                src="https://www.pngmart.com/files/3/Rick-And-Morty-Transparent-Background.png" alt="main img"/>
            </div>
            <div className='w-full h-11 flex justify-center items-center mt-2.5'>
                <Link className='h-11 w-52 flex justify-center items-center text-center text-lg font-bold 
                border-2 border-purple-950 rounded-3xl 
                text-violet-950 transition duration-300 hover:bg-purple-950 hover:text-white
                hover:border-transparent' 
                to={'/characters'}
                > let's get started </Link>
            </div>
        </section>
    </div>
  )
}

