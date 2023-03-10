// 00 - React
import { useState } from 'react';
import { createPortal } from 'react-dom';

// 01 - Components
import PageFilter from './PageFilter';

export default function FilterModule({ genres, movieFilter, filterMovies, sortMovies }) {
    const [hasFilterEnabled, setFilterEnabled] = useState(false);

    function toggleMovieFilter() {
        hasFilterEnabled ? setFilterEnabled(false) : setFilterEnabled(true);
    }

    return (
        <>

            { hasFilterEnabled && createPortal(
                <PageFilter genres = {genres}
                            movieFilter = {movieFilter}
                            filterMovies = {filterMovies}
                            toggleFilter = {toggleMovieFilter}
                            sortMovies = {sortMovies}
                />
                , document.querySelector('body')) }

            <section className="filter wrapper">
                <button className="button-filter button-round" onClick={toggleMovieFilter}>
                    <svg width="48" height="48" viewBox="0 0 48 48">
                        <rect x="14" y="14" width="8" height="8" rx="0.4"></rect>
                        <rect x="26" y="14" width="8" height="8" rx="0.4"></rect>
                        <rect x="14" y="26" width="8" height="8" rx="0.4"></rect>
                        <rect x="26" y="26" width="8" height="8" rx="0.4"></rect>
                    </svg>
                </button>
            </section>
        </>
    );
}
