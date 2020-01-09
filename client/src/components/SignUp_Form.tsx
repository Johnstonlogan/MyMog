import React from "react";
import{ useForm }from "./useForm"
import { createUser } from "../server";
import {Button, Form } from 'semantic-ui-react'



interface User{
  fName: string;
  lName: string;
  email: string;
  password: string;
}
interface Props{
  values: User;

}

export const SignUp_Form:  React.FC<Props> = () => {

  const createNewUser = (): any => {
    createUser(values)  
  }
 
  const { values, handleSubmit, handleChange } = useForm(createNewUser);

  

  return (
    <div>
      <Form>
        <Form.Field>
        <label>
          First name:
          <input name="fName" type="text" onChange={handleChange} />
        </label>
       </Form.Field>
       <Form.Field>
        <label>
          Last name:
          <input name="lName" type="text" onChange={handleChange} />
        </label>
        </Form.Field>
        <Form.Field>
        <label>
          Email:
          <input name="email" type="email" onChange={handleChange} />
        </label>
        </Form.Field>
        <Form.Field>
        <label>
          Password:
          <input name="password" type="password" onChange={handleChange} />
        </label>
        </Form.Field>
    
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </div>
  );
}