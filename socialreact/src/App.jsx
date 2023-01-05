import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Router, Routes ,useNavigate} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';


function App() {
 
  const navigate = useNavigate()

  useEffect(()=>{

    const token = localStorage.getItem('token')

    if (!token){
      navigate('/login')    
    }
  },[])

  return (
   <div>
    <Routes>
      <Route  path="/login" element={<Login/>}/>
      <Route  path="/" element={<Home/>}/>
    </Routes>
   </div>
  )
}

export default App
