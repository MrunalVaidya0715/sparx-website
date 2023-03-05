import Image from 'next/image'
import React from 'react'
import imgMe from '../public/assets/me-back.jpg'
import { AdminsList } from '../src/admins.js'
const Admins = () => {
    return (
        <>
            {
                AdminsList.map((admin) => {
                    return (
                        <>
                            <div className='flex flex-col gap-2 justify-between p-2 items-center w-full'>
                                <Image className='  border-4 border-gray-700/50  object-cover mx-4  w-[8rem] h-[8rem] object-top bg-center rounded-full' src={admin.imgSrc} alt="/" width={150} height={150} />
                                <div>
                                    <p className=' text-[#e6c098] font-semibold '>{admin.name}</p>
                                </div>

                            </div>
                        </>
                    )
                })
            }


        </>
    )
}

export default Admins