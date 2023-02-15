import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

import './assets/css/movie.css';
import './assets/css/movie.css';

import Home from './pages/Home/Home';
import Flux from './pages/Flux/Flux';
import Notifications from './pages/Notifications';
import Navigation from './components/Navigation';
import NavigationBottom from './components/NavigationBottom';
import Footer from './components/Footer';


export default function App() {
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


