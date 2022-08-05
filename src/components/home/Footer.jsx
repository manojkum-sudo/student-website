import React from 'react'
import {Box,styled,Typography,Button} from '@mui/material'

const Container= styled(Box)`
display:flex;
text-item:center;
margin-bottom:40px;
`;

const Text= styled(Typography)`
   justify-content:center;
   color:#747d8c;
   font-size:30px;
   font-weight:600;
   padding-left:17rem;
   padding-top:20px;
`;

const Btn= styled(Button)`
  border-radius:20px;
  width:10%;
  margin:20px 0 0 10px;
  background:#1e90ff;
`;
const TextStn = styled(Typography)`
font-size:18px;
text-decoration: none;
`;

function Footer() {
  return (
    <Container>
        <Text>Notes</Text>
        <Btn variant="contained" ><TextStn>Read Now</TextStn></Btn>
    </Container>
  )
}

export default Footer