export default function DisplayHeroLarge({text}) {
    return (

        <section className='hero-static'>
            <div className='hero-body wrapper'>
                <header className='headline'>
                    <h1>{text.title}</h1>
                    <p className='hero-subtitle'>{text.subtitle}</p>
                </header>
            </div>

            <picture className='hero-focus'>
                <source media='(min-width: 1024px)' srcset ='https://getcosmin.dev/assets/projects/img/flux-movies-landscape-getcosmindev.webp'/>
                <source media='(max-width: 1023px)' srcset ='https://getcosmin.dev/assets/projects/img/flux-movies-portrait-getcosmindev.webp'/>
                <img className='hero-image-large' src='https://getcosmin.dev/assets/projects/img/flux-movies-landscape-getcosmindev.webp'/>
            </picture>
        </section>

    )
}