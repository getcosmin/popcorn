// 00 - React
import { useState } from "react";

// 01 - Components
import CarouselNavigation from './components/element-component/CarouselNavigation'
import HeadlineSmall from './components/HeadlineSmall'
import SmallCard from './components/element-component/SmallCard'
import SkeletonSmallCard from "./skeleton/SkeletonSmallCard";


export default function Carousel(props) {
    
    const [movies, setMovies] = useState([])
    const [isSkeletonEnabled, setSkeletonEnabled] = useState(true)

    const listShows = async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=350845626c05bcf9e670b1135deffe7b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=Science%20Fiction&with_watch_monetization_types=flatrate')
            const data = await response.json()
    
            setMovies(data.results)    
            disableSkeleton(false)

        } catch (error) {
            console.error(error)
        }      
    }

    const renderMovies = movies.map(movie => {
        return (
            <SmallCard
                key={movie.id}
                {...movie}
            />
        )
    })    

    function disableSkeleton() {
        setSkeletonEnabled(false)
    }

    const cards = ['1','2','3','4','5','6','7','8']

    listShows()
 
    return(
        <section className='carousel'>
            <div className='carousel-container wrapper mr00 card-container'>
                
                <HeadlineSmall  title = {props.title} />
                
                { isSkeletonEnabled ? <div className='card-scroll-frame'> { cards.map(card => <SkeletonSmallCard/>) } </div> : null}
        
                <div className='card-scroll-frame'>
                    
                { window.innerWidth > 1024 ? <CarouselNavigation/> : null }

                    {renderMovies}

                </div>
            </div>
        </section>
    )
}