import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 3, textAlign: 'center', mt: 'auto', backgroundColor: '#f5f5f5' }}>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Student Information Portal. All rights reserved.
      </Typography>
    </Box>
  );
}