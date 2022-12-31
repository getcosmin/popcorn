
import Carousel from '../modules/Carousel'
import HeroImage from '../modules//components/HeadlineHero'

export default function Home() {

  return (
    <>

        <HeroImage />

        <Carousel 
          genre = {'Science-Fiction'}
          title = {'SciFi'}
        />

        <Carousel 
          genre = {'Comedy'}
          title = {'Comedy'}
        />

    </>
  );
}
