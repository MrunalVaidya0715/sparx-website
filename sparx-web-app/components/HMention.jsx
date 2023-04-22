import React from 'react'
import shailesh from '../public/assets/sponsors/Shailesh2.png'
import arjun from '../public/assets/sponsors/Arjun1.png'
import Image from 'next/image'
const HMention = () => {
    return (
        <>
            <div className='flex flex-col w-full justify-center items-center'>
                <h2 className='mt-12  text-md mb-8 uppercase text-center'>Honorable Mention</h2>
                {/**Images */}
                <div className='flex flex-col md:flex-row w-full justify-center gap-4 md:gap-16'>
                <div className=' flex flex-col gap-2 items-center justify-center'>
                    <div className=''>
                        <Image className=' border-4 border-[#e6c098] rounded-full  object-cover object-top w-[12rem] h-[12rem]' src={shailesh} alt='/' width={250} height={150} />
                    </div>
                    <div className='text-center w-full'>
                        <p className=' text-red-600 text-lg tracking-widest font-extrabold uppercase '>Organizer</p>
                    </div>
                </div>
                <div className=' flex flex-col gap-2 items-center justify-center'>
                    <div className=''>
                        <Image className=' border-4 border-[#e6c098] rounded-full  object-cover object-top w-[12rem] h-[12rem]' src={arjun} alt='/' width={250} height={150} />
                    </div>
                    <div className='text-center w-full'>
                        <p className=' text-red-600 text-lg tracking-widest font-extrabold uppercase '>Designer</p>
                    </div>
                </div>
                </div>
            </div>

        </>
    )
}

export default HMention