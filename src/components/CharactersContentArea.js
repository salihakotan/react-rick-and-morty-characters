import { useQuery } from "@apollo/client";
import React  from "react";
import { GET_CHARACTERS_QUERY } from "../queries";
import { Card, List } from "antd";

function CharactersContentArea({ filters, searchInput, pageSize }) {

    const { loading, error, data } = useQuery(GET_CHARACTERS_QUERY, {
        variables: {
          gender: filters.gender,
          species: filters.species,
          location: filters.location,
        },
      });
    
      if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }
    
      const { results } = data.characters;
    
      const searchResults = results.filter((result) =>
        result.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        result.location.name.toLowerCase().includes(searchInput.toLowerCase())
      );



  return (
    <div>
      <List
       grid={{
      gutter: 16,
      column: 4,
    }}
        pagination={{pageSize:pageSize}}
        dataSource={searchResults}
        renderItem={(result, index) => {
       

        return (
          <Card>
            <div key={result.id} className="characterItemBox">
            <img src={result.image} alt="characterImage" />
            <span className="speciesNameSpan">{result.species}</span>
            <span className="characterNameSpan">{result.name}</span>
            <span className="locationNameSpan">{result.location.name}</span>
          </div>
          </Card>
        );
      }}
      />

      
    </div>
  );
}

export default CharactersContentArea;
