import { useEffect, useState } from 'react';

/**
 * Custom Hook used to fetch movie genres from API.
 * @param {string} link - Link from the API.
 */

export default function useFetchGenre(link) {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        fetchMovieGenres();

        async function fetchMovieGenres() {
            const response = await fetch(link);
            const data = await response.json();
            console.log(data);
            setGenres(data.genres);
        }
    }, [link]);
    return genres;
}
