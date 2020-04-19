import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MenuStyled = styled.div`
  color: #fff;
  background: #2c3e50;
  border: 0.1rem solid #507192;
  box-shadow: 0.2rem 0.5rem 0.5rem rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-self: start;
  padding: 2rem 0;
  margin-top: 6.5rem;

  @media (max-width: 550px) {
    grid-row: 1/2;
    flex-direction: row;
    padding: unset;
    justify-content: space-between;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }
`;

export const MenuLink = styled(NavLink)`
  text-transform: capitalize;
  color: #d0a590;
  text-decoration: none;
  transition: all 0.3s ease;
  text-align: center;
  padding: 1rem 2rem;
  text-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.4);

  :hover {
    background: #507192;
  }
`;
