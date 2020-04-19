import styled from "styled-components";

export const HomePageStyled = styled.div``;

export const HomeTitles = styled.div`
  text-align: center;
  margin-top: 8rem;

  > h1 {
    color: #d0c190;
    text-transform: capitalize;
    word-spacing: 0.4rem;
    letter-spacing: 0.1rem;
  }

  > p {
    margin-top: 2rem;
    color: #eee;
    letter-spacing: 1px;
    word-spacing: 0.2rem;
  }
`;

export const TargetContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, max-content));
  margin: 10rem 15rem 8rem;
  grid-gap: 2rem;
`;
