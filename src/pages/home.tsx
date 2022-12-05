import React from 'react'
import {Box , Typography , styled , Button , Stack } from '@mui/material'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ComputerImage from '../images/computer.png'
import {componentData} from '../Types/components'
import Typewriter from 'typewriter-effect';
import {Components} from '../assets/components.ts'
import {Link} from 'react-scroll'
import ReactTypingEffect from 'react-typing-effect';

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
       height : '200vh' ,
       position : 'relative'
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
                  <TitileBox marginTop={{sm : 0 , xs : 16}} >
 {/*<Typography variant="h1" color="secondry" >
Web Developer
          </Typography>
                    <StyledTitle variant="h1"  >Full Stack Developer</StyledTitle> */}

<Typography variant='h1' >
<ReactTypingEffect
        eraseDelay={10000000}
        text={["Web developer"]}
        cursorRenderer={cursor => <span style={{display : 'none'}}>{cursor}</span>}
        displayTextRenderer={(text, i) => {
          return (
            <span>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span color='red'
                    key={key}
                   
                  >{char}</span>
                );
              })}
            </span>
          );
        }}        
      /> </Typography>
      <Typography variant='h1' >
<ReactTypingEffect
                cursorRenderer={cursor => <span style={{display : 'none'}}>{cursor}</span>}
        eraseDelay={1000000000}
        speed={125}
        text={["Full Stack Developer"]}
        typingDelay={5500}
        // cursorRenderer={cursor => <Typography>{cursor}</Typography>}
        displayTextRenderer={(text, i) => {
          return (
            <span>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span style={{color : '#FF196A'}}
                    key={key}
                   
                  >{char}</span>
                );
              })}
            </span>
          );
        }}        
      /> </Typography>

          </TitileBox>
        <Stack   direction={{ xs: 'column', sm: 'row' }} width='70%'  spacing={10}>        
<Stack sx={{display : 'flex' , alignItems : 'center' , justifyContent : 'center'  }}     width={{sm : '50%' , xs: '100%'}}  direction="column" gap={10} >
<Typography variant="h4" sx={{textAlign : 'center' }}    width='100%'> 
mern web developer  specialized in building
large web apps and projects that actually 
generate value 
</Typography>
<Link to='myProjects'  > <Button variant='outlined'  startIcon={<ArrowDownwardIcon/>} > See My Work </Button></Link>
</Stack>
<img  src={ComputerImage} ></img>
          </Stack>
      </PageContainer>
    )
}

export default Home