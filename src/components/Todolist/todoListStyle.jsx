import styled from "styled-components";

export const TodolistText = styled.p`
  color: #ccc;
  padding: 1rem 0;
  opacity: 0.2;
  margin: 2rem 0;
  text-align: center;
  font-size: 2rem;
`;

const TodoListStyled = styled.div`
  margin: 2rem 0;
  border: 0.1rem solid #507192;
  box-shadow: 1rem 0 1rem rgba(0, 0, 0, 0.2);
  background: ${(props) => (props.edit ? "#2c3e50" : "#2c3e50")};

  padding: 1rem;
`;

export { TodoListStyled };
