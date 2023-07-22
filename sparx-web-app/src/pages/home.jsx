
import HomeLanding from 'components/HomeLanding'
import HomeMembers from 'components/HomeMembers'
import Sponsors from 'components/Sponsors'
import React from 'react'

const home = () => {
  return (
    <div className=' flex flex-col justify-center items-center'>

      <HomeLanding/>
      
      <div className=' max-w-[1240px] w-full h-fit p-4 flex flex-col justify-center items-center'>
        <p className=' mt-12 mb-6 text-3xl md:text-6xl font-bold text-[#e6c098] tracking-wider uppercase'>Team Sparx 2k23</p>
        <HomeMembers />
        <Sponsors/>
      </div>


    </div>
  )
}

export default home