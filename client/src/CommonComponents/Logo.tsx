import React from "react";
import MogLogo from "../images/mog.svg";

interface Props {
  styling: string;
}
export const Logo = (props: Props) => {
  return <img className={props.styling} alt="Mog-logo" src={MogLogo} />;
};
