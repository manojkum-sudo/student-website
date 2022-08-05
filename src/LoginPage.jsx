import React,{useState,useContext} from 'react'
import {Box,styled,Typography,Button,TextField} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import {authenticateLogin,authenticateSignup} from './service/api'
//import LoginButton from './components/custombutton/LoginButton'
import { DataContext } from './context/DataProvider';

const Component = styled(Box)`
    height: 70vh;
    width: 90vh;
    padding: 0;
    padding-top: 0;
    margin:2% auto 0 auto;
`;

const LoginButon = styled(Button)`
    text-transform: none;
    background: #2e86de;
    color: #fff;
    height: 48px;
    border-radius: 2px;
    margin-top:20px;
`;

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
   
`;


const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
    text-align: center;
`;
const CreateAccount = styled(Typography)`
    margin: auto 0 5px 0;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer
`;
 const TextFieldStyle = styled(TextField)`
     margin-bottom:10px;
 `;

 const TextHead = styled(Typography)`
 font-size: 30px;
 text-align: center;
 font-weight:600;
 font-family: Roboto ;
 margin-bottom:20px;
 `;

 



const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
};

const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: 'Signup to get started'
    }
}
function LoginPage() {
    const[login,setLogin]= useState(loginInitialValues);
    const[signup,setSignup]= useState(signupInitialValues);
    const[open,setOpen]= useState(false);
    const [ account, toggleAccount ] = useState(accountInitialValues.login);
    const navigate = useNavigate();
    const navigation = useNavigate();
    const {setValue} = useContext(DataContext);
   
     
   
   
    

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
        
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const loginUser = async()=>{
        let response = await authenticateLogin(login);
        console.log(response);
        navigate('/home')
        setValue(login.username);       
    }

    const signupUser = async()=>{
        let response = await authenticateSignup(signup);
        if(!response) return;
        console.log(response);
        navigation('/home') 
        setValue(signup.username);      
    }
    
    
    
    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);
       
        
        
        
    }
    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login);
    }
    const handleClick = () => {
       navigate('/second');
       
       
     }  

    


  return (
    <div>
        <Component open={open} onClose={handleClose}>
           {
            account.view === 'login'?
            <Wrapper>
                
                
                <TextHead >LOGIN</TextHead >
                <TextFieldStyle variant="outlined"  name="username" label="Enter name" onChange={onValueChange} required />
                <TextFieldStyle variant="outlined" name="password" label="Enter password" onChange={onValueChange} required/>
                <Typography>By continuing, you agree to Newton Terms of Use and Privacy Policy.</Typography>
                <LoginButon onClick={loginUser} >Login</LoginButon>
                
                
            <Text>OR</Text>
            <CreateAccount onClick={toggleSignup}>New to Newton School ?</CreateAccount>
        </Wrapper>
          :
        <Wrapper>
            
            <TextHead >SIGNUP</TextHead >
        <TextFieldStyle variant="outlined" name="firstname" label="Enter First Name" onChange={onInputChange} required />
        <TextFieldStyle variant="outlined" name="lastname" label="Enter Last Name" onChange={onInputChange} required/>
        <TextFieldStyle variant="outlined" name="username" label="Enter Username" onChange={onInputChange} required/>
        <TextFieldStyle variant="outlined" name="email" label="Enter Email" onChange={onInputChange} required/>
        <TextFieldStyle variant="outlined" name="password" label="Enter Password" onChange={onInputChange} required/>
        <TextFieldStyle variant="outlined" name="phone" label="Enter phone number" onChange={onInputChange} required />
        <LoginButon onClick={signupUser} component={Link} to={'/home'} >Sign up</LoginButon>
            
        <Button onClick={handleClick}>Back</Button>
        
        </Wrapper>
           }

           
        </Component>
    </div>
  )
}


export default LoginPage