import { createTheme, Theme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const  theme : Theme  = createTheme({
  palette: {
    primary: {
      main: "#00FFA6",
    },
    secondary: {
        main : '#0DCEFF'
    },
    info : {
        main : '#FF196A'
    } , 
    dark : {
      dark : '#fff' , 
      main : '#2b2a27' ,
      light : '#75736d'
    } ,
    white :{
      dark : '#ECECE1' ,
      main : '#F1F1E9' ,
      light : '#fff'
    }
  },
  typography : {

      h2 : {
          fontFamily : 'Alexandria, sans-serif ' ,
          fontSize : 40
      } , 
      h4 : {
        fontFamily: 'Alexandria, sans-serif' ,
        fontSize : 24 ,
      } ,
      h5 : {
        fontFamily: 'Alexandria, sans-serif' ,
         fontSize : 16 ,
         fontWeight : 'lighter' ,
      }
        } ,
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            textTransform: 'none',
            border: `2px solid #FF196A`,
            color : '#FF196A' ,
            borderRadius : '24px' ,
            padding: '16px 32px' ,
            boxShadow : '2px 2px 4px black' ,
            "&:hover"  : {
              color : '#000' ,
              backgroundColor  :'#FF196A' ,
             border : '2px solid #FF196A' 
            }
          },
        },
        {
          props: { variant: 'contained' },
          style: {
            textTransform: 'none',
            backgroundColor : '#fff' ,
            border: `2px solid #000`,
            color : '#000' ,
            borderRadius : '24px' ,
            padding: '16px 32px' ,
            boxShadow : '2px 2px 4px #000' ,
            "&:hover"  : {
              color : '#fff' ,
              backgroundColor  :'#000' ,
             border : '2px solid #000' 
            }
          },
        },
      ],
    },
  },
});
theme.typography.h1 = {
  fontFamily: 'Alexandria, sans-serif', 
  fontSize : 48,
  fontWeight : 'normal' ,
  [theme.breakpoints.down('sm')] : {
    fontSize: 32,
  } ,
}
theme.typography.h3 = {
  fontFamily : 'Alexandria, sans-serif' ,
  fontSize : 32 ,
  [theme.breakpoints.down("sm")] : {
    fontSize  : 24
  }
}  
export default theme