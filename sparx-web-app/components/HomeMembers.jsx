import React from 'react'
import Marquee from 'react-fast-marquee'
import Admins from './Admins'
import Heads from './Heads'

const HomeMembers = () => {
  return (
    <>
    <h2 className=' mt-4 text-md mb-8'>Secretaries</h2>
        <div className='max-w-[1024px] w-full gap-2 md:gap-4 flex justify-center items-center'>
          <Heads />
        </div>
        <h2 className=' mt-8 text-md mb-8'>Meet our Admins</h2>
        <div className=' max-w-[1024px] w-full overflow-hidden '>
          <Marquee className=" mb-10" loop={false} speed={35} gradient={false} pauseOnHover={true} pauseOnClick={true}>
            <Admins />
          </Marquee>
        </div>
    </>
  )
}

export default HomeMembers