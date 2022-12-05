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
        setRenderedComponent(Components.AboutMe) ;
        window.scrollTo(0 , 0)
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
const AboutMePage = styled(Box)(({theme})=>({
    height : '120vh',
    width : '100vw' ,
    backgroundColor : theme.palette.primary.main ,
    alignItems: 'center',
    justifyContent : 'space-around',
    display : 'flex'  ,
    position : 'relative',
    [theme.breakpoints.down('sm')] :{
    flexDirection : 'column'  ,
    height : '200vh',
    }
}))
    return (
        <Element name="aboutMe" >
        <AboutMePage    >
<Box sx={{ position  : 'absolute' ,top : '50%' , right : '50%' , backgroundColor : 'transparent' , width : '50px', height :'50px' }} ><InView onChange={inViewChange} ></InView>
 </Box>
       <Box height='90%' width={{xs: '100%' , sm : 'fit-content'}} >      <img src={MyImage} style={{  backgroundColor : 'green'  , width : '100%'  }}   ></img></Box> 
            <Box  width={{xs : '95%' , sm: '35%'}} sx={{display: 'flex' , alignItems: 'center' , flexDirection: 'column' , gap : 7}} >
<Box gap={4} >
<Typography variant='h1' textAlign='center'  > About ME </Typography>
<Title variant='h3' textAlign='center'  > I am Abderrahmane</Title>
</Box>
<Typography textAlign='center' variant="h5" width={{xs: '100%' , sm : '100%'}} > a full stack web developer , i began my careere in 2020 , 
i am specialized in mern stack , ui/ux , and typescript , i have built and deployed several web apps that provide height value and solves real problems  , my goal is to build a product that is convenient for the user  </Typography>

<Stack direction={{sx: 'column' , sm : 'row'}}  spacing={8}  >
<Button  sx={{width : '240px' , margin : {sm : 0 , xs: 4} }} variant='contained' startIcon={<LinkedInIcon  />} > Explore My Twiter </Button>
<Button   sx={{width : '240px' , margin : {sm : 0 , xs: 4}   }}  variant='outlined' startIcon={<TwitterIcon />} > Explore My Facebook </Button>
</Stack></Box>

        </AboutMePage></Element>
    )
}

export default AboutMe