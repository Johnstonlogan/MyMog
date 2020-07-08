import React from "react";
import { Link } from "react-router-dom";
import { Text } from "../Text";
import { Layout } from "../Layout";
import { IconButton } from "../IconButton";

interface Props {
  click: () => void;
  text: string;
  icon: string;
}

export const MenuItemButton = (props: Props) => {
  return (
    <IconButton click={props.click}>
      <Layout
        flex={true}
        flexDirection="row"
        x={"p1"}
        y={"p1"}
        justify="between"
        width="full"
      >
        <Text styleClass="drop-menu__item__text">
          {props.text}
          <i className={props.icon}></i>
        </Text>
      </Layout>
    </IconButton>
  );
};
