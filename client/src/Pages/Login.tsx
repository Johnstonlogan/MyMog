import React, { useState } from "react";
import { useForm } from "../resources/useForm";
import { login } from "../services/loginServices";
import { Redirect } from "react-router-dom";
import {
  FormInput,
  FormContent,
  FormHeader,
  FormContainer,
  FormLink,
  FormButton,
  FormReroute,
} from "../CommonComponents/Forms/Form";
import background from "../images/Test-background.jpg";
import { BgImageContainer } from "../FeatureComponents/BgImageContainer";
import { CopyRight } from "../FeatureComponents/CopyRight";
import { Layout } from "../CommonComponents/Layout";

interface User {
  email: string;
  password: string;
}
interface Props {
  values: User;
  handleError: void;
  setUser: () => void;
}

export const Login = (props: Props) => {
  const userLogin = (): void => {
    login(values, props.handleError, props.setUser, setToHome);
  };

  const { values, handleSubmit, handleChange } = useForm(userLogin);
  const [toHome, setToHome] = useState(false);

  return (
    <BgImageContainer image={background}>
      {toHome ? <Redirect to="/home" /> : null}
      <FormContainer logo={true}>
        <Layout padding={2} height="full" flex={true} flexDirection="col">
          <FormHeader header="Welcome back" />

          <FormContent>
            <FormInput
              label="Email"
              name="email"
              type="email"
              change={handleChange}
            />
            <FormInput
              label="Password"
              name="password"
              type="password"
              change={handleChange}
            />
            <FormLink to="login/forgot" link=" Forgot Your Password?" />
            <Layout margin="y1">
              <FormButton submit={handleSubmit} button="Login" />
            </Layout>
            <hr />
            <FormReroute text="Need an account?">
              <FormLink to="sign-up" link="Register" />
            </FormReroute>
          </FormContent>
        </Layout>
      </FormContainer>
      <CopyRight />
    </BgImageContainer>
  );
};
