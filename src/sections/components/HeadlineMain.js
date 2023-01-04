export default function HeadlineMain({content}) {
    return (

        <header className='headline headline-center'>
            <h1>{content.title}</h1>
            <p className='headline-subtitle'>{content.subtitle}</p>
        </header>
        
    )
}