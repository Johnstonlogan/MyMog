import React from "react";
import{ useForm }from "./useForm"
import { createUser } from "../server";
import "../styling/SignUpStyle.scss"
import {Link} from "react-router-dom"
import {Button, Form, Message } from 'semantic-ui-react'



interface User{
  username: string;
  email: string;
  password: string;
}
interface Props{
  values: User;
  handleError: void;
  
 
}


export const SignUp_Form:  React.FC<Props> = (props) => {

  const createNewUser = (): any => {
    createUser(values, props.handleError) 
    
  }
  
  let { values, handleSubmit, handleChange } = useForm(createNewUser);

  

  return (
    <div className="signup">
     
      <div className="signup-container">
      <Form>
      <h1 className="signup-header">Create An Account</h1>
        <Form.Field>
        <label className="signup-label">
          Username:
          </label>
          <input name="username" type="text" onChange={handleChange} />
        
       </Form.Field>
      
        <Form.Field>
        <label className="signup-label">
          Email:
          </label>
          <input name="email" type="email" onChange={handleChange} />
     
        </Form.Field>
        <Form.Field>
        <label className="signup-label">
          Password:
          </label>
          <input name="password" type="password" onChange={handleChange} />
       
        </Form.Field>
    
        <Button className="signup-button" primary onClick={handleSubmit}>Create Account</Button>
        <hr />
        <div >
          <p className="signup-login">Already have an account? <Link className="signupForm-link" to="/login">Login.</Link></p>
        </div>
      </Form>
      </div>
    </div>
  );
}
