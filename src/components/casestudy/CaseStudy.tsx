"use client";
import React, { useEffect, useState } from "react";
import SectionHeading from "../common/texts/SectionHeading";
import CaseStudyCard from "./CaseStudyCard";
import "./index.scss";

type Props = {
  casestudies: any[];
};

const CaseStudy = ({ casestudies }: Props) => {
  const [activeCard, setActiveCard] = useState(2);
  const [isCardHovered, setIsCardHovered] = useState(false);

  useEffect(() => {
    if (!isCardHovered) {
      setTimeout(() => {
        setActiveCard((prev) => (prev === 3 ? 1 : prev + 1));
      }, 2 * 1000);
    }
  }, [activeCard]);

  return (
    <div className="casestudy">
      <SectionHeading title="Why Zasper Labs" />
      <div className="casestudy__subheading">
        Zasper Labs helps you build, and scale top tier remote AI enabled Teams
        across all verticals.
      </div>
      <div className="casestudy__cards">
        {casestudies?.map((casestudy) => {
          return (
            <CaseStudyCard
              onMouseEnter={() => {
                setIsCardHovered(true);
                setActiveCard(casestudy.id);
              }}
              onMouseLeave={() => {
                setIsCardHovered(false);
                setActiveCard(1);
              }}
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
