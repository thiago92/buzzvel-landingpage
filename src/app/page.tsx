import FirstSection from "@/components/first-section/first-section";
import Menu from "@/components/menu/menu";
import SecondSection from "@/components/second-section/second-section";

export default async function Home() {
  return (
    <>
      <Menu />
      <FirstSection />
      <SecondSection />
    </>
  );
}
