import { useEffect, useState } from "react";

export default function useFetchGenre(link) {
    const [genres, setGenres] = useState([])

    useEffect(() => {

        fetchMovieGenres()

        async function fetchMovieGenres() {
            const response = await fetch(link)
            const data = await response.json()
            console.log(data)
            setGenres(data.genres)

        }

    }, [link])

    return genres
    
}