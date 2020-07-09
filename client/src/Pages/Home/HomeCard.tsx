import React from "react";
import { Button } from "../../CommonComponents/Button";
import { Link } from "react-router-dom";
import { FormHeader } from "../../CommonComponents/Forms/FormHeader";
import { Layout } from "../../CommonComponents/Layout";
import "../../styling/HomePageStyle.scss";
import { StyledLayout } from "../../CommonComponents/StyledLayout";
import { Text } from "../../CommonComponents/Text";
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
    <StyledLayout
      styleClass="home-card"
      x="p2"
      y="p1"
      flex={true}
      flexDirection="col"
      justify="between"
    >
      <Layout margin={1}>
        <FormHeader header={props.header} />
      </Layout>
      <Layout width="full" justify="center" flex={true}>
        <img
          className="home-card__bg-image"
          src={props.image}
          alt={props.header}
        />
      </Layout>

      <Layout padding={2} flex={true} justify="between" flexDirection="col">
        {props.content.map((item, i) => {
          return (
            <Layout
              key={i}
              padding={"y2"}
              flex={true}
              flexDirection="row"
              align="center"
              justify="center"
            >
              <i className={item.icon + " home-card__content__icon"}></i>
              <Text styleClass="home-card__content__text">{item.text}</Text>
            </Layout>
          );
        })}
      </Layout>

      <Layout width="full" justify="center" flex={true}>
        <Link to={props.link}>
          <Button primary={true} button={props.button} />
        </Link>
      </Layout>
    </StyledLayout>
  );
};
