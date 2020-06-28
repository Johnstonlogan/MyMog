import React, { FunctionComponent } from "react";
import "../../styling/Form.scss";

export const FormContent: FunctionComponent = (props) => {
  return <form className="form__content">{props.children}</form>;
};
