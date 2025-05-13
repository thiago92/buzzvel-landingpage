import FirstSection from "@/components/first-section/first-section";
import ForthSection from "@/components/forth-section/forth-section";
import Menu from "@/components/menu/menu";
import SecondSection from "@/components/second-section/second-section";
import ThirdSection from "@/components/third-section/third-section";
import FifthSection from "@/components/fifth-section/fifth-section";
import { SixthSection } from "@/components/sixth-section/sixth-section";
import SeventhSection from "@/components/seventh-section/seventh-section";
import EighthSection from "@/components/eighth-section/eighth-section";
import NinthSection from "@/components/ninth-section/ninth.section";
import Footer from "@/components/footer/footer";

export default async function Home() {
  return (
    <>
        <Menu />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <ForthSection />
        <FifthSection />
        <SixthSection />
        <SeventhSection />
        <EighthSection />
        <NinthSection />
        <Footer />
    </>
  );
}
