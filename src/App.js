import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home/Home';
import Flux from './pages/Flux/Flux';
import Notifications from './pages/Notifications';
import Navigation from './sections/Navigation';
import NavigationBottom from './sections/NavigationBottom';
import Footer from './sections/Footer';
import './assets/css/movie.css';
import './assets/css/movie.css';


export default function App() {
  useEffect(() => {
    console.log('closed');
    const bottomLinks = document.querySelectorAll('.bottom-navigation-link');
    bottomLinks.forEach((element) => {
      element.addEventListener('click', closeMovieDisplay);
    });

    function closeMovieDisplay() {
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


