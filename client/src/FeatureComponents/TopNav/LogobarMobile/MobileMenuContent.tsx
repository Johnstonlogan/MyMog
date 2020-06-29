import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import "../../../styling/LogoBar.scss";

export const MobileMenuContent = () => {
  return (
    <div className="logobar-mobile__menu">
      <Link to="/sign-up">
        <span className="logobar-mobile__menu__item" title="Sign up">
          <Icon name="signup" className="logobar-mobile__menu__icon" />
          Sign up
        </span>
      </Link>
      <Link to="/login">
        <span className="logobar-mobile__menu__item" title="Login">
          <Icon name="sign-in" className="logobar-mobile__menu__icon" />
          Login
        </span>
      </Link>
      <Link to="/feedback">
        <span className="logobar-mobile__menu__item" title="Feedback">
          <Icon name="envelope" className="logobar-mobile__menu__icon" />
          Feedback
        </span>
      </Link>
    </div>
  );
};
