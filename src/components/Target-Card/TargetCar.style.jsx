import styled from "styled-components";
import { FaBriefcase } from "react-icons/fa";

const selectFont = (data) => {
  switch (data) {
    case "chief":
      return "13rem";
    case "master":
      return "10rem";
    case "senior":
      return "8rem";
    case "junior":
      return "6rem";
    default:
      return "1rem";
  }
};

export const TargetCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #d0a590;
  box-shadow: 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.3);
  height: 28rem;
  padding: 2rem 0;
  justify-content: space-between;
`;

export const Title = styled.h2`
  color: #ccc;
  text-shadow: 0.3rem 0.3rem 0.3rem rgba(0, 0, 0, 0.4);
  text-transform: capitalize;
  letter-spacing: 0.1rem;
`;

export const Icon = styled(FaBriefcase)`
  font-size: ${(props) => selectFont(props.data)};
  /* font-size: ${(props) => props.data === "master" && "10rem"};
  font-size: ${(props) => props.data === "senior" && "8rem"};
  font-size: ${(props) => props.data === "junior" && "6rem"}; */

  color: #d0c190;
  margin: 2rem 0;
`;

export const TargetButton = styled.button`
  background: #eee;
  border: none;
  padding: 0.7rem 1.5rem;
  outline: none;
  cursor: pointer;
  color: #2c3e50;
  width: 80%;
  letter-spacing: 0.1rem;
  box-shadow: 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  :hover {
    background: #d0a590;
    color: #fff;
  }
`;
