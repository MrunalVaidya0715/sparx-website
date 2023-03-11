import { CgToggleSquare, CgToggleSquareOff } from 'react-icons/cg'
import WinnersTable from 'components/WinnersTable'
import React, { useState } from 'react'
import Winners from 'components/Winners'

const winners = () => {
  const [isIndoor, setIsIndoor] = useState(true)
  const handleType = () => {
    setIsIndoor(prev => !prev)
  }
  return (
    <div className='py-20 flex flex-col justify-center items-center'>
      <h2 className=' tracking-wider mb-4 font-light '>Winners 2<span className=' text-red-500'>K</span>23</h2>
      {/**Toogle */}
      <div className=' flex gap-2 items-center justify-center'>
        <div className={isIndoor ? '' : 'text-gray-700'}>
          <p>Indoor Sparx</p>
        </div>
        <div onClick={handleType} className=' cursor-pointer'>
          {
            isIndoor ? <CgToggleSquare className=' text-[#BB2649]' size={30} /> : <CgToggleSquareOff className=' text-[#BB2649]' size={30} />
          }
        </div>

        <div className={isIndoor ? 'text-gray-700' : ''}>
          <p>Outdoor Sparx</p>
        </div>

      </div>
      <div className=' max-w-[1240px] w-full flex items-start justify-center'>
        <div className=' flex flex-col justify-center items-center w-full max-w-[720px]'>

          {/**Data loading */}
          <div className=' flex flex-col w-full'>
            {
              isIndoor ? <WinnersTable /> : <Winners />
            }
          </div>



        </div>
      </div>
    </div>
  )
}

export default winners