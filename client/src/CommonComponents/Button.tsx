import React from "react";
import "../styling/Button.scss";

interface Props {
  primary: boolean;
  button: string;
  click?: () => void;
}

export const Button = (props: Props) => {
  let buttonClass;
  if (props.primary) {
    buttonClass = "my-btn-primary";
  } else {
    buttonClass = "my-btn";
  }
  return (
    <button className={buttonClass} onClick={props.click}>
      {props.button}
    </button>
  );
};
