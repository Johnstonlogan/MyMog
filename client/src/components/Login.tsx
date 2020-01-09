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
        <div>
        <Form>
          <Form.Field>
          <label>
            Email:
            <input name="email" type="text" onChange={handleChange} />
          </label>
         </Form.Field>
         <Form.Field>
          <label>
            Password:
            <input name="password" type="password" onChange={handleChange} />
          </label>
          </Form.Field>
          <div>
          <Button onClick={handleSubmit}>Submit</Button>
          <Link className="signup-link" to="/sign-up">Sign Up</Link>
          </div>
        </Form>
      </div>
      )
}