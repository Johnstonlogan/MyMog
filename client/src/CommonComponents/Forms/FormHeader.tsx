import React from "react";
import "../../styling/Form.scss";

interface Props {
  header: string;
}

export const FormHeader = (props: Props) => {
  return <h1 className="form__header">{props.header}</h1>;
};
