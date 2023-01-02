import HeadlineM from "./components/HeadlineM";
import MovieLandscape from './components/MovieLandscape'

export default function FluxLandscape({movies}) {

    return(
        <section>
            <HeadlineM  title = 'All Movies' />


            <div className='wrapper'>
                <div className='flux-landscape'>
                    {movies.map(movie =>  <MovieLandscape {...movie}/>)}  
                </div>     
            </div>
        </section>

    )
}