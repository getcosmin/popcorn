// 01 - Components
import MoviesRender from './components/MoviesRender'

export default function MovieList(movies, title) {

    return(
        <section>
            <div className='wrapper'>

                <MoviesRender movies = {{...movies}} />

            </div>
        </section>

    )
}