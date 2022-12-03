import * as React   from 'react';
import {useState} from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { styled} from '@mui/material'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import MyImg from '../images/myimg.jpg' ;
import InstagramIcon from '@mui/icons-material/Instagram';
import {componentData  } from '../types/components.ts'
import { Link } from 'react-scroll'
import {Components} from '../assets/components.ts'
import {AnimationControls} from 'framer-motion'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import ArticleIcon from '@mui/icons-material/Article';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import theme from '../Styling/theme.ts'


interface navBarProps {
  RenderedComponent : componentData ,
  up : AnimationControls ,
  setRenderedComponent : React.Dispatch<any>
}

const NavBar : React.FC<navBarProps> =({RenderedComponent , up ,setRenderedComponent })=>{
// hooks
const [openList, setopenList] = useState(false)



  // functions
const backToHome = ()=>{
 up.start({
   top : theme.breakpoints.values.sm > window.innerWidth ? '200vh' : '100vh'
 })  ;
 window.scrollTo(0 , 0)
setTimeout(()=>{
  setRenderedComponent(Components.Home)
} , 50)
}


  // components
const StyledComponentText = styled(Typography)({
cursor : 'pointer'  
})




const StyledToolBar = styled(Toolbar)(({theme})=>({
    display: 'flex' ,
    justifyContent: 'space-between' ,
    position : 'fixed' ,
    top : 0,
    right  : 0,
    margin : 5 ,
    backgroundColor : theme.palette.primary.main ,
    zIndex : 1,
    width : '97vw',
  }))

  const IconsBox = styled(Box)({
gap : 40 ,
alignItems : 'center'
  })



  const MobileList : React.FC = ()=>{
const MobileMenu = styled(Box)(({theme})=>({  display : {md: 'none' , xs: 'block'} ,  width: '50%', maxWidth: 360, backgroundColor: theme.palette.secondary.main , position : 'absolute'  , top : '0px' , right : '0px' }))
    return  openList ? <MobileMenu    >
        <nav aria-label="main mailbox folders">
          <List  >
          <ListItem onClick={()=>{setopenList(false)}} disablePadding sx={{ display : 'flex' , alignItems : 'center' , justifyContent : 'center'}} >
            <CloseIcon color='error' sx={{cursor : 'pointer'}}  />
            </ListItem>
          <ListItem disablePadding>
            <Link to='home' >
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon/>
                </ListItemIcon>
                <ListItemText sx={{color : RenderedComponent.name === Components.Home.name ? '#FF196A'  : 'black'  }}  onClick={backToHome} primary="Home" />
              </ListItemButton>
              </Link>
            </ListItem>
            <ListItem disablePadding>
              <Link to='aboutMe' >
              <ListItemButton>
                <ListItemIcon>
                  <ArticleIcon/>
                </ListItemIcon>
                <ListItemText sx={{color : RenderedComponent.name === Components.AboutMe.name ? '#FF196A'  : 'black' }} primary="About Me" />
              </ListItemButton>
              </Link>
            </ListItem>
            <ListItem disablePadding>
              <Link to="myProjects" >
              <ListItemButton>
                <ListItemIcon>
                  <GroupWorkIcon/>
                </ListItemIcon>
                <ListItemText sx={{color : RenderedComponent.name === Components.MyProjects.name ? '#FF196A'  : 'black'}} primary="My Projects" />
              </ListItemButton>
              </Link>
            </ListItem>
            <ListItem disablePadding>
              <Link to="contactMe" >
              <ListItemButton>
                <ListItemIcon>
                  <LocalPhoneOutlinedIcon/>
                </ListItemIcon>
                <ListItemText sx={{color : RenderedComponent.name === Components.ContactMe.name ? '#FF196A' : 'black' }}  primary="Contact Me" />
              </ListItemButton>
              </Link>
            </ListItem>

          </List>
        </nav>
      </MobileMenu> : null
  } 






return (
  <StyledToolBar   >
<Avatar sx={{width : 48 , height : 46}} src={MyImg} ></Avatar>    
    <Box sx={{display: {md: 'flex' , xs : 'none'  } ,  gap : 5 }}  >
<Link to="home"  >  <StyledComponentText fontSize={20} sx={{color : RenderedComponent.name === Components.Home.name ? '#FF196A'  : 'black'  }}  onClick={backToHome} >Home</StyledComponentText></Link>
<Link to='aboutMe' ><StyledComponentText fontSize={20} sx={{color : RenderedComponent.name === Components.AboutMe.name ? '#FF196A'  : 'black' }}  >About ME</StyledComponentText></Link>
<Link to="myProjects" > <StyledComponentText fontSize={20} sx={{color : RenderedComponent.name === Components.MyProjects.name ? '#FF196A'  : 'black'}}>Projects</StyledComponentText></Link>
<Link to="contactMe" ><StyledComponentText fontSize={20} sx={{color : RenderedComponent.name === Components.ContactMe.name ? '#FF196A' : 'black' }} >Contact Me</StyledComponentText></Link>
    </Box>
    <IconsBox sx={{display: {md: 'flex' , xs : 'none'  }}} >
      <FacebookOutlinedIcon fontSize='large'/>
      <InstagramIcon fontSize='large' />
    </IconsBox>
    {/* <Typography variant='h3' margin={2}  sx={{display : {xs: 'block' , md : 'none'}}} >
      Abde Rahmane
    </Typography> */}
    <MenuIcon onClick={()=>{setopenList(!openList)}} fontSize='large'  sx={{display : {xs: 'block' , md : 'none'}}} />
    <MobileList/>
</StyledToolBar>
  );
} 
export default NavBar