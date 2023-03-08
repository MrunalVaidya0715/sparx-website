import Winners from 'components/Winners'
import React from 'react'

const winners = () => {
  return (
    <div className='py-20 flex flex-col justify-center items-center'>
        <h2 className=' tracking-wider mb-4 font-light '>Winners 2<span className=' text-red-500'>K</span>23</h2>
        <Winners/>
    </div>
  )
}

export default winners