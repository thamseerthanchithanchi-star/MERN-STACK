import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [userName, setUserName,] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

 const LoginUser = async(e) => {
        e.preventDefault()
        try{
           const response = await axios.post('http://localhost:3000/api/login',{
            userName: userName,
            password: password
           })
          console.log(response)
          alert('login successfully')
          navigate('/')

       }catch (error){
            // chechk if backend sent the "username exists " message
            if (error.response.data.message === "userName does not exist") {
                alert("userName does not exist!");
            }else {
                alert(error.response.data.message || "Failed to register!");
            }
            console.log(error)
            
        }      
    }
    return(
        <div>
            <form action="">
                <h4>SIGNIN</h4>
                <input type="text" placeholder='write your username' 
                onChange={(e)  => setUserName(e.target.value)} required />

                <input type="password" placeholder='write your password' 
                onChange={(e)  => setPassword(e.target.value)} required />

                <button type="submit" onClick={LoginUser}>Login</button>

                
            </form>
        </div>
    )
}
export default Login