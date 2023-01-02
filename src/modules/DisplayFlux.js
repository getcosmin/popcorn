import HeadlineM from "./components/HeadlineM";
import MoviesRender from './components/MoviesRender'

export default function MovieList(movies, title) {

    return(
        <section>

            <HeadlineM  title = 'Movies' />
            
            <div className='wrapper'>


                <MoviesRender movies = {{...movies}} />

            </div>
        </section>

    )
}