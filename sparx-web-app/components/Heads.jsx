import Image from 'next/image'
import React from 'react'
import { SparxHeads } from '../src/admins.js'
const Heads = () => {
    return (
        <>
            {
                SparxHeads.map((head, index) => {
                    return (
                        <>
                            <div className='w-full h-full flex flex-col py-4 gap-4 items-center justify-between' >
                                <div className='text-center w-full'>
                                    <h2 className=' uppercase text-sm lg:text-xl text-gray-200 text-center'>{head.pos}</h2>
                                </div>
                                <div className=' flex flex-col gap-2 items-center justify-center'>
                                    <div className=''>
                                        <Image className=' rounded-full  object-cover object-top w-[8rem] md:w-[10rem] h-[8rem] md:h-[10rem]' src={head.imgSrc} alt={head.pos} width={250} height={150} />
                                    </div>
                                    <div className='text-center w-full'>
                                        <h2 className=' text-sm lg:text-lg text-yellow-200 text-center'>{head.name}</h2>
                                    </div>
                                </div>


                            </div>
                        </>
                    )
                })
            }
        </>
    )
}

export default Heads