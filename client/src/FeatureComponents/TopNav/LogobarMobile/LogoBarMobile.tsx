import React, { useState } from "react";
import { Icon } from "semantic-ui-react";
import "../../../styling/LogoBar.scss";
import { IconButton } from "../../../CommonComponents/IconButton";
import { DropMenu } from "../../../CommonComponents/Menu/DropMenu";
import { MenuItemLink } from "../../../CommonComponents/Menu/MenuItemLink";

export const LogoBarMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <React.Fragment>
      <IconButton click={() => setMenuOpen(!menuOpen)}>
        <Icon name="bars" size="large" />
      </IconButton>
      {menuOpen ? (
        <DropMenu top={61} right={5}>
          <MenuItemLink text="Sign Up" to="/sign-up" icon="signup icon" />
          <MenuItemLink text="Login" to="/login" icon="sign-in icon" />
          <MenuItemLink text="Feedback" to="/feedback" icon="envelope icon" />
        </DropMenu>
      ) : null}
    </React.Fragment>
  );
};
