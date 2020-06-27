import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styling/LogoBar.scss";

export const LogoBarMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <i
        className="bars icon large logobar-mobile"
        onClick={() => setMenuOpen(!menuOpen)}
      ></i>
      {menuOpen ? (
        <div className="logobar-mobile__menu">
          <Link to="/sign-up">
            <span className="logobar-mobile__menu__item" title="Sign up">
              <i className="signup icon logobar-mobile__menu__icon"></i>Sign up
            </span>
          </Link>
          <Link to="/login">
            <span className="logobar-mobile__menu__item" title="Login">
              <i className="sign-in icon logobar-mobile__menu__icon "></i>Login
            </span>
          </Link>
          <Link to="/feedback">
            <span className="logobar-mobile__menu__item" title="Feedback">
              <i className="envelope icon logobar-mobile__menu__icon"></i>
              Feedback
            </span>
          </Link>
        </div>
      ) : null}
    </div>
  );
};
