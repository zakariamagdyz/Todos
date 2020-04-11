import styled from "styled-components";
const TodoListInfo = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.1rem solid #ccc;
  align-items: center;
  margin-bottom: 2rem;
`;
const TodoListTitle = styled.h3`
  font-weight: 400;
  color: #ccc;
  margin-bottom: 1rem;
  font-size: 2.4rem;
  text-shadow: 0rem 1rem 0.5rem rgba(0, 0, 0, 0.2);
`;
const TodoListRemove = styled.button`
  background: none;
  color: #ccc;
  padding-bottom: 0.2rem;
  border: none;
  border-bottom: 1px solid transparent;
  cursor: pointer;
  outline: none;
  transition: all 0.1s ease;
  text-shadow: 0rem 1rem 0.5rem rgba(0, 0, 0, 0.2);
  &:hover {
    color: #ee8478;
    border-bottom: 1px solid #ee8478;
  }

  &:active {
    transform: translateY(0.1rem);
  }
`;

export { TodoListRemove, TodoListTitle, TodoListInfo };
