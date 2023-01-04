// 00 - React
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

// 01 - Components
import PageSearchResults from './components/PageSearchResults'
import ButtonClose from './components/sub-components/ButtonClose'
import PopcornLogo from './images/popcorn-logo'
import iconSearch from './images/icon-search'
import DisplayMovie from './DisplayMovie'
import ButtonSearch from './components/sub-components/ButtonSearch'

export default function Navigation() {
  const [hasMovieDisplayEnabled, setMovieDisplayEnabled] = useState(false)
  const [movieSearchTitle, setMovieSearchTitle] = useState('')
  const [moviesSearchResults, setMoviesSearchResults] = useState([])
  const [isUserSearching, setUserSearching] = useState(false)
  const [movieSearchID, setMovieSearchID] = useState([])
  const [hasSearchEnabled, setSearchEnabled] = useState(false)

  const API_LINK = 'https://api.themoviedb.org/3/search/movie?api_key=350845626c05bcf9e670b1135deffe7b&language=en-US&query=';

  function openSearchBar() {
    setSearchEnabled(true)
  }

  function searchMovieTitle(event) {
    setMovieSearchTitle(event.target.value)
  }

  function openDisplay(event) {
    document.querySelector('.search-box').classList.add('hide')
    setMovieSearchID([event.target.id])
    setMovieSearchTitle('')
    setMoviesSearchResults([])
    setMovieDisplayEnabled(true)
    setSearchEnabled(false)
  }

  useEffect(() => {
    if (movieSearchTitle.length > 0) {
      try {
        fetchMovies()
        async function fetchMovies() {
          const response = await fetch(`${API_LINK}${movieSearchTitle}`);
          const data = await response.json();

          setMoviesSearchResults(data.results)
          document.querySelector('.navbar').classList.add('search-active')
          document.body.classList.add('disable-scroll')
          setUserSearching(true)
        }
      } catch(error) {
        console.error(error)
        }
      } else {
        closeSearchWindow()
      }
  }, [movieSearchTitle])

  const closeDisplayWindow = () => {
    const searchBox = document.querySelector('.search-box');
    if (searchBox !== null) {
      searchBox.classList.remove('hide')
    }
    setMovieDisplayEnabled(false)
  }

  function closeSearchWindow() {
    console.log('butonClose pressed')
    setUserSearching(false)
    setMoviesSearchResults([])
    document.body.classList.remove('disable-scroll')
    document.querySelector('.navbar').classList.remove('search-active')
    setMovieSearchTitle('')
  }
  function closeSearch() {
    setSearchEnabled(false)
    closeSearchWindow()
    closeDisplayWindow()
  }
    return(
      <>
        {hasMovieDisplayEnabled && createPortal (
          <DisplayMovie 
            movieID={movieSearchID}
          />
          , document.querySelector('#root'))}

        <nav className='navbar'>
          <div className='wrapper'>
            <div className='navbar-container'>
              <div className='navbar-brand'>

                <PopcornLogo/>

              {!hasSearchEnabled && !hasMovieDisplayEnabled ?
                  <ButtonSearch openSearchBar = {openSearchBar} />     
                :
                  <ButtonClose closeFunction = {closeSearch}/>             
              }

              </div>
              {hasSearchEnabled &&
                  <div className='search-box'>
                            {iconSearch}
                    <input 
                      className='search-input' 
                      placeholder='Search for a title...'
                      type='text'
                      onChange= {searchMovieTitle}
                      value = {movieSearchTitle}            
                    />
                  </div>              
              }
            </div>
              {isUserSearching && createPortal (
                  <PageSearchResults 
                      movies = {moviesSearchResults}
                      closeSearchWindow = {closeSearchWindow}
                      openDisplay = {openDisplay}
                      isUserSearching = {isUserSearching}
                  />
                  , document.querySelector('.navbar'))}
          </div>
        </nav>
      </>
    )
}

