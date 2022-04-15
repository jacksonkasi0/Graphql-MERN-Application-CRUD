import React, { useEffect, useState } from 'react';
import AddMovie from '../AddMovie/AddMovie';
import './Footer.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setUpdateMovie } from '../../store/action/movieApp';

const Footer = () => {
  const dispatch = useDispatch();
  const { hitUpdate, movieData } = useSelector((state) => state);
  const [addMovie, setAddMovie] = useState(false);

  useEffect(() => {
    if (hitUpdate) {
      setAddMovie(true);
    }
  }, [hitUpdate]);

  const year = new Date().getFullYear();

  const handleClick = () => {
    setAddMovie((state) => !state);
    if (addMovie) {
      dispatch(setUpdateMovie(false));
    }
  };

  return (
    <div className='footer'>
      {addMovie && <AddMovie update={hitUpdate} movieData={movieData} />}
      <span>
        copyright &copy; Movie Rockers {year - 1} - {year}
      </span>
      <button onClick={handleClick}>{addMovie ? 'Close' : 'Add Movie'}</button>
    </div>
  );
};

export default Footer;
