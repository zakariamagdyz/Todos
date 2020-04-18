import styled, { css } from "styled-components/macro";

const activeDisabled = css`
  opacity: 0.5;
  > div:first-child::after {
    content: "";
    background: #e74c3c;
    width: 115%;
    height: 0.3rem;
    position: absolute;
    top: 24%;
    left: -5px;
    box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.2);
    border-radius: 3rem;
    animation: width-change 0.3s ease-in-out;

    @keyframes width-change {
      0% {
        width: 0%;
      }

      100% {
        width: 115%;
      }
    }
  }
`;

const TodoItemStyled = styled.div`
  color: #eee;
  background: ${(props) => props.edit && "#305477"};
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  border: 0.1rem solid #507192;
  padding: 1rem;
  box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.2);

  ${(props) => props.active && activeDisabled}
`;

const TodoItemTexts = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p:first-child {
    text-transform: capitalize;
    font-size: 1.9rem;
    text-shadow: 0rem 1rem 0.5rem rgba(0, 0, 0, 0.2);
  }

  p:last-child {
    font-size: 0.9rem;
    font-style: italic;
    margin-top: 1rem;
    opacity: 0.6;
    color: #ccc;
    text-shadow: 0rem 1rem 0.5rem rgba(0, 0, 0, 0.2);
  }
`;

export const TodoItemsTools = styled.div`
  display: flex;
  justify-content: space-between;
  width: 22%;
`;

const deleteButton = css`
  color: ${(props) => props.active && "#e74c3c"};
  &:hover {
    color: ${(props) => !props.disabled && "#e74c3c"};
  }
`;

const doneButton = css`
  font-size: 3.2rem;
  color: ${(props) => props.active && "#27ae60"};
  :hover {
    color: ${(props) => !props.disabled && "#27ae60"};
  }
`;

const editButton = css`
  :hover {
    color: ${(props) => !props.disabled && "#3498db"};
  }
`;
const lockButton = css`
  color: ${(props) => props.parent && "#ce9b80"};
  :hover {
    color: ${(props) => !props.disabled && "#ce9b80"};
  }
`;

const TodoItemButton = styled.button`
opacity:${(props) => props.disabled && 0};
  font-size: 2.5rem;
  background: none;
  outline: none;
  border: 0;
  cursor: pointer;
  color: #507192;
  transition: color 0.2s ease-in-out, transform 0.2s ease;
  ${(props) => props.delete && deleteButton}
  ${(props) => props.done && doneButton}
  ${(props) => props.edit && editButton}
  ${(props) => props.lock && lockButton}
  &:hover {
    transform: ${(props) => !props.disabled && "translateY(-0.1rem)"};
  }
  &:active {
    transform: translateY(0.1rem);
  }
`;

export { TodoItemButton, TodoItemStyled, TodoItemTexts };
