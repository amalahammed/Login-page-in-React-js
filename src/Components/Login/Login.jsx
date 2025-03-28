import React, { useState } from 'react'
import './Login.css'

import person from '../Assets/person.png'
import password from '../Assets/password.png'
import email from '../Assets/email.png'

const Login = () => {
    const [action, setaction] = useState("Login")
    const [showPassword, setShowPassword] = useState(false) 

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Login" ? <div></div> : <div className="input">
                    <img src={person} alt="" />
                    <input type="text" placeholder='Name' />
                </div>}
                
                <div className="input">
                    <img src={email} alt="" />
                    <input type="text" placeholder='Username' />
                </div>
                <div className="input">
                    <img src={password} alt="" />
                    <input 
                        type={showPassword ? "password" : "text"} 
                        placeholder='Password' 
                    />
                    <span 
                        className="material-icons password-toggle" 
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                </div>
            </div>
            {action === "Sign Up" ? <div></div> : <p className="forgot"><a href="#">forgot password?</a></p>}
            {action === "Sign Up" ? <div></div> : <p className="signup">Don't have an accont ?<span onClick={() => { setaction("Sign Up") }}>Sign Up</span></p>}
            {action === "Login" ? <div></div> : <p className="signup">Already have an account ? <span onClick={() => { setaction("Login") }}>LogIn</span></p>}
            {action === "Sign Up" ? <div></div> : <div className="login"><button>LogIn</button></div>}
            {action === "Login" ? <div></div> : <div className="login"><button>Sign Up</button></div>}
                  
            <div className="subcontainer">
                <div className="underline2"></div>
            </div>
        </div>
    )
}

export default Login
