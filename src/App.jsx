import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Hero from './components/Hero';
import Heritage from './components/Heritage';
import Booking from './components/Booking';
import LaSoireePage from './pages/LaSoireePage';
import AtelierPage from './pages/AtelierPage';
import HeritagePage from './pages/HeritagePage';
import BookingPage from './pages/BookingPage';

function Home() {
  return (
    <>
      <Hero />
      <Heritage />
      <Booking />
    </>
  );
}


function App() {
  return (
      <>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/la-soiree" element={<LaSoireePage />} />
      <Route path="/atelier" element={<AtelierPage />} />
      <Route path="/heritage" element={<HeritagePage />} />
      <Route path="/booking" element={<BookingPage />} />
    </Routes>
    </>
    
  );
}

export default App;