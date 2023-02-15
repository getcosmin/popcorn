

// 01 - Components
import MovieLandscape from './MovieLandscape';

export default function PageSearchResults({ movies, openDisplay }) {
    return movies ? (
        <>
        <div className="navbar-search-menu">
            <div className="movie-results">
                <div className="movie-list wrapper">
                    { movies.map((movie) => {
                        if (movie.backdrop_path !== null) {
                            return (
                                <MovieLandscape
                                    key={movie.id}
                                    openDisplay = {openDisplay}
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
