import React from 'react';

import { useQuery } from '@apollo/client';

import MovieCard from '../components/MovieCard/MovieCard';
import './Home.scss';
import { allMovies } from '../graphql/queries';

const Home = () => {
  const { data, error, loading } = useQuery(allMovies);

  if (error) return <pre>{error.message}</pre>;
  if (loading) {
    return <div>Loading...</div>;
  }
  if (data.movies.length === 0) return <h1>No Movies, Please add Movies</h1>;

  return (
    <div className='home'>
      {data.movies.map((movie) => {
        return (
          <MovieCard
            id={movie._id}
            name={movie.name}
            genre={movie.genre}
            year={movie.year}
            key={movie._id}
          />
        );
      })}
    </div>
  );
};

export default Home;
