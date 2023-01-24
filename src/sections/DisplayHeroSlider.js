// 00 - React
import { useEffect, useState } from 'react'

// 01 - Components
import HeroSliderBody from './components/HeroSliderBody'
import ButtonsHeroSlider from './components/sub-components/ButtonsHeroSlider'
import MovieSliderText from '../assets/text/MovieSliderText'

export default function DisplayHeroSlider(movie) {

    useEffect(() => {

        class Slider {
            static imagePosition = 1;
            static previousScrollPosition = 0;
            static currentScrollPosition = 0;
            static imageSize = document.querySelector('.hero-scroll-frame').clientWidth;
            static scrollWindow = document.querySelector('.hero-scroll-frame');

            static checkScrollDirection() {

                if (Slider.currentScrollPosition >= Slider.previousScrollPosition && 
                    Slider.currentScrollPosition >= (Slider.imageSize * Slider.imagePosition)) {
                       
                        Slider.imagePosition = Slider.imagePosition + 1;
                        SliderProgress.updateProgress()

                } else if (Slider.currentScrollPosition < Slider.previousScrollPosition &&
                    Slider.currentScrollPosition === (Slider.imageSize * (Slider.imagePosition - 2))) {

                        Slider.imagePosition = Slider.imagePosition - 1;
                        SliderProgress.updateProgress()

                }
            }
        }


        Slider.scrollWindow.addEventListener('scroll', () => {
            Slider.currentScrollPosition = Slider.scrollWindow.scrollLeft;

            Slider.checkScrollDirection()

            Slider.previousScrollPosition = Slider.scrollWindow.scrollLeft;
        })

        class SliderProgress {
            static selectProgress = document.querySelectorAll('.pagination-circle');

            static updateProgress() {
                SliderProgress.selectProgress.forEach(element => element.classList.remove('active'));
                SliderProgress.selectProgress[Slider.imagePosition - 1].classList.add('active');
            }

        }

        SliderProgress.updateProgress()

    }, [])


    return (
        <section className='hero'>
            {window.innerWidth > 1024 && <ButtonsHeroSlider/>}
            <div className='hero-scroll-frame'>
                {MovieSliderText.map(movie =>  <HeroSliderBody movie = {{...movie}}/>)}

            </div>
            <div className='hero-slider-pagination'>
                {MovieSliderText.map(movie => <span className='pagination-circle'></span>)}
            </div>

        </section>

    )
}