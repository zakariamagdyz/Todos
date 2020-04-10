import styled, { css } from "styled-components/macro";

const hover = css`
  color: ${(props) => props.all && "#3498db"};
  color: ${(props) => props.completed && "#27ae60"};
  color: ${(props) => props.unCompleted && "#e74c3c"};
`;

const active = css`
  color: ${(props) => props.activeAll && "#3498db"};
  color: ${(props) => props.activeCompleted && "#27ae60"};
  color: ${(props) => props.activeUnCompleted && "#e74c3c"};
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
  transition: color 0.1s linear;
  color: #ccc;
  ${active}

  &:hover {
    ${hover}
  }

  ${(props) => props.align && align}
`;
