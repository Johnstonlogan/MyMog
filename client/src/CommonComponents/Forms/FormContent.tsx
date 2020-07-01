import React, { FunctionComponent } from "react";
import "../../styling/Form.scss";

export const FormContent: FunctionComponent = (props) => {
  return <form>{props.children}</form>;
};
