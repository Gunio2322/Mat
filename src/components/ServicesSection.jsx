import React from "react";
import { Box, Grid, Typography, Paper, Button } from "@mui/material";
import ExploreIcon from '@mui/icons-material/Explore';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import ForumIcon from '@mui/icons-material/Forum';
import MovieIcon from '@mui/icons-material/Movie';
import CodeIcon from '@mui/icons-material/Code';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const services = [
  {
    icon: <ExploreIcon color="primary" sx={{ fontSize: 40 }} />, title: "Discovery & Strategy", desc: "Excepteur sint occaecat cupi datat non proidt, sunt in culpa qui offi cia deserunt"
  },
  {
    icon: <DesignServicesIcon color="primary" sx={{ fontSize: 40 }} />, title: "Interface Design", desc: "Excepteur sint occaecat cupi datat non proidt, sunt in culpa qui offi cia deserunt"
  },
  {
    icon: <BrandingWatermarkIcon color="primary" sx={{ fontSize: 40 }} />, title: "Branding", desc: "Excepteur sint occaecat cupi datat non proidt, sunt in culpa qui offi cia deserunt"
  },
  {
    icon: <ForumIcon color="primary" sx={{ fontSize: 40 }} />, title: "Communication", desc: "Excepteur sint occaecat cupi datat non proidt, sunt in culpa qui offi cia deserunt"
  },
  {
    icon: <MovieIcon color="primary" sx={{ fontSize: 40 }} />, title: "Multimedia Production", desc: "Excepteur sint occaecat cupi datat non proidt, sunt in culpa qui offi cia deserunt"
  },
  {
    icon: <CodeIcon color="primary" sx={{ fontSize: 40 }} />, title: "Development solutions", desc: "Excepteur sint occaecat cupi datat non proidt, sunt in culpa qui offi cia deserunt"
  },
];

const ServicesSection = () => (
  <Box sx={{ bgcolor: '#fff', py: { xs: 4, md: 8 } }}>
    {/* Tytuł i cytat */}
    <Grid container spacing={4} alignItems="center" justifyContent="center">
      <Grid item xs={12} md={6}>
        <Typography variant="h1" sx={{ fontWeight: 700, fontSize: { xs: '2rem', md: '2.5rem' }, color: 'primary.main', mb: 1 }}>
          Services
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 700, color: '#222', mb: 2 }}>
          Services
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper elevation={0} sx={{ bgcolor: 'transparent', p: 2 }}>
          <blockquote>
            <Typography variant="body1" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
              We work with you to build comprehensive, thoughtful, and purpose-driven identities and experiences. Let’s talk about job.
            </Typography>
          </blockquote>
        </Paper>
      </Grid>
    </Grid>
    {/* Widgety usług */}
    <Grid container spacing={4} sx={{ mt: { xs: 4, md: 10 } }}>
      {services.map((service, idx) => (
        <Grid item xs={12} sm={6} md={4} key={service.title}>
          <Paper elevation={3} sx={{ p: 3, display: 'flex', alignItems: 'flex-start', gap: 2, minHeight: 180 }}>
            <Box>{service.icon}</Box>
            <Box>
              <Typography variant="h6" sx={{ mb: 1 }}>{service.title}</Typography>
              <Typography variant="body2">{service.desc}</Typography>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
    {/* Animacja i przycisk */}
    <Box sx={{ textAlign: 'center', mt: 8 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        You are using Free Lite version of MEA<br />Purchase Full version to Get all Pages and Features
      </Typography>
      <Button variant="contained" color="primary" size="large" startIcon={<ShoppingCartIcon />} href="https://rebrand.ly/gg-mea-purchase" target="_blank">
        Purchase Now
      </Button>
    </Box>
    {/* Call to action */}
    <Box sx={{ bgcolor: '#f5f5f5', mt: 8, py: 6 }}>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={12} md={7} textAlign="center">
          <Typography variant="h4" sx={{ fontWeight: 700 }}>Call Us @02-9114147</Typography>
          <Typography variant="h6" sx={{ mb: 2 }}>Enjoy our 24/7 support</Typography>
        </Grid>
        <Grid item xs={12} md={3} textAlign="center">
          <Button variant="contained" color="primary" startIcon={<ContactMailIcon />} sx={{ mt: { xs: 2, md: 0 } }}>
            Contact us
          </Button>
        </Grid>
      </Grid>
    </Box>
  </Box>
);

export default ServicesSection;
