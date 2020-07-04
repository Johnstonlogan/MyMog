import React, { useContext } from "react";
// import { Button } from "semantic-ui-react";
import { Button } from "../../CommonComponents/Button";
import { Link } from "react-router-dom";
import { Logo } from "../../CommonComponents/Logo";
import { authUser } from "../../resources/userContext";
import { LogoBarMobile } from "./LogobarMobile/LogoBarMobile";
import { Icon } from "semantic-ui-react";
import "../../styling/LogoBar.scss";
import { AvatarDropdown } from "./AvatarDropdown";
import { Layout } from "../../CommonComponents/Layout";

interface Props {
  setUser: void;
  width: number;
}

export const LogoBar = (props: Props) => {
  const loggedIn = localStorage.getItem("loggedIn");
  const user = useContext(authUser);

  return (
    <nav className="logobar">
      <Layout
        height="full"
        x="p2"
        y="p.5"
        flex={true}
        flexDirection="row"
        justify="between"
        align="center"
      >
        <Link to="/home">
          <Logo styling="logobar__logo" />
        </Link>

        {props.width >= 768 ? (
          <Layout flex={true} flexDirection="row" align="center">
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
                <Layout margin="x2">
                  <Link to="/login">
                    <Button button="Login" primary={false} />
                  </Link>
                </Layout>

                <Link to="/sign-up">
                  <Button button="Sign up" primary={true} />
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
          </Layout>
        ) : (
          <LogoBarMobile />
        )}
      </Layout>
    </nav>
  );
};
