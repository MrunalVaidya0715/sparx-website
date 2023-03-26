import React from 'react'

const EventTable = ({ event, from, to, gender, stage, fixtures }) => {
    return (
        <>
            <div className=' flex flex-col justify-center items-center mb-2'>
                <div className=' flex items-end justify-between px-0 w-full' >

                    {/**TimeSlot */}
                    <div className={`flex items-center flex-col justify-between bg-gray-900/50 ${fixtures? 'rounded-tl-md': 'rounded-l-md'}  border-y-[1px] border-l-[1px] border-gray-700 w-[50%]  ${fixtures ? 'h-[10rem]' : 'h-[10rem]'}`}>
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
                    <div className={`flex items-center flex-col justify-center bg-gray-900/90 ${fixtures? 'rounded-tr-md': 'rounded-r-md'} w-full border-y-[1px] border-r-[1px] backdrop-blur-lg border-gray-700 ${fixtures ? 'h-[10rem]' : 'h-[10rem]'}`}>
                        <div>
                            <p className=' uppercase text-gray-500'>({gender})</p>
                        </div>
                        <div className=' uppercase text-[#e6c098]'>
                            <p className=' text-xl lg:text-3xl text-justify font-bold tracking-wider'>{event}</p>
                        </div>
                        <div className=' text-gray-300 uppercase'>
                            <h4>{stage}</h4>
                        </div>




                    </div>

                </div>
                {/**Fixtures */}
                {
                    fixtures ? (<div className='border-[1px] border-t-0 overflow-hidden border-gray-600 rounded-bl-md rounded-br-md uppercase w-full mb-4'>
                        <div className=' w-full bg-gray-800 rounded-[4px] flex flex-col justify-between items-center'>
                            <div className=' mb-2 bg-blue-900 w-full p-2 flex justify-center border-b-[1px] border-gray-700 '>
                                <p className=''>Fixtures</p>
                            </div>
                            <div className='w-full flex item-center justify-center items-center'>
                                <div className='flex flex-col gap-1'>
                                    {fixtures?.map((match) => {
                                        return (
                                            <div className=' text-gray-300 gap-2 px-4 pb-2 flex flex-wrap justify-start items-baseline  '>
                                                <div className=' flex '>
                                                    <p className='  text-sm '>{match.m}.</p>
                                                </div>
                                                <div className=' flex flex-wrap justify-start gap-2'>
                                                    <div>
                                                        <p>{match.t1}</p>
                                                    </div>
                                                    <div>
                                                        <p className=' text-red-300 lowercase mx-1' >vs</p>
                                                    </div>
                                                    <div>
                                                        <p>{match.t2}</p>
                                                    </div>
                                                </div>




                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                        </div>
                    </div>) : null
                }
            </div>
        </>
    )
}

export default EventTable