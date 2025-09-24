import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import DonatePage from './pages/DonatePage2.jsx'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import ThankYouPage from './pages/ThankYouPage'
import Navbar from './pages/components/Navbar.jsx'
import Footer from './pages/components/footer.jsx'
import CurrentCampaigns from './pages/CurrentCampaigns'; // غيّري المسار حسب مكان الملف الحقيقي


function App() {
  
  return (<>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/donate" element={<DonatePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/thank-you" element={<ThankYouPage />} />
     < Route path="/Navbar" element={<Navbar />} />
     < Route path="/footer" element={<Footer />} />
    < Route path="/CurrentCampaigns" element={<CurrentCampaigns/>} />

    </Routes>
  </>)
}

export default App


