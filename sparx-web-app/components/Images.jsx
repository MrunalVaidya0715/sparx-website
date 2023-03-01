import React from 'react'
import { Photos } from '../src/images.js'
const Images = ({getImg}) => {
    return (
        <>
            {
                Photos.map((photo, index) => {
                    return (
                        <div key={index} className=" flex justify-center items-center object-contain overflow-hidden cursor-pointer hover:opacity-[0.8] transition-all ease-in duration-150" onClick={() => getImg(photo.imgSrc)}>
                            <img className=' hover:scale-110 object-cover object-center h-[18rem] w-[30rem] transition-all ease-in duration-200' src={photo.imgSrc} alt="/" />
                        </div>
                    )
                })
            }



        </>
    )
}

export default Images