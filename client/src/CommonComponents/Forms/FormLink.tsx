import React from "react";
import { Link } from "react-router-dom";
interface Props {
  link: string;
  to: string;
}
export const FormLink = (props: Props) => {
  return (
    <Link className="form__link" to={props.to}>
      {props.link}.
    </Link>
  );
};
