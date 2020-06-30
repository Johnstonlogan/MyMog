import React from "react";
import "../styling/BgContainer.scss";

interface Props {
  image: string;
}

export const BgImageContainer: React.FunctionComponent<Props> = (props) => {
  return (
    <div
      className="bg-image-full"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      {props.children}
    </div>
  );
};
