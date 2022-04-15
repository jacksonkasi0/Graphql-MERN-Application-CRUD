import React from 'react';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './Page/Home';
import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
