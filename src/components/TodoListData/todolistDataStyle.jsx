import styled, { css } from "styled-components/macro";

const allButton = css`
  color: ${(props) => props.active && "#3498db"};
  &:hover {
    color: #3498db;
  }
`;

const completedButton = css`
  color: ${(props) => props.active && "#27ae60"};
  &:hover {
    color: #27ae60;
  }
`;

const unCompleteButton = css`
  color: ${(props) => props.active && "#e74c3c"};

  &:hover {
    color: #e74c3c;
  }
`;

const align = css`
  margin-left: auto;
  margin-right: 2rem;
`;

export const ListDataStyled = styled.div`
  margin-top: 3rem;
  display: flex;
`;

export const ListDataButton = styled.button`
  background: none;
  outline: none;
  border: 0;
  font-size: 1.1rem;
  letter-spacing: 0.05rem;
  text-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.2);
  font-style: italic;
  cursor: pointer;
  padding-bottom: 0.2rem;
  color: #ccc;
  transition: color 0.1s linear;
  ${(props) => props.all && allButton}
  ${(props) => props.completed && completedButton}
  ${(props) => props.unCompleted && unCompleteButton}

  ${(props) => props.align && align}
`;
