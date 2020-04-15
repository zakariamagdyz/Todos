import styled from "styled-components/macro";

const textShadow = "0rem 1rem 0.5rem rgba(0, 0, 0, 0.3)";

export const HeaderStyled = styled.div`
  background-color: #2c3e50;
  padding: 1.5rem 0;
  box-shadow: 0rem 1rem 2rem rgba(0, 0, 0, 0.2);
  border-bottom: 0.1rem solid #507192;
`;

export const Container = styled.div`
  max-width: 114rem;
  margin: 0 auto;
`;

export const HeaderTitle = styled.h1`
  font-weight: 400;
  letter-spacing: 0.1rem;
  font-size: 3rem;
  color: #eee;
  margin-bottom: 0.5rem;
  text-shadow: ${textShadow};
  cursor: pointer;
`;

export const HeaderSubtitle = styled.p`
  letter-spacing: 0.1rem;
  word-spacing: 0.1rem;
  font-size: 1.4rem;
  color: #ccc;
  text-shadow: ${textShadow};
`;
