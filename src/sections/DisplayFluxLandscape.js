// 01 - Components
import HeadlineSmall from './components/HeadlineSmall';
import MovieLandscape from './components/MovieLandscape';

export default function FluxLandscape({ movies }) {
    return (
        <section>
            <HeadlineSmall title = 'Movies' />
            <div className='wrapper'>
                <div className='flux-landscape'>
                    { movies.map((movie) => {
                        return <MovieLandscape
                                    key={movie.id}
                                        {...movie} />
                        })
                    }
                </div>
            </div>
        </section>
    );
}
