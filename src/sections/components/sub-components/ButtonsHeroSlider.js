import ArrowLeft from '../../images/icon-arrow-left'
import ArrowRight from '../../images/icon-arrow-right'


function slideBannerRight() {
    const scrollWindow = document.querySelector('.hero-scroll-frame')
    const bannerSize = document.querySelector('.hero-scroll-frame').clientWidth
    scrollWindow.scrollLeft += bannerSize
}
function slideBannerLeft() {
    const scrollWindow = document.querySelector('.hero-scroll-frame')
    const bannerSize = document.querySelector('.hero-scroll-frame').clientWidth
    scrollWindow.scrollLeft -= bannerSize
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