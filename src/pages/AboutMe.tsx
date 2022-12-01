import React, {useState} from 'react'
import { styled , Button , Stack , Box, Typography} from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import MyImage from '../images/myimgbgremoval.png'
import {componentData} from  '../Types/components'
import useOnView from 'react-useonview';


interface pageProps {
    RenderedComponent : componentData ,
     setRenderedComponent :   React.Dispatch<React.SetStateAction<string>> ,
}


const AboutMe : React.FC<pageProps> =  ()=> {
    const [visible, setVisible] = useState<boolean>(false);
    const trigger = useOnView(() => setVisible(true));  
    console.log(visible)
    console.log('visible')
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
    display : 'flex',
    flexDirection : 'column' ,
    alignItems: 'center',
    justifyContent : 'space-around'
}))
    return (
        <AboutMePage  >
            <Typography variant='h1'  textAlign='center' marginBottom='24px' fontWeight='bold' > About Me </Typography>
        <Container  >
            <img src={MyImage}  height="50%" ></img> 
            <Box  width="35%" sx={{display: 'flex' , alignItems: 'center' , flexDirection: 'column' , gap : 7}} >
<Box ref={trigger}  >
<Title variant='h2' textAlign='center'  >Abderrahmane</Title>
</Box>
<Typography textAlign='center' variant="h5" > a full stack web developer , i began my careere in 2020 , 
i am specialized in mern stack , ui/ux , and typescript , i have built and deployed several web apps that provide height value and solves real problems  , my goal is to build a product that is convenient for the user  </Typography>
<Stack direction='row'  spacing={8} >
<Button sx={{width : '240px'}} variant='contained' startIcon={<LinkedInIcon  />} > Explore My Twiter </Button>
<Button sx={{width : '240px'}}  variant='outlined' startIcon={<TwitterIcon />} > Explore My Facebook </Button>
</Stack></Box>
        </Container>
        </AboutMePage>
    )
}

export default AboutMe