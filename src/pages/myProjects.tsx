import { Box , Stack , styled, Typography } from '@mui/material'
import React, { useState } from 'react'
import myProjects from '../assets/projects.ts'
import Tab from '../components/MyProjects/tab.tsx'
import {Project} from '../Types'
import TabContent from '../components/MyProjects/tabContent.tsx'
import {componentData} from '../Types/components'
import { useInView , InView } from 'react-intersection-observer';
import {Components} from '../assets/components.ts'
import  Scroll from 'react-scroll';
import {useAnimationControls , motion } from 'framer-motion'
import {Element} from 'react-scroll'
interface pageProps {
  RenderedComponent : componentData ,
   setRenderedComponent :   React.Dispatch<React.SetStateAction<componentData>> ,
}


 

const MyProjects : React.FC<pageProps> =  ({RenderedComponent , setRenderedComponent}) => {
// hooks
const drag = useAnimationControls()


// functions
const elementRendered = (isViewed)=>{
    console.log("element draged")
    if(isViewed  ){
        setRenderedComponent(Components.MyProjects)
        drag.start({
            scale : 1
        })
    }
    else{
        drag.start({
            scale: 0.7
        })
    }
}


    // styled components
const PageContainer  = styled(Box)(({theme})=>({
        height : "fit-content" ,
        display : 'flex'  ,
        flexDirection :'column',
        gap : 80,
        justifyContent : 'center' ,
        alignItems: 'center' ,
        boxShadow : '0px 5px 4px black'  , 
        backgroundColor: theme.palette.primary.main ,
    }))
const TabsContainer = styled(Stack)(({theme})=>({
    margin : 40,
    alignItems: 'center' ,
    justifyContent : 'space-around' , 

} ))
//hooks
const [selectedProjectIndex, setSelectedProjectIndex] = useState<number>(0)






// variables 
const selectedProject : Project =  myProjects[selectedProjectIndex]


    return (
        <Element name="myProjects" >
        <motion.div initial={{scale : 0.7 }} animate={drag} transition={{ ease: "easeOut", duration: 1 }}>
        <PageContainer >
<Typography variant="h2" color="secondry" sx={{textAlign:  'center'}} fontWeight='bold'  > My Projects </Typography>
<Box>
<InView onChange={elementRendered} >
<TabsContainer  direction="row"   >
{myProjects.map((project , index) =>{
    return<Box onClick={()=>{  setSelectedProjectIndex(index)}} > <Tab  title={project.name} text={project.shortDescreption} selected={index === selectedProjectIndex}  ></Tab></Box>
})} 
</TabsContainer>
{ selectedProject &&  <Box marginBottom={16} >
    <TabContent  title={selectedProject.name} longDescreption={selectedProject.longDescreption} shortDescreption={selectedProject.shortDescreption} images={selectedProject.images}  />
</Box> }</InView>

</Box>

        </PageContainer></motion.div></Element>
    )
}

export default MyProjects