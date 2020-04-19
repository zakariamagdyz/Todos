import styled from "styled-components";

const HomePageStyled = styled.div`
  padding: 4rem;
  display: grid;
  grid-template-columns: 1fr 200px;
  grid-column-gap: 6rem;
  margin-top: 5rem;

  @media (max-width: 750px) {
    grid-template-columns: 1fr 150px;
    grid-column-gap: 2rem;

    margin-top: 2rem;
  }
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 350px) {
    margin-top: 1rem;
    grid-column-gap: 1.3rem;
    padding: 1rem;
  }
`;

const HomePageContainer = styled.div`
  width: 50%;
  margin: 5rem auto;
  @media (max-width: 700px) {
    width: 70%;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
`;

export { HomePageContainer, HomePageStyled };
