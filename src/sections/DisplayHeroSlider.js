// 00 - React
import { useEffect, useState } from 'react'

// 01 - Components
import HeroSliderBody from './components/HeroSliderBody'
import MovieSliderText from '../assets/text/MovieSliderText'

export default function DisplayHeroSlider(movie) {

    useEffect(() => {
        const CARD = {
            position: 1,
            prevScroll: 0,
            size: document.querySelector('.hero-image-slider').clientWidth,
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
        displayProgress[CARD.position - 1].classList.add('circle-active')

        heroSlider.addEventListener('scroll', handleScroll)



        function handleScroll() {
            const heroSlider = document.querySelector('.hero-image-slider')
            const currentScroll = heroSlider.scrollLeft
            if(currentScroll >= CARD.prevScroll && currentScroll >= CARD.size * CARD.position) {
                CARD.position = CARD.position + 1;
                updateProgress()
            } else if (currentScroll < CARD.prevScroll && currentScroll == (CARD.size) * (CARD.position - 2)) {
                CARD.position = CARD.position - 1; 
                updateProgress()
            }
            console.log(`Current Scroll: ${currentScroll} AND ${CARD.position}`)
            function updateProgress() {
                const displayProgress = document.querySelectorAll('.slider-circle')
                displayProgress.forEach(element => element.classList.remove('circle-active'))
                displayProgress[CARD.position -1].classList.add('circle-active')
            }
        }
        heroSlider.addEventListener('scroll', () => {
            const currentScroll = heroSlider.scrollLeft
            CARD.prevScroll = currentScroll;
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