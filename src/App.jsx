import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Kontakt from './pages/Kontakt';
import Servis from './pages/Servis';
import FooterSection from './components/FooterSection';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/kontakt" element={<Kontakt />} />
      <Route path="/oferta" element={<Servis />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogPost />} />
    </Routes>
    <FooterSection />
  </>
);

export default App;
