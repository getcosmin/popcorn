// 01 - Components
import MovieItem from './sub-components/MovieItem'

export default function MoviesRender({movies}) {
    return (

        <div className='flux-movies'>
            <MovieItem movies = {{...movies}} />
        </div>

    )
}