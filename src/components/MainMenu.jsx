import React from 'react';
import { IconButton, Typography, Drawer, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Slider from './Slider';

const menuItems = [
  { text: 'Home', path: '/' },
  { text: 'Kontakt', path: '/kontakt' },
  { text: 'Oferta', path: '/oferta' },
];

export default function MainMenu() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ maxWidth: 'md', width: '100%', mx: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: { xs: 2, md: 4 }, py: 2, bgcolor: 'rgba(0, 0, 0, 0)', color: '#fff', position: 'relative', zIndex: 10, borderRadius: 2 }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold', letterSpacing: 2 }}>
        React SSR App
      </Typography>
      {/* Desktop menu */}
      <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' } }}>
        {menuItems.map((item) => (
          <Link key={item.text} to={item.path} style={{ margin: '0 16px', color: '#fff', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>
            {item.text}
          </Link>
        ))}
      </Box>
      {/* Hamburger zawsze widoczny na xs/sm */}
      <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none' }, alignItems: 'center' }}>
        <IconButton color="inherit" onClick={handleDrawerToggle} sx={{ ml: 2 }}>
          <MenuIcon />
        </IconButton>
        <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
          <Box sx={{ width: '70vw', bgcolor: 'rgba(0,0,0,0.9)', height: '100%', color: '#fff', pt: 4, px: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            {menuItems.map((item) => (
              <Link
                key={item.text}
                to={item.path}
                style={{ margin: '24px 0', color: '#fff', textDecoration: 'none', fontWeight: 'bold', fontSize: '1rem', letterSpacing: 0.5 }}
                onClick={handleDrawerToggle}
              >
                {item.text}
              </Link>
            ))}
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
}
