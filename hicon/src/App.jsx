import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Shop from './components/Shop'
import ArtOfSitting from './components/ArtOfSitting'
import Contact from './components/Contact'
import Index from './components/Index'
import Header from './components/Header'
import ThreeDCarousel from './components/splind'
import Footer from './components/footer'

function App() {

  return (
    <>
      
        <BrowserRouter>
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
        </BrowserRouter>

    </>
  )
}

export default App;