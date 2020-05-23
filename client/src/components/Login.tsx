import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { useForm } from "./useForm";
import { Link } from "react-router-dom";
import { login } from "../services/loginServices";
import "../styling/LoginStyle.scss";
import { Redirect } from "react-router-dom";
import MogLogo from "../images/mog.svg";

interface User {
  email: string;
  password: string;
}
interface Props {
  values: User;
  handleError: void;
  setUser: void;
}

export const Login: React.FC<Props> = (props) => {
  // user login passing values ={email, password} error handling function
  const userLogin = (): any => {
    login(values, props.handleError, props.setUser, setToHome);
  };

  const { values, handleSubmit, handleChange } = useForm(userLogin);
  const [toHome, setToHome] = useState(false);

  return (
    <div>
      {toHome ? <Redirect to="/home" /> : null}
      <div className="login">
        <div className="login-container">
          <div className="login-logo-container">
            <Link to="home">
              <img alt="Mog-logo" className="login-logo" src={MogLogo} />
            </Link>
          </div>
          <Form>
            <h1 className="login-header">Welcome Back</h1>
            <Form.Field>
              <label className="login-label">Email:</label>
              <input name="email" type="text" onChange={handleChange} />
            </Form.Field>
            <Form.Field>
              <label className="login-label">Password:</label>
              <input name="password" type="password" onChange={handleChange} />
            </Form.Field>
            <Link to="login/forgot" className="login-link">
              Forgot Your Password?
            </Link>

            <div className="submit-button">
              <Button className="login-button" primary onClick={handleSubmit}>
                Login
              </Button>
              <hr />
              <div>
                <div className="login-signup">
                  <p>Need an account?</p>
                  <Link className="login-link" to="sign-up">
                    Register.
                  </Link>
                </div>
              </div>
            </div>
          </Form>
        </div>
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
