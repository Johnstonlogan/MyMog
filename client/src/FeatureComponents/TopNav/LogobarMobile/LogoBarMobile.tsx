import React, { useState } from "react";
import { Icon } from "semantic-ui-react";
import { MobileMenuContent } from "./MobileMenuContent";
import "../../../styling/LogoBar.scss";
import { IconButton } from "../../../CommonComponents/IconButton";

export const LogoBarMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <IconButton click={() => setMenuOpen(!menuOpen)}>
        <Icon name="bars" size="large" />
      </IconButton>
      {menuOpen ? <MobileMenuContent /> : null}
    </div>
  );
};
