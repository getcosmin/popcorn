// 00 - React
import { useEffect, useState } from 'react'

// 01 - Components
import HeroSliderBody from './components/HeroSliderBody'
import MovieSliderText from '../assets/text/MovieSliderText'

export default function DisplayHeroSlider(movie) {

    useEffect(() => {
        const CARDSWIPER = {
            bannerProgress: 0,
            prevScrollProgress: 0
        }
        const heroSlider = document.querySelector('.hero-image-slider')

    
        function throttle(fn, wait) {
            let time = Date.now();
            return function() {
              if ((time + wait - Date.now()) < 0) {
                fn();
                time = Date.now();
              }
            }
          }
        const displayProgress = document.querySelectorAll('.slider-circle')
        displayProgress[CARDSWIPER.bannerProgress].classList.add('circle-active')

        heroSlider.addEventListener('scroll', throttle(handleScroll, 800))



        function handleScroll() {
            const heroSlider = document.querySelector('.hero-image-slider')
            const sliderPosition = heroSlider.scrollLeft

            if(sliderPosition > CARDSWIPER.prevScrollProgress) {
                CARDSWIPER.bannerProgress = CARDSWIPER.bannerProgress + 1;
                updateProgress()
                console.log(CARDSWIPER.bannerProgress)
            } else {
                CARDSWIPER.bannerProgress = CARDSWIPER.bannerProgress - 1;
                updateProgress()
                console.log(CARDSWIPER.bannerProgress)
            }
        
            function updateProgress() {
                const displayProgress = document.querySelectorAll('.slider-circle')
                displayProgress.forEach(element => element.classList.remove('circle-active'))
                displayProgress[CARDSWIPER.bannerProgress].classList.add('circle-active')
            }
        }
        heroSlider.addEventListener('scroll', () => {
            const sliderPosition = heroSlider.scrollLeft
            CARDSWIPER.prevScrollProgress = sliderPosition;
        })

    }, [])

    return (
        <section className='hero'>
            <div className='hero-image-slider'>
                {MovieSliderText.map(movie =>  <HeroSliderBody movie = {{...movie}}/>)}

            </div>
            <div className='hero-slider-counter'>
                {MovieSliderText.map(movie => <span className='slider-circle'></span>)}
            </div>

        </section>

    )
}