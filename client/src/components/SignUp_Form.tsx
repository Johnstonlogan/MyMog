import React from "react";
import { useForm } from "./useForm";
import { createUser } from "../services/userServices";
import "../styling/SignUpStyle.scss";
import { Button } from "semantic-ui-react";
import { FormLink } from "../CommonComponents/Forms/FormLink";
import { FormContainer } from "../CommonComponents/Forms/FormContainer";
import { FormHeader } from "../CommonComponents/Forms/FormHeader";
import { FormContent } from "../CommonComponents/Forms/FormContent";
import { FormInput } from "../CommonComponents/Forms/FormInput";
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
  // create a new user, props.handleError is for any error messages and will be located
  // at app.js level
  const createNewUser = (): any => {
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

          <Button className="register__button" primary onClick={handleSubmit}>
            Create Account
          </Button>
          <hr />
          <div>
            <p className="register__reroute">
              Already have an account? <FormLink to="/login" link="Login" />
            </p>
          </div>
        </FormContent>
      </FormContainer>
      <CopyRight />
    </div>
  );
};
