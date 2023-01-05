export default function DisplayHeroStatic({text}) {
    return (
        <section className='hero'>
            <div className='hero-body wrapper'>
                <header className='headline'>
                    <h1 className='hero-title'>{text.title}</h1>
                    <p className='hero-subtitle'>{text.subtitle}</p>
                </header>
            </div>
            <picture className='hero-image-static'>
                <source media='(min-width: 1024px)' srcset ='https://getcosmin.dev/assets/projects/img/flux-movies-landscape-getcosmindev.webp'/>
                <source media='(max-width: 1023px)' srcset ='https://getcosmin.dev/assets/projects/img/flux-movies-portrait-getcosmindev.webp'/>
                <img className='hero-image-large' src='https://getcosmin.dev/assets/projects/img/flux-movies-landscape-getcosmindev.webp'/>
            </picture>
        </section>

    )
}