import ArrowRight from '../../images/icon-arrow-right'
import ArrowLeft from '../../images/icon-arrow-left'
import { useEffect } from 'react';


export default function CarouselNavigation() {

    useEffect(() => {
        const selectSkeletonCard = document.querySelector('.card-image-placeholder');
        const realCard = document.querySelector('.card');

        selectSkeletonCard !== null ? updateButtonSize(selectSkeletonCard) : updateButtonSize(realCard)

        function updateButtonSize(card) {
            const navButtons = document.querySelectorAll('.carousel-nav-button')
            if (navButtons) {
                navButtons.forEach(button => button.style.setProperty('--button-height', `${card.clientHeight}px`))
            } 
        }

    }, [window.innerWidth])

    const slideCardRight = event => event.target.closest('.card-scroll-frame').scrollLeft += 300;

    const slideCardLeft = event => event.target.closest('.card-scroll-frame').scrollLeft -= 300;


    return(
        <div className='carousel-navigation'>
            <button className='carousel-nav-button' onClick={slideCardLeft}>
                <svg className='carousel-nav-icon' width="24" height="24" viewBox="0 0 32 32">
                    {ArrowLeft}
                 </svg>
            </button>
            <button className='carousel-nav-button' onClick={slideCardRight}>
                <svg className='carousel-nav-icon' width="24" height="24" viewBox="0 0 32 32">
                    {ArrowRight}
                </svg>
            </button>
        </div>
    )
}