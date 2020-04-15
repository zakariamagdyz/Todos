import React from "react";
import {
  HeaderStyled,
  Container,
  HeaderTitle,
  HeaderSubtitle,
} from "./headerStyle";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <div className="header">
      <HeaderStyled>
        <Container>
          <HeaderTitle onClick={() => history.push("/")}>Todo App</HeaderTitle>
          <HeaderSubtitle>A new step to organize your life</HeaderSubtitle>
        </Container>
      </HeaderStyled>
    </div>
  );
};

export default Header;
