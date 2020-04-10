import React, { Fragment } from "react";
import { ErrorMsg } from "./errorStyle";

const Error = ({ msg }) => {
  return (
    <Fragment>
      <ErrorMsg>{msg}</ErrorMsg>
    </Fragment>
  );
};

export default Error;
