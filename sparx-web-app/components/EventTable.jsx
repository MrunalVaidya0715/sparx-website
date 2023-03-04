import React from 'react'

const EventTable = ({ event, from, to, gender, stage }) => {
    return (
        <>
            <div className=' flex items-end justify-between px-0 w-full mb-2' >

                {/**TimeSlot */}
                <div className='flex items-center flex-col justify-between bg-gray-900/50 rounded-l-md border-y-[1px] border-l-[1px] border-gray-700 w-[50%] h-[10rem]'>
                    {/**from */}
                    <div className='py-2'>
                        <h3 className=' font-thin tracking-wider uppercase text-gray-200'>{from}</h3>

                    </div>
                    <div>
                        <h3 className=' font-thin tracking-wider uppercase text-gray-500'>|</h3>

                    </div>
                    {/**to */}
                    <div className='py-2'>
                        <h3 className=' font-thin tracking-wider uppercase text-gray-200'>{to}</h3>

                    </div>

                </div>
                {/**Events Slot */}
                <div className='flex items-center flex-col justify-center bg-gray-900/90 rounded-r-md w-full border-y-[1px] border-r-[1px] backdrop-blur-lg border-gray-700  h-[10rem]'>
                    <div>
                        <p className=' uppercase text-gray-500'>({gender})</p>
                    </div>
                    <div className=' uppercase text-[#e6c098]'>
                        <h2>{event}</h2>
                    </div>
                    <div className=' text-gray-300 uppercase mt-2'>
                        <h4>{stage}</h4>
                    </div>


                </div>
            </div>
        </>
    )
}

export default EventTable