import React from "react";
import { LayoutClass } from "../resources/LayoutClass";

interface Props {
  padding?: number | string;
  margin?: number | string;
  flex?: boolean;
  flexDirection?: string;
  x?: string;
  y?: string;
  width?: string;
  height?: string | number;
  justify?: string;
  align?: string;
  styleClass?: string;
  key?: number;
}

export const StyledLayout: React.FunctionComponent<Props> = (props) => {
  let classArr = LayoutClass(props);
  let style = classArr.join().replace(/,/g, " ");
  style = style + " " + props.styleClass;
  return (
    <div className={style} key={props.key}>
      {props.children}
    </div>
  );
};
