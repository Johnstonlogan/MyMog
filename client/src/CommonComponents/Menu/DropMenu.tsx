import React from "react";
import "../../styling/DropMenu.scss";

interface Props {
  top?: number;
  right?: number;
  left?: number;
  bottom?: number;
}
export const DropMenu: React.FunctionComponent<Props> = (props) => {
  let style = {
    top: `${props.top}px`,
    bottom: `${props.bottom}px `,
    right: `${props.right}px `,
    left: `${props.left}px `,
  };

  return (
    <div style={style} className="drop-menu">
      {props.children}
    </div>
  );
};
