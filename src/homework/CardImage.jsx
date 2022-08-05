import React from 'react'
import {Box,styled,Typography,Divider} from '@mui/material'
import { navData } from '../constant/data';




const Component = styled(Box)`
border: 1px solid #2f3640;
border-color:#bdc3c7;
width:17rem;
height:16rem;
margin-left:30px;
margin-top:20px;
border-radius:3px;
box-shadow: 2px 2px 2px 2px #ecf0f1;

`;

const Textone = styled(Typography)`
 font-size:18px;
 color:#000;
 text-align: center;
 font-family:Open Sans;
 padding:5px;
 background:#f5f6fa;
`;

const Texttwo = styled(Typography)`
font-size:13px;
color:#000;
text-align: left;
margin-left:25px;
font-family:Open Sans;
margin-bottom:5px;

`;
const Textthree = styled(Typography)`
 font-size:14px;
 color:#000;
 text-align: center;
 font-family:Open Sans;
 padding:5px;
 background:#f5f6fa;
`;
const Textfour= styled(Typography)`
 color:#3498db;
 font-size:14px;
 font-weight:600;
 text-align:right:
 cursor:pointer;
 float:right;
 margin-bottom:15px;
 padding-left:60%;
 margin-top:35px;
`;

const Boxmain = styled(Box)`
display:flex;
flex-wrap:wrap;
margin-top:20%;
`;

function CardImage() {
  return (
    <Boxmain>
      {
        navData.map(item =>(
          
            <Component>
        <Box>
          <Textone>{item.topic}</Textone>
            <Divider/>
        </Box>
        <Box style={{marginTop:10,marginLeft:5}}>
        <label for="file" style={{height:2,marginRight:5,marginLeft:5,marginTop:10}}>{item.pro}%</label>
        <progress  id="file" value={item.pro} max="100"> {item.pro}% </progress>
        </Box>

        <Box style={{marginTop:10,marginBottom:7,display: "flex",flexDirection: "column"}}>
         
          <Box component="span"><input type="radio" component="span"/><Texttwo component="span">{item.queone}</Texttwo></Box>
          <Box component="span"><input type="radio" component="span"/><Texttwo component="span">{item.quetwo}</Texttwo></Box>
          <Box component="span"><input type="radio" component="span"/><Texttwo component="span">{item.quethree}</Texttwo></Box>
          <Textfour>Start now</Textfour>
        </Box>
        <Divider/>

        <Box>
          <Textthree>Jun 30, 20:41 to Jul 05, 20:41</Textthree>
        </Box>

      </Component>
          
        ))
      }
    </Boxmain>
  )
}

export default CardImage