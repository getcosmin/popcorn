// 00 - React
import { useEffect, useState } from 'react';

// 01 - Components
import ButtonClose from '../../../components/sub-components/ButtonClose';

export default function FilterPage({ genres, movieFilter, filterMovies, toggleFilter, sortMovies }) {
    const [isGenreFilterEnabled, setGenresFilterEnabled] = useState(false);
    const [currentMovieGenres, setCurrentMovieGenres] = useState([]);
    const [movieSortValue, setMovieSortValue] = useState('popularity.asc');

    useEffect(() => {
        const genreList = ['Action', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Thriller', 'Romance', 'Science Fiction'];

        genres.forEach((element) => {
            for (const genre of genreList) {
                if (element.name == genre) {
                    setCurrentMovieGenres(prevValue => [...prevValue, {'name': element.name, 'id': element.id},])
                }
            }
        });
    }, []);

    function buttonAnimation(event) {
        const allButtons = document.querySelectorAll('.genre-option');
        allButtons.forEach((element) => element.classList.remove('genre-active'));
        event.target.classList.toggle('genre-active');
        movieFilter(event.target.id, event.target.innerText);
    }

    function selectSort(event) {
        sortMovies(event.target.value);
    }

    function filterEventButton(event) {
        toggleFilter();
        filterMovies(event);
    }

    return (
        <section className="filter-page">
            <div className="wrapper filter-modal">
                <ButtonClose closeFunction={toggleFilter} />
                <div className="filter-page-nav">
                    <p className="filter-subtitle">Select Movie Genre:</p>
                    <ul className="genres-list list-none" data-type={isGenreFilterEnabled}>
                        {currentMovieGenres.map((genre) =>
                           <span id={genre.id} className="genre-option" onClick={buttonAnimation}>{genre.name}</span>
                        )}
                    </ul>
                </div>
                <div className="filter-page-nav">
                    <p className="filter-subtitle">Sort Movies:</p>
                    <select onChange={selectSort} className="sort-field">
                        <option value={'original_title.asc'}>By Movie Title (A - Z)</option>
                        <option value={'original_title.desc'}>By Movie Title (Z - A)</option>
                        <option value={'release_date.asc'}>By Release Date (A - Z)</option>
                        <option value={'release_date.desc'}>By Release Date (Z - A)</option>
                    </select>
                </div>
                <div className="genre-submit">
                    <button className="button-primary margin-none mt20" onClick={filterEventButton}>Filter Movies</button>
                </div>
            </div>
        </section>
    );
}
