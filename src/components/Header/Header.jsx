import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <h1 className="header__title">Todo App</h1>
        <p className="header__subtitle">A new step to organize your life</p>
      </div>
    </div>
  );
};

export default Header;
