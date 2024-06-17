import CharactersContentArea from "./components/CharactersContentArea";
import FiltersArea from "./components/FiltersArea";
import SearchForm from "./components/SearchForm";


function App() {
  return (
    <div className="App">
    <div className="header">
        <h1 className="siteTitle">Rick and Morty Characters</h1>
        <SearchForm/>
        </div>

      
        <select className="hitsPerPageSelect">
          <option>16 hits per page</option>
        </select>
        
        <div className="container">
          <div className="leftFilterAreaContainer">
            <FiltersArea/>
          </div>

          <div className="rightPageContentAreaContainer">
        
            <CharactersContentArea/>
          </div>

        </div>
    </div>
  );
}

export default App;
