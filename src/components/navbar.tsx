import { Link } from 'react-router-dom';
import Input from './input';
  

const Navbar = () => {

  return (
    <header className="grid grid-cols-3 h-20 px-4 py-3">
        <div className="col-span-1 flex items-center mr-3">
            <Link className='w-20' to={'/'}>       
                <img src="https://www.pngmart.com/files/22/Rick-And-Morty-Wallpaper-PNG-Picture.png" 
                className="h-14 w-20" alt="R&M's logo"/>
            </Link>
        </div>
        <div className="col-span-2 md:col-span-1 flex justify-center items-center">
            <Input/>
        </div>
        <div className="col-span-1 flex justify-end items-center ml-3">
            <h2 className='hidden md:flex text-2xl lg:text-3xl font-extrabold text-teal-200 mr-2'>
                Rick and Morty
            </h2>
        </div>
    </header>
  )
}

export default Navbar