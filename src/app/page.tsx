import Image from "next/image";
import Header from "../components/Header"
import CarouselSection from "../components/CarouselSection"
import ProductSection from "../components/ProductSection"

export default function Home() {
  return (
    <div className="flex flex-col bg-[#FFFBF6]">
      <Header />
      <CarouselSection />
      <ProductSection />
    </div>
  );
}
