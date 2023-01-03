import HeadlineSmall from "./components/HeadlineSmall";
import MoviesRender from './components/MoviesRender'

export default function MovieList(movies, title) {

    return(
        <section>
            <HeadlineSmall  title = 'Movies' />
            
            <div className='wrapper'>

                <MoviesRender movies = {{...movies}} />

            </div>
        </section>

    )
}