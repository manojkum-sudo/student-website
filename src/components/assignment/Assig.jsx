import React from 'react'
import {Box,styled,Button,Typography,Divider} from '@mui/material'
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import {useNavigate} from 'react-router-dom'


const Component = styled(Box)`
  width:100%;
  height:30rem;
`;
const Text= styled(Typography)`
   justify-content:center;
   color:#000;
   font-size:25px;
   font-weight:600;
   padding-left:17rem;
   padding-top:20px;
`;

const Container= styled(Box)`
display:flex;
`;

const Boxone = styled(Box)`
border: 1px solid #2f3640;
border-color:#bdc3c7;
width:12rem;
height:23rem;
margin-left:17rem;
margin-top:20px;
border-radius:10px;
`;

const Boxtwo = styled(Box)`
border: 1px solid #2f3640;
border-color:#bdc3c7;
width:12rem;
height:23rem;
margin-left:1rem;
margin-top:20px;
border-radius:10px;
`;

const Boxthree = styled(Box)`
border: 1px solid #2f3640;
border-color:#bdc3c7;
width:12rem;
height:23rem;
margin-left:1rem;
margin-top:20px;
border-radius:10px;
`;

const Heading = styled(Typography)`
 padding-left:10px;
 padding-top:15px;
 font-weight:600;
 color:#7f8c8d;
`;
const SubHeading= styled(Typography)`
color:#bdc3c7;
font-size:12px;
padding-left:10px;
padding-right:15px;
 padding-top:15px;

`;
const BtnStyle = styled(Button)`
 text-decoration: underline;
 font-size:15px;
 padding-top:30px;
 display-style:none;
 color:#0097e6;
 font-style:none;
 font-family: Poppins;
 font-weight:300;
`;
const Icon = styled(ReplyAllIcon)`
padding:10rem 2rem 0 5rem;
cursor:pointer;

`;

const Line = styled(Divider)`
 color:#2c3e50;
 margin-right:15rem;
 margin-left:15rem;
 background:#2c3e50;
 margin-top:10px;
`;

const TextBtn = styled(Typography)`
font-weight:600;
font-size:20px;
padding-left:15px;
color:#7f8c8d;
cursor:pointer;
`;



function Assig() {
  const navigate = useNavigate();

  const handleClick=()=>{
    navigate('/work');
  }
  return (
    <>
    <Component>
      <Text>Upcoming Assignments</Text>
      <Container>
        <Boxone>
          <Heading style={{fontSize:18,fontFamily:'poppins',paddingRight:20}}>DP Arrays - In Class</Heading>
          <SubHeading>Jun 25, 2022 8:41 PM to Jun 30, 2022 8:41 PM</SubHeading>
          <BtnStyle>Start now</BtnStyle>
        </Boxone>
        <Boxtwo >
        <Heading style={{fontSize:18,fontFamily:'poppins',paddingRight:20}}>Js objects, JS Constructor & Constructor Functions, JS Abstraction, JS Math, JS ... - In Class</Heading>
          <SubHeading>Jun 25, 2022 8:41 PM to Jun 30, 2022 8:41 PM</SubHeading>
          <BtnStyle>Start now</BtnStyle>
        </Boxtwo >
        <Boxthree>
          <Icon onClick={handleClick}  style={{color:'#0097e6',fontSize:'35',justifyContent:'center'}}/>
          <TextBtn onClick={handleClick} >Past assignment</TextBtn>
        </Boxthree>
      </Container>
    
    </Component>

<Line/>
</>
  )
}

export default Assig