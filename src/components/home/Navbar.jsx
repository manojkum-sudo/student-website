import React from 'react'
import { NavLink } from 'react-router-dom';
import { Box, styled } from '@mui/material';




const Component= styled(Box)`
 display:flex;
 justify-content:center;
 

`;

const Tabs = styled(NavLink)`
    color:#353b48;
    text-decoration: none;
    font-size: 16px;
    margin-top:5%;
    font-family: Poppins;
    margin-right:30px;
    font-weight:500;
    
`;

function Navbar() {
  return (
    <>
    <Component>
                <Tabs to='/home'>Course</Tabs>
                {/* <Tabs to='/course'>Course</Tabs> */}
                <Tabs to='/timeline'>My Timeline</Tabs>
                <Tabs to='/target'>My Target</Tabs>
                <Tabs to='/leader'>Leader Board</Tabs>
                <Tabs to='/expert'>Expert Session</Tabs>
                <Tabs to='/milestone'>Milestones</Tabs>
                <Tabs to='/doubt'>Doubts</Tabs>
                
             
                
         

    </Component>
    
    </>
  )
}

export default Navbar