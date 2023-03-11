import React, { useState } from 'react'
import { MdExpandMore, MdExpandLess } from 'react-icons/md'
import { AiTwotoneTrophy } from 'react-icons/ai'
import { winnersList } from '../src/winnersData.js'
const WinnersTable = () => {


    const [view, setView] = useState(true)
    const handleView = () => {
        setView(prev => !prev)
    }


    return (
        <>
            {
                winnersList.map((item) => {
                    return (
                        <>
                            <div className=' flex flex-col items-center justify-between w-full mb-4 px-4 mt-6'>
                                {/**SportsName */}
                                <div className=' flex items-baseline justify-between w-full'>
                                    {/**No, Sports */}
                                    <div className=' flex items-baseline gap-2 justify-start w-full mb-2'>
                                        <div>
                                            <h3>{item.id}.</h3>
                                        </div>
                                        <div>
                                            <p className='text-[#e6c098] text-xl font-bold'>{item.sports}</p>
                                        </div>
                                    </div>
                                    {/**hide/View */}
                                    {/* <div onClick={handleView} className=' flex w-[35%] justify-end items-center cursor-pointer'>
                                <p className=' text-blue-500 text-sm'>{view ? 'Hide' : 'Show'} Winners</p>
                                {view ? <MdExpandLess /> : <MdExpandMore />}

                            </div> */}

                                </div>

                                {/**Winners */}
                                {/**Loop the winners */}
                                {
                                    item.winners.map((winner) => {
                                        return (
                                            <>
                                                <div className='flex flex-col w-full border-[1px] border-gray-700'>
                                                    <div className=' flex justify-between gap-2 bg-gray-800/90 items-center w-full'>
                                                        {/**Ranking */}
                                                        <div className={ winner.rank === 1? 'flex w-[25%] text-yellow-400 items-center justify-center gap-2' : winner.rank === 2 ? 'flex w-[25%] text-gray-200 items-center justify-center gap-2': 'flex text-amber-700 w-[25%] items-center justify-center gap-2'}>
                                                            <AiTwotoneTrophy size={25} />
                                                            <p className=' text-md font-bold'>{winner.rank}</p>
                                                        </div>
                                                        {/**Name */}
                                                        <div className='flex w-full h-full py-4 px-2 gap-2 items-center justify-center flex-wrap bg-gray-900/50'>
                                                            <div>
                                                                <p className=' text-center font-bold tracking-wider'>{winner.name}</p>
                                                            </div>
                                                            <div className=''>
                                                                <p className=' text-gray-400'>({winner.class})</p>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>
                                            </>
                                        )
                                    })
                                }





                            </div>
                        </>

                    )
                })
            }
        </>
    )
}

export default WinnersTable