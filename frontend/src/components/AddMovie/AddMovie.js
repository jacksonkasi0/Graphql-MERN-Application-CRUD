import React, { useEffect, useState } from 'react';

import { useMutation } from '@apollo/client';

import './AddMovie.scss';
import { ADD_MOVIE, allMovies, UPDATE_MOVIE } from '../../graphql/queries';

const AddMovie = ({ update, movieData }) => {
  const [addMovie, { data, loading, error }] = useMutation(ADD_MOVIE);
  const [updateMovie] = useMutation(UPDATE_MOVIE); // loading, data,  error = optional

  const [input, setInput] = useState({
    id: '',
    name: '',
    genre: '',
    year: '',
  });

  const emptyInput = {
    id: '',
    name: '',
    genre: '',
    year: '',
  };

  console.log(input);

  useEffect(() => {
    if (update) {
      console.log(movieData);
      setInput(movieData);
    }
  }, []);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    if (!input.name.trim() || !input.genre.trim() || !input.year.trim()) {
      alert('Please fill all the fields');
      return;
    }

    if (update) {
      updateMovie({
        variables: input,
        refetchQueries: [{ query: allMovies }],
      });
      setInput(emptyInput);
      return;
    }

    addMovie({
      variables: input,
      refetchQueries: [{ query: allMovies }],
    });
    setInput(emptyInput);
  };

  if (error) {
    alert(`Submission error! ${error.message}`);
    window.location.reload();
  }

  return (
    <div className='addMovie'>
      <div>
        <label>Name</label>
        <input
          type='text'
          name='name'
          value={input.name}
          placeholder='Movie Name'
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Genre</label>
        <input
          type='text'
          name='genre'
          value={input.genre}
          placeholder='Genre'
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Year</label>
        <input
          type='text'
          name='year'
          value={input.year}
          placeholder='Year'
          onChange={handleChange}
        />
      </div>
      <button className='btn' onClick={handleSubmit}>
        Add Movie
      </button>
    </div>
  );
};

export default AddMovie;
