import React from "react";
import {
  HeaderStyled,
  Container,
  HeaderTitle,
  HeaderSubtitle,
} from "./headerStyle";

const Header = () => {
  return (
    <div className="header">
      <HeaderStyled>
        <Container>
          <HeaderTitle>Todo App</HeaderTitle>
          <HeaderSubtitle>A new step to organize your life</HeaderSubtitle>
        </Container>
      </HeaderStyled>
    </div>
  );
};

export default Header;
