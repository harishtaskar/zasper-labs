import HeroSection from "@/components/hero/HeroSection";
import "./page.scss";
import Partrners from "@/components/partners/Partrners";
import { partnerCompanies } from "@/constants/constant";
import CardsDiv from "@/components/casestudy/WhyZesperLabs";

export default function Home() {
  return (
    <main className="main">
      <HeroSection />
      <Partrners partners={partnerCompanies} />
      <CardsDiv />
    </main>
  );
}
