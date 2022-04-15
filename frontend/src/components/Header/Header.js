import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <a href='#'>MOVIE ROCKERS 🎃</a>
      <input type='text' placeholder='Search Movie' />
    </div>
  );
};

export default Header;
