import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../styling/HomePageStyle.scss";
interface Content {
  text: string;
  icon: string;
}
interface Props {
  header: string;
  content: Array<Content>;
  button: string;
  image: string;
  link: string;
}

export const HomeCard = (props: Props) => {
  return (
    <div className="home-card">
      <h1>{props.header}</h1>
      <div
        className="home-card__bg-image"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>

      <div className="home-card__content">
        {props.content.map((item, i) => {
          return (
            <div className="home-card__content__items" key={i}>
              <i className={item.icon}></i>
              <div key={i}>{item.text}</div>
            </div>
          );
        })}
      </div>
      <div className="home-card__button">
        <Link to={props.link}>
          <Button primary>{props.button}</Button>
        </Link>
      </div>
    </div>
  );
};
