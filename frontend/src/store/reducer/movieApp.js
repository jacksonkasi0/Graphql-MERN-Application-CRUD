const initialState = {
  hitUpdate: false,
  movieData: {
    name: '',
    genre: '',
    year: '',
  },
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_UPDATE_MOVIE':
      return {
        ...state,
        hitUpdate: action.payload,
      };

    case 'UPDATE_MOVIE_DATA':
      return {
        ...state,
        movieData: action.payload,
      };

    default:
      return state;
  }
};

export default appReducer;
