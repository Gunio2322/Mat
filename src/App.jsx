import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Kontakt from './pages/Kontakt';
import Servis from './pages/Servis';
import FooterSection from './components/FooterSection';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/kontakt" element={<Kontakt />} />
      <Route path="/oferta" element={<Servis />} />
    </Routes>
    <FooterSection />
  </>
);

export default App;
