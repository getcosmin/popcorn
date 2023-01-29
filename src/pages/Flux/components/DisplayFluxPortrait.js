// 01 - Components
import MoviesRender from '../../../sections/components/MoviesRender';

export default function MovieList( movies ) {
    return (
        <section>
            <div className="wrapper">
                <MoviesRender movies = {{...movies}} />
            </div>
        </section>

    );
}
