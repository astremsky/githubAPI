import { Home } from '@material-ui/icons';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { FavouritesPage } from './Pages/FavouritesPage';
import { HomePage } from './Pages/HomePage';

function App() {
  return (
      <Routes>
        <Route path='/' element={ <HomePage />} />
        <Route path='/favourites' element={ <FavouritesPage />} />
      </Routes>
  );
}

export default App;
