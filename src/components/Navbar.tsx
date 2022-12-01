import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { styled} from '@mui/material'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import MyImg from '../images/myimg.jpg' ;
import InstagramIcon from '@mui/icons-material/Instagram';
const NavBar : React.FC =()=>{

  const StyledToolBar = styled(Toolbar)(({theme})=>({
    display: 'flex' ,
    justifyContent: 'space-between' ,
    position : 'fixed' ,
    top : 0,
    right  : 0,
    backgroundColor : theme.palette.primary.main ,
    zIndex : 1,
    width : '97%',
  }))

  const IconsBox = styled(Box)({
display : 'flex' ,
gap : 40 ,
alignItems : 'center'
  })

return (
<>
  <StyledToolBar  >
<Avatar sx={{width : 48 , height : 46}} src={MyImg} ></Avatar>    
    <Box sx={{display: {md: 'flex' , xs : 'none' , gap: 40 }}}  >
<Typography fontSize={20} >Home</Typography>
<Typography fontSize={20} >Projects</Typography>
<Typography fontSize={20} >Skills</Typography>
<Typography fontSize={20} >Contact Me</Typography>
    </Box>
    <IconsBox>
      <FacebookOutlinedIcon fontSize="large" />
      <InstagramIcon fontSize="large" />
    </IconsBox>
</StyledToolBar>
</>
  );
} 
export default NavBar