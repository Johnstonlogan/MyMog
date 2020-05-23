import React, {  useContext } from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import MogLogo from "../images/mog.svg";
import { authUser } from "../resources/userContext";
import "../styling/LogoBar.scss";
import { AvatarDropdown } from "./AvatarDropdown";

interface Props{
  setUser: any
}

export const LogoBar = (props: Props) => {
  const loggedIn = localStorage.getItem("loggedIn");
  const user = useContext(authUser)
 
  return (
    <div className="logobar">
      <div className="logobar-container">
        <div className="logobar-left">
          <img className="logobar-logo" alt="Mog-logo" src={MogLogo} />
        </div>
        <div className="logobar-right">
          {loggedIn === "false" || loggedIn === null  ? (
            // if not logged in show login/sign up buttons
            <React.Fragment>
              <Link to="/login">
                <Button className="logobar-login">Login</Button>
              </Link>
              <Link to="/sign-up">
                <Button className="logobar-signup" primary>
                  Sign Up
                </Button>
              </Link>
            </React.Fragment>
          ) : (
            // if logged in show username/avatar(once avatar is added)
            <React.Fragment>
             
                  <div className="logobar-user">
                    <p>{user}</p>
                    <AvatarDropdown setUser={props.setUser} />
                  </div>
                
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};
