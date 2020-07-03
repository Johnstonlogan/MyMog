import React from "react";

interface Props {
  text: string;
}

export const FormReroute: React.FunctionComponent<Props> = (props) => {
  return (
    <div className="form__reroute">
      <p>{props.text}</p>
      {props.children}
    </div>
  );
};
