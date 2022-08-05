import React,{useState} from 'react'
import {Box,styled,Button,Typography} from '@mui/material'

const Component = styled(Box)`
  
  background:#f5f6fa;
  margin-top:30px;
  border: 1px solid #f5f6fa;
  height:20rem;
  display:flex;
  width:100%;
  
  
  
`;

const BoxOne = styled(Box)`
border: 1px solid #bdc3c7;
border-color:#bdc3c7;
width:25rem;
height:12rem;
border-radius: 10px;
margin:5% 1% 0 20%;
background:#ffffff;
box-shadow: 0px 5px 5px #dcdde1;

`;

const BoxTwo = styled(Box)`
border: 1px solid #bdc3c7;
border-color:#bdc3c7;
width:25rem;
height:12rem;
border-radius: 10px;
margin:5% 1% 0 0;
background:#ffffff;
box-shadow: 0px 5px 5px #dcdde1;

`;

const MainText = styled(Typography)`
 font-family: Roboto;
 font-weight:Bold;
 font-size:25px;
 padding:2% 0 7% 4%;
`;

const Text = styled(Typography)`
font-family: poppins;
font-size:15px;
padding:0 0 0 4%;
`;

const Btn = styled(Button)`
 margin-left:4%;
 margin-top:4%;
`;

function Course() {
  const[open,setOpen] = useState(true);

  const handleClose=()=>{
     setOpen(false);
  }
  return (
    <div>
      <Component open={open} onClose={handleClose} >
        <BoxOne>
          <MainText>Next Lecture</MainText>
          <Text>Coming Soon</Text>
          <Btn variant="contained">Join</Btn>
        </BoxOne>
        <BoxTwo>
        <MainText>Next Mentor Session</MainText>
          <Text>Coming Soon</Text>
          <Btn variant="contained">Join</Btn>
        </BoxTwo>
      </Component>
    </div>
  )
}

export default Course