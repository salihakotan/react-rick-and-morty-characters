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

export const GET_SEARCH_QUERY=gql`
query {
  characters{
    results
    {
      name
      location{name}
      }
  }
}
`

export const GET_LOCATIONS_QUERY=gql`
query getLocations{
  locations{results{name}}
}`


export const GET_CHARACTERS_GENDER_QUERY=gql`
query {
  characters{
    results
    {
      gender
    }
  }
}
`


