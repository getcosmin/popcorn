import { useEffect, useState } from 'react'
import PopcornLogo from './images/popcorn-logo'
import iconSearch from './images/icon-search'
import MovieItemResult from './components/element-component/MovieItemResult'
import MovieDisplayModule from './DisplayMovie'
import { createPortal } from 'react-dom'


export default function Navigation() {
    const [movieTitle, setMovieTitle] = useState('')
    const [movieDisplay, showMovieDisplay] = useState(false)
    const [movieResults, setMovieResults] = useState([])
    const [movieID, setMovieID] = useState([])
    const API_LINK = 'https://api.themoviedb.org/3/search/movie?api_key=350845626c05bcf9e670b1135deffe7b&language=en-US&query=';
    console.log(movieTitle)
    function searchMovieTitle(event) {
      setMovieTitle(event.target.value)
    }

    function openDisplay(event) {
      setMovieID([event.target.id])
      setMovieTitle('')
      setMovieResults([])
      showMovieDisplay(true)
    }

    useEffect(() => {
      const movieContainer = document.querySelector('.movie-results')
      movieContainer.addEventListener('click', openDisplay)
    }, [])

    useEffect(() => {
      if (movieTitle.length > 0) {
        try {
          fetchMovies()
          async function fetchMovies() {
            const response = await fetch(`${API_LINK}${movieTitle}`);
            const data = await response.json();

            setMovieResults(data.results)

            console.log(movieResults)
          }
        } catch(error) {
          console.log(error)
        }
      } else {
        setMovieResults([])
      }
    }, [movieTitle])

    const changeState = () => {
      showMovieDisplay(false)
    }

    return(
      <>
        {movieDisplay && createPortal(<MovieDisplayModule movieID={movieID} closeDisplayWindow={changeState}/>, document.body)}

        <nav className='navbar'>
          <div className='wrapper'>
            <div className='navbar-container flex gap-01'>
              <div className='navbar-brand'>
                <PopcornLogo/>
              </div>
              <div className='search-box'>
                {iconSearch}
                <input 
                  className='search-input' 
                  placeholder='Search for a title...'
                  type='text'
                  onChange= {searchMovieTitle}
                 value = {movieTitle}            
                />
              </div>
            </div>
            <div className='navbar-search-menu'>
              <div className='movie-results'>
                <div className='movie-list wrapper'>
                  {movieResults !== [] ?
                    movieResults.map(movie => {
                      if (movie.backdrop_path !== null)
                        return (
                          <MovieItemResult
                            key = {movie.id}
                            {...movie}
                          />
                        )
                      })
                    : null
                  }
                </div>
              </div>
            </div>
          </div>
        </nav>
      </>
    )
}

