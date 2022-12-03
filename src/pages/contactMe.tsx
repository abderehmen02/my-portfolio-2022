import {Box ,styled ,     Typography } from '@mui/material'
import React from 'react'
import {ContactMeForm , ContactMeText} from '../components/contactMe/index.tsx'
import {componentData} from  '../Types/components'
import { InView } from 'react-intersection-observer'
import {Components} from '../assets/components.ts'
import {Element } from 'react-scroll'

interface pageProps {
    RenderedComponent : componentData ,
    setRenderedComponent :   React.Dispatch<React.SetStateAction<componentData>> ,
}



const ContactMe : React.FC<pageProps>  =  ({RenderedComponent , setRenderedComponent})=> {
    const StyledContactMePage = styled(Box)(({theme})=>({
        backgroundColor : theme.palette.primary.main  ,
        height  : '100vh',
    }))


const inViewChanged = (isViewed : boolean )=>{
if(isViewed){
    setRenderedComponent(Components.ContactMe)
}
}

return (
    <Element name="contactMe" >
    <StyledContactMePage >
        <Typography  textAlign='center' fontWeight='bold' margin={8} variant="h2" > Contact Me </Typography>
        <Box sx={{display : 'flex'  , alignItems: 'center' , justifyContent: 'center'}} >
        <InView onChange={inViewChanged} >
         <ContactMeText/>   
         </InView>
         <ContactMeForm/>
        </Box>
    </StyledContactMePage></Element>
    )
}

export default ContactMe
