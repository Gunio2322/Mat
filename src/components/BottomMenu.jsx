import React from 'react';
import { Box, Typography } from '@mui/material';

export default function BottomMenu() {
  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' }, bgcolor: '#eee', p: 2, justifyContent: 'center', position: 'fixed', bottom: 0, width: '100%' }}>
      <Typography variant="body2" color="textSecondary">
        &copy; 2025 React SSR Material UI App
      </Typography>
    </Box>
  );
}
