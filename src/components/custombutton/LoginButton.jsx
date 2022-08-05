import React,{useState,useContext} from 'react'
import {Box,Typography,Button,Avatar,styled,Popper,List,ListItem} from '@mui/material';
//import Logout from '@mui/icons-material/Logout';
//import PersonAdd from '@mui/icons-material/PersonAdd';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
//import { authenticateUser } from '../../service/api';
import {useNavigate} from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
//import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { DataContext } from '../../context/DataProvider';


const AvatarStyle= styled(Avatar)`
      background:#c23616;
      margin-left:30px;
      cursor:pointer;
`;

  
  const LogoutButton = styled(Button)`
    text-transform: none;
    background: #2e86de;
    color: #fff;
    height: 40px;
    width:60%;
    border-radius: 4px;
    margin:20px auto 1px 30px;
    
 `;


  const ArrowDropDown= styled(ArrowDropDownIcon)`
    color:#2f3640;
    align-item:center;
  `;

  const Component = styled(Box)`
  display:flex;
  `;

  const PopStn = styled(Popper)`
    border:1px solid #fff;
    border-radius:5px;
    width:500%;
    height:35%;
    margin:0 20px 0 78%;
    background:#fff;
    box-shadow: 0px 5px 5px #dcdde1;
  `;

  const Text = styled(Typography)`
    font-size:14px;
    font-family: Poppins;
    font-weight:600;
 
  `;

  const Icon = styled(AccountCircleIcon)`
    color:#c23616;
    padding-top:10px;
  `;

  const ListStyle = styled(ListItem)`
  font-size:15px;
  font-family: Poppins;
  `;

  


function LoginButton() {
 
  const[open,setOpen] = useState(false);
  const navigate = useNavigate();
  const {value} = useContext(DataContext);
  

  const handleClick=(e) => {
   
    setOpen(true);
  }
  const handleClose=() => {
    setOpen(false);
  }
  
    
    

  

  const handleChange=()=>{
    setOpen(false);
    console.log(value);
  }
  const handleLogout=()=>{
      navigate('/');
  }

  const handleLogin=()=>{
    navigate('/')
  }
  
  return (
    <>
    
    <Component>
      
       <AvatarStyle sx={{ width: 32, height: 32 }}  onClick={handleClick} ><Typography style={{fontSize:14}}>MS</Typography></AvatarStyle>
       <ArrowDropDown open={open} onClose={handleClose} onClick={handleClick}/>
       <PopStn open={open}  onClick={handleChange} onClose={handleClose} style={{width: '200px', marginTop: '5%',}}>
         
          {
            value ?
            <Box>
          <List>
          <ListItem><Icon  /><Text>Welcome:</Text></ListItem>
          
          <ListStyle>{value}</ListStyle>
          <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
         </List>
          </Box>
          :
          <Box>
          <List>
          <ListItem><Icon  /><Text>Oops:</Text></ListItem>
          
          <ListStyle>No User Logged In</ListStyle>
          <LogoutButton onClick={handleLogin}>Login</LogoutButton>
         </List>
          </Box>
          }
        
       </PopStn>
       
      
    </Component></>
    
  )
}

export default LoginButton