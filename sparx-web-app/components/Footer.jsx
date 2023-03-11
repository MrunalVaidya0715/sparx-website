import Link from 'next/link'
import React from 'react'
import { FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className=' flex w-full justify-center items-center mt-20 bg-[#bb2649] p-4'>
            <Link href='https://instagram.com/mru.v_?igshid=YmMyMTA2M2Y='>
            <div className=' cursor-pointer flex items-center'>
                <p className=' font-thin text-gray-400 text-md'>Developed by: <span className=' text-white'>Mrunal Vaidya</span></p>
                <FaInstagram className=' text-white ml-1' size={20} />
            </div>
            </Link>

        </div>
    )
}

export default Footer