import React from "react";
import "./index.scss";

type Props = {
  title: string;
};

const PrimaryButton = ({ title }: Props) => {
  return <button className="primary-button">{title}</button>;
};

export default PrimaryButton;
