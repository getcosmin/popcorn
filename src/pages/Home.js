
import DisplayCarousel from '../modules/DisplayCarousel'
import DisplayHero from '../modules/DisplayHero'

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
