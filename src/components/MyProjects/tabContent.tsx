import { Box , styled, Typography , Button } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {componentData} from '../../Types/components'
import {Components} from '../../assets/components'
interface TabContentProps {
    title : string ,
    y : number , 
    shortDescreption : string ,
    longDescreption :string ,
    images : Blob[] , 
    setSelectedProjectIndex :  React.Dispatch<React.SetStateAction<number>> ,
    selectedProjectIndex    : number ,
}

const TabContent : React.FC<TabContentProps> =  ({title , shortDescreption , longDescreption  , images , setSelectedProjectIndex , selectedProjectIndex })=> {

    // styled Components
const StyledTabContent = styled(Box)(({theme})=>({
     display : 'flex' ,
     justifyContent : 'space-around' ,
     alignItems : 'center' ,
     [theme.breakpoints.down('sm')] : {
         flexDirection : 'column' ,
         border: '2px solid red'  ,
         width : '100%'
     }
 }))
const StyledTitle = styled(Typography)(({theme})=>({
     color : theme.palette.info.main    }))


const TextBox  = styled(Box)(({theme})=>({
   display  : 'flex' , 
   flexDirection : 'column' ,
   justifyContent : 'space-between' ,
   alignItems : 'center' ,
   gap : '40px',
   width : '90%' ,
}))

const nextProject  = () : void =>{
    console.log("next project")
   if ( selectedProjectIndex < 2 ){
setSelectedProjectIndex( selectedProjectIndex + 1)
   }
}
const prevProject =() : void =>{
if(selectedProjectIndex > 0){
    setSelectedProjectIndex( selectedProjectIndex - 1 )
}
}


    return (
        <StyledTabContent>
<img src={images[0]}   ></img>
<Box sx={{display :'flex' }} >
<ArrowBackIosNewIcon onClick={prevProject} fontSize='large' sx={{ display : {xs: 'block'  , sm : 'none' } , cursor : 'pointer' , '&:hover': {color :'#FF196A'}}} />
<TextBox>
    <Box>
    <StyledTitle variant='h2' sx={{textAlign : 'center'}} > {title} </StyledTitle>
    <Typography variant='h4' sx={{tkextAlign : 'center'}}  > {shortDescreption} </Typography>
    </Box>
    <Typography variant='h5' marginLeft={16} marginRight={16} textAlign='center'     width={{sm : 'auto' , sx :  '300px' }}  > {longDescreption} </Typography>
    <Box sx={{justifyContent : 'center' , display : 'flex'   , gap : 4}} >
        <Button sx={{width : '240px'}}  variant="contained" startIcon={<NewspaperIcon/>} >
Test Live
        </Button>
        <Button variant='outlined' sx={{width : '240px'}} startIcon={<GitHubIcon/>} >
github repository
        </Button>
    </Box>
</TextBox>
<ArrowForwardIosIcon onClick={nextProject} fontSize='large' sx={{ display : {xs: 'block'  , sm : 'none' } , cursor : 'pointer'  ,'&:hover' :{color : '#FF196A'} }} />
</Box>
</StyledTabContent>
    )
}

export default TabContent