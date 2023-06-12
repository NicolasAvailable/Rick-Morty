import {createContext} from 'react'

type searchAndSetProp = {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>
  };
  

const SearchNameContext = createContext<searchAndSetProp>({} as searchAndSetProp);

export default SearchNameContext
