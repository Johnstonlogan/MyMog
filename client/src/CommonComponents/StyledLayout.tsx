import React from "react";
import { LayoutClass } from "../resources/LayoutClass";

interface Layout {
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
}
interface Props {
  backgroundColor: string;
  borderRadius: number;
  border: boolean;
  layout: Layout;
}

export const StyledLayout: React.FunctionComponent<Props> = (props) => {
  let classArr = LayoutClass(props.layout);
  let style = classArr.join().replace(/,/g, " ");
  return <section className={style}>{props.children}</section>;
};
