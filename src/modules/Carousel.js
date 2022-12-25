import { useState } from "react";
import SmallCard from './components/Small-card'
import Headline from './components/Headline'

export default function Carousel(props) {
    
    const [movies, setMovies] = useState([])
    const  scifi = [];

    const listShows = async () => {
        try {
            const response = await fetch('https://api.tvmaze.com/shows')
            const data = await response.json()
    
            for (let i = 0; i < data.length; i++) {
                data[i].genres.forEach(element => {
                    if (element === props.genre) {
                        scifi.push(data[i])
                  
                    }
                })
                setMovies(scifi)
            }

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
        <section>
            <Headline
                content = {{
                    title: props.title
                }}
            />
            <div className='card-scroll-frame'>
                {renderMovies}
            </div>
        </section>
    )
}