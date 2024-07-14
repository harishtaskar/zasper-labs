import Image from "next/image";
import React from "react";
import NavigationButton from "../common/buttons/NavigationButton";
import "./index.scss";

type Props = {
  isActive: boolean;
  company: any;
  percentage: string;
  title: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const CaseStudyCard = ({
  isActive,
  company,
  percentage,
  title,
  onClick,
}: Props) => {
  return (
    <div className={`casecard ${isActive ? "active" : ""}`} onClick={onClick}>
      <div className={`casecard__company ${isActive ? "active" : ""}`}>
        <Image
          src={company}
          className="casecard__company__img"
          width={200}
          height={100}
          alt={title}
        />
        {isActive && (
          <button className="casecard__company__btn">Optimize</button>
        )}
      </div>
      <div className="casecard__content">
        <h1 className="casecard__content__percentage">{percentage}</h1>
        <h5 className="casecard__content__title">{title}</h5>
      </div>
      <div className="casecard__button">
        <NavigationButton title={"Read Case study"} isActive={isActive} />
      </div>
    </div>
  );
};

export default CaseStudyCard;
