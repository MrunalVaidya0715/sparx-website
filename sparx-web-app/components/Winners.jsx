import React, { useState } from 'react'
import { AiTwotoneTrophy } from 'react-icons/ai'
import { winnersOutdoor } from '../src/winnersOutdoor.js'
const Winners = () => {




  return (
    <div className=' flex flex-col justify-start items-center h-screen w-full'>
      {
        winnersOutdoor.map((item) => {
          return (
            <>
              <div className='flex flex-col items-center justify-between w-full mb-4 px-4 mt-6'>
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


                </div>

                {/**Winners */}

                {
                  item.winners.map((winner) => {
                    return (
                      <>
                        <div className='flex flex-col w-full border-[1px] border-gray-700'>
                          <div className=' flex justify-between gap-2 bg-gray-800/90 items-center w-full'>
                            {/**Ranking */}

                            <div className={`flex w-[25%] ${winner.rank === 1 ? 'text-yellow-400' : winner.rank === 2 ? 'text-gray-200' : 'text-amber-700'} items-center justify-center gap-2`}>
                              <AiTwotoneTrophy size={25} />
                              <p className=' text-md font-bold'>{winner.rank}</p>
                            </div>
                            {/**Name */}
                            <div className='flex w-full h-full py-4 px-2 gap-2 items-center justify-center flex-wrap bg-gray-900/50'>
                              <div>
                                <p className=' text-center font-bold tracking-wider'>{winner.name}</p>
                              </div>
                              <div className=''>
                                <p className=' text-gray-400'>{
                                  winner?.class ? (
                                    <>
                                    ({winner?.class})
                                    </>
                                  ): ''
                                }</p>
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
    </div>
  )
}

export default Winners