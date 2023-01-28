// 00 - IMPORTING - React
import { useEffect } from 'react';

// 01 - IMPORTING - Components
import ArrowRight from '../../images/icon-arrow-right'
import ArrowLeft from '../../images/icon-arrow-left'


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

    return (

        <div className='carousel-navigation'>
            <button className='carousel-nav-button' onClick={slideCardLeft}>
                {ArrowLeft}
            </button>
            <button className='carousel-nav-button' onClick={slideCardRight}>    
                {ArrowRight}
            </button>
        </div>
        
    )
}