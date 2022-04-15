const Movie = require('../model/model');

const resolver = {
  movies: () => {
    return Movie.find({});
  },

  addMovie: async (args) => {
    const movie = await new Movie({
      name: args.name,
      genre: args.genre,
      year: args.year,
    });
    return movie.save();
  },

  searchMovie: async (args) => {
    const movies = await Movie.find({ name: args.name });
    return movies;
  },

  updateMovie: async (args) => {
    const movie = await Movie.findByIdAndUpdate(args.id, {
      name: args.name,
      genre: args.genre,
      year: args.year,
    });
    return movie;
  },

  deleteMovie: async (args) => {
    const movie = await Movie.findByIdAndDelete(args.id);
    return movie;
  },
};

module.exports = resolver;
