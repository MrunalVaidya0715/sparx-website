import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
const Slider = () => {
    const slides = [
        {
            url: '/assets/image-4.png',
            desc: "Best Class of Edition 2k22",
        },
        {
            url: '/assets/image-19.png',
            desc: "Best Male Athlete 2k22 ",
        },
        {
            url: '/assets/image-20.png',
            desc: "Best Female Athlete 2k22",
        },

        {
            url: '/assets/image-0.png',
            desc: "Admins",
        },
        {
            url: '/assets/image-7.png',
            desc: "Sparx Inaugration 2k23",
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const autoc = () => {
        nextSlide()


    }
    useEffect(() => {
        const intervalId = setTimeout(autoc, 3000)
        return () => clearTimeout(intervalId)

    }, [currentIndex])

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className=' flex flex-col justify-center items-center'>
            <div className=' max-w-[1024px] h-[22rem] md:h-[22rem] lg:h-[30rem] xl:h-[32rem] px-2 w-full flex flex-col justify-center items-center relative group'>
                <div
                    style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                    className='w-full relative h-full rounded-lg bg-center bg-cover duration-500 flex items-center justify-center'
                >
                    <div className=' absolute bottom-1 p-1 px-2 bg-black/50 rounded-md backdrop-blur-sm'>
                        <h2 className=' font-thin'>{`${slides[currentIndex].desc}`}</h2>
                    </div>


                </div>
                {/* Left Arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>
                {/* Right Arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
                <div className='flex top-4 justify-center py-2'>
                    {slides.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className='text-2xl cursor-pointer'
                        >
                            <RxDotFilled className={`${currentIndex === slideIndex ? "text-blue-500" : ""}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Slider