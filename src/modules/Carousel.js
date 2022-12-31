import { useState } from "react";
import SmallCard from './components/element-component/SmallCard'
import CarouselNavigation from './components/element-component/CarouselNavigation'
import HeadlineM from './components/HeadlineM'

export default function Carousel(props) {
    
    const [movies, setMovies] = useState([])

    const listShows = async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=350845626c05bcf9e670b1135deffe7b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=Science%20Fiction&with_watch_monetization_types=flatrate')
            const data = await response.json()
    
            setMovies(data.results)    

        } catch (error) {
            console.log(error)
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

    listShows()
 
    return(
        <section className='carousel'>
            <div className='wrapper mr00'>
                <HeadlineM
                    content = {{
                        title: props.title
                    }}
                 />

                { window.innerWidth > 1024 ? <CarouselNavigation/> : null }
           
                <div className='card-scroll-frame'>
                    {renderMovies}
                </div>
            </div>
        </section>
    )
}