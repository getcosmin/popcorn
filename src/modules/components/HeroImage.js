export default function HeroImage() {
    return (
        <section className='hero'>
            <div className='gradient'></div>
            <div className='hero-body'>
                <header className='hero-headline'>
                    <div>
                        <h1>House of the Dragon</h1>
                        <p className='hero-subtitle'>Gritty • Comedy • SciFi</p>
                    </div>
                </header>
            </div>
            <img className='hero-poster' src='https://getcosmin.dev/assets/other/hbo-house-of-the-dragon.webp'></img> 
        </section>
    )
}