export default function MovieLandscape({movie, openDisplay}) {

    if (movie == undefined) return

    return (

        <div className='movie-card-landscape'>
            <header className='landscape-header'>
                <div>
                    <span>{movie.release_date}</span>
                    <h3>{movie.title}</h3>
                </div>
            </header>
            <img className='landscape-image flux-movie-img' 
                            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} 
                            alt={movie.title}
                            id={movie.id}
                            onClick={openDisplay}
            />
        </div>
        
    )
}