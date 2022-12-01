import { Box , styled, Typography , Button } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import React from 'react'

interface TabContentProps {
    title : string ,
    shortDescreption : string ,
    longDescreption :string ,
    images : Blob[] , 
}

const TabContent : React.FC<TabContentProps> =  ({title , shortDescreption , longDescreption  , images })=> {

    // styled Components
 const StyledTabContent = styled(Box)(({theme})=>({
     display : 'flex' ,
   
     justifyContent : 'space-around'
 }))
 const StyledTitle = styled(Typography)(({theme})=>({
     color : theme.palette.info.main    }))


const TextBox  = styled(Box)(({theme})=>({
   display  : 'flex' , 
   flexDirection : 'column' ,
   justifyContent : 'space-between' ,
   alignItems : 'center' ,
   gap : '40px',
   width : '50%'
}))


    return (
        <StyledTabContent>
<img src={images[0]}   ></img>
<TextBox >   
    <Box>
    <StyledTitle variant='h2' sx={{textAlign : 'center'}} > {title} </StyledTitle>
    <Typography variant='h4' sx={{textAlign : 'center'}}  > {shortDescreption} </Typography>
    </Box>
    <Typography variant='h5' marginLeft={16} marginRight={16} textAlign='center' > {longDescreption} </Typography>
    <Box sx={{justifyContent : 'center' , display : 'flex'   , gap : 4}} >
        <Button sx={{width : '240px'}}  variant="contained" startIcon={<NewspaperIcon/>} >
Test Live
        </Button>
        <Button variant='outlined' sx={{width : '240px'}} startIcon={<GitHubIcon/>} >
            github repository
        </Button>
    </Box>
</TextBox>
        </StyledTabContent>
    )
}

export default TabContent