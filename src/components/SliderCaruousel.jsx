// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import React, { useState } from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';

const slides = [
  { src: '/slick-carousel/slick/slider-bg2.jpg', text: 'Przykładowy tekst dla pierwszego obrazka' },
  { src: '/slick-carousel/slick/shutterstock_167545403.jpg', text: 'Przykładowy tekst dla drugiego obrazka' },
  { src: '/slick-carousel/slick/slider-bg3.jpg', text: 'Przykładowy tekst dla trzeciego obrazka' },
  { src: '/slick-carousel/slick/slider-bg4.jpg', text: 'Przykładowy tekst dla czwartego obrazka' },
];

const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  autoplay: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
};

export default function SimpleSlider() {
  const [active, setActive] = useState(0);

  const handleBeforeChange = (oldIndex, newIndex) => {
    setActive(newIndex);
  };

  return (
  <Box sx={{ width: '100vw', height: '70vh', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', overflow: 'hidden' }}>
      <Slider {...settings} beforeChange={handleBeforeChange}>
        {slides.map((slide, idx) => (
          <Box key={idx} sx={{ m: 0, p: 0, position: 'relative' }}>
            <img
              src={slide.src}
              alt={`slide-${idx}`}
              style={{
                width: '100vw',
                height: '60vh',
                objectFit: 'cover',
                borderRadius: 0,
                boxShadow: 'none',
                display: 'block',
                transition: 'filter 1s cubic-bezier(.4,0,.2,1)',
                filter: active === idx ? 'brightness(0.7)' : 'brightness(1)',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '80%',
                color: '#fff',
                py: 2,
                px: 3,
                fontSize: '1.2rem',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '80%',
              }}
            >
              <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    position: 'relative',
                    left: active === idx ? 0 : { xs: '-100%', md: '-700px' },
                    transition: 'left 1.2s cubic-bezier(.4,0,.2,1)',
                    maxWidth: 700,
                    width: '90vw',
                    margin: '0 auto',
                  }}
                >
                  <Typography
                    variant="h5"
                    component="span"
                    sx={{ fontWeight: 'bold', color: '#fff', textShadow: '0 2px 8px #000, 0 0px 2px #333' }}
                  >
                    {slide.text}
                  </Typography>
                  <Typography
                    sx={{ color: '#fff', fontSize: '16px', mt: 1, textShadow: '0 1px 4px #000' }}
                  >
                    Przykładowy opis pod tekstem slidera (mobile)
                  </Typography>
                  <Button variant="contained" color="primary" size="small" sx={{ mt: 1 }}>
                    Przycisk Mobile
                  </Button>
                </Box>
              </Box>
              <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    position: 'relative',
                    left: active === idx ? 0 : { xs: '-100%', md: '-70%' },
                    transition: 'left 1.2s cubic-bezier(.4,0,.2,1)',
                    maxWidth: 700,
                    width: '90vw',
                    margin: '0 auto',
                  }}
                >
                  <Typography
                    variant="h3"
                    component="span"
                    sx={{ fontWeight: 'bold', color: '#fff', textShadow: '0 2px 12px #000, 0 0px 2px #333' }}
                  >
                    {slide.text}
                  </Typography>
                  <Typography
                    sx={{ color: '#fff', fontSize: '16px', mt: 1, textShadow: '0 1px 4px #000' }}
                  >
                    Przykładowy opis pod tekstem slidera (desktop)
                  </Typography>
                  <Button variant="contained" color="primary" size="medium" sx={{ mt: 1 }}>
                    Przycisk Desktop
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
