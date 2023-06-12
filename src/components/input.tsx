import SearchNameContext from "../context/SearchNameContext";
import { useContext } from 'react';


export default function Input() {

  const {search, setSearch} = useContext(SearchNameContext);

  function handleEvent(e: any) {
    e.preventDefault()
  }

  function handleValue(e: any){
    setSearch(e.target.value);
  }

  return (
    <form onSubmit={handleEvent}>
      <input className="h-10 w-48 px-2 bg-transparent border-white text-white border-2 rounded-2xl 
      outline-none placeholder:text-white"
      onChange={handleValue}
      value={search}
      type="text" 
      placeholder="Search character"/>
    </form>
  )
}
