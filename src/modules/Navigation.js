import { useEffect, useState } from "react";
import PopcornLogo from './components/popcorn-logo'

export default function Navigation() {
 
    const [movieResults, setMovieResults] = useState([])
    const [value, setValue] = useState('')

    function expandMenu() {
        const searchMenu = document.querySelector('.movie-results');
        searchMenu.classList.add('showResults')

    }
    function closeMenu() {
        const searchMenu = document.querySelector('.movie-results');
        searchMenu.classList.remove('showResults')

    }


    async function getData() {
        try{
            console.log(`Searching... term used: https://api.tvmaze.com/search/shows?q=${value}`)
            const searchResults = await fetch(`https://api.tvmaze.com/search/shows?q=${value}`)
            const searchData = await searchResults.json();
                
            for (let i = 0; i < searchData.length; i++) {
                setMovieResults(prevResult => [...prevResult, searchData[i].show])        
            }
        }   catch(error) {
                console.log(error)
            }
    }

    useEffect(() => {
        if(value.length > 0) {
            setMovieResults([])
            getData()
            expandMenu()
        } else {
            setMovieResults([])
            closeMenu()
        }               
    }, [value])

    return(

        <nav className='navbar'>
            <div className='navbar-container wrapper flex gap-01'>
                <div className='navbar-brand'>
                    <PopcornLogo />

                </div>
                <div className='search-box'>
                    <svg className='search-icon'width="24" height="24" viewBox="0 0 24 24">
                        <path d="M23.809 21.646l-6.205-6.205c1.167-1.605 
                        1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 
                        0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 
                        3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 
                        3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 
                        0-6.877-3.085-6.877-6.877z"/>
                    </svg>
                    <input 
                        className='search-input' 
                        type='search'
                        onChange= {(event) => setValue(event.target.value)}
                        value = {value}
                    
                    />
                </div>
                <div className='navbar-search-menu'>
                <div className='movie-results'>
                    <div className='movie-list'>
                        {movieResults.map(movie => {
                            if(movie.image !== null) {
                                return  <div className='movie-item'>
                                            <img className='movie-result-image' src={movie.image.original}></img>
                                            <div>
                                                <span className='movie-result-name'>{movie.name}</span>
                                                <span>{movie.premiered !== null ? movie.premiered.slice(0, 4) : ''}</span>
                                            </div>
                                        </div>
                            } else {
                                return  <div className='movie-item'>
                                            <div className='movie-result-image'></div>
                                            <div>
                                                <span className='movie-result-name'>{movie.name}</span>
                                                <span>{movie.premiered !== null ? movie.premiered.slice(0, 4) : ''}</span>
                                            </div>
                                        </div>
                            }
                        })}
                    </div>
                </div>
                </div>
            </div>
        </nav>

    )
}

