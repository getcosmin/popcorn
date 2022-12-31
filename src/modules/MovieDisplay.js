
import { useEffect, useState } from "react";
import RatingBadge from "./components/element-component/RatingBadge";

export default function MovieDisplay(movie, state) {

    console.log(state)
    console.log(movie)


    fetchMovieTrailer()
    async function fetchMovieTrailer() {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movie[0].id}/videos?api_key=350845626c05bcf9e670b1135deffe7b&language=en-US`)
        const data = await response.json()
    
        data.results.forEach((element, index) => {
            if(element.type === 'Trailer') {
                    console.log(element.key)
            }
        })
            // TODO: ADD KEY after LOOP to youtube video https://www.youtube.com/watch?v=mqqft2x_Aa4
            // TODO: RENDER CONTENT with video integrated
            // TODO: IF video found - render video - else: render image poster
    } 



    function closeMovieDisplay() {
        const displayWindow = document.querySelector('.display').parentElement;
        displayWindow.remove()
    }

    const renderMovieGenres = movie[0].genres.map(genre => {
        return <span className='card-genres'>{genre.name}</span>
    })
 

    return (
        <section className='display'>
            <div className='display-nav wrapper'>
                <p onClick={closeMovieDisplay}>Back to Movies</p>
                <button onClick={closeMovieDisplay}>
                    <svg className='close-display' width="24" height="24" viewBox="0 0 24 24">
                        <path d="M13.4,12l4.1-4.1c0.1-0.1,0.1-0.2,0-0.3l-1.1-1.1c-0.1-0.1-0.2-0.1-0.3,0L12,10.6L7.9,6.5c-0.1-0.1-0.2-0.1-0.3,0L6.5,7.6
      		                     c-0.1,0.1-0.1,0.2,0,0.3l4.1,4.1l-4.1,4.1c-0.1,0.1-0.1,0.2,0,0.3l1.1,1.1c0.1,0.1,0.2,0.1,0.3,0l4.1-4.1l4.1,4.1
      		                     c0.1,0.1,0.2,0.1,0.3,0l1.1-1.1c0.1-0.1,0.1-0.2,0-0.3L13.4,12z">
                        </path>
                    </svg>
                </button>
            </div>
            <img className='display-hero' src={`https://image.tmdb.org/t/p/w500${movie[0].backdrop_path}`}></img>
            <div className='wrapper'>
                <header className='display-headline'>
                    { RatingBadge(movie[0].vote_average) }
                    <h2 className='display-title'>{movie[0].title}</h2>
                    <div className='display-genres'>
                       {renderMovieGenres}
                    </div>
                </header>
                <div className='display-body'>
                    <p className='body-text'>{movie[0].overview}</p>
                </div>
            </div>
        </section>
    )
}
