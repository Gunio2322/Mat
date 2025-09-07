import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, StaticRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Kontakt from './pages/Kontakt';
import MainMenu from './components/MainMenu';
import BottomMenu from './components/BottomMenu';
import { Box } from '@mui/material';
import FooterSection from './components/FooterSection';

const isSSR = typeof window === 'undefined';

const App = ({ url }) => {
  const Router = isSSR ? StaticRouter : BrowserRouter;
  const routerProps = isSSR ? { location: url } : {};
  return (
    <HelmetProvider>
      <Router {...routerProps}>
        {/* <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10 }}>
          <MainMenu />
        </Box> */}
          
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
        <FooterSection  />

      </Router>
    </HelmetProvider>
  );
};

export default App;
