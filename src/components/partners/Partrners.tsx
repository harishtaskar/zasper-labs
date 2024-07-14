"use client";
import Image from "next/image";
import React from "react";
import SectionHeading from "../common/texts/SectionHeading";
import "./index.scss";

type Props = {
  partners: any[];
};

const Partrners = ({ partners }: Props) => {
  return (
    <div className="partners">
      <SectionHeading title="Our Partner Companies" />
      <div className="partners__companies">
        {partners?.map((p) => (
          <Image
            className="partners__companies__img"
            src={p.src}
            width={200}
            height={50}
            alt={p.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Partrners;
