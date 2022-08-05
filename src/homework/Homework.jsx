import React from 'react'
import Header from '../components/Header'
import {Box,styled,Button,Typography} from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {useNavigate} from 'react-router-dom'
import CardImage from './CardImage';
//import Autocomplete from '@mui/material/Autocomplete';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Btn = styled(Button)`
 margin-top:8%;
 font-weight:600;
 font-size:14px;
 margin-left:10%;
 color:#3498db;
 background:transparent;
`;



const Icon = styled(ArrowBackIosNewIcon)`
 width:20px;
 height:15px;
 color:#3498db;
 margin-top:5%;
`;

const Text = styled(Typography)`
  font-size:23px;
  font-weight:600;
  color:#353b48;
  margin:2% 0 0 15%;
`;

const Container = styled(Box)`
border: 1px solid #ffffff;
border-color:#ffffff;
width:70%;
height:80%;
margin-left:13rem;
margin-top:20px;
border-radius:1px;
display:flex;
margin-bottom:10%;
`;

const Component = styled(Box)`
 width:100%;
 height:100%;
`;

const BoxAsn = styled(Box)`
border: 1px solid #2f3640;
border-color:#bdc3c7;
width:30rem;
height:35px;
margin:2% 0 0 15%;
align-items:center;
  
`;

const Boxtwo = styled(Box)`
border: 1px solid #2f3640;
border-color:#bdc3c7;
width:30rem;
height:35px;
margin:2% 0 0 2%;
display:flex;
align-items:center;
  
`;

const TextMain = styled(Typography)`
font-size:14px;
font-family:Open Sans;
color:#34495e;
padding-left:10px;
padding-top:5px;
border-radius:5px;
`;


function Homework() {
    const navigate = useNavigate();

    const backBtn=()=>{
        navigate('/home');
    }
  return (
    <Component position="static">
        <Header/>
       <Box>
       <Btn variant="text" onClick={backBtn} component="span"><Icon  />Back</Btn>
       </Box>

       <Text>Past Assignment</Text>

       <Box style={{display: 'flex'}}>
       <BoxAsn>
          <TextMain>Assignment Completed</TextMain>
       </BoxAsn>
       <Boxtwo>
          <TextMain>Start date</TextMain>< ArrowForwardIcon/><TextMain>End date</TextMain>
       </Boxtwo>
       </Box>

       <Container>
         
         <CardImage/>
       </Container>
    </Component>
  )
}

export default Homework