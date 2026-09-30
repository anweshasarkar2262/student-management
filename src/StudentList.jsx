import React from 'react';
import { Grid, Box } from '@mui/material';
import StudentCard from './StudentCard';

export default function StudentList({ students }) {
  return (
    <Box sx={{ width: '100%', my: 2 }}>
      {/* alignItems="stretch" ensures all grid cells stretch to the tallest item */}
      <Grid container spacing={3} alignItems="stretch">
        {students.map((student) => (
          <Grid 
            item 
            xs={12} 
            sm={6} 
            md={4} 
            key={student.rollNo} 
            sx={{ display: 'flex', flexDirection: 'column' }} // <-- This forces the grid cell to stretch
          >
            <StudentCard
              name={student.name}
              rollNo={student.rollNo}
              department={student.department}
              semester={student.semester}
              cgpa={student.cgpa}
              photo={student.photo}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}