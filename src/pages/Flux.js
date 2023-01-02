import HeroMedium from '../modules/HeroMedium'
import FluxLandscape from '../modules/FluxLandscape'
import useFetch from '../hooks/useFetch'
import { useEffect, useState } from 'react'
import FilterModule from '../modules/FilterModule'
import useFetchGenres from '../hooks/useFetchGenres'

export default function Flux() {
    const [filterMovie, setMovieFilter] = useState(null);
    const API_LINK = 'https://api.themoviedb.org/3/';
    const API_KEY = '350845626c05bcf9e670b1135deffe7b'


    const data = useFetch(`${API_LINK}discover/movie?api_key=${API_KEY}`)


    const genreList = useFetchGenres('https://api.themoviedb.org/3/genre/movie/list?api_key=350845626c05bcf9e670b1135deffe7b')
   
    function addMovieFilter(id) {
        setMovieFilter(id)
    }

    function filterMovies() {
        fetchMovies()
        async function fetchMovies() {
            const response = await fetch(`${API_LINK}discover/movie?api_key=${API_KEY}&with_genres=${filterMovie}`)
            const data = await response.json();

            console.log(data)
        }
    }

    return (

        <>
            <HeroMedium
                content = {{
                    title: 'Flux',
                    subtitle: 'Discover new movies.'
                }}
            />
            { genreList[0] !== undefined ?  <FilterModule genres = {genreList} movieFilter = {addMovieFilter} filterMovies={filterMovies}/> : console.log('Loading Genres...')}

            
            { data[0] !== undefined ? <FluxLandscape movies = {data}/> : console.log('Loading Movies...')}
            
    

            
        </>
        
    )
}

    