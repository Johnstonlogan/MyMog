import React from 'react'
import {Button, Form } from 'semantic-ui-react'
import{ useForm }from "./useForm"
import {Link} from "react-router-dom"
import "../styling/LoginStyle.scss"

interface User{
    email: string;
    password: string;
}
interface Props{
    values: User
}

export const Login: React.FC<Props> = () =>{
    const login = (): any => {
        
      }


      const{values, handleSubmit, handleChange} = useForm(login);


 
      return(
        <div className="login">
        <div className="login-container">
          
        <Form>
        <h1>Welcome Back</h1>
          <Form.Field>
          <label>
            Email:
            </label>
            <input name="email" type="text" onChange={handleChange} />
        
         </Form.Field>
         <Form.Field>
          <label>
            Password:
            </label>
            <input name="password" type="password" onChange={handleChange} />
          
          </Form.Field>
          <Link to="login/forgot">Forgot Your Password?</Link>
        
        </Form>
        <div className="submit-button">
      <Button primary onClick={handleSubmit}>Login</Button>
      <div><p>Need an account?<Link to="sign-up"> Register.</Link></p></div>
         </div>
         
          
      </div>
      
     
      </div>
      )
}