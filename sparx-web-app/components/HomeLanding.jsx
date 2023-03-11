import Link from 'next/link'
import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { SlBookOpen } from 'react-icons/sl'
import Slider from './Slider'

const HomeLanding = () => {
    const brochure = 'https://firebasestorage.googleapis.com/v0/b/fileupload-ff0a8.appspot.com/o/Sparx%20brochure%202022-23.pdf?alt=media&token=2e066469-306d-4bef-bae1-73a84fd71290'
    return (
        <div className=' w-full flex flex-col justify-between items-center'>
            <div className=' pt-20  w-full'>
                <Slider />
            </div>
            <div className=' max-w-[1240px] w-full h-fit p-4 flex flex-col justify-center items-center'>
                <h2 className=' text-red-500 uppercase'>Sparx </h2>
                <h3 className=' font-light text-yellow-200 text-lg tracking-wider'>13th Match Onwards</h3>
                <div className=' flex w-full justify-center items-center gap-8 mt-2'>
                <Link href="https://instagram.com/sparx.2023?igshid=YmMyMTA2M2Y=">
                    <div className='rounded-full bg-gray-700/50 text-white border-[1px] border-gray-700 p-3 cursor-pointer ease-in duration-300'>
                      <FaInstagram size={24} className="hover:scale-125 transition-all ease-in duration-150" />
                    </div>
                  </Link>

                  <Link href={brochure} download>
                    <div className='rounded-full bg-gray-700/50 border-[1px] border-gray-700 text-white p-3 cursor-pointer ease-in duration-300'>
                      <SlBookOpen size={24} className="hover:scale-125 transition-all ease-in duration-150" />
                    </div>
                  </Link>


                </div>



            </div>
        </div>
    )
}

export default HomeLanding