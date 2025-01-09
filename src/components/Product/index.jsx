import Image from "next/image";


export default function Product({ product }) {
    console.log(product)
    console.log("test text")
    return (
        <div className="flex flex-col gap-2">
            <div className="overflow-hidden">
                <Image
                    className="hover:delay-300 hover:tracking-wider  hover:scale-110 transition-all duration-500"
                    alt={product.name}
                    src={product.image}
                />
            </div>

            <p>
                {product.name}
            </p>
            <p>
                {product.price}
            </p>
        </div>
    )
}