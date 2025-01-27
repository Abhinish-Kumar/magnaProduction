import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import NotFound from './components/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Reviews from './components/Reviews/Reviews';
import Services from './components/Services/Services';
import LiveEvents from './components/Services/LiveEvents/LiveEvents';
import LightProduction from './components/Services/LightProduction/LightProduction';
import AOS from 'aos';
import 'aos/dist/aos.css';
import DanceFloor from './components/Services/DanceFloor/DanceFloor';
import LedWalls from './components/Services/LedWalls/LedWalls';
import BesPokeStaging from './components/Services/BesPokeStaging/BesPokeStaging';
import BesPokeBars from './components/Services/BespokeBars/BespokeBars';
import Term from './components/Term/Term';
import DjPackages from './components/Services/DjPackages/DjPackages';


//data-aos="fade-left"

// data-aos="fade-right
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,     // Run the animation once
    });
  }, []);

  return (
    <Router>
      <Header />

      <div id='placeholder'>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/reviews" exact element={<Reviews />} />
          <Route path="/services" exact element={<Services />} />
          <Route path="/liveEvents" exact element={<LiveEvents />} />
          <Route path="/lightProduction" exact element={<LightProduction/>} />
          <Route path="/danceFloor" exact element={<DanceFloor/>} />
          <Route path="/ledWalls" exact element={<LedWalls/>} />
          <Route path="/baspakeStaging" exact element={<BesPokeStaging/>} />
          <Route path="/Bars" exact element={<BesPokeBars/>} />
          <Route path="/copy-of-about-3" exact element={<Term/>} />
          <Route path="/djPackages" exact element={<DjPackages/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
