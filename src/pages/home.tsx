import React from 'react'
import {Box , Typography , styled , Button , Stack } from '@mui/material'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ComputerImage from '../images/computer.png'
import {componentData} from '../Types/components'
import { InView } from 'react-intersection-observer';
import {Components} from '../assets/components.ts'


interface pageProps {
  RenderedComponent : componentData ,
   setRenderedComponent :   React.Dispatch<React.SetStateAction<string>> ,
}



const Home : React.FC<pageProps> = ({RenderedComponent, setRenderedComponent})=>{
// hooks
// functions 



  // components
    const PageContainer  = styled(Box)(({theme})=>({
      display : 'flex' ,
      backgroundColor : theme.palette.primary.main ,
      alignItems : 'center' ,
      gap : 64 ,
      height : '100vh' ,
      zIndex : -1 ,
      justifyContent : 'center' ,
      position : 'fixed',
      flexDirection : 'column' ,
     [theme.breakpoints.down('sm')] : {
       height : '200vh'
     }
    }))

    const StyledButton = styled(Button)(({theme})=>({
      borderColor : theme.palette.info.main ,
    }))

    const TitileBox = styled(Box)(({theme})=>({
      display : 'flex' ,
      alignItems : 'center' ,
      gap: 80  ,
      [theme.breakpoints.down("sm")] : {
flexDirection  : 'column' ,
gap : 20 
      }          
     }))
     const StyledTitle = styled(Typography)(({theme})=>({
       color : theme.palette.info.main ,
     }))
    return (
      <PageContainer  >
                  <TitileBox>
          <Typography variant="h1" color="secondry"  >
Web Developer
          </Typography>
          <StyledTitle variant="h1"  >Full Stack Developer</StyledTitle>
          </TitileBox>
        <Stack   direction={{ xs: 'column', sm: 'row' }}  spacing={10}>        
<Stack sx={{display : 'flex' , alignItems : 'center' , justifyContent : 'center'     }} direction="column" gap={10} >
<Typography variant="h4" sx={{textAlign : 'center'}} width={{  sm: '50%'}} > 
mern web developer  specialized in building
large web apps and projects that actually 
generate value 
</Typography>
<Button variant='outlined'  startIcon={<ArrowDownwardIcon/>} > See My Work </Button>
</Stack>
<img  src={ComputerImage} ></img>
          </Stack>
      </PageContainer>
    )
}

export default Home