import React, { Fragment } from "react";
import { ErrorMsg } from "./Error.style";

const Error = ({ msg }) => {
  return (
    <Fragment>
      <ErrorMsg>{msg}</ErrorMsg>
    </Fragment>
  );
};

export default React.memo(Error);
