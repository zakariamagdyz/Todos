import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./Spinner.style";

const Spinner = () => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer></SpinnerContainer>
    </SpinnerOverlay>
  );
};

export default Spinner;
