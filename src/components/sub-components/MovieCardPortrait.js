export default function MovieCardPortrait({ movie, openMovieDisplay }) {
    console.log(openMovieDisplay)
    return (
        <div className="movie-card movie-item" id={movie.id} onClick={openMovieDisplay}>
            <img className="flux-movie-img"
                 src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                 alt={movie.title}
            />
        </div>
    );
}
