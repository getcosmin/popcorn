// 01 - Components
import ButtonPlayTrailer from "./sub-components/ButtonPlay";

export default function HeroSliderBody({ movie }) {
    return (
        <div className="hero-banner">
            <div className="hero-body wrapper">
                <header className="slider-headline">
                    <img className="hero-brand" src={movie.image.brand} alt={movie.title} />
                    <ButtonPlayTrailer/>
                </header>
            </div>
            <picture className="hero-body-image">
                <source media="(min-width: 1024px)" srcset ={movie.image.landscape} />
                <source media="(max-width: 1023px)" srcset ={movie.image.portrait} />
                <img className="hero-image-large" src={movie.image.landscape} alt={movie.title} />
             </picture>
        </div>
    );
}
