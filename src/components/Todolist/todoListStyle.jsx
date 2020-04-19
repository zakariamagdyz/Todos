import styled from "styled-components";

const TodosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, max-content));
  grid-gap: 2rem;
  align-items: center;

  @media (max-width: 738px) {
    grid-template-columns: repeat(auto-fit, minmax(25rem, max-content));
  }
`;

const TodoListStyled = styled.div`
  margin: 2rem 0;
  border: 0.1rem solid #507192;
  box-shadow: 1rem 0 1rem rgba(0, 0, 0, 0.2);
  background: ${(props) => (props.edit ? "#2c3e50" : "#2c3e50")};

  padding: 1rem;
`;

export const TodolistText = styled.p`
  color: #ccc;
  padding: 1rem 0;
  opacity: 0.2;
  margin: 2rem 0;
  text-align: center;
  font-size: 2rem;
`;

export { TodoListStyled, TodosContainer };
