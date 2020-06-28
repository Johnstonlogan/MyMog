import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { useForm } from "./useForm";
import { login } from "../services/loginServices";
import { Link } from "react-router-dom";
import "../styling/LoginStyle.scss";
import { Redirect } from "react-router-dom";
import { FormContainer } from "../CommonComponents/Forms/FormContainer";
import { FormHeader } from "../CommonComponents/Forms/FormHeader";
import { FormContent } from "../CommonComponents/Forms/FormContent";
import { FormInput } from "../CommonComponents/Forms/FormInput";

interface User {
  email: string;
  password: string;
}
interface Props {
  values: User;
  handleError: void;
  setUser: void;
}

export const Login = (props: Props) => {
  const userLogin = (): void => {
    login(values, props.handleError, props.setUser, setToHome);
  };

  const { values, handleSubmit, handleChange } = useForm(userLogin);
  const [toHome, setToHome] = useState(false);

  return (
    <div>
      {toHome ? <Redirect to="/home" /> : null}
      <div className="login">
        <FormContainer logo={true}>
          <FormHeader header="Welcome back" />
          <FormContent>
            <FormInput
              label="Email"
              name="email"
              type="text"
              change={handleChange}
            />
            <FormInput
              label="Password"
              name="password"
              type="password"
              change={handleChange}
            />

            <Link to="login/forgot" className="form__link">
              Forgot Your Password?
            </Link>

            <Button className="form__button" primary onClick={handleSubmit}>
              Login
            </Button>
            <hr />
            <div className="form__signup">
              <p>Need an account?</p>
              <Link className="form__link" to="sign-up">
                Register.
              </Link>
            </div>
          </FormContent>
        </FormContainer>
        <div className="copyright">
          ©2004 Blizzard Entertainment, Inc. All rights reserved. World of
          Warcraft, Warcraft and Blizzard Entertainment are trademarks or
          registered trademarks of Blizzard Entertainment, Inc. in the U.S.
          and/or other countries.
        </div>
      </div>
    </div>
  );
};
