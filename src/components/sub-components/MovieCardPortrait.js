export default function MovieCardPortrait({ movie }) {
    console.log('hi');
    return (
        <div className="movie-item">
            <img className="flux-movie-img"
                 src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                 alt={movie.title}
            />
        </div>
    );
}
