
import DisplayCarousel from '../sections/DisplayCarousel';
import DisplayHeroSlider from '../sections/DisplayHeroSlider';
import DisplayCarouselLandscape from '../sections/DisplayCarouselLandscape';

export default function Home() {
  return (
    <>

        <DisplayHeroSlider
            text = {{
              title: 'Movie Station',
              subtitle: 'Pick your favorite movie.'
            }}
          />

        <DisplayCarousel
          carousel = {{
            title: 'SciFi',
            genre: '878'
          }}
        />

        <DisplayCarouselLandscape
          carousel = {{
            title: 'History',
            genre: '36'
          }}
        />

        <DisplayCarousel
          carousel = {{
            title: 'History',
            genre: '36'
          }}
        />

    </>
  );
}
