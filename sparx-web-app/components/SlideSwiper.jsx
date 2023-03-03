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
import Img0 from '../public/assets/image-1.png'
import Image from 'next/image';
const SlideSwiper = () => {
    SwiperCore.use([Autoplay])
    return (
        <Swiper className=' border-2 border-white flex flex-col items-center justify-center'
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 1000,
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
                    <Image className=' object-cover object-center h-[28rem] w-full' src={photo.imgSrc} alt="/" width={550} height={300}/>

                </SwiperSlide>
            ))
        }
    

            
        </Swiper>
    )
}

export default SlideSwiper