// 00 - IMPORTING - React
import { useEffect, useState } from 'react';

// 01 - IMPORTING - Components
import ArrowRight from '../../../assets/icons/icon-arrow-right';
import ArrowLeft from '../../../assets/icons/icon-arrow-left';


export default function CarouselNavigation({ selector }) {
    const [windowSize, setWindowSize] = useState();

    useEffect(() => {
        window.addEventListener('resize', function changeWindowSize() {
            console.log(window.innerWidth);
            setWindowSize(window.innerWidth);
        });
    }, []);

    useEffect(() => {
        const selectSkeletonCard = document.querySelector(`${selector.skeleton}`);
        console.log(selectSkeletonCard);
        const realCard = document.querySelector(`${selector.card}`);
        selectSkeletonCard !== null ?
            updateButtonSize(selectSkeletonCard)
            : updateButtonSize(realCard);
        function updateButtonSize(card) {
            const navButtons = document.querySelectorAll(`#${selector.id}`);
            if (navButtons) {
                navButtons.forEach(button => button.style.setProperty('--button-height', `${card.clientHeight}px`));
            }
        }
    }, [windowSize]);

    const slideCardRight = (event) => event.target.closest('.card-scroll-frame').scrollLeft += 300;

    const slideCardLeft = (event) => event.target.closest('.card-scroll-frame').scrollLeft -= 300;

    return (
        <div className="carousel-navigation">
            <button className="carousel-nav-button" id={selector.id} onClick={slideCardLeft}>
                {ArrowLeft}
            </button>
            <button className="carousel-nav-button" id={selector.id} onClick={slideCardRight}>
                {ArrowRight}
            </button>
        </div>
    );
}
