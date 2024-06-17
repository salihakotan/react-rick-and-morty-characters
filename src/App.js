import CharactersContentArea from "./components/CharactersContentArea";
import FiltersArea from "./components/FiltersArea";
import { useState } from "react";


function App() {

  const [searchInput,setSearchInput] = useState("")

  const handleChangeSearchInput = (e) => {
    setSearchInput(e.target.value)        
}



  return (
    <div className="App">
    <div className="header">
        <h1 className="siteTitle">Rick and Morty Characters</h1>
        <input onChange={handleChangeSearchInput} className='searchInput' placeholder='Search'/>
        </div>

      
        <select className="hitsPerPageSelect">
          <option>16 hits per page</option>
          <option>32 hits per page</option>
          <option>64 hits per page</option>
        </select>
        
        <div className="container">
          <div className="leftFilterAreaContainer">
            <FiltersArea/>
          </div>

          <div className="rightPageContentAreaContainer">
        
            <CharactersContentArea searchInput={searchInput}/>
          </div>

        </div>
    </div>
  );
}

export default App;
