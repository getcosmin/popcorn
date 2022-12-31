import MovieItem from './element-component/MovieItem'

export default function MoviesRender({movies}) {
    return(

        <div className='flux-movies'>
            <MovieItem movies = {{...movies}} />
        </div>

    )
}