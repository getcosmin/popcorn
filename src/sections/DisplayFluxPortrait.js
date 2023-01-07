// 01 - Components
import MoviesRender from './components/MoviesRender'

export default function MovieList(movies) {

    return(
        <section>
            <div className='wrapper'>

                <MoviesRender movies = {{...movies}} />

            </div>
        </section>

    )
}