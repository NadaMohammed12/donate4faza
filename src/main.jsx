import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './pages/components/Navbar.jsx'
import Footer from './pages/components/footer.jsx'
import './i18n/i18n'
import DonorsMarquee from './pages/components/DonorsMarquee.jsx'
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;

document.documentElement.dir = "rtl"



   
   

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <BrowserRouter>
     <PayPalScriptProvider options={{ "client-id": clientId, currency: "USD" }}>
      <Navbar/>
      <DonorsMarquee/>
      <App />
      <Footer/>
      </PayPalScriptProvider>
    </BrowserRouter>
  </React.StrictMode>
)
