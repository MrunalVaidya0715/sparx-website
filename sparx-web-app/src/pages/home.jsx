import Admins from 'components/Admins'
import PointsTable from 'components/PointsTable'
import Slider from 'components/Slider'
import SlideSwiper from 'components/SlideSwiper'
import Table from 'components/Table'
import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'
import img1 from '../../public/assets/me-back.jpg'
const home = () => {
  return (
    <div className=' pt-20 relative   flex flex-col justify-center items-center'>
      {/* <div className=' absolute bottom-4 z-[-50]'>
        <h1 className=' text-red-500 tracking-wider text-9xl'>SPARX</h1>
      </div> */}

      <div className='  w-full'>
        <Slider />
      </div>
      <div className=' max-w-[1240px] w-full h-fit p-4 flex flex-col justify-center items-center'>
        <h1 className=' text-red-500 uppercase'>Sparx </h1>
        <h3 className=' font-light text-lds tracking-wider'>March 6 Onwards</h3>


        <h2 className=' mt-4 text-md mb-8'>Meet our Admins</h2>
        <div className=' max-w-[1024px] w-full overflow-hidden '>
          <Marquee className=" mb-10" loop={false} speed={35} gradient={false} pauseOnHover={true} pauseOnClick={true}>
            <Admins/>
          </Marquee>
        </div>
        
      </div>


    </div>
  )
}

export default home