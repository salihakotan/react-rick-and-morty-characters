import CharactersContentArea from "./components/CharactersContentArea";
import FiltersArea from "./components/FiltersArea";
import { useState } from "react";
import { GET_CHARACTERS_QUERY } from "./queries";
import { useQuery } from "@apollo/client";


function App() {

  const [filters, setFilters] = useState({ gender: "", species: "", location: "" });
  const [searchInput, setSearchInput] = useState("");
  const [pageSize, setPageSize] = useState(8);

  const { loading, error, data } = useQuery(GET_CHARACTERS_QUERY);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const results = data.characters.results;


  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleChangeSearchInput = (e) => {
    setSearchInput(e.target.value)        
}

const handleChangePageSize = (e) => {
  setPageSize(e.target.value)        
}


  return (
    <div className="App">
    <div className="header">
        <h1 className="siteTitle">Rick and Morty Characters</h1>
        <input onChange={handleChangeSearchInput} className='searchInput' placeholder='Search (name or location)'/>
        </div>

      
        <select value={pageSize} onChange={handleChangePageSize} className="hitsPerPageSelect">
          <option value={8}>8 hits per page</option>
          <option value={16}>16 hits per page</option>
          <option value={24}>24 hits per page</option>
        </select>
        
        <div className="container">
          <div className="leftFilterAreaContainer">
            <FiltersArea onFilterChange={handleFilterChange}/>
          </div>

          <div className="rightPageContentAreaContainer">
        
            <CharactersContentArea filters={filters} searchInput={searchInput} pageSize={pageSize}/>
          </div>

        </div>
    </div>
  );
}

export default App;
