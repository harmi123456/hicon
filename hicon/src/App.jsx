import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Index from './pages/Index';
import About from './pages/About';
import Shop from './pages/Shop';
import ArtOfSitting from './pages/ArtOfSitting';
import Contact from './pages/Contact';
import ThreeDCarousel from './pages/splind';
import Footer from './components/Footer';
import Header from './components/Header';
import SmoothScroll from './components/Smoothscroll';


function App() {

  return (
    <>
      <BrowserRouter>
        <SmoothScroll>
          <Header />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/art-of-sitting" element={<ArtOfSitting />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/splind" element={<ThreeDCarousel />} />
          </Routes>
          <Footer />
        </SmoothScroll>
      </BrowserRouter>

    </>
  )
}

export default App;