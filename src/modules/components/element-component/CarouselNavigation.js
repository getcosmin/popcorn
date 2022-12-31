import ArrowRight from '../../images/icon-arrow-right'
import ArrowLeft from '../../images/icon-arrow-left'


export default function CarouselNavigation() {
    return(
        <div className='carousel-navigation'>
            <button className='carousel-nav-button'>
                <svg className='carousel-nav-icon' width="24" height="24" viewBox="0 0 32 32">
                    {ArrowLeft}
                 </svg>
            </button>
            <button className='carousel-nav-button'>
                <svg className='carousel-nav-icon' width="24" height="24" viewBox="0 0 32 32">
                    {ArrowRight}
                </svg>
            </button>
        </div>
    )
}