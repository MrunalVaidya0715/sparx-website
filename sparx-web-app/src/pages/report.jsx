import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiSolidBarChartAlt2 } from 'react-icons/bi'
import summ from '../../public/assets/report/sparxVisualSummary.png'
const report = () => {
    const reportUrl = 'https://firebasestorage.googleapis.com/v0/b/fileupload-ff0a8.appspot.com/o/SPARX%20MAIN%20REPORT%202022-23.pdf?alt=media&token=c07e8611-d889-4dc2-80be-e2d8bef1d68c'
    return (
        <div className='pt-24 flex flex-col gap-4 items-center w-full min-h-screen'>
            <h2 className=' tracking-wider mb-4 font-light '>Report 2<span className=' text-red-500'>K</span>23</h2>
            <Link target='_blank' href={reportUrl} download>
                <div className='group flex w-full gap-1 items-center rounded-full bg-gray-700/50 border-[1px] border-gray-700 text-white px-4 py-3 ease-in duration-300'>
                    <BiSolidBarChartAlt2 size={22} className=" group-hover:text-yellow-400  hover:scale-125 transition-all ease-in duration-150" />
                    <p className=' group-hover:text-yellow-400 transition-all ease-in duration-150'>View Report</p>
                </div>

            </Link>
            <div className=' mt-8 p-2'>
                <Image src={summ} alt='summary' priority />
            </div>
        </div>
    )
}

export default report