import React, { FunctionComponent } from "react";
import { Logo } from "../Logo";
import { Link } from "react-router-dom";
import "../../styling/Form.scss";
interface Props {
  logo: Boolean;
}
export const FormContainer: FunctionComponent<Props> = (props) => {
  return (
    <div className="form__container">
      {props.logo ? (
        <Link to="home">
          <Logo styling="form__logo" />
        </Link>
      ) : null}
      {props.children}
    </div>
  );
};
