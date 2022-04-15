const { buildSchema } = require('graphql');

const movieSchema = buildSchema(`
  type Query {
      movies: [Movie]!
      searchMovie(name: String!): [Movie]
  }

  type Mutation{
        addMovie(name: String!, genre: String!, year: String!): Movie
        deleteMovie(id: ID!): Movie
        updateMovie(id: ID!, name: String!, genre: String!, year: String!): Movie
  }
  
  type Movie {
      _id: ID,
      name: String,
      genre: String,
      year: String,
  }
`);

module.exports = movieSchema;
