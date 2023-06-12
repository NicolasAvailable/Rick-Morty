import React from 'react'

type pageAndSetProp = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>
};

const Pagination: React.FC<pageAndSetProp> = ({page, setPage}) => {

  function handleNextPage() {
    setPage(page + 1)
  }

  function handleBackPage() {
    if(page === 1) return

    setPage(page - 1)
  }

  return (
    <div className='h-16 w-full flex justify-center items-center mb-7'>
        <button className={`h-12 w-36 bg-white text-cyan-600 rounded-3xl font-extrabold text-xl mr-2
         hover:bg-gray-200 transition-colors duration-300
        ${page === 1 ? `opacity-50 cursor-default` : ``} `}
        onClick={handleBackPage}
        >Back</button>
        <button className='h-12 w-36 bg-white text-cyan-600 rounded-3xl font-extrabold text-xl ml-2
         hover:bg-gray-200 transition-colors duration-300'
        onClick={handleNextPage}
        >Next</button>
    </div>
  )
}

export default Pagination