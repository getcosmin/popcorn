export default function SmallCard({openMovieDisplay, movie}) {
    console.log(openMovieDisplay)
    return (
        <div className="card movie-card" id={movie.id} onClick={openMovieDisplay}>
            <div className="card-header">
                <img className="card-image image-portrait" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title}/>
            </div>
        </div>
    );
}
