import React from "react";
import "./index.scss";

type Props = {
  isActive: boolean;
  number: string;
  title: string;
  subtitle: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
};

const Card = ({
  isActive,
  number,
  title,
  subtitle,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: Props) => {
  return (
    <div
      className={`card ${isActive ? "active" : ""}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="card__content">
        <h1 className="card__content__number">{number}</h1>
        <h3 className="card__content__title">{title}</h3>
        <h5 className="card__content__subtitle">{subtitle}</h5>
      </div>
    </div>
  );
};

export default Card;
