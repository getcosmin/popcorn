export default function MovieLandscape({ movie, openDisplay, classList, eventAction }) {
    console.log(eventAction)
    return movie ? (
        <div className={classList} id={movie.id} onClick={eventAction}>
            <header className="landscape-header">
                <div>
                    <span>{movie.release_date}</span>
                    <h3>{movie.title}</h3>
                </div>
            </header>
            <img className="landscape-image flux-movie-img"
                 src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                 alt={movie.title}
            />
        </div>
    )
    : null;
}
