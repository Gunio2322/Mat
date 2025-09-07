import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Typography } from '@mui/material';
import MainMenu from '../components/MainMenu';
import Banner from '../components/Banner';
const Kontakt = () => (
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
    {/* Baner i treść responsywne */}
    <Box sx={{ width: '100vw', maxWidth: '100vw', mx: 'auto', p: 0 }}>
      <Banner height={200} sx={{ display: { xs: 'block', md: 'none' } }} />

      <Box
        sx={{
          bgcolor: '#fff',
          minHeight: { xs: '30vh', md: '40vh' },
          height: { xs: 'auto', md: '40vh' },
          maxWidth: { xs: '100vw', md: 'md' },
          mx: 'auto',
          p: { xs: 2, md: 4 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h5"
          sx={{ display: { xs: 'block', md: 'none' } }}
          gutterBottom
        >
          Kontakt
        </Typography>
        <Typography
          variant="h3"
          sx={{ display: { xs: 'none', md: 'block' } }}
          gutterBottom
        >
          Kontakt
        </Typography>
        <Typography variant="body1" mt={4} textAlign="center">
          Skontaktuj się z nami pod adresem: kontakt@example.com
        </Typography>
      </Box>
    </Box>

  </>
);

export default Kontakt;
