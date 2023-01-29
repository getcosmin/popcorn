import ArrowLeft from '../../../assets/icons/icon-arrow-left';
import ArrowRight from '../../../assets/icons/icon-arrow-right';

function slideBannerRight() {
    const scrollWindow = document.querySelector('.hero-scroll-frame');
    const bannerSize = document.querySelector('.hero-scroll-frame').clientWidth;
    scrollWindow.scrollLeft += bannerSize
}

function slideBannerLeft() {
    const scrollWindow = document.querySelector('.hero-scroll-frame');
    const bannerSize = document.querySelector('.hero-scroll-frame').clientWidth;
    scrollWindow.scrollLeft -= bannerSize
}

export default function ButtonsHeroSlider() {
    return (
        <div className="buttons-slider">
            <div role="button" className="carousel-nav-button round-shape" onClick={slideBannerLeft}>
                {ArrowLeft}
            </div>
            <div role="button" className="carousel-nav-button round-shape" onClick={slideBannerRight}>
                {ArrowRight}
            </div>
        </div>
    );
}
