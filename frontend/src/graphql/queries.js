import { gql } from '@apollo/client';

export const allMovies = gql`
  {
    movies {
      _id # we need id for delete and update movie
      name
      genre
      year
    }
  }
`;

export const ADD_MOVIE = gql`
  mutation AddMovie($name: String!, $genre: String!, $year: String!) {
    addMovie(name: $name, genre: $genre, year: $year) {
      name
      genre
      year
    }
  }
`;

export const UPDATE_MOVIE = gql`
  mutation UpdateMovie($id: ID!, $name: String!, $genre: String!, $year: String!) {
    updateMovie(id: $id, name: $name, genre: $genre, year: $year) {
      name
      genre
      year
    }
  }
`;


export const DELETE_MOVIE = gql`
  mutation DeleteMovie($id: ID!) {
    deleteMovie(id: $id) {
      name
      genre
      year
    }
  }
`;
