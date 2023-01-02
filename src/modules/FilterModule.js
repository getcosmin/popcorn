import { useState } from 'react'
import { createPortal } from 'react-dom'

import iconSort from "../modules/images/icon-sort"
import iconFilter from "../modules/images/icon-filter"
import PageFilter from './components/PageFilter'

export default function FilterModule({genres, movieFilter, filterMovies}) {

    const [isFilterEnabled, setFilters] = useState(false)

    function showFilters() {
        isFilterEnabled ? setFilters(false) : setFilters(true)
    }

    return(
        <>
            { isFilterEnabled && createPortal (
                <PageFilter genres = {genres} 
                            movieFilter = {movieFilter} 
                            filterMovies = {filterMovies}
                            toggleFilter = {showFilters}
                />
                , document.body) }

            <div className='filter wrapper'>
                <button className='button-sort'>
                    <svg className='button-icon button-round' width='48' height='48' viewBox="0 0 48 48">
                        <rect x="12" y="16" width="24" height="2" rx="0.4"></rect>
                        <rect x="12" y="24" width="16" height="2" rx="0.4"></rect>
                        <rect x="12" y="32" width="24" height="2" rx="0.4"></rect>
                    </svg>
                </button>
                <button className='button-filter' onClick={showFilters}>
                    <svg className='button-icon button-round' width='48' height='48' viewBox="0 0 48 48">
                        <rect x="14" y="14" width="8" height="8" rx="0.4"></rect>
                        <rect x="26" y="14" width="8" height="8" rx="0.4"></rect>
                        <rect x="14" y="26" width="8" height="8" rx="0.4"></rect>
                        <rect x="26" y="26" width="8" height="8" rx="0.4"></rect>
                    </svg>
                </button>
            </div>
        </>
    )
}