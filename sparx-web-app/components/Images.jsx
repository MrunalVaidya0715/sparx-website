import Image from 'next/image.js'
import React from 'react'
import { Photos } from '../src/images.js'
import Img0 from '../public/assets/image-0.png'
const Images = ({getImg}) => {
    return (
        <>
            {
                Photos.map((photo, index) => {
                    return (
                        <div key={index} className=" flex justify-center items-center object-contain overflow-hidden cursor-pointer hover:opacity-[0.8] transition-all ease-in duration-150" onClick={() => getImg(photo.imgSrc)}>
                            <Image className=' hover:scale-110 object-cover object-center h-[18rem] w-[30rem] transition-all ease-in duration-200 rounded-md' src={photo.imgSrc} alt="/" width={480} height={300} quality={50} />
                        </div>
                    )
                })
            }



        </>
    )
}

export default Images