export const setUpdateMovie = (value) => {
  return {
    type: 'SET_UPDATE_MOVIE',
    payload: value,
  };
};

export const updateMovieData = (data) => {
  return {
    type: 'UPDATE_MOVIE_DATA',
    payload: data,
  };
};
