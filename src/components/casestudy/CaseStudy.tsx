"use client";
import React, { useState } from "react";
import SectionHeading from "../common/texts/SectionHeading";
import CaseStudyCard from "./CaseStudyCard";
import "./index.scss";

type Props = {
  casestudies: any[];
};

const CaseStudy = ({ casestudies }: Props) => {
  const [activeCard, setActiveCard] = useState(2);
  return (
    <div className="casestudy">
      <SectionHeading title="Why loreum ipsum" />
      <div className="casestudy__subheading">
        Manage, allocate & reduce cloud spend across all cloud providers and
        services by using Finout's enterprise-grade FinOps solution
      </div>
      <div className="casestudy__cards">
        {casestudies?.map((casestudy) => {
          return (
            <CaseStudyCard
              onClick={() => setActiveCard(casestudy.id)}
              company={casestudy.company}
              isActive={casestudy.id === activeCard}
              percentage={casestudy.percentage}
              title={casestudy.title}
              key={casestudy.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CaseStudy;
