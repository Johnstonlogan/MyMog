import React from "react";
import { LayoutClass } from "../resources/LayoutClass";
import "../styling/Layout.scss";

interface Props {
  padding?: number | string;
  margin?: number | string;
  flex?: boolean;
  flexDirection?: string;
  x?: string;
  y?: string;
  width?: string;
  height?: string;
  justify?: string;
  align?: string;
}
// for padding all around send padding={NUMBER} must be a number 1,2 or 0.5
// for padding on x or y axis send padding={"x1"} x1, x2,x.5 and y1, y2,y.5
// for margin all around send margin={NUMBER} must be a number 1,2 or 0.5
// for margin on x or y axis send margin={"x1"} x1, x2,x.5 and y1, y2,y.5
// for flex send flex={true} flexDirection={"col"} flexDirection={"row"}
// for full 100% width = "full"
// for justify "center", "between", "evenly", and "around"
export const Layout: React.FunctionComponent<Props> = (props) => {
  let classArr = LayoutClass(props);
  let style = classArr.join().replace(/,/g, " ");

  return <div className={style}>{props.children}</div>;
};
