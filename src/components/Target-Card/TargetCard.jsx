import React from "react";
import { TargetCardStyled, Title, Icon, TargetButton } from "./TargetCar.style";
import { useHistory } from "react-router-dom";

const TargetCard = ({ title, size }) => {
  const history = useHistory();
  const getAdress = (adress) => {
    switch (adress) {
      case "master":
        return "/yearly-targets";
      case "professional":
        return "/monthly-targets";
      case "senior":
        return "/weekly-targets";
      case "junior":
        return "/daily-targets";
      default:
        return;
    }
  };
  return (
    <TargetCardStyled>
      <Title>{title}</Title>
      <Icon size={size} />
      <TargetButton onClick={() => history.push(`${getAdress(title)}`)}>
        Become A {title}
      </TargetButton>
    </TargetCardStyled>
  );
};

export default TargetCard;
