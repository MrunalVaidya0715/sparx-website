import EventTable from 'components/EventTable'
import React from 'react'
import { Events } from '../events.js'
const schedule = () => {
  return (
    <div className='py-20  flex flex-col justify-center items-center px-4 '>
      <h2 className=' tracking-wider mb-4 font-light '>Schedule</h2>
      <div className=' max-w-[1240px] w-full  flex items-start justify-center'>

        <div className=' flex flex-col justify-center items-center w-full max-w-[720px]'>

          <div className=' flex w-full p-2 flex-col bg-gray-900/90 border-[1px] border-gray-700 rounded-lg backdrop-blur-sm'>
            <div className=' p- flex w-full justify-start items-start '>
              <h2 className=' uppercase font-extralight tracking-wider'>march - 2023</h2>
            </div>
            {/**Upper */}
            <div className=' flex items-end justify-between py-2 px-4 w-full '>

              <div className='px-3 py-1 flex flex-col gap-3 justify-between items-center bg-gray-700/50 rounded-md'>
                <div>
                  <h2 className=' text-[#C84A35]'>15</h2>
                </div>
                <div>
                  <h3 className='text-sm lg:text-xl font-bold tracking-widest uppercase'>WED</h3>

                </div>
              </div>
              <div>
                <h3 className='text-sm lg:text-xl font-thin tracking-wider uppercase'>Venue: XIE Turf</h3>

              </div>
              <div>
                <h3 className='text-sm lg:text-xl font-thin tracking-wider uppercase text-[#e6c098]'>{Events.length} events</h3>
              </div>
            </div>

          </div>
          {/**Lower Table */}
          {/**Entry Header */}
          <div className=' flex items-end justify-between px-4 w-full mt-4 mb-2' >
            {/** Time  */}
            <div className='  w-[50%] justify-center flex'>
              <h3 className=' uppercase text-gray-200 font-light text-xl'>Time</h3>

            </div>
            {/**Events */}
            <div className='  w-full justify-center flex '>
              <h3 className='uppercase text-gray-200 font-light text-xl'>Events</h3>

            </div>
            {/**Nothing */}
            {/* <div className=' border-[1px] border-white w-full '>
              <h2></h2>

            </div> */}

          </div>
          
          <div className=' flex w-full flex-col mb-10'>
          {
            Events.map((event, index) => {
              return (
                <>
                  <EventTable event={event.event} from={event.from} to={event.to} stage={event.stage} gender={event.gender} comp={event?.comp} />
                </>
              )
            })
          }
          </div>






        </div>


      </div>
    </div>

  )
}

export default schedule