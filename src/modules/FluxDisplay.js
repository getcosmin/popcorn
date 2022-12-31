import HeadlineM from "./components/HeadlineM";
import MoviesRender from './components/MoviesRender'
import FilterModule from '../modules/components/FilterModule'


export default function MovieList(movies) {

    return(
        <section>

            <HeadlineM
                content = {{ title: 'All Movies' }}
            />
            
            <div className='wrapper'>

                <FilterModule /> 

                <MoviesRender movies = {{...movies}} />

            </div>
        </section>

    )
}