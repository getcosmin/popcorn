import DisplayHeroMedium from '../modules/DisplayHeroMedium'
import DisplayFluxLandscape from '../modules/DisplayFluxLandscape'
import useFetch from '../hooks/useFetch'
import { useEffect, useState } from 'react'
import FilterModule from '../modules/FilterModule'
import useFetchGenres from '../hooks/useFetchGenres'

export default function Flux() {
    const [movieFilter, setMovieFilter] = useState(null);
    const [currentMovies, setCurrentMovies] = useState([])
    const API_LINK = 'https://api.themoviedb.org/3/';
    const API_KEY = '350845626c05bcf9e670b1135deffe7b'

    const data = (useFetch(`${API_LINK}discover/movie?api_key=${API_KEY}`))

    useEffect(() => { setCurrentMovies(data) }, [data])

    const genreList = useFetchGenres('https://api.themoviedb.org/3/genre/movie/list?api_key=350845626c05bcf9e670b1135deffe7b')
   
    function addMovieFilter(id) {
        setMovieFilter(id)
    }

    function filterMovies() {
        fetchMovies()
        async function fetchMovies() {
            const response = await fetch(`${API_LINK}discover/movie?api_key=${API_KEY}&with_genres=${movieFilter}`)
            const data = await response.json();

            setCurrentMovies(data.results)
        }

    }

    console.log(currentMovies)

    return (

        <>
            <DisplayHeroMedium
                content = {{
                    title: 'Flux',
                    subtitle: 'Discover your favorite movies.'
                }}
            />
            { genreList[0] !== undefined ?  
                <FilterModule   genres = {genreList} 
                                movieFilter = {addMovieFilter} 
                                filterMovies={filterMovies}
                /> 
                : null}

            
            { currentMovies[0] !== undefined ? <DisplayFluxLandscape movies = {currentMovies} movieCategory = {movieFilter}/> : console.log('Loading Movies...')}
            
    

            
        </>
        
    )
}

    