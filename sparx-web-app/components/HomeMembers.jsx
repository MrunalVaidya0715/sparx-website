import React from 'react'
import Marquee from 'react-fast-marquee'
import Admins from './Admins'
import Heads from './Heads'
import HMention from './HMention'

const HomeMembers = () => {
  return (
    <>

      <h2 className=' mt-4 text-md mb-8 uppercase'>Secretaries</h2>
      <div className='max-w-[1024px] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        <Heads />
      </div>
      <h2 className=' mt-12 text-md mb-8 uppercase'>Meet our Admins</h2>
      <div className=' max-w-[1024px] flex w-full overflow-hidden '>
        <Marquee loop={false} speed={35} gradient={false} pauseOnHover={true} pauseOnClick={true}>
          <div className=' flex'>
            <Admins />
          </div>
        </Marquee>
      </div>
      <div className=' max-w-[1024px] w-full  '>
        <HMention />
      </div>

    </>
  )
}

export default HomeMembers