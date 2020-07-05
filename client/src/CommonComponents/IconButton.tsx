import React from "react";

interface Props {
  click: () => void;
}

export const IconButton: React.FunctionComponent<Props> = (props) => {
  return (
    <button className="my-btn-icon" onClick={props.click}>
      {props.children}
    </button>
  );
};
