import React, { Fragment } from "react";
import "./Error.scss";
const Error = ({ msg }) => {
  return (
    <Fragment>
      <p className="error-msg">{msg}</p>
    </Fragment>
  );
};

export default Error;
