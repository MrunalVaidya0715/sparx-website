import Link from 'next/link'
import React from 'react'
import { FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className=' text-gray-600 flex flex-col w-full justify-center items-center mt-20 bg-gray-900/90 p-4'>
            <p className=' text-gray-500'>Quick Links</p>
            <div className='flex  justify-center items-center mb-4'>
                <div className=' flex flex-wrap w-full gap-4  md:gap-8 justify-start items-center'>
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


                </div>


            </div>
            <div className=' flex'>
                <p>Designed & Developed by: </p>
                <Link href='https://instagram.com/mru.v_?igshid=YmMyMTA2M2Y='>
                    <div className=' flex items-center'>
                        <p className=' font-thin ml-1 text-gray-400 text-md'><span className=' text-gray-400'> Mrunal Vaidya</span></p>
                        <FaInstagram className=' text-white ml-1' size={20} />
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default Footer