import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

export default function Header() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <SchoolIcon sx={{ mr: 2 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Student Information Portal
        </Typography>
      </Toolbar>
    </AppBar>
  );
}