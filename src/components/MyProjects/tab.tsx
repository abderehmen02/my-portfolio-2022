import { Box, styled ,Typography } from '@mui/material'
import React from 'react'
interface TabProps {
    title : string , 
    text : string , 
    selected : boolean ,
    // index  : number , 
    // setSelectedProjoctIndex : React.Dispatch<React.SetStateAction<number>>
}

const Tab : React.FC<TabProps>   = ({title , text , selected  })=> {
    const color = selected ? '#F1F1E9'  : 'black' ;
    const bgColor = selected ? 'black'  : '#F1F1E9' ;
 
    const StyledTab = styled(Box)(({theme})=>({
border   :`2px solid ${color}` ,
display : 'flex' ,
flexDirection  :'column' ,
gap : 16 ,
backgroundColor : bgColor ,
borderRadius : 8 ,
paddingTop  : 8,
boxShadow : '6px 2px 4px black' ,
paddingBottom : 8 ,
width : 160 ,
paddingLeft : 16,
paddingRight :16,
color : color , 
backgroundColor : bgColor , 
cursor : 'pointer' ,
'&:hover' : {
    color : selected ? color :  bgColor , 
    backgroundColor :  selected ? bgColor :  theme.palette.dark.light ,
    border  : selected ? '6px 2px 4px black' : `2px solid ${theme.palette.dark.main}`
}
    }))

const StyledTypograpthy = styled(Typography)(({theme})=>({
  
}))
    return (
        <StyledTab  >
            <Typography variant="h4"   >
{title}
            </Typography>
            <StyledTypograpthy variant='h5'  >
{text}
            </StyledTypograpthy>
        </StyledTab>
    )
}

export default Tab
