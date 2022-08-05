import React from 'react'
import {Box,styled,Button,Typography,Divider} from '@mui/material'
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import {useNavigate} from 'react-router-dom'

const Component= styled(Box)`
width:100%;
height:20rem;
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
height:12rem;
margin-left:17rem;
margin-top:20px;
border-radius:5px;
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
 font-size:10px;
 padding-top:30px;
 display-style:none;
 color:#7f8c8d;
 font-style:none;
 font-family: Poppins;
 font-weight:300;
`;
const Boxthree = styled(Box)`
border: 1px solid #2f3640;
border-color:#bdc3c7;
width:12rem;
height:12rem;
margin-left:1rem;
margin-top:20px;
border-radius:5px;
`;

const Icon = styled(ReplyAllIcon)`
padding:4rem 2rem 0 5rem;
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
padding-left:23px;
color:#7f8c8d;
`;





function Context() {
  const navigate = useNavigate();

  const handleClick=()=>{
    navigate('/work');
  }
  return (
    <>
    <Component>
        <Text>Upcoming Contests</Text>
        <Container>
            <Boxone>
            <Heading style={{fontSize:18,fontFamily:'poppins',paddingRight:20}}>Weekend Contest - 03/07/2022</Heading>
          <SubHeading>Jul 3, 2022 11:00 AM to Jul 3, 2022 12:30 PM</SubHeading>
          <BtnStyle>Start soon</BtnStyle>
            </Boxone>
            <Boxthree>
          <Icon onClick={handleClick}  style={{color:'#0097e6',fontSize:'35',justifyContent:'center'}}/>
          <TextBtn onClick={handleClick} >Past contests</TextBtn>
        </Boxthree>
        </Container>
    </Component>
    <Line/>
    </>
  )
}

export default Context