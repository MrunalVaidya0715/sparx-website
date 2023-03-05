import { Navigation, Pagination, Scrollbar, A11y, EffectCreative, EffectCube } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Photos} from '../src/images.js'
import React from 'react'
import Image from 'next/image';
const SlideSwiper = () => {
    SwiperCore.use([Autoplay])
    return (
        <Swiper className=' rounded-full max-w-[1080px] flex flex-col items-center justify-center'
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            loop={true}
            autoplay={{
                delay: 5000,
            }}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            
            
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
        {
            Photos.map((photo)=>(
                <SwiperSlide key={photo.id} className=" flex items-center justify-center">
                    <Image className=' object-cover object-center h-[28rem] w-full' src={photo.imgSrc} alt="/" width={50} height={30}/>

                </SwiperSlide>
            ))
        }
    

            
        </Swiper>
    )
}

export default SlideSwiper