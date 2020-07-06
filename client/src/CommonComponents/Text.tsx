import React from "react";

interface Props {
  styleClass: string;
}

export const Text: React.FunctionComponent<Props> = (props) => {
  return <p className={props.styleClass}>{props.children}</p>;
};
