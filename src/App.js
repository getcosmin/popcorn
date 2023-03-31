import { Route, Routes } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { createPortal } from 'react-dom';
import { AppContextMovie, MovieDisplayContext } from './context/movieDisplayContext';

import './assets/css/movie.css';
import './assets/css/movie.css';

import Home from './pages/Home/Home';
import Flux from './pages/Flux/Flux';
import Notifications from './pages/Notifications';
import Navigation from './components/Navigation';
import NavigationBottom from './components/NavigationBottom';
import Footer from './components/Footer';
import DisplayMovie from './components/DisplayMovie';


export default function App() {
  const { openMovieDisplay, hasMovieDisplayEnabled, movieSearchID } = useContext(AppContextMovie);
  console.log(openMovieDisplay)
  console.log(hasMovieDisplayEnabled)

  useEffect(() => {
    console.log('closed');
    const bottomLinks = document.querySelectorAll('.bottom-navigation-link');
    bottomLinks.forEach((element) => {
      element.addEventListener('click', closeMovieDisplayWindow);
    });

    function closeMovieDisplayWindow() {
      if (document.querySelector('.display') !== null) {
        const displayWindow = document.querySelector('.display').parentElement;
        displayWindow.remove();
      }
    }
  }, []);

  return (
      <>
        {hasMovieDisplayEnabled && createPortal(
          <DisplayMovie
            movieID={movieSearchID}
        />
        , document.querySelector('#root'))}

        <Navigation />
        <Routes>
          <Route path='/' element = { <Home />} />
          <Route path='/flux' element = { <Flux />} />
          <Route path='/notifications' element = { <Notifications />} />
        </Routes>
        { window.innerWidth < 1024 ? <NavigationBottom /> : null }
        <Footer />
        
      </>
  );
}


