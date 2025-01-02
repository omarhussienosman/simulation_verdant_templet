import Image from "next/image";
import Header from "../components/Header"
import CarouselSection from "../components/CarouselSection"

export default function Home() {
  return (
    <div className="flex flex-col bg-[#FFFBF6]">
      <Header/>
      <CarouselSection/>
    </div>
  );
}
