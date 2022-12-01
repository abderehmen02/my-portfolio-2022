import { Box } from '@mui/material';
import React from 'react';
import Navbar from './components/Navbar.tsx';
import {  ThemeProvider } from '@mui/material/styles';
import theme from './Styling/theme.ts';
import Home from './pages/home.tsx';
import MyProjects from './pages/myProjects.tsx';
import AboutMe from './pages/AboutMe.tsx'
import ContactMe from './pages/contactMe.tsx';


function App() : JSX.Element {
  return (
   <Box>
     <ThemeProvider theme={theme} >
    <Navbar/>
    <Home/>
    <MyProjects/>
    <AboutMe/>
    <ContactMe/>
    </ThemeProvider>
   </Box>
  );
}

export default App;
