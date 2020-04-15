import styled from "styled-components";
import NotFound from "../../assets/Q2BAOd2.png";

export const ErrorImageOverlay = styled.div`
  margin-top: 4rem;
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorImageContainer = styled.div`
  background-image: url(${NotFound});
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;
`;

export const ErrorImageText = styled.h2`
  margin-top: 4rem;
  font-size: 28px;
  color: #ccc;
`;
