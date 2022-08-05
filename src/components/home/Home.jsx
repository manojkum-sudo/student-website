import React from 'react'
import {Box,styled,Button,Typography} from '@mui/material'
import Navbar from './Navbar';
import Assig from '../assignment/Assig';
import Course from '../../pages/Course';
import Context from '../assignment/Context';
import Event from '../assignment/Event';
import Lectures from '../assignment/Lectures';
import Meeting from '../assignment/Meeting';
import Footer from './Footer';
//import Cou from '../../pages/Cou';
//import LoginPage from '../../LoginPage';
import Header from '../../components/Header'

const Text = styled(Typography)`
color:#000;
font-family: Roboto;
font-size:25px;
font-weight:600;
margin-top:20px;
margin-right:10%;

`;

const Component = styled(Box)`
  display:flex;
  justify-content:space-around;
  margin-top:5%;
`;

const Btn = styled(Button)`
  background:#0097e6;
  text-decoration: none;

  
  
  
`;
const BtnText=styled(Typography)`
   text-decoration: none;
    font-size:12px;
    font-style:inherit;
    font-family: Poppins;
    
`;

const BtnStyle=styled(Box)`
  margin-top:6%;
  margin-left:10%;
  
`;

const BtnTwo = styled(Button)`
background:#00cec9;
font-size:10px;
box-shadow:none;
text-decoration: none;
font-family: Poppins;
font-weight:600;
`;

const BtnCon = styled(Box)`
  margin-top:5%;
  margin-left:45%;
  text-decoration: none;
  cursor:none;
  width:700px;
  
`;

// const NavStyle = styled(Navbar)`
//  margin-right:10px;
//  margin-left:10px;
// `;

function Home() {
  return (
    <>
     <Header/>
    <Component>
        <BtnStyle>
            <Btn variant="contained" style={{color: 'white'}}><BtnText>Share FeedBack</BtnText></Btn>
        </BtnStyle>
        <Box>
            <Text>Full-Stack Web Development - January 2022 - Alcor Advance DSA Batch</Text>
             <BtnCon >
                <BtnTwo variant="contained" >Income sharing agreement signed</BtnTwo>
             </BtnCon >
        </Box>
           
        
    </Component>
       
        <Navbar /> 
        <Course/> 
         
        <Assig/>  

        <Context/>
        <Event/>
        <Lectures/>
        <Meeting/>
        <Footer/>

        
      
      


     

    </>

    
  )
}

export default Home