import {Box ,styled ,     Typography, unstable_createMuiStrictModeTheme } from '@mui/material'
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
        position : 'relative' ,
        [theme.breakpoints.down("sm")] :{
            height : 'fit-content'
        }
    }))


const inViewChanged = (isViewed : boolean )=>{
if(isViewed){
    setRenderedComponent(Components.ContactMe)  ;

}
}

return (
    <Element name="contactMe" >
    <StyledContactMePage >
        <Box sx={{position :'absolute' , top : '50%' , right : '50%' , width : '50px'  ,height : '50px' , backgroundColor : 'transparent' }} >
            <InView onChange={inViewChanged} ></InView>
        </Box>
        <Typography  textAlign='center'  margin={8} variant="h1" > Contact Me </Typography>
        <Box sx={{display : 'flex'  , alignItems: 'center' , justifyContent: 'center' , flexDirection : {xs : 'column'  , sm : 'row' } }} >
         <ContactMeText/>   
         <ContactMeForm/>
        </Box>
    </StyledContactMePage></Element>
    )
}

export default ContactMe
