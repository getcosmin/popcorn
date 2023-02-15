// 00 - React
import { useEffect, useState } from 'react';

// 01 - Components
import CarouselNavigation from './CarouselNavigation';
import HeadlineSmall from '../../../components/HeadlineSmall';
import SkeletonCardLandscape from '../../../components/skeleton/SkeletonCardLandscape';
import MovieLandscape from '../../../components/MovieLandscape';


export default function Carousel({ carousel }) {
    const [movies, setMovies] = useState([]);
    const [isSkeletonEnabled, setSkeletonEnabled] = useState(true);

    const API_LINK = 'https://api.themoviedb.org/3/discover/movie';
    const API_KEY = 'api_key=350845626c05bcf9e670b1135deffe7b';

    useEffect(() => {
        class CarouselMovies {
            static async fetchMovies() {
                const response = await fetch(`${API_LINK}?${API_KEY}&with_genres=${carousel.genre}`);
                const data = await response.json();
                setMovies(data.results);
                disableSkeleton(false);
            }
        }
        CarouselMovies.fetchMovies();
    }, []);

    const renderMovies = movies.map((movie) => {
        return (
            <MovieLandscape
                key={movie.id}
                movie = {{...movie}}
            />
        );
    });

    function disableSkeleton() {
        setSkeletonEnabled(false);
    }

    const cards = ['1','2','3','4','5','6','7','8'];

    return (
        <section className="carousel">
            <div className="carousel-container wrapper mr00 card-container">
                <HeadlineSmall title = {carousel.title} />
                { isSkeletonEnabled ?
                    <div className="card-scroll-frame"> { cards.map(card => <SkeletonCardLandscape/>) } </div> 
                    : null
                }
                <div className="card-scroll-frame">
                    { window.innerWidth > 1024 ?
                            <CarouselNavigation selector={{
                                skeleton: '.card-placeholder-landscape',
                                card: '.card-landscape',
                                id: 'buttons-landscape',
                                }}
                            />
                            : null }
                    {renderMovies}
                </div>
            </div>
        </section>
    );
}
