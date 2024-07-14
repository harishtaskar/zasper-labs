import Image from "next/image";
import React from "react";
import icon from "@/assets/icons/arrow.svg";
import "./index.scss";

type Props = {
  title: string;
  isActive: boolean;
};

const NavigationButton = ({ title, isActive }: Props) => {
  return (
    <button className={`nav_button ${isActive ? "active" : ""}`}>
      <span className="nav_button__text">{title}</span>
      <div className="nav_button__icon">
        <Image
          src={icon}
          width={30}
          height={30}
          alt="button-icon"
          className="nav_button__icon__img"
        />
      </div>
    </button>
  );
};

export default NavigationButton;
