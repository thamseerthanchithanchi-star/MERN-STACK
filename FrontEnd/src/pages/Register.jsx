import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Register.css';
import axios from 'axios';
const Register = () => {
    const [userName, setUserName,] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
  

    const RegisterUser = async (e) => {
        e.preventDefault()
        try{
           const response = await axios.post('http://localhost:3000/api/register',{
            userName: userName,
            email: email,
            password: password
           })
          console.log(response)
          alert('registered successfully')
          navigate('/login')

        }catch (error){
            // chechk if backend sent the "username exists " message
            if (error.response.data.message === "userName already exists") {
                alert("username already exists!");
            }else {
                alert(error.response.data.message || "Failed to register!");
            }
            console.log(error)
            
        }      
    }
    return(
        <div>
            <form action="">
                <h4>SIGNUP</h4>
                <input type="text" placeholder='write your username' 
                onChange={(e)  => setUserName(e.target.value)} required />

                <input type="email" placeholder='write your email' 
                onChange={(e)  => setEmail(e.target.value)} required />

                <input type="password" placeholder='write your password' 
                onChange={(e)  => setPassword(e.target.value)} required />

                <button onClick={RegisterUser}>SIGNUP</button>

                
            </form>
        </div>
    )
}

export default Register