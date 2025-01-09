import product1 from "../../../public/product1.jpg"
import product2 from "../../../public/product2.webp"
import product3 from "../../../public/product3.webp"
import Product from "../Product";
import SpecialCarousel from '../Carousel/SpecielCarousel'

export default function ProductSection() {
    const products = [{ image: product1, name: "Monstera", price: "$32.00" }, { image: product2, name: "Cactus", price: "$32.00" }, { image: product3, name: "Sansevieria", price: "$32.00" }]
    //console.log(products);
    return (
        <div className="flex flex-col gap-8  p-[80px] ">
            <div className="flex flex-row justify-between items-center">
                <p className="text-[55px] align-bottom  text-nowrap">New Arrivals</p>
                <p className=" text-[16px] lg:underline md:underline hover:delay-300 text-[#000000] hover:tracking-wider  hover:scale-105 transition-all duration-500 align-bottom  text-nowrap">SHOP ALL</p>
            </div>
            <div className="lg:grid md:grid hidden grid-cols-3 gap-8">
                {products?.map((product, index) => (
                    <Product key={index} product={product} />
                ))}
            </div>
            <SpecialCarousel slides={products}/>
        </div>

    )
}