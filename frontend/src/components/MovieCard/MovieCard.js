import React from 'react';

import { useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux';

import './MovieCard.scss';
import { allMovies, DELETE_MOVIE } from '../../graphql/queries';
import { setUpdateMovie, updateMovieData } from '../../store/action/movieApp';

const MovieCard = ({ name, genre, year, id }) => {
  const dispatch = useDispatch();

  const [deleteMovie, { data, loading, error }] = useMutation(DELETE_MOVIE);

  const handleDelete = () => {
    deleteMovie({
      variables: { id },
      refetchQueries: [
        {
          query: allMovies,
        },
      ],
    });
  };

  const handeEdit = () => {
    dispatch(setUpdateMovie(true));
    dispatch(
      updateMovieData({
        id,
        name,
        genre,
        year,
      })
    );
  };

  return (
    <div className='movieCard'>
      <img
        src='https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg'
        alt={name}
      />
      <div className='name'>
        <span>Movie</span>&nbsp;{name}
      </div>
      <div className='genre'>
        <span>Genre</span>&nbsp;{genre}
      </div>
      <div className='year'>
        <span>Year &nbsp; </span>&nbsp;{year}
      </div>
      <div className='buttons' >
        <button onClick={handeEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default MovieCard;
