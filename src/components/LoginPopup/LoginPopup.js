import React,{useState} from 'react';
import './LoginPopup.css'
import CloseIcon from '@mui/icons-material/Close';

const LoginPopup = ({setShowLogin}) => {
    const[currState,setCurrState]=useState("Login")
  return (
    <div className='login-popup'>
       <form  className='login-popup-container'>
            <div className='login-popup-title'>
                <h2>{currState}</h2>
                <CloseIcon onClick={()=>setShowLogin(false)} style={{cursor:'pointer'}}/>
            </div>
            <div className='login-popup-inputs'>
                {currState==="Login"
                ?<></>
                :<input type='text' placeholder='your name' required />
                }
                <input type='email' placeholder='your email' required />
                <input type='password' placeholder='password' required />
            </div>
            <button>{currState==="Sign Up" ? "Create Account" : "Login"}</button>
            <div className='login-popup-condition'>
                <input type='checkbox' required/>
                <p>By continuing i agree to the terms and conditions</p>
            </div>
            {currState==="Login"
            ?<p>Create a new Account ? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
            :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>           
            }
        </form>
    </div>
  )
}

export default LoginPopup