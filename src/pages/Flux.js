import DisplayHeadlineSmall from '../sections/components/HeadlineSmall'
import DisplayHeroStatic from '../sections/DisplayHeroStatic'
import DisplayFluxLandscape from '../sections/DisplayFluxLandscape'
import useFetch from '../hooks/useFetch'
import { useEffect, useState } from 'react'
import FilterModule from '../sections/FilterModule'
import useFetchGenres from '../hooks/useFetchGenres'
import DisplayFluxPortrait from '../sections/DisplayFluxPortrait'

export default function Flux() {
    const [movieFilter, setMovieFilter] = useState(null);
    const [currentMovies, setCurrentMovies] = useState([])
    const [moviesGenre, setMoviesGenre] = useState('')
    const [hasMovieFilterEnaled, setMovieFilterEnabled] = useState(false)

    const API_LINK = 'https://api.themoviedb.org/3/';
    const API_KEY = '350845626c05bcf9e670b1135deffe7b'

    const data = (useFetch(`${API_LINK}discover/movie?api_key=${API_KEY}`))
    const data2 = (useFetch(`${API_LINK}discover/movie?api_key=${API_KEY}&page=2`))

    useEffect(() => { 
        setCurrentMovies(data) 
    }, [data])

    useEffect(() => { 
        // Merging both FETCH Results
        setCurrentMovies(prevValue => prevValue = data.concat(data2)) 
    }, [data2])

    const genreList = useFetchGenres('https://api.themoviedb.org/3/genre/movie/list?api_key=350845626c05bcf9e670b1135deffe7b')
   
    function addMovieFilter(id, movieGenres) {
        setMoviesGenre(movieGenres)
        setMovieFilter(id)
    }

    function filterMovies() {
        setCurrentMovies([])
        fetchMovies(2)
        async function fetchMovies(functionCalls) {
            for (let pageNumber = 0; pageNumber < functionCalls; pageNumber++){
                const response = await fetch(`${API_LINK}discover/movie?api_key=${API_KEY}&with_genres=${movieFilter}&page=${pageNumber + 1}`)
                const data = await response.json();

                setCurrentMovies(prevValue => prevValue = [...prevValue, ...data.results])
                setMovieFilterEnabled(true)
            }
        }
    }

    return (

        <>
            <DisplayHeroStatic
                    text = {{
                        title: 'Discover Flux',
                        subtitle: 'Find your favorite movies.'
                    }}
            />
            { hasMovieFilterEnaled ? <DisplayHeadlineSmall title='Movies' moviesGenre={moviesGenre} /> : <DisplayHeadlineSmall title='Movies' /> }
    
            { genreList[0] !== undefined ?  
                <FilterModule   genres = {genreList} 
                                movieFilter = {addMovieFilter} 
                                filterMovies={filterMovies}
                /> 
                : null}

            { currentMovies[0] !== undefined ? <DisplayFluxPortrait movies = {currentMovies} movieCategory = {movieFilter}/> : console.log('Loading Movies...')}    
            
            { currentMovies[0] !== undefined ? <DisplayFluxLandscape movies = {currentMovies} movieCategory = {movieFilter}/> : console.log('Loading Movies...')}

            
        </>
        
    )
}

    