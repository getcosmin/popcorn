// 01 - Components
import { useContext } from 'react';

import MovieCardPortrait from '../../../components/sub-components/MovieCardPortrait';
import MoviePlaceholderPortrait from '../../../components/sub-components/MoviePlaceholderPortrait';
import { AppContextMovie } from '../../../context/movieDisplayContext';

export default function MoviesRender({ movies }) {
    const { openMovieDisplay } = useContext(AppContextMovie);
    return (
        <div className="flux-movies">
            { movies.map((movie) => {
                return (
                    movie.poster_path ?
                        <MovieCardPortrait
                            key={movie.id}
                            movie={{...movie}}
                            openMovieDisplay={openMovieDisplay}
                        />
                        : <MoviePlaceholderPortrait />
                );
             })
            }
        </div>
    );
}
