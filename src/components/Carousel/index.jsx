"use client";
import Image from 'next/image';
import React, { useState } from 'react';

const Carousel = ({ slides }) => {
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
    <div className="relative lg:w-[40%] md:w-[40%] w-full">
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
              {/* النص يظهر فقط إذا كانت هذه الصورة هي النشطة */}
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
        className="absolute flex flex-row justify-center items-center gap-2 top-[40px] left-2 -translate-y-1/2 p-2 "
      >
        <svg width="20" height="20" viewBox="0 -6.5 36 36" className='opacity-60' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">

          <title>left-arrow</title>
          <desc>Created with Sketch.</desc>
          <g id="icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="ui-gambling-website-lined-icnos-casinoshunter" transform="translate(-342.000000, -159.000000)" fill="#252528" fillRule="nonzero">
              <g id="square-filled" transform="translate(50.000000, 120.000000)">
                <path d="M317.108012,39.2902857 L327.649804,49.7417043 L327.708994,49.7959169 C327.889141,49.9745543 327.986143,50.2044182 328,50.4382227 L328,50.5617773 C327.986143,50.7955818 327.889141,51.0254457 327.708994,51.2040831 L327.6571,51.2479803 L317.108012,61.7097143 C316.717694,62.0967619 316.084865,62.0967619 315.694547,61.7097143 C315.30423,61.3226668 315.30423,60.6951387 315.694547,60.3080911 L324.702666,51.3738496 L292.99947,51.3746291 C292.447478,51.3746291 292,50.9308997 292,50.3835318 C292,49.8361639 292.447478,49.3924345 292.99947,49.3924345 L324.46779,49.3916551 L315.694547,40.6919089 C315.30423,40.3048613 315.30423,39.6773332 315.694547,39.2902857 C316.084865,38.9032381 316.717694,38.9032381 317.108012,39.2902857 Z M327.115357,50.382693 L316.401279,61.0089027 L327.002151,50.5002046 L327.002252,50.4963719 L326.943142,50.442585 L326.882737,50.382693 L327.115357,50.382693 Z" id="left-arrow" transform="translate(310.000000, 50.500000) scale(-1, 1) translate(-310.000000, -50.500000) ">

                </path>
              </g>
            </g>
          </g>
        </svg>
        <p className='pb-[5px] opacity-50 hover:opacity-100'>prev</p>
      </button>
      <button
        onClick={nextSlide}
        className="absolute flex flex-row justify-center items-center gap-2 top-[40px] right-2 -translate-y-1/2  p-2 "
      >
        <p className='pb-[2px] opacity-50 hover:opacity-100'>next</p>

        <svg width="20" height="20" viewBox="0 -6.5 36 36" className='opacity-60' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">

          <title>right-arrow</title>
          <desc>go to right</desc>
          <g id="icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="ui-gambling-website-lined-icnos-casinoshunter" transform="translate(-212.000000, -159.000000)" fill="#252528" fillRule="nonzero">
              <g id="square-filled" transform="translate(50.000000, 120.000000)">
                <path d="M187.108012,39.2902857 L197.649804,49.7417043 L197.708994,49.7959169 C197.889141,49.9745543 197.986143,50.2044182 198,50.4382227 L198,50.5617773 C197.986143,50.7955818 197.889141,51.0254457 197.708994,51.2040831 L197.6571,51.2479803 L187.108012,61.7097143 C186.717694,62.0967619 186.084865,62.0967619 185.694547,61.7097143 C185.30423,61.3226668 185.30423,60.6951387 185.694547,60.3080911 L194.702666,51.3738496 L162.99947,51.3746291 C162.447478,51.3746291 162,50.9308997 162,50.3835318 C162,49.8361639 162.447478,49.3924345 162.99947,49.3924345 L194.46779,49.3916551 L185.694547,40.6919089 C185.30423,40.3048613 185.30423,39.6773332 185.694547,39.2902857 C186.084865,38.9032381 186.717694,38.9032381 187.108012,39.2902857 Z M197.115357,50.382693 L186.401279,61.0089027 L197.002151,50.5002046 L197.002252,50.4963719 L196.943142,50.442585 L196.882737,50.382693 L197.115357,50.382693 Z" id="right-arrow">
                </path>
              </g>
            </g>
          </g>
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
