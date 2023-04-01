// 01 - Components

export default function HeroSliderBody({ movie }) {
    return (
        <div className="hero-banner">
            <div className="hero-body wrapper">
                <header className="slider-headline">
                    <img className="hero-brand" src={movie.image.brand} alt={movie.title} />
                </header>
            </div>
            <picture className="hero-body-image">
                <source media="(min-width: 1024px)" srcSet={movie.image.landscape} />
                <source media="(max-width: 1023px)" srcSet={movie.image.portrait} />
                <img className="hero-image-large" src={movie.image.landscape} alt={movie.title} />
            </picture>
            <div className="fade-container">
                <div className="fade1"></div>
                <div className="fade2"></div>
                <div className="fade3"></div>
            </div>
        </div>
    );
}
