import Image from "next/image"
import Carousel from "../Carousel"
import MainPhoto from "../../../public/Main Image.avif"
import Cavtus from "../../../public/Cavtus Love.avif"
import Ceramic from "../../../public/Ceramic Hanging Planter.avif"
import Coated from "../../../public/Coated Steel Circle Planter.avif"
export default function CarouselSection() {
    const slides = [{ image: Cavtus, alt: "Cavtus", text: "Cavtus Love", price: "$32" }, { image: Ceramic, alt: "Ceramic", text: "Ceramic Planter", price: "$32" }, { image: Coated, alt: "Coated", text: "Coated Planter", price: "$32" }]
    return (
        <div className="flex flex-col md:flex-row lg:flex-row w-full">
            <div className="flex  flex-col justify-center w-full lg:w-[80%] md:w-[80%]">
                <Image src={MainPhoto} className="w-full" alt="test" height={800}>
                </Image>
                <div className="flex lg:flex-row md:flex-row flex-col  justify-between items-center lg:items-end md:items-end gap-8 lg:gap-2 md:gap-2 bg-[#000000] pb-[50px] px-[60px] pt-[80px]">
                    <p className="text-[40px] md:text-[30px] text-[#ffffff] text-center lg:text-left md:text-left leading-[45px]">The Essentials for Your Plant Passion and Beyond</p>
                    <button className="flex items-center lg:items-end md:items-end  justify-center bg-[#ffffff] lg:bg-[#000000] lg:p-[0px] md:p-[0px] md:bg-[#000000] p-[15px] w-[40%] h-14 rounded-[24px]">
                        <p className=" text-[16px] lg:underline md:underline hover:delay-300 text-[#000000] lg:text-[#ffffff] md:text-[#ffffff] hover:tracking-wider  hover:scale-105 transition-all duration-500 align-bottom  text-nowrap">SHOP PLANTS</p>
                    </button>
                </div>
            </div>
            <Carousel slides={slides} />
        </div>
    )
}