import React from 'react'
import {Box , Typography , styled , Button , Stack } from '@mui/material'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ComputerImage from '../images/computer.png'
const Home : React.FC = ()=>{
  console.log('comuter image')
  console.log(ComputerImage)
    const PageContainer  = styled(Box)(({theme})=>({
      display : 'flex' ,
      backgroundColor : theme.palette.primary.main ,
      alignItems : 'center' ,
      gap : 64 ,
      height : '100vh' ,
      justifyContent : 'center' ,
      flexDirection : 'column' ,
    }))

    const StyledButton = styled(Button)(({theme})=>({
      borderColor : theme.palette.info.main ,
    }))

    const TitileBox = styled(Box)(({theme})=>({
      display : 'flex' ,
      alignItems : 'center' ,
      gap: 80           
     }))
     const StyledTitle = styled(Typography)(({theme})=>({
       color : theme.palette.info.main ,
     }))
    return (
      <PageContainer  >
                  <TitileBox>
          <Typography variant="h1" color="secondry" >
Web Developer
          </Typography>
          <StyledTitle variant="h1"  >Full Stack Developer</StyledTitle>
          </TitileBox>

        <Stack direction="row"  spacing={10}>
        
<Stack sx={{display : 'flex' , alignItems : 'center' , justifyContent : 'center'}} direction="column" gap={10} >
<Typography variant="h4" sx={{textAlign : 'center'}}>
mern web developer  specialized in building<br/>
large web apps and projects that actually <br/>
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