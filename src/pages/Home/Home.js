
import CarouselPortrait from './components/CarouselPortrait';
import DisplayHeroSlider from '../../sections/DisplayHeroSlider';
import CarouselLandscape from './components/CarouselLandscape';

export default function Home() {
  return (
    <>
        <DisplayHeroSlider
            text = {{
              title: 'Movie Station',
              subtitle: 'Pick your favorite movie.',
            }}
          />

        <CarouselPortrait
          carousel = {{
            title: 'SciFi',
            genre: '878',
          }}
        />

        <CarouselLandscape
          carousel = {{
            title: 'History',
            genre: '36',
          }}
        />

        <CarouselPortrait
          carousel = {{
            title: 'History',
            genre: '36',
          }}
        />

    </>
  );
}
