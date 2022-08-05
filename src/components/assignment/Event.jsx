import React from 'react'
import {Box,styled,Typography,Divider} from '@mui/material'
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
background:#f5f6fa;
`;


const SubHeading= styled(Typography)`
color:#7f8c8d;
font-size:15px;
padding-left:20px;
padding-right:15px;
 padding-top:60px;
 text-transform: uppercase;
 text-align:center;

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
padding-left:30px;
color:#7f8c8d;
`;





function Event() {
  const navigate = useNavigate();

  const handleClick=()=>{
    navigate('/work');
  }
  return (
    <>
    <Component>
        <Text>Upcoming Group Events</Text>
        <Container>
            <Boxone>
        
          <SubHeading>No active Group Events</SubHeading>
          
            </Boxone>
            <Boxthree>
          <Icon onClick={handleClick}  style={{color:'#0097e6',fontSize:'35',justifyContent:'center'}}/>
          <TextBtn onClick={handleClick}>Past Events</TextBtn>
        </Boxthree>
        </Container>
    </Component>
    <Line/>
    </>
  )
}

export default Event