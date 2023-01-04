

// 01 - Components
import MovieLandscape from './MovieLandscape'

export default function PageSearchResults({movies, openDisplay}) {
    return (
        <>
        <div className='navbar-search-menu'>

            <div className='movie-results'>
                <div className='movie-list wrapper'>
                    {movies !== [] ?
                        movies.map(movie => {
                            if (movie.backdrop_path !== null)
                            return (
                                <MovieLandscape 
                                    openDisplay = {openDisplay}
                                    movie = {movie}
                                />
                            )
                        })
                        : null
                    }
                </div>
            </div>
        </div>
        </>
    )
}