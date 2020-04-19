import React from "react";
import { MenuStyled, MenuLink } from "./Menu.style";

const Menu = () => {
  return (
    <MenuStyled>
      <MenuLink to="/yearly-targets" activeStyle={{ background: "#507192" }}>
        {" "}
        Year targets
      </MenuLink>
      <MenuLink to="/monthly-targets" activeStyle={{ background: "#507192" }}>
        {" "}
        month targets
      </MenuLink>
      <MenuLink to="/weekly-targets" activeStyle={{ background: "#507192" }}>
        {" "}
        week targets
      </MenuLink>
      <MenuLink to="/daily-targets" activeStyle={{ background: "#507192" }}>
        {" "}
        day targets
      </MenuLink>
    </MenuStyled>
  );
};

export default Menu;
