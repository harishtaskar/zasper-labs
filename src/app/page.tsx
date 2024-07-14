import HeroSection from "@/components/hero/HeroSection";
import "./page.scss";
import Partrners from "@/components/partners/Partrners";
import { caseStudies, partnerCompanies } from "@/constants/constant";
import CaseStudy from "@/components/casestudy/CaseStudy";

export default function Home() {
  return (
    <main className="main">
      <HeroSection />
      <Partrners partners={partnerCompanies} />
      <CaseStudy casestudies={caseStudies} />
    </main>
  );
}
