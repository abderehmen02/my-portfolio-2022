import React, {useState} from 'react'
import { styled , Button , Stack , Box, Typography} from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import MyImage from '../images/myimgbgremoval.png'
import {componentData} from '../Types/components'
import {  InView } from 'react-intersection-observer';
import {Components} from '../assets/components.ts'
import {   AnimationControls  ,motion, useAnimationControls } from "framer-motion"
import {  Element} from 'react-scroll'



interface pageProps {
    RenderedComponent : componentData ,
     setRenderedComponent :   React.Dispatch<React.SetStateAction<componentData>> ,
     up : AnimationControls , 
}


const AboutMe : React.FC<pageProps> =  ({RenderedComponent , setRenderedComponent , up })=> {

// hooks





// functions
const inViewChange  = (isView)=>{
    if(RenderedComponent.name !==  Components.AboutMe.name && isView ){
        window.scrollTo(0 , 0)
        setRenderedComponent(Components.AboutMe)
up.start({
    top : '0px' ,
    transition: { ease: "easeOut", duration: 0.3 }
})
}
}



    // components
const Title = styled(Typography)(({theme})=>({
    color : theme.palette.info.main
}))
const Container = styled(Box)(({theme})=>({
    display : 'flex',
    height : '60%' ,
    alignItems : 'center', 
    justifyContent: 'space-around'
}))
const AboutMePage = styled(Box)(({theme})=>({
    height : '100vh',
    backgroundColor : theme.palette.primary.main ,
    alignItems: 'center',
    justifyContent : 'space-around',
    display : 'flex'  ,
    [theme.breakpoints.down('sm')] :{
    flexDirection : 'column'   
    }
}))
    return (
        <Element name="aboutMe" >
        <AboutMePage    >
            <img src={MyImage} style={{ height: '90%' , backgroundColor : 'green' , width : '50%' }}   ></img> 
            <Box  width="35%" sx={{display: 'flex' , alignItems: 'center' , flexDirection: 'column' , gap : 7}} >
<Typography variant='h1' textAlign='center' > About ME </Typography>
<Title variant='h3' textAlign='center'  > I am Abderrahmane</Title>
<InView onChange={inViewChange} >
<Typography textAlign='center' variant="h5" > a full stack web developer , i began my careere in 2020 , 
i am specialized in mern stack , ui/ux , and typescript , i have built and deployed several web apps that provide height value and solves real problems  , my goal is to build a product that is convenient for the user  </Typography>
</InView>

<Stack direction='row'  spacing={8} >
<Button sx={{width : '240px'}} variant='contained' startIcon={<LinkedInIcon  />} > Explore My Twiter </Button>
<Button sx={{width : '240px'}}  variant='outlined' startIcon={<TwitterIcon />} > Explore My Facebook </Button>
</Stack></Box>

        </AboutMePage></Element>
    )
}

export default AboutMe