import React from 'react'

const EventTable = ({ event, from, to, gender, stage, fixtures }) => {
    return (
        <>
            <div className=' flex items-end justify-between px-0 w-full mb-2' >

                {/**TimeSlot */}
                <div className={`flex items-center flex-col justify-between bg-gray-900/50 rounded-l-md border-y-[1px] border-l-[1px] border-gray-700 w-[50%]  ${fixtures ? 'h-[20rem]' : 'h-[10rem]'}`}>
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
                <div className={`flex items-center flex-col justify-center bg-gray-900/90 rounded-r-md w-full border-y-[1px] border-r-[1px] backdrop-blur-lg border-gray-700 ${fixtures ? 'h-[20rem]' : 'h-[10rem]'}`}>
                    <div>
                        <p className=' uppercase text-gray-500'>({gender})</p>
                    </div>
                    <div className=' uppercase text-[#e6c098]'>
                        <p className=' text-xl lg:text-3xl font-bold tracking-wider'>{event}</p>
                    </div>
                    <div className=' text-gray-300 uppercase'>
                        <h4>{stage}</h4>
                    </div>
                    {
                        fixtures ? (<div className=' uppercase w-full  p-2'>
                            <div className=' w-full bg-gray-700/40 rounded-[4px] p-1 flex flex-col justify-between items-center'>
                                <div className=' mb-2'>
                                    <p className=' underline underline-offset-2'>Fixtures</p>
                                </div>
                                <div className='w-full flex item-center justify-center'>
                                    <div className='w-full flex flex-col'>
                                        {fixtures?.map((match) => {
                                            return (
                                                <div className=' text-gray-300 flex flex-wrap w-full justify-center items-baseline  '>
                                                    <div>
                                                        <p className='  text-sm '>{match.m}.</p>
                                                    </div>
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
                                            )
                                        })}
                                    </div>
                                </div>

                            </div>
                        </div>) : null
                    }


                </div>
            </div>
        </>
    )
}

export default EventTable