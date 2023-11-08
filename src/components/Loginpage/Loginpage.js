import React, { useState } from "react";
import "./loginpage.css";

import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";

const Loginpage = () => {

    const[action,setAction] =useState ("login")
  return (
  
   <div className="container">
        <div className="Header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        
        <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
              
              <img src={user_icon} alt="" />
              <input type="text" placeholder="Fullname"/>
          </div>}
            

            <div className="input">
                <img src= {email_icon} alt="" />
                <input type="email" placeholder="Email" />
            </div>

            <div className="input">
                <img src= {password_icon} alt="" />
                <input type="password" placeholder="Password" />
            </div>
        </div>
        {action==="Sign Up"?<div></div>: <div className="forgot-password">lost password? <span>clickhere</span></div> }
           
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick ={()=>{setAction("Sign Up")}}>Signup</div>
            <div className={action==="Sign up"?"submit gray":"submit"}onClick ={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
  );
};

export default Loginpage;
