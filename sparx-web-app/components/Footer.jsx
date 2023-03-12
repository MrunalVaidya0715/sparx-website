import Link from 'next/link'
import React from 'react'
import { FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className=' text-gray-500 flex w-full justify-center items-center mt-20 bg-gray-900/90 p-4'>
            <p>Developed by: </p>
            <Link href='https://instagram.com/mru.v_?igshid=YmMyMTA2M2Y='>
            <div className=' flex items-center'>
                <p className=' font-thin ml-1 text-gray-400 text-md'><span className=' text-white'> Mrunal Vaidya</span></p>
                <FaInstagram className=' text-white ml-1' size={20} />
            </div>
            </Link>

        </div>
    )
}

export default Footer