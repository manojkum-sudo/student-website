import React from 'react'
import {Button,Typography,styled} from '@mui/material'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const BtnStyle= styled(Button)`
border: 1px solid #bdc3c7;
border-radius: 5px;

display:flex;
`;

const Text= styled(Typography)`
   text-transform: none;
   font-family: Roboto;
   font-weight: 600;
`;

const RocketIcon= styled(RocketLaunchIcon)`
  color:#e74c3c;
  padding-left:5px;
`;

function ReferButton() {
  return (
    <div>
      <BtnStyle variant="outlined"  >
       <Text  style={{color:'#2c3e50'}}> Refer a friend</Text>
        <RocketIcon/>
      </BtnStyle>
     
    </div>
  )
}

export default ReferButton