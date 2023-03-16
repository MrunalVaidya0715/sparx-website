import React from 'react'

const DayOff = () => {
    return (
        <>

            <div className=' flex items-end justify-between px-0 w-full mb-2' >
                <div className='flex px-4 items-center gap-2 flex-col justify-center bg-gray-900/50 rounded-md border-[1px] border-gray-700 w-full h-[10rem]'>
                    <div>
                        <p className=' text-lg lg:text-2xl font-bold'><span className='  text-yellow-300 mr-1'>Note:</span><span className=' underline underline-offset-4'>Draws will be held at 1:00 pm</span></p>
                    </div>
                    <div>

                        <p className=' text-lg lg:text-2xl'>No Events are Scheduled for Friday</p>
                    </div>
                    <div className=' text-gray-300'>[Date: 17/03/2023]</div>
                </div>

            </div>
        </>
    )
}

export default DayOff