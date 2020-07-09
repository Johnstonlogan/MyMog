import React from "react";
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
        padding={0.5}
        flex={true}
        flexDirection="row"
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
