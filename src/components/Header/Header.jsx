import React from "react";
import {
  HeaderStyled,
  Container,
  HeaderTitle,
  HeaderSubtitle,
  HeaderNav,
  Link,
} from "./headerStyle";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <div className="header">
      <HeaderStyled>
        <Container>
          <div>
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
          </div>
          <HeaderNav>
            <Link to="/yearly-targets">Home </Link>
            <Link to="/monthly-targets">Todos</Link>
            <Link to="/weekly-targets">Sign in </Link>
            <Link to="/daily-targets">Contact</Link>
            <Link to="/daily-targets">About me</Link>
          </HeaderNav>
        </Container>
      </HeaderStyled>
    </div>
  );
};

export default Header;
