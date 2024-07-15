"use client";
import Image from "next/image";
import React from "react";
import SectionHeading from "../common/texts/SectionHeading";
import "./index.scss";
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

type Props = {
  partners: any[];
};

const Partrners = ({ partners }: Props) => {
  return (
    // <div className="partners">
    //   <SectionHeading title="Our Partner Companies" />
    //   <div className="partners__companies">
    //     {partners?.map((p) => (
    //       <Image
    //         className="partners__companies__img"
    //         src={p.src}
    //         width={200}
    //         height={50}
    //         alt={p.name}
    //       />
    //     ))}
    //   </div>
    // </div>
    <div className="partners">
      <SectionHeading title="Our Partner Companies" />
      <div className="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background ">
        <Marquee pauseOnHover className="[--duration:20s] w-[200%]">
          {partners.map((p) => (
            <Image
              className="partners__companies__img"
              src={p.src}
              width={200}
              height={50}
              alt={p.name}
              key={p.name}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Partrners;
