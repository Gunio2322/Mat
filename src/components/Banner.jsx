import React from 'react';
import { Box } from '@mui/material';

const Banner = ({ src = '/baner/baner1.jpg', alt = 'Baner kontakt', height = 200 }) => (
  <Box sx={{ position: 'relative', width: '100%', height: `${height}px`, mb: 3, overflow: 'hidden' }}>
    <img
      src={src}
      alt={alt}
      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
    />
    {/* Overlay kolorystyczny */}
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        bgcolor: 'rgba(0,0,0,0.3)', // domyślny overlay
        pointerEvents: 'none',
        zIndex: 2,
      }}
    />
  </Box>
);

export default Banner;
