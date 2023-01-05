
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
          genre = {'Science-Fiction'}
          title = {'SciFi'}
        />

        <DisplayCarousel
          genre = {'Comedy'}
          title = {'Comedy'}
        />

    </>
  );
}
