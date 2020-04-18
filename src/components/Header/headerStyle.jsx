import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

const textShadow = "0rem 1rem 0.5rem rgba(0, 0, 0, 0.3)";

export const HeaderStyled = styled.div`
  background-color: #2c3e50;
  padding: 1.5rem 0;
  box-shadow: 0rem 1rem 2rem rgba(0, 0, 0, 0.2);
  border-bottom: 0.1rem solid #507192;
`;

export const Container = styled.div`
  max-width: 114rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderTitle = styled.h1`
  font-weight: 400;
  letter-spacing: 0.1rem;
  font-size: 3rem;
  color: #eee;
  margin-bottom: 0.5rem;
  text-shadow: ${textShadow};
  cursor: pointer;
`;

export const HeaderSubtitle = styled.p`
  letter-spacing: 0.1rem;
  word-spacing: 0.1rem;
  font-size: 1.4rem;
  color: #ccc;
  text-shadow: ${textShadow};
`;

export const HeaderNav = styled.div`
  margin-left: auto;
  margin-right: 2rem;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #ccc;
  font-size: 1.8rem;
  transition: color 0.2s ease;
  border-bottom: 1px solid transparent;
  padding-bottom: 0.5rem;

  &:not(:last-child) {
    margin-right: 2rem;
  }

  :hover {
    color: #ac7253;
    border-bottom: 1px solid #eee;
  }
`;
