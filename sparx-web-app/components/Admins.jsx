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
                            <div className='flex flex-col gap-4 justify-between p-2 items-center w-full'>
                                <Image className=' object-cover mx-5 object-center rounded-full' src={admin.imgSrc} alt="/" width={150} height={550} />
                                <div>
                                    <p className=' text-[#e6c098] font-semibold tracking-wider'>{admin.name}</p>
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