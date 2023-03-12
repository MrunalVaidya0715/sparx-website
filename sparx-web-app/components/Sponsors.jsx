import Image from 'next/image'
import React from 'react'

const Sponsors = () => {

    const sponsors = [
        {
            url: '/assets/sponsors/blackSilver.png'
        },
        {
            url: '/assets/sponsors/goldlink.png'
        },
        {
            url: '/assets/sponsors/uSports.png'
        },
    ]
    return (
        <div className=' flex flex-col w-full justify-center items-center py-4'>
            <h2 className='text-md mb-8 uppercase'>Our Sponsors</h2>
            <div className=' flex w-full gap-4 md:gap-8 justify-center items-center'>
                {
                    sponsors.map((sponsor) => {
                        return (
                            <div className=' flex bg-white'>
                                <Image className=' w-[8rem] h-[6rem] object-contain object-center' src={sponsor.url} alt='/' width={150} height={150} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Sponsors