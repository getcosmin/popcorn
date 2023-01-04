
import DisplayCarousel from '../sections/DisplayCarousel'
import DisplayHero from '../sections/DisplayHero'

export default function Home() {

  return (
    <>

        <DisplayHero />

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
