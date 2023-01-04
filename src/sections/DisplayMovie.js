// 00 - React
import { useEffect, useState } from "react";

// 01 - Components
import RatingBadge from "./components/sub-components/RatingBadge";

export default function MovieDisplay({movieID, closeDisplayWindow}) {
    const [movieDetails, setMovieDetails] = useState()
    const [movieTrailer, setMovieTrailer] = useState()

    useEffect(() => {
        fetchMovieDetails()
        async function fetchMovieDetails() {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieID[0]}?api_key=350845626c05bcf9e670b1135deffe7b&language=en-US`);
            const data = await response.json()

            setMovieDetails(data)
        }
    }, [movieID[0]])

    useEffect(() => {
        fetchMovieDetails()
        async function fetchMovieDetails() {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieID[0]}/videos?api_key=350845626c05bcf9e670b1135deffe7b&language=en-US`);
            const data = await response.json()
            console.log(data)
            data.results.forEach(element => {
                if(element.type === 'Trailer') {
                    setMovieTrailer(element.key)
                }
            })
        }
    }, [movieID[0]])

    if(movieTrailer == undefined) return


    // STOP Rendering before Fetch Data Arrived
    if(movieDetails == undefined) return
    const renderMovieGenres = movieDetails.genres.map(genre => {
        return <span className='card-genres'>{genre.name}</span>
    })

    return (
        <section className='display'>
            <button onClick={closeDisplayWindow}>
                <svg className='button-round close-display' width="24" height="24" viewBox="0 0 24 24">
                    <path d="M13.4,12l4.1-4.1c0.1-0.1,0.1-0.2,0-0.3l-1.1-1.1c-0.1-0.1-0.2-0.1-0.3,0L12,10.6L7.9,6.5c-0.1-0.1-0.2-0.1-0.3,0L6.5,7.6
      		                     c-0.1,0.1-0.1,0.2,0,0.3l4.1,4.1l-4.1,4.1c-0.1,0.1-0.1,0.2,0,0.3l1.1,1.1c0.1,0.1,0.2,0.1,0.3,0l4.1-4.1l4.1,4.1
      		                     c0.1,0.1,0.2,0.1,0.3,0l1.1-1.1c0.1-0.1,0.1-0.2,0-0.3L13.4,12z">
                    </path>
                 </svg>
            </button>
            <div className='movie-cinema'>
            <iframe className='display-hero' width="1920" height="1080"  src={`https://www.youtube.com/embed/${movieTrailer}?rel=0&version=3&autoplay=1&controls=0`} 
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className='display-nav wrapper'>

            </div>
            <header className='display-headline wrapper'>
                <div>
                    { RatingBadge(movieDetails.vote_average) }
                    <h2 className='display-title'>{movieDetails.title}</h2>
                    <div className='display-genres'>
                       {renderMovieGenres}
                    </div>
                    <div className='display-body'>
                        <p className='body-text'>{movieDetails.overview}</p>
                    </div>
                </div>    
            </header>
        </section>
    )
}
