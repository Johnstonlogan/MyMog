import React from "react";
import { useForm } from "./useForm";
import { createUser } from "../services/userServices";
import "../styling/SignUpStyle.scss";
import { Link } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";
import { Logo } from "../CommonComponents/Logo";

interface User {
  username: string;
  email: string;
  password: string;
}
interface Props {
  values: User;
  handleError: void;
}

export const SignUp_Form: React.FC<Props> = (props) => {
  // create a new user, props.handleError is for any error messages and will be located
  // at app.js level
  const createNewUser = (): any => {
    createUser(values, props.handleError);
  };

  let { values, handleSubmit, handleChange } = useForm(createNewUser);

  return (
    <div className="register">
      <div className="register__container">
        <div className="register__logo">
          <Link to="home">
            <Logo styling="register__logo__image" />
          </Link>
        </div>
        <Form>
          <h1 className="register__header">Create An Account</h1>
          <Form.Field>
            <label>Username:</label>
            <input name="username" type="text" onChange={handleChange} />
          </Form.Field>

          <Form.Field>
            <label>Email:</label>
            <input name="email" type="email" onChange={handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Password:</label>
            <input name="password" type="password" onChange={handleChange} />
          </Form.Field>

          <Button className="register__button" primary onClick={handleSubmit}>
            Create Account
          </Button>
          <hr />
          <div>
            <p className="register__reroute">
              Already have an account?{" "}
              <Link className="register__link" to="/login">
                Login.
              </Link>
            </p>
          </div>
        </Form>
      </div>
      <div className="copyright">
        ©2004 Blizzard Entertainment, Inc. All rights reserved. World of
        Warcraft, Warcraft and Blizzard Entertainment are trademarks or
        registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or
        other countries.
      </div>
    </div>
  );
};
