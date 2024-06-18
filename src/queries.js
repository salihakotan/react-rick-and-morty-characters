import { gql } from '@apollo/client';

export const GET_CHARACTERS_QUERY = gql`
  query GetCharacters($gender: String, $species: String) {
    characters(filter: { gender: $gender, species: $species }) {
      results {
        id
        name
        species
        gender
        location {
          name
        }
        image
      }
      info {
        count
      }
    }
  }
`;

export const GET_LOCATIONS_QUERY = gql`
  query GetLocations {
    locations {
      results {
        name
      }
    }
  }
`;

export const QUERYTEST = gql`
  query TestQuery {
    testData {
      id
      name
    }
  }
`;