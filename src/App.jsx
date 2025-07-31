
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import AdminDashboard from './pages/AdminDashboard';
import Navbar from './components/navbarComponent/Navbar';
import About from './pages/About';
import Industries from './pages/Industries';
import Products from './pages/Products';
import Company from './pages/Company';
import WhatsappChat from './components/whatsappChatComponent/WhatsappChat';
import CTACont from './components/ctaComponent/CTACont';


// for image carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Services from './pages/Services';
import FooterCont from './components/footerComponent/FooterCont';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <Router>
      <ScrollToTop/>
      {/* Navigation bar */}
      <Navbar/> 
      {/* Floating Whatsapp chat */}
      <WhatsappChat/>
      {/* All routes  */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/company' element={<Company/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/industries' element={<Industries/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/admin' element={<AdminDashboard />} />
      </Routes>
      {/* CTA component */}
      <CTACont/>
      <FooterCont/>
    </Router>
  )
}

export default App
