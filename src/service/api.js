import axios from 'axios'

const URL = 'http://localhost:8000'

export const authenticateLogin = async(data)=>{
      try{
        return await axios.post(`${URL}/login`, data)
      }catch(error){
        console.log("error",error);
      }
}

export const authenticateSignup = async(data)=>{
    try{
      return await axios.post(`${URL}/signup`, data)
    }catch(error){
      console.log("error",error);
    }
}

export const authenticateUser = async () => {
  //id = id || '';
  try {
      return await axios.get(`${URL}/userdata`);
  } catch (error) {
      console.log('Error while calling getUsers api ', error);
  }
}