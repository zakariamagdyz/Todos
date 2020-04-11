import styled, { css } from "styled-components";

const common = css`
  padding: 1rem 1rem;
  box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.2);
`;

const AddTodoStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
`;

const AddTodoForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const AddTodoInput = styled.input`
  border: none;
  background: #2c3e50;
  color: #eee;
  font-family: inherit;
  font-size: 2rem;
  border-bottom: 0.1rem solid lighten(#2c3e50, 20%);
  outline: none;
  ${common}
  &::placeholder {
    opacity: 0.4;
  }
`;

const AddTodoButton = styled.button`
  margin: 1rem 0;
  outline: none;
  background: ${(props) => (props.edit ? "#77B39E" : "#ccc")};
  margin-bottom: ${(props) => props.edit && "3rem"};
  color: #2c3e50;
  font-size: 2rem;
  border: 0;
  cursor: pointer;
  transition: transform 0.1s ease;
  ${common}
  &:active {
    transform: translateY(0.1rem);
  }
`;

export { AddTodoButton, AddTodoForm, AddTodoInput, AddTodoStyled };
