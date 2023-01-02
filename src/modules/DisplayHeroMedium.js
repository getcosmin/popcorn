import HeadlineMain from "./components/HeadlineMain";

export default function HeroMedium({content}) {
    return(
        
        <section className='hero-medium'>
            <div className='wrapper'>
                <HeadlineMain content = {{...content}}/>
            </div>
        </section>
        
    )
}