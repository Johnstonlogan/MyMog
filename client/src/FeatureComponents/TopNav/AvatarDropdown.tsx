import React, { useState } from "react";
import defaultAvatar from "../../images/default-avatar.png";

import { IconButton } from "../../CommonComponents/IconButton";
import { MenuItemButton } from "../../CommonComponents/Menu/MenuItemButton";
import { DropMenu } from "../../CommonComponents/Menu/DropMenu";
import { MenuItemLink } from "../../CommonComponents/Menu/MenuItemLink";

interface Props {
  setUser: any;
}

export const AvatarDropdown = (props: Props) => {
  const [open, setOpen] = useState(false);
  const logout = () => {
    localStorage.removeItem("uId");
    localStorage.removeItem("loggedIn");
    props.setUser({});
  };
  return (
    <React.Fragment>
      <IconButton click={() => setOpen(!open)}>
        <img
          className="logobar__avatar"
          alt="user avatar"
          src={defaultAvatar}
        />
      </IconButton>
      {open ? (
        <DropMenu top={61} right={5}>
          <MenuItemLink text="Feedback" icon="envelope icon" to="/feedback" />
          <MenuItemButton
            icon="sign out alternate icon"
            text="Logout"
            click={() => logout()}
          />
        </DropMenu>
      ) : null}
    </React.Fragment>
  );
};
