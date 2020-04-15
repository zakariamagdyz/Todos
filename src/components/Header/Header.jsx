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
          <HeaderTitle
            onClick={() => {
              // go to home
              history.push("/");
              //refresh the page
              window.location.reload();
            }}
          >
            Todo App
          </HeaderTitle>
          <HeaderSubtitle>A new step to organize your life</HeaderSubtitle>
        </Container>
      </HeaderStyled>
    </div>
  );
};

export default Header;
