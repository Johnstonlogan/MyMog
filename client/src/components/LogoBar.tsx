import React from 'react'
import {Button, Container} from "semantic-ui-react"
import {Link } from "react-router-dom"

import "../styling/LogoBar.scss"


export const LogoBar = () => {
   return  <div className="logobar">
      <div className="logobar-container">
         
         
         <div className="logobar-right">
         <Link to="/login"><Button className="logobar-login" >Login</Button></Link>
         <Link to="/sign-up"><Button className="logobar-signup"  primary>Sign Up</Button></Link>
         </div>
         </div>
         
    </div>
   
  
}
 