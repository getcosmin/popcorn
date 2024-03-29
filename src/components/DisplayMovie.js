// 00 - React
import { useEffect, useState, useContext } from 'react';

// 01 - Components
import RatingBadge from './sub-components/RatingBadge';
import ButtonClose from './sub-components/ButtonClose';
import { AppContextMovie } from '../context/movieDisplayContext';

export default function MovieDisplay({ movieID }) {
    const [movieDetails, setMovieDetails] = useState();
    const [movieTrailer, setMovieTrailer] = useState();
    console.log(movieDetails);
    
    const { closeMovieDisplayWindow } = useContext(AppContextMovie);

    useEffect(() => {
        fetchMovieDetails();
        async function fetchMovieDetails() {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieID[0]}?api_key=350845626c05bcf9e670b1135deffe7b&language=en-US`);
            const data = await response.json();
            setMovieDetails(data);
        }
    }, [movieID[0]]);

    useEffect(() => {
        fetchMovieDetails();
        async function fetchMovieDetails() {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieID[0]}/videos?api_key=350845626c05bcf9e670b1135deffe7b&language=en-US`);
            const data = await response.json();
            console.log(data);
            data.results.forEach((element) => {
                if (element.type === 'Trailer') {
                    setMovieTrailer(element.key);
                }
            });
        }
    }, [movieID[0]]);

    if (movieTrailer === undefined) return;

    if (movieDetails === undefined) return;

    const renderMovieGenres = movieDetails.genres.map((genre) => {
        return <span key={genre.id} className='card-genres'>{genre.name}</span>;
    });

    return (
        <section className="display">
            <div className="cinema-preview">
                <div className="display-controller">
                    <ButtonClose closeFunction={closeMovieDisplayWindow}></ButtonClose>
                </div>
                <div className="movie-cinema">
                    <iframe className="display-hero" width="1920" height="1080"
                        src={`https://www.youtube.com/embed/${movieTrailer}?rel=0&version=3&autoplay=1&controls=0`}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write;
                        encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>
                <div className="overlay-container">
                    <div className="cinema-overlay1"></div>
                    <div className="cinema-overlay2"></div>
                    <div className="cinema-overlay3"></div>
                </div>
                <header className="display-headline wrapper">
                    <div>
                        { RatingBadge(parseFloat(movieDetails.vote_average).toFixed(2)) }
                        <h2 className="display-title">{movieDetails.title}</h2>
                        <div className="display-genres">
                            { renderMovieGenres }
                        </div>
                        <div className="display-body">
                            <p className="body-text">{movieDetails.overview}</p>
                        </div>
                    </div>
                </header>
            </div>
            <div className="cinema-body">

            </div>
            <div className="cinema-footer">

            </div>

        </section>
    );
}
