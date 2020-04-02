import React from 'react'
import {Button, Form } from 'semantic-ui-react'
import{ useForm }from "./useForm"
import {Link} from "react-router-dom"
import {login} from "../server"
import "../styling/LoginStyle.scss"
import MogLogo from "../images/mog.svg"

interface User{
    email: string;
    password: string;
}
interface Props{
    values: User,
    handleError: void;
}

export const Login: React.FC<Props> = (props) =>{

  // user login passing values ={email, password} error handling function
const userLogin = (): any => {
   login(values, props.handleError)

      }


const{values, handleSubmit, handleChange} = useForm(userLogin);

      return(
        <div className="login">
        
        <div className="login-container">
        <div className="login-logo-container">
          <img alt="Mog-logo" className="login-logo" src={MogLogo} />
          </div>
        <Form>
        <h1 className="login-header">Welcome Back</h1>
          <Form.Field>
          <label className="login-label">
            Email:
            </label>
            <input name="email" type="text" onChange={handleChange} />
        
         </Form.Field>
         <Form.Field>
          <label className="login-label">
            Password:
            </label>
            <input name="password" type="password" onChange={handleChange} />
          
          </Form.Field>
          <Link to="login/forgot" className="login-link">Forgot Your Password?</Link>
        
        
        <div className="submit-button">
      <Button className="login-button" primary onClick={handleSubmit}>Login</Button>
      <hr />
      <div><p className="login-signup">Need an account?<Link className="login-link" to="sign-up"> Register.</Link></p></div>
         </div>
         
         </Form>
      </div>
      
     
      </div>
      )
}