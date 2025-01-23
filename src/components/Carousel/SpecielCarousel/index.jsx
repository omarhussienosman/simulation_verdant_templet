"use client";
import Image from 'next/image';
import React, { useState } from 'react';

const SpecialCarousel = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="relative lg:hidden md:hidden lg:w-[40%] md:w-[40%] w-full">
            {/* Slides */}
            <div className="overflow-hidden h-full relative">
                <div
                    className="flex transition-transform h-full duration-1000"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="min-w-full flex items-center justify-center bg-gray-200 relative"
                        >
                            <Image
                                src={slide.image}
                                alt={slide.alt}
                                className="w-full h-full object-cover"
                            />
                            {currentIndex === index && (
                                <div className='absolute bottom-5 left-5 flex flex-col'>
                                    <p className=" px-3 text-[18px]">
                                        {slide.text}
                                    </p>
                                    <p className=' px-3 text-[18px]'>{slide.price}</p>
                                </div>

                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute flex flex-row justify-center items-center gap-2 top-[130px] left-[-70px] -translate-y-1/2 p-2 "
            >
                <svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="20" height="40" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve">
                    <g>
                        <path d="M33.934,54.458l30.822,27.938c0.383,0.348,0.864,0.519,1.344,0.519c0.545,0,1.087-0.222,1.482-0.657
		c0.741-0.818,0.68-2.083-0.139-2.824L37.801,52.564L64.67,22.921c0.742-0.818,0.68-2.083-0.139-2.824
		c-0.817-0.742-2.082-0.679-2.824,0.139L33.768,51.059c-0.439,0.485-0.59,1.126-0.475,1.723
		C33.234,53.39,33.446,54.017,33.934,54.458z"/>
                    </g>
                </svg>
            </button>
            <button
                onClick={nextSlide}
                className="absolute flex flex-row justify-center items-center gap-2 top-[130px] right-[-70px] -translate-y-1/2  p-2 "
            >
                <svg width="20" height="20" viewBox="-19.04 0 75.804 75.804" xmlns="http://www.w3.org/2000/svg">
                    <g id="Group_65" data-name="Group 65" transform="translate(-831.568 -384.448)">
                        <path id="Path_57" data-name="Path 57" d="M833.068,460.252a1.5,1.5,0,0,1-1.061-2.561l33.557-33.56a2.53,2.53,0,0,0,0-3.564l-33.557-33.558a1.5,1.5,0,0,1,2.122-2.121l33.556,33.558a5.53,5.53,0,0,1,0,7.807l-33.557,33.56A1.5,1.5,0,0,1,833.068,460.252Z" fill="#0c2c67" />
                    </g>
                </svg>
            </button>
        </div>
    );
};

export default SpecialCarousel;
