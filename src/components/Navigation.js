// 00 - React
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';

// 01 - Components
import PageSearchResults from './PageSearchResults';
import ButtonClose from './sub-components/ButtonClose';
import ButtonSearch from './sub-components/ButtonSearch';
import PopcornLogo from '../assets/icons/popcorn-logo';
import iconSearch from '../assets/icons/icon-search';
import DisplayMovie from './DisplayMovie';


export default function Navigation() {
  const [hasMovieDisplayEnabled, setMovieDisplayEnabled] = useState(false);
  const [movieSearchTitle, setMovieSearchTitle] = useState('');
  const [moviesSearchResults, setMoviesSearchResults] = useState([]);
  const [isUserSearching, setUserSearching] = useState(false);
  const [movieSearchID, setMovieSearchID] = useState([]);
  const [hasSearchEnabled, setSearchEnabled] = useState(false);

  const API_LINK = 'https://api.themoviedb.org/3/search/movie?api_key=350845626c05bcf9e670b1135deffe7b&language=en-US&query=';

  useEffect(() => {
    const selectNavbar = document.querySelector('.navbar');
    window.addEventListener('scroll', navigationMenu);

    function navigationMenu() {
      if (window.scrollY > 150) selectNavbar.classList.add('navbar-active');
      if (window.scrollY < 150) selectNavbar.classList.remove('navbar-active');
    }
  }, []);

  function openSearchBar() {
    setSearchEnabled(true);
  }

  function searchMovieTitle(event) {
    setMovieSearchTitle(event.target.value);
  }

  function getMovieFromSearch(event) {
    setMovieSearchID([event.target.closest('.movie-card-landscape').id]);
  }

  function openDisplay(event) {
    document.body.classList.add('no-scroll');
    window.scrollTo(0, 0);
    document.querySelector('.search-box').classList.add('hide');
    getMovieFromSearch(event);
    setMovieSearchTitle('');
    setMoviesSearchResults([]);
    setMovieDisplayEnabled(true);
    setSearchEnabled(false);
  }

  useEffect(() => {
    if (movieSearchTitle.length > 0) {
      try {
        fetchMovies();
        async function fetchMovies() {
          const response = await fetch(`${API_LINK}${movieSearchTitle}`);
          const data = await response.json();

          setMoviesSearchResults(data.results);
          document.querySelector('.navbar').classList.add('search-active');
          document.body.classList.add('disable-scroll');
          setUserSearching(true);
        }
      } catch (error) {
        console.error(error);
        }
      } else {
        closeSearchWindow();
      }
  }, [movieSearchTitle]);

  const closeDisplayWindow = () => {
    const searchBox = document.querySelector('.search-box');
    const bodyNoScroll = document.querySelector('.no-scroll');
    if (searchBox !== null) {
      searchBox.classList.remove('hide');
    }
    setMovieDisplayEnabled(false);
    if (bodyNoScroll !== null) {
      bodyNoScroll.classList.remove('no-scroll');
    }
  };

  function closeSearchWindow() {
    setUserSearching(false);
    setMoviesSearchResults([]);
    document.body.classList.remove('disable-scroll');
    document.querySelector('.navbar').classList.remove('search-active');
    setMovieSearchTitle('');
  }

  function closeSearch() {
    setSearchEnabled(false);
    closeSearchWindow();
    closeDisplayWindow();
  }
    return (
      <>
        {hasMovieDisplayEnabled && createPortal(
          <DisplayMovie
            movieID={movieSearchID}
          />
          , document.querySelector('#root'))}

        <nav className="navbar">
          <div className="wrapper">
            <div className="navbar-container">
              <div className="navbar-brand">
                <PopcornLogo/>
                { window.innerWidth > 1024 &&
                  <div className="navigation-links">
                    <Link className="navigation-link" to='/'>
                      Home
                    </Link>
                    <Link className="navigation-link" to='/Flux'>
                      Discover Flux
                    </Link>
                  </div>
                }

              { !hasSearchEnabled &&
                !hasMovieDisplayEnabled
                  ? <ButtonSearch openSearchBar={openSearchBar} />
                  : <ButtonClose closeFunction={closeSearch} />
              }

              </div>
              { hasSearchEnabled &&
                  <div className="search-box">
                            {iconSearch}
                    <input
                      className="search-input"
                      placeholder="Search for a movie..."
                      type="text"
                      onChange={searchMovieTitle}
                      value={movieSearchTitle}
                    />
                  </div>
              }
            </div>
              {isUserSearching && createPortal(
                  <PageSearchResults
                      movies={moviesSearchResults}
                      closeSearchWindow={closeSearchWindow}
                      openDisplay={openDisplay}
                      isUserSearching={isUserSearching}
                  />
                  , document.querySelector('.navbar'))}
          </div>
        </nav>
      </>
    );
}
