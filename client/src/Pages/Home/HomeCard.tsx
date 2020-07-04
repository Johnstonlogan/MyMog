import React from "react";
import { Button } from "../../CommonComponents/Button";
import { Link } from "react-router-dom";
import { FormHeader } from "../../CommonComponents/Forms/FormHeader";
import { Layout } from "../../CommonComponents/Layout";
import "../../styling/HomePageStyle.scss";
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
      <Layout margin="b1">
        <FormHeader header={props.header} />
      </Layout>
      <div
        className="home-card__bg-image"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>

      <Layout
        padding={2}
        flex={true}
        justify="center"
        flexDirection="col"
        height={250}
      >
        {props.content.map((item, i) => {
          return (
            <div className="home-card__content__items" key={i}>
              <i className={item.icon}></i>
              <div className="home-card__content__text" key={i}>
                {item.text}
              </div>
            </div>
          );
        })}
      </Layout>

      <Layout padding={1} width="full" justify="center" flex={true}>
        <Link to={props.link}>
          <Button primary={true} button={props.button} />
        </Link>
      </Layout>
    </div>
  );
};
