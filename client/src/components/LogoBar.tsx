import React, { useContext } from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import MogLogo from "../images/mog.svg";
import { authUser } from "../resources/userContext";
import { LogoBarMobile } from "./LogoBarMobile";
import "../styling/LogoBar.scss";
import { AvatarDropdown } from "./AvatarDropdown";

interface Props {
  setUser: void;
  width: number;
}

export const LogoBar = (props: Props) => {
  const loggedIn = localStorage.getItem("loggedIn");
  const user = useContext(authUser);

  return (
    <nav className="logobar">
      <div className="logobar__container">
        <Link to="/home">
          <img className="logobar__logo" alt="Mog-logo" src={MogLogo} />
        </Link>

        {props.width >= 768 ? (
          <div>
            {loggedIn === "false" || loggedIn === null ? (
              // if not logged in show login/sign up buttons

              <React.Fragment>
                <Link to="/feedback">
                  <i
                    className="envelope icon large feedback-icon"
                    title="Feedback"
                  ></i>
                </Link>
                <Link to="/login">
                  <Button className="logobar__login">Login</Button>
                </Link>
                <Link to="/sign-up">
                  <Button className="logobar__signup" primary>
                    Sign Up
                  </Button>
                </Link>
              </React.Fragment>
            ) : (
              // if logged in show username/avatar(once avatar is added)
              <React.Fragment>
                <div className="logobar__user">
                  <p>{user}</p>
                  <AvatarDropdown setUser={props.setUser} />
                </div>
              </React.Fragment>
            )}
          </div>
        ) : (
          <LogoBarMobile />
        )}
      </div>
    </nav>
  );
};
