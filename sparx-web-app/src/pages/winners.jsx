import Winners from 'components/Winners'
import React from 'react'

const winners = () => {
  return (
    <div className='py-20 flex flex-col justify-center items-center'>
      <h2 className=' tracking-wider mb-4 font-light '>Winners 2<span className=' text-red-500'>K</span>23</h2>
      <div className=' max-w-[1240px] w-full h-screen flex items-start justify-center'>
        <div className=' flex flex-col justify-center items-center w-full max-w-[720px]'>
          
          {/**Data loading */}
          <Winners />
          <Winners />
          <Winners />
          <Winners />
          <Winners />
          <Winners />
          <Winners />
          <Winners />
          <Winners />
          <Winners />
          <Winners />
          <Winners />

          <Winners />


        </div>
      </div>
    </div>
  )
}

export default winners