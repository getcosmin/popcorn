import { useEffect, useState } from "react"

export default function FilterPage({genres, movieFilter, filterMovies, toggleFilter}) {

    const [genresFilter, setGenresFilter] = useState(false)
    const [newGenres, setNewGenres] = useState([])

    function toggleGenresList() {
        genresFilter ? setGenresFilter(false) : setGenresFilter(true)
    }

    useEffect(() => {
        const genreList = ['Action', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Thriller', 'Romance', 'Science Fiction'];

        genres.forEach(element => {
            for(let genre of genreList) {
                if(element.name == genre) {
                    setNewGenres(prevValue => [...prevValue, {'name': element.name, 'id': element.id},])
                }
            }
        })

    }, [genres])

    function buttonAnimation(event) {
        const allButtons = document.querySelectorAll('.genre-option')
        allButtons.forEach(element => element.classList.remove('genre-active'))
        event.target.classList.toggle('genre-active')
        movieFilter(event.target.id);
    }

    function filterEventButton(event) {
        toggleFilter()
        filterMovies(event)
    }

    return(
        <section className='filter-page'>
            <button onClick={toggleFilter}>
                <svg className='button-round close-display' width="24" height="24" viewBox="0 0 24 24">
                    <path d="M13.4,12l4.1-4.1c0.1-0.1,0.1-0.2,0-0.3l-1.1-1.1c-0.1-0.1-0.2-0.1-0.3,0L12,10.6L7.9,6.5c-0.1-0.1-0.2-0.1-0.3,0L6.5,7.6
      		                        c-0.1,0.1-0.1,0.2,0,0.3l4.1,4.1l-4.1,4.1c-0.1,0.1-0.1,0.2,0,0.3l1.1,1.1c0.1,0.1,0.2,0.1,0.3,0l4.1-4.1l4.1,4.1
      		                        c0.1,0.1,0.2,0.1,0.3,0l1.1-1.1c0.1-0.1,0.1-0.2,0-0.3L13.4,12z">
                    </path>
                </svg>
            </button>
            <div className='wrapper'>
                <div className='filter-page-nav'>
                    <p>Genres List</p>
                    <svg className='button-round' onClick={toggleGenresList} width="48" height="48" viewBox="0 0 48 48">
                        <rect x="8" y="23" width="32" height="3" rx="0.4"/>
                        <rect className="vertical" x="8" y="23" width="32" height="3" rx="0.4"/>
                    </svg> 
                </div>
                <ul className='genres-list list-none' data-type={genresFilter}>
                    {newGenres.map(genre => 
                           <span id={genre.id} className="genre-option" onClick={buttonAnimation}>{genre.name}</span>  
                    )}
                </ul>
                <button className='button-primary' onClick={filterEventButton}>Filter Movies</button>
            </div>
        </section>
    )
}