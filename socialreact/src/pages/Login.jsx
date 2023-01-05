import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Route, Router, Routes ,useNavigate} from 'react-router-dom';
import '../css/login.css'

function Login() {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [LoginStatus, setLoginStatus] = useState("")

  const navigate = useNavigate()
  
 useEffect(()=>{
  },[])


 const handleLogin = async()=>{
    
        const response = await axios.post('http://127.0.0.1:8000/api/v1/login/',{
    
            username: email,
            password: password
    
        }).then((response) => {

            const token = response?.data?.access
        
            if (!token) {
              setLoginStatus('false')
              console.log("Unsuccessful")
           
            } else {
              setLoginStatus('true')
              console.log("Successful")
              localStorage.setItem('token',token)
              navigate('/')
              }
            })

 }

  return (
    <div>

      <div className="container">   
      <div className="login-container animated fadeInDown bootstrap snippets bootdeys">
        <div className="loginbox bg-white">

            <div className="loginbox-title">SIGN IN</div>
            <div className="loginbox-social">
                <div className="social-title ">Connect with Your Social Accounts</div>
                <div className="social-buttons">
                    <a href="" className="button-facebook">
                        <i className="social-icon fa fa-facebook"></i>
                    </a>
                    <a href="" className="button-twitter">
                        <i className="social-icon fa fa-twitter"></i>
                    </a>
                    <a href="" className="button-google">
                        <i className="social-icon fa fa-google-plus"></i>
                    </a>
                </div>
                
            </div>
            <div className="loginbox-or">
                <div className="or-line"></div>
                <div className="or">OR</div>
            </div>
            <div className="loginbox-textbox">
                <input type="tel" className="form-control" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="loginbox-textbox">
                <input type="text" className="form-control" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className="loginbox-forgot">
                <a href="">Forgot Password?</a>
            </div>
            <div className="loginbox-submit">
                <input type="button" className="btn btn-primary btn-block" value="Login" onClick={handleLogin}/>
            </div>
            <div className="loginbox-signup">
                <a href="#register.html">Sign Up With Email</a>
            </div>
        </div>
        <div className="logobox">
        </div>
    </div>
    </div>
    </div>
  )
}

export default Login


