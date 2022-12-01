import {Box ,styled ,     Typography } from '@mui/material'
import React from 'react'
import {ContactMeForm , ContactMeText} from '../components/contactMe/index.tsx'
import {componentData} from  '../Types/components'



interface pageProps {
    RenderedComponent : componentData ,
     setRenderedComponent :   React.Dispatch<React.SetStateAction<string>> ,
}



const ContactMe : React.FC<pageProps>  =  ()=> {
    const StyledContactMePage = styled(Box)(({theme})=>({
        backgroundColor : theme.palette.primary.main  ,
        height  : '100vh'
    }))
return (
    <StyledContactMePage >
        <Typography  textAlign='center' fontWeight='bold' margin={8} variant="h2" > Contact Me </Typography>
        <Box sx={{display : 'flex'  , alignItems: 'center' , justifyContent: 'center'}} >
         <ContactMeText/>
         <ContactMeForm/>
        </Box>
    </StyledContactMePage>
    )
}

export default ContactMe
