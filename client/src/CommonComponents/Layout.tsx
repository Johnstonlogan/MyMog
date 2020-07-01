import React, { useEffect } from "react";
import "../styling/Layout.scss";

interface Props {
  padding?: number | string;
  margin?: number;
  flex?: boolean;
}
// for padding all around send padding={NUMBER} must be a number 1,2 or 0.5
// for padding on x or y axis send padding={"x1"} x1, x2,x.5 and y1, y2,y.5
export const Layout: React.FunctionComponent<Props> = (props) => {
  let layout = document.getElementsByClassName("layout");

  useEffect(() => {
    switch (props.padding) {
      case 1:
        layout[0].classList.add("pad-1");
        break;
      case 2:
        layout[0].classList.add("pad-2");
        break;
      case 0.5:
        layout[0].classList.add("pad-05");
        break;
      case "x1":
        layout[0].classList.add("pad-x-1");
        break;
      case "x2":
        layout[0].classList.add("pad-x-2");
        break;
      case "x.5":
        layout[0].classList.add("pad-x-05");
        break;
      case "y1":
        layout[0].classList.add("pad-y-1");
        break;
      case "y2":
        layout[0].classList.add("pad-y-2");
        break;
      case "y.5":
        layout[0].classList.add("pad-y-05");
        break;
    }
    switch (props.margin) {
      case 1:
        layout[0].classList.add("mar-1");
        break;
      case 2:
        layout[0].classList.add("mar-2");
        break;
      case 0.5:
        layout[0].classList.add("mar-05");
        break;
    }
  }, [props]);
  return <div className="layout">{props.children}</div>;
};
