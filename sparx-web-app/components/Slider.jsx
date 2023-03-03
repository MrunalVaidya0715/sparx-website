import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import img1 from '../public/assets/inaug/image-1.png'
import { Photos } from '../src/images.js'
const Slider = () => {
    const slides = [
        {
            url: {img1},
        },
        {
            url: 'https://miro.medium.com/max/1135/1*E5VQSUDJZ-mfc_G7NkIZIw.png',
        },
        {
            url: 'https://blog.openreplay.com/static/3151737dc09dd5b114f55155f1e0aa66/6050d/hero.png',
        },

        {
            url: 'https://codingmasterweb.com/wp-content/uploads/2021/11/Copy-of-Copy-of-for-thumbnail.png',
        },
        {
            url: 'https://bestof.nyc3.digitaloceanspaces.com/devsnap.me/codepen-YNmWay.png',
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const autoc = () => {
        nextSlide()


    }
    useEffect(() => {
        const intervalId = setTimeout(autoc, 1000)
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
                    className='w-full h-full rounded-lg bg-center bg-cover duration-500'
                >
                    
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