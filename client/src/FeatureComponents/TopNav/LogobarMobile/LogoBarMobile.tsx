import React, { useState } from "react";
import { Icon } from "semantic-ui-react";
import { MobileMenuContent } from "./MobileMenuContent";
import "../../../styling/LogoBar.scss";

export const LogoBarMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <Icon
        name="bars"
        size="large"
        className="logobar-mobile"
        onClick={() => setMenuOpen(!menuOpen)}
      />
      {menuOpen ? <MobileMenuContent /> : null}
    </div>
  );
};
