import { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
//import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingSocial from './components/FloatingSocial';
import {Route, Routes, Router} from 'react-router-dom';
function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Rooms />
          <Amenities />
          <Gallery />
          {/* <Location /> */}
          <Contact />
        </main>
        <Footer />
        <FloatingSocial />
      </div>
    </>
  );
}

export default App;
