import Winners from 'components/Winners'
import React from 'react'

const winners = () => {
  return (
    <div className='py-20 flex flex-col justify-center items-center'>
      <h2 className=' tracking-wider mb-4 font-light '>Winners 2<span className=' text-red-500'>K</span>23</h2>
      <div className=' max-w-[1240px] w-full h-screen flex items-start justify-center'>
        <div className=' flex flex-col justify-center items-center w-full max-w-[720px]'>
        <div className=' flex items-end justify-between px-4 w-full mt-4 mb-2' >
        
        <div className='  w-[20%] justify-center flex'>
          <h3 className=' uppercase text-xl text-gray-200 font-light text-md'>Rank</h3>

        </div>
        
        <div className='  w-[70%] justify-center flex '>
          <h3 className='uppercase text-xl text-gray-200 font-light text-md'>Participants</h3>

        </div>
      
        <div className='  w-[30%] justify-center flex '>
          <h3 className='uppercase text-xl text-gray-200 font-light text-md'>Points</h3>

        </div>


      </div>
          {/**Data loading */}
          <Winners />
          <Winners/>
          <Winners/>
          <Winners/>
          <Winners/>
          <Winners/>
          <Winners/>
          <Winners/>
          <Winners/>
          <Winners/>
          <Winners/>
          <Winners/>

          <Winners/>


        </div>
      </div>
    </div>
  )
}

export default winners