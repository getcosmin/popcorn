import { useEffect, useState } from "react"
import useFetch from "../../hooks/useFetch"

export default function GenreListFilter() {
    const [genres, setGenres] = useState([])
    
    useEffect(() => {
        fetchGenres()
        async function fetchGenres() {
            const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=350845626c05bcf9e670b1135deffe7b');
            const data = await response.json()

            setGenres(data.genres)

        }
    }, [])

    console.log(genres)
    return(
        <div className='pill-container'>
            { genres !== undefined ? genres.map(genre => <p className='pill'>{genre.name}</p> ) : null }
        </div>
    )
}