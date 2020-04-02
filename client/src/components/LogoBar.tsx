import React from 'react'
import {Button } from "semantic-ui-react"
import {Link } from "react-router-dom"
import MogLogo from "../images/mog.svg"
import "../styling/LogoBar.scss"


export const LogoBar = () => {
   return  <div className="logobar">
      <div className="logobar-container">
         <div className="logobar-left">
      <img className="logobar-logo" alt="Mog-logo" src={MogLogo} />
      </div>
         <div className="logobar-right">
         <Link to="/login"><Button className="logobar-login" >Login</Button></Link>
         <Link to="/sign-up"><Button className="logobar-signup"  primary>Sign Up</Button></Link>
         </div>
         </div>
         
    </div>
   
  
}
 