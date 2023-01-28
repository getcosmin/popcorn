// 00 - React
import { useEffect, useState } from "react";

export default function GenreListFilter() {
    const [movieGenres, setMovieGenres] = useState([]);
    
    useEffect(() => {
        fetchGenres()
        async function fetchGenres() {
            const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=350845626c05bcf9e670b1135deffe7b');
            const data = await response.json()

            setMovieGenres(data.genres)

        }
    }, [])

    return (
        <div className="pill-container">
            { movieGenres !== undefined 
                ? movieGenres.map(genre => <p className="pill">{genre.name}</p> ) 
                : null }
        </div>
    );
}
