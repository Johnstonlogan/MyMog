import React, { useState } from "react";
import defaultAvatar from "../images/default-avatar.png";
import "../styling/AvatarDropdown.scss";

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
    <div>
      <div onClick={() => setOpen(!open)}>
        <img
          className="logobar__avatar"
          alt="user avatar"
          src={defaultAvatar}
        />
      </div>
      {open ? (
        <div className="dropdown-menu">
          <div className="dropdown-menu__logout" onClick={() => logout()}>
            <p>Logout</p> <i className=" sign out alternate icon"></i>
          </div>
        </div>
      ) : null}
    </div>
  );
};
