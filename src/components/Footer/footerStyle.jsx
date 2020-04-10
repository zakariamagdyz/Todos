import styled from "styled-components";
import wave from "../../assets/wave.svg";

export const FooterStyled = styled.div`
  position: relative;
  height: 30vh;
  background-image: url(${wave});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const FooterData = styled.p`
  color: #fff;
  letter-spacing: 0.1rem;
  word-spacing: 0.1rem;
  text-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.4);
  font-size: 1rem;
  margin-bottom: 2rem;
`;
