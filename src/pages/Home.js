
import Carousel from '../modules/Carousel'
import BottomNavigation from '../modules/BottomNavigation'
import HeroImage from '../modules//components/HeroImage'
import useLocalStorage from '../hooks/useLocalStorage'
import Footer from '../modules/Footer'

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
