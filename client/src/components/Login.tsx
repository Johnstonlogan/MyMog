import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import { useForm } from "./useForm";
import { login } from "../services/loginServices";
import "../styling/LoginStyle.scss";
import { Redirect } from "react-router-dom";
import { FormLink } from "../CommonComponents/Forms/FormLink";
import { FormContainer } from "../CommonComponents/Forms/FormContainer";
import { FormHeader } from "../CommonComponents/Forms/FormHeader";
import { FormContent } from "../CommonComponents/Forms/FormContent";
import { FormInput } from "../CommonComponents/Forms/FormInput";
import { CopyRight } from "../FeatureComponents/CopyRight";

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
            <FormLink to="login/forgot" link=" Forgot Your Password?" />
            <Button className="form__button" primary onClick={handleSubmit}>
              Login
            </Button>
            <hr />
            <div className="form__signup">
              <p>Need an account?</p>
              <FormLink to="sign-up" link="Register" />
            </div>
          </FormContent>
        </FormContainer>
        <CopyRight />
      </div>
    </div>
  );
};
