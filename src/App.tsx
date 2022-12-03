import { Box } from '@mui/material';
import React ,{useState , useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import {  ThemeProvider } from '@mui/material/styles';
import theme from './Styling/theme.ts';
import Home from './pages/home.tsx';
import MyProjects from './pages/myProjects.tsx';
import AboutMe from './pages/AboutMe.tsx'
import ContactMe from './pages/contactMe.tsx';
import {Components} from './assets/components.ts'
import {componentData} from './Types/components.ts'
import {motion , useAnimationControls , AnimationControls} from 'framer-motion'
function App() : JSX.Element {
  const [RenderedComponent, setRenderedComponent] = useState<componentData>(Components.Home)
useEffect(() => {
console.log(RenderedComponent)

}, [RenderedComponent])
const up : AnimationControls = useAnimationControls()


  return (
   <ThemeProvider theme={theme} >
     <Box>
    <Navbar up={up} RenderedComponent={RenderedComponent} setRenderedComponent={setRenderedComponent}  />
    <Home RenderedComponent={RenderedComponent}  setRenderedComponent={setRenderedComponent} />
    <motion.div animate={up} initial={{top : theme.breakpoints.values.sm > window.innerWidth ? '200vh' : '00vh'  }} style={{    position : 'absolute'  , backgroundColor : '#00FFA6'   }} >
    <AboutMe up={up} RenderedComponent={RenderedComponent}  setRenderedComponent={setRenderedComponent}/>
    <MyProjects RenderedComponent={RenderedComponent}  setRenderedComponent={setRenderedComponent}/>
    <ContactMe RenderedComponent={RenderedComponent}  setRenderedComponent={setRenderedComponent} />
    </motion.div>
    </Box>
    </ThemeProvider>
  );
}

export default App;