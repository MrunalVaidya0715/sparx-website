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
                                    <h2 className=' uppercase text-lg lg:text-xl text-gray-200 text-center'>{head.pos}</h2>
                                </div>
                                <div className=' flex flex-col gap-2 items-center justify-center'>
                                    <div className=''>
                                        <Image className=' border-4 border-gray-700/50 rounded-full  object-cover object-top w-[12rem] h-[12rem]' src={head.imgSrc} alt={head.pos} width={250} height={150} />
                                    </div>
                                    <div className='text-center w-full'>
                                    <p className=' text-[#e6c098] font-semibold '>{head.name}</p>
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