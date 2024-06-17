import SearchForm from "./components/SearchForm";


function App() {
  return (
    <div className="App">
        <h1>Rick and Morty Characters</h1>
        <SearchForm/>
        <div className="container">
          <div>left bar</div>
          <div>right page content</div>

        </div>
    </div>
  );
}

export default App;
