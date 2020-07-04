import React from "react";
import { useForm } from "../resources/useForm";
import { createUser } from "../services/userServices";
import {
  FormInput,
  FormContent,
  FormHeader,
  FormContainer,
  FormLink,
  FormButton,
  FormReroute,
} from "../CommonComponents/Forms/Form";
import backgroud from "../images/WoWScrnShot_011220_005800.jpg";
import { BgImageContainer } from "../FeatureComponents/BgImageContainer";
import { CopyRight } from "../FeatureComponents/CopyRight";
import { Layout } from "../CommonComponents/Layout";

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
    <BgImageContainer image={backgroud}>
      <FormContainer logo={true}>
        <Layout x="p2" y="p1">
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
            <Layout margin="y1">
              <FormButton submit={handleSubmit} button="Create Account" />
            </Layout>
            <hr />
            <Layout margin={"t1"} padding="y1">
              <FormReroute text="Already have an account?">
                <FormLink to="/login" link="Login" />
              </FormReroute>
            </Layout>
          </FormContent>
        </Layout>
      </FormContainer>
      <CopyRight />
    </BgImageContainer>
  );
};
