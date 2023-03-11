import React, { useState } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { BsArrowBarUp } from 'react-icons/bs'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

const Winners = () => {
  const [view, setView] = useState(true)

  const handleView = () => {
    setView(prev => !prev)

  }

  return (
    <div className=' flex flex-col justify-between mx-4 mb-8 w-full'>
      {/**SportsName */}
      <div className=' flex justify-between  w-full '>
        <div className=' flex items-baseline justify-start gap-2 px-4 w-full mb-2' >
          <div className=' flex  justify-start items-center'>
            <h3 className='text-white'>1.</h3>
          </div>
          <div className=' flex  justify-start items-center'>
            <h2 className='text-[#e6c098]'>Chess</h2>
          </div>

        </div>
        <div onClick={handleView} className=' flex w-full justify-end pr-4 items-center cursor-pointer'>
          <p className='text-blue-500 font-thin'>{view? 'hide': 'view'} winners</p>{
            view ? <MdKeyboardArrowUp className='text-blue-500' /> : <MdKeyboardArrowDown className='text-blue-500' />
          }
        </div>
      </div>

      {/* <div className={view ? ' flex items-end justify-between px-4 w-full mt-4 mb-2' : 'hidden'} >
        
        <div className='  w-[20%] justify-center flex'>
          <h3 className=' uppercase text-gray-200 font-light text-md'>Rank</h3>

        </div>
        
        <div className='  w-[70%] justify-start pl-4 flex '>
          <h3 className='uppercase text-gray-200 font-light text-md'>Participants</h3>

        </div>
      
        <div className='  w-[30%] justify-center flex '>
          <h3 className='uppercase text-gray-200 font-light text-md'>Points</h3>

        </div>


      </div> */}

      {/**Table */}
      <div className={view ? ' flex items-end justify-between px-4 w-full mb-2' : 'hidden'} >


        {/**Rank */}
        <div className='flex items-center flex-col justify-between bg-gray-900/50 rounded-l-md border-y-[1px] border-l-[1px] border-gray-700 w-[20%] h-[10rem]'>
          {/**from */}
          <div className='py-2'>
            <h3 className=' font-thin tracking-wider uppercase text-gray-200'>1</h3>

          </div>
          <div>
            <h3 className=' font-thin tracking-wider uppercase text-gray-200'>2</h3>

          </div>
          {/**to */}
          <div className='py-2'>
            <h3 className=' font-thin tracking-wider uppercase text-gray-200'>3</h3>
          </div>
        </div>

        {/**Rank */}
        <div className='flex items-start px-4 flex-col justify-between bg-gray-700/50  border-y-[1px] border-gray-700 w-[70%] h-[10rem]'>
          {/**from */}
          <div className='py-2'>
            <h3 className=' font-bold tracking-wider text-gray-200'>Atharva <span className=' text-gray-400 font-thin'>(SE-COMPS)</span></h3>

          </div>
          <div>
            <h3 className=' font-bold tracking-wider text-gray-200'>Sumeet <span className=' text-gray-400 font-thin'>(BE-EXTC)</span></h3>

          </div>
          {/**to */}
          <div className='py-2'>
            <h3 className=' font-bold tracking-wider text-gray-200'>Chirac <span className=' text-gray-400 font-thin'>(TE-EXTC)</span></h3>
          </div>
        </div>

        {/**Rank */}
        {/* <div className='flex items-center px-2 flex-col justify-between bg-gray-900/50  border-y-[1px] border-r-[1px] rounded-r-md border-gray-700 w-[40%] h-[10rem]'>
         
          <div className='py-2'>
            <h3 className=' font-thin text-sm tracking-wider uppercase text-gray-200'>(SE-COMPS)</h3>

          </div>
          <div>
            <h3 className=' font-thin text-sm tracking-wider uppercase text-gray-200'>(BE-EXTC)</h3>

          </div>
 
          <div className='py-2'>
            <h3 className=' font-thin text-sm tracking-wider uppercase text-gray-200'>(TE-EXTC)</h3>
          </div>
        </div> */}

        {/**Rank */}
        <div className='flex items-center px-2 flex-col justify-between bg-gray-900/50 rounded-r-md border-y-[1px] border-r-[1px] border-gray-700 w-[30%] h-[10rem]'>

          <div className='py-2'>
            <h3 className=' font-bold text-lg tracking-wider text-gray-200'><span className='text-[#e6c098]'>50</span><span className=' font-thin text-sm text-gray-500'>pts</span></h3>

          </div>
          <div>
            <h3 className=' font-bold text-lg tracking-wider text-gray-200'><span className='text-[#e6c098]'>30</span><span className=' font-thin text-sm text-gray-500'>pts</span></h3>

          </div>

          <div className='py-2'>
            <h3 className=' font-bold text-lg tracking-wider text-gray-200'><span className='text-[#e6c098]'>20</span><span className=' font-thin text-sm text-gray-500'>pts</span></h3>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Winners