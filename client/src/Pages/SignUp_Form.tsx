import React from "react";
import { useForm } from "../resources/useForm";
import { createUser } from "../services/userServices";
import "../styling/SignUpStyle.scss";
import {
  FormInput,
  FormContent,
  FormHeader,
  FormContainer,
  FormLink,
  FormButton,
  FormReroute,
} from "../CommonComponents/Forms/Form";
import { CopyRight } from "../FeatureComponents/CopyRight";

interface User {
  username: string;
  email: string;
  password: string;
}
interface Props {
  values: User;
  handleError: void;
}

export const SignUp_Form = (props: Props) => {
  const createNewUser = (): void => {
    createUser(values, props.handleError);
  };

  let { values, handleSubmit, handleChange } = useForm(createNewUser);

  return (
    <div className="register">
      <FormContainer logo={true}>
        <FormContent>
          <FormHeader header="Create An Account" />
          <FormInput
            label="Username"
            name="username"
            type="text"
            change={handleChange}
          />
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
          <FormButton submit={handleSubmit} button="Create Account" />
          <hr />
          <FormReroute text="Already have an account?">
            <FormLink to="/login" link="Login" />
          </FormReroute>
        </FormContent>
      </FormContainer>
      <CopyRight />
    </div>
  );
};