import HeroMedium from '../modules/HeroMedium'
import FluxDisplay from '../modules/FluxDisplay'
import useFetch from '../hooks/useFetch'

export default function Flux() {


    const { data } = useFetch('https://api.themoviedb.org/3/discover/movie?api_key=350845626c05bcf9e670b1135deffe7b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')

    return (

        <>
            <HeroMedium
                content = {{
                    title: 'Flux',
                    subtitle: 'Discover new movies.'
                }}
            />

            <FluxDisplay movies = {[...data]} />
            
        </>
        
    )
}

    