export default function MovieDisplay(movie) {
    console.log(movie)
    const listGenres = movie.genres.map(genre => {
        return <div className='card-genres'>{genre}</div>
    })

    return(
        <section className='display'>
            <div className='display-nav wrapper'>
                <p>Back to Movies</p>
                <p>x</p>
            </div>
            <img className='display-hero' src={movie.image.original}></img>
            <div className='wrapper'>
                <header>
                    <h2>{movie.name}</h2>
                    <div className='card-list-genres'>
                        {listGenres}
                    </div>
                </header>
                <div className='display-body'>
                    <p className='body-text'>{movie.summary}</p>
                </div>
            </div>
        </section>
    )
}