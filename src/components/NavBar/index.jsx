import Image from "next/image";
import Link from "next/link";

export default function NavBar() {

    return (
        <div className="w-full flex flex-row lg:justify-between justify-end lg:order-1 order-2 lg:pb-[40px]">
            <div className="lg:flex hidden flex-row gap-8">
                <p className="text-[#000000] hover:underline">PLANTS</p>
                <p className="text-[#000000] hover:underline">TOOLS & POTS</p>
                <p className="text-[#000000] hover:underline">SALE</p>
                <p className="text-[#000000] hover:underline">SUBSCRIPTIONS</p>
                <p className="text-[#000000] hover:underline">PLANT CARE</p>
            </div>
            <div className="flex flex-row items-center justify-end  gap-4">
                <Link href={"#"} className="text-[#000000] lg:block hidden hover:opacity-50">
                    LOG IN
                </Link>
                <svg preserveAspectRatio="xMidYMid meet" data-bbox="36 36 128 127.999" viewBox="36 36 128 127.999" height="18" width="18" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label="">
                    <defs>
                        <style> data-color="1"fill ="#212516"</style>
                    </defs>
                    <g>
                        <path d="M162.828 157.171l-26.254-26.254c8.766-10.072 14.093-23.214 14.093-37.584C150.667 61.72 124.947 36 93.333 36 61.72 36 36 61.72 36 93.333s25.72 57.333 57.333 57.333c14.37 0 27.512-5.326 37.584-14.092l26.254 26.254c.78.781 1.805 1.171 2.828 1.171s2.048-.391 2.828-1.171a3.998 3.998 0 0 0 .001-5.657zM44 93.333C44 66.131 66.131 44 93.333 44c27.203 0 49.334 22.131 49.334 49.333 0 13.481-5.441 25.712-14.235 34.626-.086.072-.179.131-.26.212-.081.081-.14.174-.212.259-8.914 8.795-21.145 14.236-34.627 14.236C66.131 142.667 44 120.536 44 93.333z" fill="#000001" data-color="1"></path>
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="20" height="20" viewBox="0 0 164.9 196.4" preserveAspectRatio="xMinYMax meet" data-hook="svg-icon-9">
                    <text x="84" y="131" dy=".35em" textAnchor="middle" className="uxskpx M846Y_" data-hook="items-count">
                        1
                    </text>
                    <path d="M81.9 11.5c-18.8 0-34.1 16-34.1 35.7v18.1h7.8V47.2c0-15.4 11.8-27.9 26.4-27.9 14.5 0 26.4 12.5 26.4 27.9v18.1h6.6V64h1.1V47.2c-.1-19.7-15.4-35.7-34.2-35.7z">
                    </path>
                    <path d="M156.9 70.5v118H8v-118h148.9m8-8H0v134h164.9v-134z">
                    </path>
                </svg>
                <svg data-bbox="20 76.4 160 47.2" className="lg:hidden block" viewBox="0 0 200 200" height="60" width="40" xmlns="http://www.w3.org/2000/svg" data-type="shape">
                    <g>
                        <path d="M180 76.4v2.7H20v-2.7h160z"></path>
                        <path d="M180 98.7v2.7H20v-2.7h160z"></path>
                        <path d="M180 120.9v2.7H20v-2.7h160z"></path>
                    </g>
                </svg>
            </div>

        </div>
    )
}