import { Box , Stack , styled, Typography } from '@mui/material'
import React, { useState } from 'react'
import myProjects from '../assets/projects.ts'
import Tab from '../components/MyProjects/tab.tsx'
import {Project} from '../Types'
import TabContent from '../components/MyProjects/tabContent.tsx'
import {componentData} from '../Types/components'


interface pageProps {
  RenderedComponent : componentData ,
   setRenderedComponent :   React.Dispatch<React.SetStateAction<string>> ,
}





const MyProjects : React.FC<pageProps> =  () => {
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
console.log('my projects') ;
console.log(myProjects)
//hooks
const [selectedProjectIndex, setSelectedProjectIndex] = useState<number>(0)






// variables 
const selectedProject : Project =  myProjects[selectedProjectIndex]

console.log(selectedProject)
console.log("selectedProject")

    return (
        <PageContainer >
<Typography variant="h2" color="secondry" sx={{textAlign:  'center'}} fontWeight='bold'  > My Projects </Typography>
<Box>
<TabsContainer direction="row"   >
{myProjects.map((project , index) =>{
    return<Box onClick={()=>{  setSelectedProjectIndex(index)}} > <Tab  title={project.name} text={project.shortDescreption} selected={index === selectedProjectIndex}  ></Tab></Box>
})}
</TabsContainer>
{ selectedProject &&  <Box>
    <TabContent title={selectedProject.name} longDescreption={selectedProject.longDescreption} shortDescreption={selectedProject.shortDescreption} images={selectedProject.images}  />
</Box> }
</Box>
        </PageContainer>
    )
}

export default MyProjects