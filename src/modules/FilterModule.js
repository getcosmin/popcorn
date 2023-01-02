import { useState } from 'react'
import { createPortal } from 'react-dom'

import iconSort from "../modules/images/icon-sort"
import iconFilter from "../modules/images/icon-filter"
import ModalFilter from './components/ModalFilter'

export default function FilterModule({genres, movieFilter, filterMovies}) {

    const [isFilterEnabled, setFilters] = useState(false)

    function showFilters() {
        isFilterEnabled ? setFilters(false) : setFilters(true)
    }

    return(
        <>
            { isFilterEnabled && createPortal (
                <ModalFilter    genres = {genres} 
                                movieFilter = {movieFilter} 
                                filterMovies={filterMovies}
                                toggleFilter = {showFilters}
                />
                                , document.body) }

            <div className='filter'>
                <button className='button-sort'>
                    <svg className='button-icon' width='32' height='32'>
                        {iconSort}
                    </svg>
                </button>
                <button className='button-filter' onClick={showFilters}>
                    <svg className='button-icon' width='32' height='32'>
                        {iconFilter}
                    </svg>
                </button>
            </div>
        </>
    )
}