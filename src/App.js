import CharactersContentArea from "./components/CharactersContentArea";
import FiltersArea from "./components/FiltersArea";
import { useState } from "react";


function App() {

  const [searchInput,setSearchInput] = useState("")
  const [pageSize,setPageSize] = useState(8)


  const handleChangeSearchInput = (e) => {
    setSearchInput(e.target.value)        
}

const handleChangePageSize = (e) => {
  console.log(e.target.value)
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
            <FiltersArea/>
          </div>

          <div className="rightPageContentAreaContainer">
        
            <CharactersContentArea pageSize={pageSize} searchInput={searchInput}/>
          </div>

        </div>
    </div>
  );
}

export default App;
