import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Typography } from '@mui/material';
import MainMenu from '../components/MainMenu';
import Banner from '../components/Banner';
import ServicesSection from '../components/ServicesSection';

const Servis = () => (
  <>
    <Helmet>
      <title>Kontakt | React SSR Material UI</title>
      <meta name="description" content="Skontaktuj się z nami pod adresem: kontakt@example.com" />
      <meta name="keywords" content="React, SSR, Material UI, kontakt, SEO, aplikacja" />
      <meta name="author" content="Twój Zespół" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://twojadomena.pl/kontakt" />
      {/* Open Graph */}
      <meta property="og:title" content="Kontakt | React SSR Material UI" />
      <meta property="og:description" content="Skontaktuj się z nami pod adresem: kontakt@example.com" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://twojadomena.pl/kontakt" />
      <meta property="og:image" content="https://via.placeholder.com/800x300?text=Slide+1" />
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Kontakt | React SSR Material UI" />
      <meta name="twitter:description" content="Skontaktuj się z nami pod adresem: kontakt@example.com" />
      <meta name="twitter:image" content="https://via.placeholder.com/800x300?text=Slide+1" />
    </Helmet>

    <Box sx={{ width: '100vw', m: 0, p: 0, overflow: 'hidden', position: 'relative', left: 0, right: 0 }}>
      {/* Menu nakładane na slider */}
      <Box sx={{ position: 'absolute', width: { xs: '100%', md: '100%' }, display: 'flex', justifyContent: 'center', zIndex: 10 }}>
        <MainMenu />
      </Box>
      <Banner />
    </Box>

    <Box
      sx={{
        bgcolor: '#fff',
        minHeight: { xs: '30vh', md: '40vh' },
        width: { xs: 'auto', sm: '90%', md: '700px', lg: '900px' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        mx: { xs: 0, sm: 'auto', md: 'auto', lg: 'auto' }, // margin-x: auto for center on tablet/desktop
        my: { xs: 2, sm: 4, md: 6, lg: 8 }, // margin-y: różne dla urządzeń
        px: { xs: 2, sm: 4, md: 6, lg: 8 }, // padding-x: różne dla urządzeń
        py: { xs: 2, sm: 3, md: 4, lg: 5 }, // padding-y: różne dla urządzeń
      }}
    >
      <ServicesSection />
    </Box>
  </>
);

export default Servis;