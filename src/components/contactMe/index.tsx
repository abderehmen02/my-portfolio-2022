import React from 'react'
import {TextField ,  styled ,FormControl, Box, Button , Stack , Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const  ContactMeForm : React.FC =  ()=> {
    const StyledTextField = styled(TextField)(({theme})=>({
        '& label.Mui-focused': {
            color: 'black',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'green',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: theme.palette.dark.main,
            },
            '&:hover fieldset': {
              borderColor: theme.palette.dark.main,
            },
            '&.Mui-focused fieldset': {
              borderColor: theme.palette.dark.main
            },}}
      ));
      
    return (
        <FormControl sx={{  height : '50%' , gap : 8 , padding : 8 }} >
            <Box sx={{display : 'flex' , alignItems : 'center' , justifyContent: 'space-evenly' , gap : 8  }} >
            <StyledTextField
             required
             id="outlined-required"
             label="Name"
             placeholder='Your Name'
            />
             <StyledTextField
             sx={{color : 'black' , }}
             required
             id="outlined-required"
             label="Email"
             placeholder="Your Email"
            />
            </Box>
            <StyledTextField
             sx={{color : 'black'}}
             required
             id="outlined-required"
             label="Message"
             multiline
             rows={4}
             placeholder='Your Message'
            />
            <Button variant='contained' > Send </Button>
        </FormControl>
    )
}

export const ContactMeText : React.FC  = ()=>{
    return <Box sx={{ display : 'flex' , alignItems : 'center'  , justifyContent : 'space-between' , flexDirection :'column' , width : '50%'  , padding  : 4  , gap : 8}} >
        <Typography  variant='h3'  >       Want to say Something ?   </Typography>
        <Box sx={{display : 'flex' , textAlign : 'center' , flexDirection: 'column' , width : '65%' , alignItems : 'center' , justifyContent : 'space-around'  , gap : 4 }} >
        <Typography variant='h5' textAlign="center" >if you have any question , you have any idea ,
or you want to work with me feel free by submiting your name , email and message  i will reply to you asap</Typography>
        <Typography variant='h5' >you can also contact me on my social media accounts </Typography></Box>
        <Stack    direction="row" spacing="50px"   > <FacebookIcon sx={{'&:hover' : {color : 'red'} , cursor : 'pointer' } } > </FacebookIcon> <LinkedInIcon sx={{'&:hover' : {color : 'red'} , cursor : 'pointer' } } /><TwitterIcon sx={{'&:hover' : {color : 'red'} , cursor : 'pointer' } } /> </Stack>
    </Box>
}