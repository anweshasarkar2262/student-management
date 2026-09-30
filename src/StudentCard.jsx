import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Chip } from '@mui/material';

export default function StudentCard({ name, rollNo, department, semester, cgpa, photo }) {
  return (
    <Card 
      sx={{ 
        width: '100%', 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        borderRadius: 3,
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
        }
      }}
    >
      <CardMedia
        component="img"
        image={photo}
        alt={name}
        sx={{ 
          height: 220, 
          objectFit: 'cover',
          objectPosition: 'top center',
          flexShrink: 0
        }}
      />
      <CardContent 
        sx={{ 
          flexGrow: 1, 
          p: 2.5, 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'space-between' 
        }}
      >
        {/* Added a fixed minHeight here to guarantee all text boxes take up the exact same vertical space */}
        <Box sx={{ minHeight: '145px' }}>
          <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 600, mb: 1.5 }}>
            {name}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.8 }}>
            <Typography variant="body2" color="text.secondary">
              <strong>Roll Number:</strong> {rollNo}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Department:</strong> {department}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Semester:</strong> {semester}
            </Typography>
          </Box>
        </Box>
        
        <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
          <Chip 
            label={`CGPA: ${cgpa}`} 
            color={cgpa >= 8.5 ? "success" : cgpa >= 7.0 ? "primary" : "warning"} 
            variant="outlined" 
            sx={{ fontWeight: 600 }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}