import React from 'react'
import { styled , Button , Stack , Box, Typography} from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
const AboutMe : React.FC =  ()=> {

// components
const Title = styled(Typography)(({theme})=>({
    color : theme.palette.info.main
}))


    return (
        <Box  height='100vh' sx={{display :'flex' , alignItems: 'center'  , justifyContent : 'center' , flexDirection : 'space-between' }}>
            <img></img>
            <Box width="50%" sx={{display: 'flex' , alignItems: 'center' , flexDirection: 'column' , gap : 8}} >
<Box  >
<Typography variant='h3' textAlign='center' marginBottom='24px' fontWeight='bolder' > About Me </Typography>
<Title variant='h2' textAlign='center'  >Abderrahmane</Title>
</Box>
<Typography variant="h5" > a full stack web developer , i began my careere in 2020 , 
i am specialized in mern stack , ui/ux , and typescript , i have built and deployed several web apps that provide height value and solves real problems  , my goal is to build a product that is convenient for the user  </Typography>
<Stack direction='row'  spacing={8} >
<Button variant='contained' startIcon={<LinkedInIcon  />} > Explore My Twiter </Button>
<Button variant='outlined' startIcon={<TwitterIcon />} > Explore My Facebook </Button>
</Stack></Box>
        </Box>
    )
}

export default AboutMe