import { useState } from "react";

export default function Carousel() {
    const [movies, setMovies] = useState([])
    const  scifi = [];

    const listShows = async () => {
        const response = await fetch('https://api.tvmaze.com/shows')
        const data = await response.json()

        for (let i = 0; i < data.length; i++) {
            data[i].genres.forEach(element => {
                if (element === 'Science-Fiction') {
                    scifi.push(data[i])
                    addCard()
                }
            })
            setMovies(scifi)
        }
        
        console.log(movies)
    }

    function addCard() {
        setMovies(movie => {
            movie.map(item => {
               return( <p>{item}</p>)
            })
        })
    }

    listShows()

    return(
        <section>
            <div className='card-scroll-frame'>
                {movies.map((movie) => <p>{movie.name}</p> )}
            </div>
        </section>
    )
}