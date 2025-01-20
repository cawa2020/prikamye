import './styles/index.scss'
import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import AboutUs from './components/AboutUs/AboutUs'
import Services from './components/Services/Services'
import HowWeWork from './components/HowWeWork/HowWeWork'

function App() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <AboutUs />
        <Services />
        <HowWeWork />
      </main>
    </>
  )
}

export default App
