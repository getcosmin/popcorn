// 00 - React
import { useEffect, useState } from "react"

// 01 - Components
import ButtonClose from './sub-components/ButtonClose'
import ButtonExpand from './sub-components/ButtonExpand'

export default function FilterPage({genres, movieFilter, filterMovies, toggleFilter}) {

    const [isGenreFilterEnabled, setGenresFilterEnabled] = useState(false)
    const [currentMovieGenres, setCurrentMovieGenres] = useState([])

    function toggleGenresList() {
        isGenreFilterEnabled ? setGenresFilterEnabled(false) : setGenresFilterEnabled(true)
    }

    useEffect(() => {
        const genreList = ['Action', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Thriller', 'Romance', 'Science Fiction'];

        genres.forEach(element => {
            for(let genre of genreList) {
                if(element.name == genre) {
                    setCurrentMovieGenres(prevValue => [...prevValue, {'name': element.name, 'id': element.id},])
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

    return (
        <section className='filter-page'>
            <div className='wrapper'>
                <ButtonClose closeFunction={toggleFilter} />
                <div className='filter-page-nav'>
                    <p>Genres List</p>
                </div>
                <ul className='genres-list list-none' data-type={isGenreFilterEnabled}>
                    {currentMovieGenres.map(genre => 
                           <span id={genre.id} className="genre-option" onClick={buttonAnimation}>{genre.name}</span>  
                    )}
                </ul>
                <button className='button-primary' onClick={filterEventButton}>Filter Movies</button>
            </div>
        </section>
    )
}