import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Flux from './pages/Flux'
import Notifications from './pages/Notifications'
import Navigation from './sections/Navigation'
import NavigationBottom from './sections/NavigationBottom'
import Footer from './sections/Footer'
import './assets/css/movie.css';
import useLocalStorage from './hooks/useLocalStorage'
import './assets/css/movie.css';
import { useEffect } from 'react'


export default function App() {

  useEffect(() => {
    console.log('closed')
    const bottomLinks = document.querySelectorAll('.bottom-navigation-link')
    bottomLinks.forEach(element => element.addEventListener('click', closeMovieDisplay))

    function closeMovieDisplay() {
      if (document.querySelector('.display') !== null) {
        const displayWindow = document.querySelector('.display').parentElement
        displayWindow.remove()
      }    
    }
  }, [])

  const [theme, setTheme] = useLocalStorage('theme', 'light')

  const switchTheme = () => {
    setTheme(value => value === 'dark' ? 'light' : 'dark')
  }
  
  return (

    <div className='background' data-theme={theme}>

      <Navigation />
      
      <Routes>
        <Route path='/' element = { <Home />} />
        <Route path='/flux' element = { <Flux />} />
        <Route path='/notifications' element = { <Notifications />} />
      </Routes>

      {window.innerWidth < 1024 ? <NavigationBottom 
                                      switch = {switchTheme}
                                  />
                                  : null
      }

      <Footer />  

    </div>
  );
}


