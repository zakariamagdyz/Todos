import React from "react";
import { FooterData, FooterStyled } from "./footerStyle";

const Footer = () => {
  return (
    <div className="footer">
      <FooterStyled>
        <FooterData>Zakaria Magdy &copy; 2020 All rights reserved</FooterData>
      </FooterStyled>
    </div>
  );
};

export default Footer;
