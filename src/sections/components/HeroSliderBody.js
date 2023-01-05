export default function HeroSliderBody({movie}) {
    

    return (
        <div className='body-card'>

            <div className='hero-body wrapper'>
                <header className='slider-headline'>
                    <img className='hero-brand' src={movie.image.brand} alt={movie.title}/>
                    <p className='hero-subtitle'>{movie.subtitle}</p>
                </header>
            </div>
            <picture className='hero-banner'>
                <source media='(min-width: 1024px)' srcset ={movie.image.landscape}/>
                <source media='(max-width: 1023px)' srcset ={movie.image.portrait}/>
                <img className='hero-image-large' src={movie.image.landscape}/>
             </picture>

        </div>
    )
}