import React from "react";
import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText,
} from "./NotFoundPage.style";

const NotFoundPage = () => {
  return (
    <ErrorImageOverlay>
      <ErrorImageContainer></ErrorImageContainer>
      <ErrorImageText>Page not found </ErrorImageText>
    </ErrorImageOverlay>
  );
};

export default NotFoundPage;
