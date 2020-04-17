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
            <Link to="/yearly-todos">Yearly </Link>
            <Link to="/monthly-todos">Monthly </Link>
            <Link to="/weekly-todos">Weekly </Link>
            <Link to="/daily-todos">Daily </Link>
          </HeaderNav>
        </Container>
      </HeaderStyled>
    </div>
  );
};

export default Header;
