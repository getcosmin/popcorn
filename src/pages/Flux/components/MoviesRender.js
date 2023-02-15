// 01 - Components
import MovieCardPortrait from '../../../components/sub-components/MovieCardPortrait';
import MoviePlaceholderPortrait from '../../../components/sub-components/MoviePlaceholderPortrait';

export default function MoviesRender({ movies }) {
    return (
        <div className="flux-movies">
            { movies.map((movie) => {
                return (
                    movie.poster_path ?
                        <MovieCardPortrait
                            key={movie.id}
                            movie={{...movie}}
                        />
                        : <MoviePlaceholderPortrait />
                );
             })
            }
        </div>
    );
}
