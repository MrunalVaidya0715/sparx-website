import Link from 'next/link'
import React from 'react'
import { FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className=' text-gray-600 flex flex-col w-full justify-center items-center mt-20 bg-gray-900/90 p-4'>
            <p className=' text-gray-500'>Quick Links</p>
            <div className='flex  justify-center items-center mb-4'>
                <div className=' flex px-4 flex-wrap w-full gap-4  md:gap-8 justify-center items-center'>
                    <Link href='/'>
                        <p className=' underline underline-offset-2 hover:opacity-[0.4] uppercase text-gray-500'>Home</p>
                    </Link>
                    <Link href='/points'>
                        <p className=' underline underline-offset-2 hover:opacity-[0.4] uppercase text-gray-500'>Points</p>
                    </Link>
                    <Link href='/schedule'>
                        <p className=' underline underline-offset-2 hover:opacity-[0.4] uppercase text-gray-500'>Schedule</p>
                    </Link>
                    <Link href='/photos'>
                        <p className=' underline underline-offset-2 hover:opacity-[0.4] uppercase text-gray-500'>Gallery</p>
                    </Link>
                    <Link href='/winners'>
                        <p className=' underline underline-offset-2 hover:opacity-[0.4] uppercase text-gray-500'>Winners</p>
                    </Link>
                    <Link href='/report'>
                        <p className=' underline underline-offset-2 hover:opacity-[0.4] uppercase text-gray-500'>Report</p>
                    </Link>


                </div>


            </div>
            <div className=' flex'>
                <div>
                    <p>Developed by: </p>
                </div>
                <Link target='_blank' href='https://www.mrunalvaidya.xyz/'>
                    <div className=' flex items-center'>
                        <p className=' underline-offset-2 hover:underline hover:text-white font-thin ml-1 text-gray-400 text-md'><span className=' text-gray-400'> Mrunal Vaidya</span></p>
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default Footer