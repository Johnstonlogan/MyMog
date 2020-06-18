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
        <div className="login__container">
          <div className="login__container__logo">
            <Link to="home">
              <img alt="Mog-logo" className="login__logo" src={MogLogo} />
            </Link>
          </div>
          <Form className="form">
            <h1 className="form__header">Welcome Back</h1>
            <Form.Field>
              <label>Email:</label>
              <input name="email" type="text" onChange={handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Password:</label>
              <input name="password" type="password" onChange={handleChange} />
            </Form.Field>
            <Link to="login/forgot" className="form__link">
              Forgot Your Password?
            </Link>

            <div>
              <Button className="form__button" primary onClick={handleSubmit}>
                Login
              </Button>
              <hr />
              <div>
                <div className="form__signup">
                  <p>Need an account?</p>
                  <Link className="form__link" to="sign-up">
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
