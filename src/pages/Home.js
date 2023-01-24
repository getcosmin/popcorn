
import DisplayCarousel from '../sections/DisplayCarousel'
import DisplayHeroSlider from '../sections/DisplayHeroSlider'

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

        <DisplayCarousel
          carousel = {{
            title: 'History',
            genre: '36'
          }}
        />

    </>
  );
}
