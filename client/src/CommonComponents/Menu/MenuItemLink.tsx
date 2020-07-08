import React from "react";
import { Link } from "react-router-dom";
import { Text } from "../Text";
import { Layout } from "../Layout";

interface Props {
  to: string;
  text: string;
  icon: string;
}

export const MenuItemLink = (props: Props) => {
  return (
    <Link to={props.to}>
      <Layout
        flex={true}
        flexDirection="row"
        x={"p1"}
        y={"p1"}
        justify="between"
      >
        <Text styleClass="drop-menu__item__text">
          {props.text}
          <i className={props.icon}></i>{" "}
        </Text>
      </Layout>
    </Link>
  );
};
