import ArrowLeft from '../../images/icon-arrow-left'
import ArrowRight from '../../images/icon-arrow-right'


function slideBannerRight() {
    const scrollArea = document.querySelector('.hero-image-slider')
    scrollArea.scrollLeft += 1900
}
function slideBannerLeft() {
    const scrollArea = document.querySelector('.hero-image-slider')
    scrollArea.scrollLeft -= 1900
}


export default function ButtonsHeroSlider() {
    return (
        <div className='buttons-slider'>
            <button className='carousel-nav-button round-shape' onClick={slideBannerLeft} >
                {ArrowLeft}
            </button>
            <button className='carousel-nav-button round-shape' onClick={slideBannerRight}>    
                {ArrowRight}
            </button>
        </div>
    )
}