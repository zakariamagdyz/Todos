import React from "react";
import { HomePageStyled, HomeTitles, TargetContainer } from "./HomePage.style";
import TargetCard from "../../components/Target-Card/TargetCard";
const HomePage = () => {
  const Targets = ["chief", "master", "senior", "junior"];
  return (
    <HomePageStyled>
      <HomeTitles>
        <h1>divide your targets to smaller ones</h1>
        <p>A journey of a thousand miles begins with a single step</p>
      </HomeTitles>

      <TargetContainer>
        {Targets.map((target) => (
          <TargetCard key={target} title={target} size={target} />
        ))}
      </TargetContainer>
    </HomePageStyled>
  );
};

export default HomePage;
