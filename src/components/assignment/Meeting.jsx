import React from 'react'
import {Box,styled,Typography,Divider} from '@mui/material'
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


const Component= styled(Box)`
width:100%;
height:13rem;
`;
const Container= styled(Box)`
display:flex;
`;

const Boxone = styled(Box)`
border: 1px solid #2f3640;
border-color:#bdc3c7;
width:13rem;
height:8rem;
margin-left:17rem;
margin-top:20px;
background-image: linear-gradient(to right,#70a1ff, #341f97);
`;
const Boxtwo = styled(Box)`
border: 1px solid #2f3640;
border-color:#bdc3c7;
width:13rem;
height:8rem;
margin-left:1rem;
margin-top:20px;
background-image: linear-gradient(to right,#70a1ff, #341f97);
`;
const Boxthree = styled(Box)`
border: 1px solid #2f3640;
border-color:#bdc3c7;
width:13rem;
height:8rem;
margin-left:1rem;
margin-top:20px;
`;
const Text= styled(Typography)`
   justify-content:center;
   color:#ffffff;
   font-size:20px;
   padding-top:5px;
   padding-left:5px;
   padding-right:5px;
  `;

  const Icon = styled(ReplyAllIcon)`
padding:2rem 2rem 0 5rem;
cursor:pointer;

`;

const Line = styled(Divider)`
 color:#2c3e50;
 margin-right:15rem;
 margin-left:15rem;
 background:#2c3e50;
 margin-top:40px;
`;

const TextBtn = styled(Typography)`
font-weight:600;
font-size:20px;
padding-left:30px;
color:#7f8c8d;
`;

const TextHead= styled(Typography)`
   justify-content:center;
   color:#000;
   font-size:25px;
   font-weight:600;
   padding-left:17rem;
   padding-top:20px;
`;

function Meeting() {
  return (
    <div>
        <>
        <Component>
        <TextHead>Past Meetings</TextHead>
            <Container>
                
                <Boxone>
                    <Text><ArrowRightIcon/>Mentor group session</Text>
                </Boxone>
                <Boxtwo>
                <Text><ArrowRightIcon/>Alcor group session</Text>
                </Boxtwo>
                <Boxthree>
          <Icon  style={{color:'#0097e6',fontSize:'35',justifyContent:'center'}}/>
          <TextBtn>Past Meetings</TextBtn>
        </Boxthree>
            </Container>
        </Component>
        <Line/>
        </>
    </div>
  )
}

export default Meeting