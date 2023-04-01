// 01 - Components
import MoviesRender from './MoviesRender';
import WrapperSection from '../../../components/sub-components/WrapperSection';

export default function MovieList( movies ) {
    return (
        <WrapperSection>
            <MoviesRender 
                {...movies} 
            />
        </WrapperSection>
    );
}
