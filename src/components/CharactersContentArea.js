import { useQuery } from "@apollo/client";
import React from "react";
import { GET_CHARACTERS_QUERY } from "../queries";

function CharactersContentArea({searchInput}) {
   
    console.log("content searchinput ", searchInput)

  const { loading, error, data } = useQuery(GET_CHARACTERS_QUERY);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const { results } = data.characters;

  console.log(results);

  return (
    <div className="charactersGrid">
      {results.map((result) => {

        if(!result.name.toLowerCase().includes(searchInput.toLowerCase()) && !result.location.name.toLowerCase().includes(searchInput.toLowerCase())){
            return false
        }


        return <div key={result.id} className="characterItemBox">
          <img
            src={result.image}
            alt="characterImage"
          />
          <span className="speciesNameSpan">{result.species}</span>
          <span className="characterNameSpan">{result.name}</span>
          <span className="locationNameSpan">{result.location.name}</span>
        </div>

      }
      
      )}
    </div>
  );
}

export default CharactersContentArea;
