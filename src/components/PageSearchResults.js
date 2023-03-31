
import { useContext } from 'react';
// 01 - Components
import MovieLandscape from './MovieLandscape';
import { AppContextMovie } from '../context/movieDisplayContext';

export default function PageSearchResults({ movies }) {
    const { openMovieDisplay } = useContext(AppContextMovie);

    return movies ? (
        <>
        <div className="navbar-search-menu">
            <div className="movie-results">
                <div className="movie-list wrapper">
                    { movies.map((movie) => {
                        if (movie.backdrop_path !== null) {
                            return (
                                <MovieLandscape
                                    classList='movie-card card-landscape'
                                    key={movie.id}
                                    eventAction = {openMovieDisplay}
                                    movie = {movie}
                                />
                            );
                            }
                        })
                    }
                </div>
            </div>
        </div>
        </>
    )
    : null;
}
