"use client";
import React, { useEffect, useState } from "react";
import SectionHeading from "../common/texts/SectionHeading";
import "./index.scss";
import Card from "./Card";
import { whyZepsLab } from "@/constants/constant";

const CardsDiv = () => {
  const [activeCard, setActiveCard] = useState(2);
  //   const [isCardHovered, setIsCardHovered] = useState(false);

  //   useEffect(() => {
  //     if (!isCardHovered) {
  //       setTimeout(() => {
  //         setActiveCard((prev) => (prev === 3 ? 1 : prev + 1));
  //       }, 2 * 1000);
  //     }
  //   }, [activeCard]);

  return (
    <div className="casestudy">
      <SectionHeading title="Why Zasper Labs" />
      <div className="casestudy__subheading">
        Zasper Labs helps you build, and scale top tier remote AI enabled Teams
        across all verticals.
      </div>
      <div className="casestudy__cards">
        {whyZepsLab?.map((item) => {
          return (
            <Card
              onMouseEnter={() => {
                // setIsCardHovered(true);
                setActiveCard(item.id);
              }}
              onMouseLeave={() => {
                // setIsCardHovered(false);
                setActiveCard(1);
              }}
              onClick={() => setActiveCard(item.id)}
              isActive={item.id === activeCard}
              number={item.number}
              title={item.title}
              subtitle={item.subtitle}
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardsDiv;
