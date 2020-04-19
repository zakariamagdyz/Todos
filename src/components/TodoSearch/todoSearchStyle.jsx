import styled, { css } from "styled-components";

const defaultStyle = css`
  color: #2c3e50;
  background: #eee;
  border: none;
  outline: none;
  box-shadow: 1rem 0 1rem rgba(0, 0, 0, 0.2);
  padding: 1rem;
  font-size: 2rem;
  font-family: inherit;
`;

export const TodoSearchForm = styled.form`
  display: flex;
  width: 50%;
`;

export const TodoSearchInput = styled.input.attrs((props) => ({
  placeholder: "Search for todos",
}))`
  flex-grow: 1;
  margin-right: 1rem;
  ${defaultStyle}
  &::placeholder {
    opacity: 0.3;
  }
`;

export const TodoSearchSelect = styled.select`
  ${defaultStyle}
`;
