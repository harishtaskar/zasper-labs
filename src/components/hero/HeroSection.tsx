import React from "react";
import "./index.scss";
import PrimaryButton from "../common/buttons/PrimaryButton";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero__heading">
        <b className="hero__heading__text">
          The only FinOps Platform you will ever need
        </b>
      </div>
      <div className="hero__subheading">
        <span className="hero__subheading__text">
          Manage, allocate & reduce cloud spend across all cloud providers and
          services by using Finout's enterprise-grade FinOps solution
        </span>
      </div>
      <div>
        <PrimaryButton title="Get Started" />
      </div>
    </div>
  );
};

export default HeroSection;
