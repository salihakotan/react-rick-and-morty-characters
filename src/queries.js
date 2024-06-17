import { gql } from "@apollo/client";

export const GET_CHARACTERS_QUERY=gql`
query {
  characters{
    results
    {
      id
      name
      species
      gender
      location{name}
      image    }
  }
}
`

export const GET_LOCATIONS_QUERY=gql`
query getLocations{
  locations{results{name}}
}`