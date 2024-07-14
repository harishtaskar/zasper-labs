import React from "react";
import "./index.scss";

type Props = {
  title: string;
};

const SectionHeading = ({ title }: Props) => {
  return (
    <div className="heading">
      <h4 className="heading__text">{title}</h4>
    </div>
  );
};

export default SectionHeading;
