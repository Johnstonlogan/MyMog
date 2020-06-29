import React, { useContext } from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Logo } from "../../CommonComponents/Logo";
import { authUser } from "../../resources/userContext";
import { LogoBarMobile } from "./LogobarMobile/LogoBarMobile";
import { Icon } from "semantic-ui-react";
import "../../styling/LogoBar.scss";
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
          <Logo styling="logobar__logo" />
        </Link>

        {props.width >= 768 ? (
          <div>
            {loggedIn === "false" || loggedIn === null ? (
              // if not logged in show login/sign up buttons

              <React.Fragment>
                <Link to="/feedback">
                  <Icon
                    name="envelope"
                    size="large"
                    className="feedback-icon"
                  />
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
