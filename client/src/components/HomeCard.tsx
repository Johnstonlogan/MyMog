import React from "react";
import { Button } from "semantic-ui-react";
import "../styling/HomePageStyle.scss";

interface Props {
header: string;
content: string;
button: string;
}

export const HomeCard = (props: Props) => {
  return (
    <div className="home-card">
      <h1>{props.header}</h1>
      <p>
        {props.content}
      </p>
      <div className="home-card-button">
        <Button primary>{props.button}</Button>
      </div>
    </div>
  );
};
