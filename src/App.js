import React, { useState } from 'react';
import { Container, Box, Button, Typography } from '@mui/material';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import Header from './Header';
import Footer from './Footer';
import StudentList from './StudentList';

// Initial Mock Data
const initialStudents = [
  {
    name: 'Riya Sarkar',
    rollNo: 'CSE001',
    department: 'Computer Science',
    semester: 6,
    cgpa: 9.2,
    photo: 'https://media.istockphoto.com/id/1772367041/photo/portrait-of-happy-student-girl-with-cellphone-and-workbooks-walking-in-college-campus-and.jpg?s=612x612&w=0&k=20&c=5ifHNgfZFJFABAhF9PkQJKywyTmd_eCnN-ru6lhAF4A=',
  },
  {
    name: 'Ronith Roy',
    rollNo: 'ECE042',
    department: 'Electronics',
    semester: 4,
    cgpa: 7.8,
    photo: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT94uM9BqcGksNZwqYarnvt99w5yCoadf3P1gszfhqnWcfOoc1atZaX4DHRhRQqVr4VnmUwPCwTXc_PNYE',
  },
  {
    name: 'Dibakar Das',
    rollNo: 'ME015',
    department: 'Mechanical Engineering',
    semester: 8,
    cgpa: 8.5,
    photo: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRJ1lnWFhsdE9SFNIZxsCVOE7ItwmD3w1rdtqolrKhaywYKAWoAFtDWh3Bj2izW4ub-MLcsX0fX__rOm5Q',
  },
  {
    name: 'Diana Prince',
    rollNo: 'IT022',
    department: 'Information Technology',
    semester: 2,
    cgpa: 9.6,
    photo: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSmyr7MHamYaqexufVoRLXmZEhn25IIAz__KSi_zATkNtxJklh4hlROXloEcUvzFGgEK_rLOhW5-n3nisQ',
  },
];

export default function App() {
  const [students, setStudents] = useState(initialStudents);
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'

  // Function to handle sorting by CGPA
  const handleSortByCgpa = () => {
    const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    const sorted = [...students].sort((a, b) => {
      return newOrder === 'asc' ? a.cgpa - b.cgpa : b.cgpa - a.cgpa;
    });
    setStudents(sorted);
    setSortOrder(newOrder);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      
      <Container component="main" sx={{ mt: 4, mb: 4, flex: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, px: 3 }}>
          <Typography variant="h5" component="h2">
            Enrolled Students
          </Typography>
          <Button
            variant="contained"
            startIcon={<SwapVertIcon />}
            onClick={handleSortByCgpa}
          >
            Sort by CGPA ({sortOrder.toUpperCase()})
          </Button>
        </Box>

        {/* Passing student data via props */}
        <StudentList students={students} />
      </Container>

      <Footer />
    </Box>
  );
}