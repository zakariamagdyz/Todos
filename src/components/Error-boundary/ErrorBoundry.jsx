import React from "react";
import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText,
} from "./ErrorBoundry.style.jsx";

export default class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer></ErrorImageContainer>
          <ErrorImageText>Page not found </ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}
