import PointsTable from 'components/PointsTable'
import Slider from 'components/Slider'
import SlideSwiper from 'components/SlideSwiper'
import Table from 'components/Table'
import React from 'react'

const home = () => {
  return (
    <div className=' py-20 relative  flex flex-col justify-center items-center'>
      {/* <div className=' absolute bottom-4 z-[-50]'>
        <h1 className=' text-red-500 tracking-wider text-9xl'>SPARX</h1>
      </div> */}
     
      <div className='  w-full'>
        <Slider />
      </div>
      <div className=' max-w-[1240px] w-full h-fit p-4 flex flex-col justify-center items-center'>
        <h1>Sparx </h1>
        <h3>March 6 - March 30</h3>
        <PointsTable/>
        <Table/>
      </div>
    </div>
  )
}

export default home