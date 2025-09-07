import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Typography } from '@mui/material';
import Slider from '../components/Slider';

import MainMenu from '../components/MainMenu';
import AboutSection from '../components/AboutSection';
import BlogSection from '../components/BlogSection';
import Contact from '@mui/material';
import ContactUsSection from '../components/ContactUsSection';
const Home = () => (
  <>
    <Helmet>
      <title>Strona Główna | React SSR Material UI</title>
      <meta name="description" content="Witamy na stronie głównej aplikacji React SSR z Material UI!" />
      <meta name="keywords" content="React, SSR, Material UI, slider, SEO, aplikacja, strona główna" />
      <meta name="author" content="Twój Zespół" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://twojadomena.pl/" />
      {/* Open Graph */}
      <meta property="og:title" content="Strona Główna | React SSR Material UI" />
      <meta property="og:description" content="Witamy na stronie głównej aplikacji React SSR z Material UI!" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://twojadomena.pl/" />
      <meta property="og:image" content="https://via.placeholder.com/800x300?text=Slide+1" />
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Strona Główna | React SSR Material UI" />
      <meta name="twitter:description" content="Witamy na stronie głównej aplikacji React SSR z Material UI!" />
      <meta name="twitter:image" content="https://via.placeholder.com/800x300?text=Slide+1" />
    </Helmet>
    <Box sx={{ position: 'relative', width: '100vw', height: '70vh', overflow: 'hidden', m: 0, p: 0 }}>
      {/* Menu nakładane na slider */}
      {/* <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100vw', zIndex: 10 }}>
        <MainMenu />
      </Box> */}
      {/* ...Slider i menu... */}
      <Slider />
    </Box>
    <Box
      sx={{
        maxWidth: { xs: '100vw', sm: 900 },
        width: { xs: '100vw', sm: '100%' },
        mx: { xs: 0, sm: 'auto' },
        mt: { xs: 0, md: 4 },
        bgcolor: '#fff',
        borderRadius: { xs: 0, sm: 2 },
        boxShadow: { xs: 0, sm: 2 },
        px: { xs: 0, sm: 2, md: 4 },
        py: { xs: 2, md: 4 },
  textAlign: 'center'
      }}
    >
      <AboutSection />
      <BlogSection />
      <ContactUsSection />
    </Box>
    {/* <Box sx={{ position: 'relative', width: '100vw', textAlign: 'center', color: '#fff', zIndex: 4, mt: 4 }}> */}
      {/* <Typography variant="h2" sx={{ textShadow: '0 2px 8px #000' }}>Strona Główna</Typography>
      <Typography variant="h5" sx={{ mt: 2, textShadow: '0 2px 8px #000' }}>
        Witamy na stronie głównej aplikacji React SSR z Material UI!
      </Typography> */}
    {/* </Box> */}
  </>
);

export default Home;
