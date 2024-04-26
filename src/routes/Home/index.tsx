import NavBar from '../../components/NavBar'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Illustration from '../../components/Illustration'
import Testimonials from './components/Testimonials'
import Sidebar from '../../components/Sidebar'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <About/>
      <Work/>
      <Illustration/>
      <Testimonials/>
      <Footer/>
      <Sidebar/>
    </div>
  )
}

export default Home