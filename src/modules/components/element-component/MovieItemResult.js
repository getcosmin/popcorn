export default function MovieItemResult(movie) {
    return (
        
        <div className='movie-item'>
            <div className='movie-cover' id={movie.id} ></div>
            <img className='movie-result-image' src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title}/>
            <div>
                <span className='movie-result-name'>{movie.title}</span>
                <span>{movie.release_date}</span>
            </div>
        </div>

    )
}