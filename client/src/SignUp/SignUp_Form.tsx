import React from "react";
import{ useForm }from "./useForm"
import { createUser } from "../server";

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
    <div className="signUp_Form">
      <form>
        <label>
          First name:
          <input name="fName" type="text" onChange={handleChange} />
        </label>
        <br />
        <label>
          Last name:
          <input name="lName" type="text" onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input name="email" type="email" onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input name="password" type="password" onChange={handleChange} />
        </label>
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}