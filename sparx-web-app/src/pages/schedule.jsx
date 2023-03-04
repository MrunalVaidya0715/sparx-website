import EventTable from 'components/EventTable'
import React from 'react'
import { Events } from '../events.js'
const schedule = () => {
  return (
    <div className='py-20 flex flex-col justify-center items-center'>
      <div className=' max-w-[1240px] w-full h-screen flex items-start justify-center'>
        <div className=' flex flex-col justify-center items-center w-full max-w-[720px]'>
          <h2 className=' tracking-wider '>Schedule</h2>
          <div className=' p-4 flex w-full justify-start items-start mt-4'>
            <h2 className=' uppercase font-extralight tracking-wider'>march - 2023</h2>
          </div>
          {/**Upper */}
          <div className=' flex items-end justify-between py-2 px-4 w-full '>

            <div className=' p-3 flex flex-col justify-between items-center bg-gray-900/90 rounded-md'>
              <div>
                <h1 className=' text-[#C84A35]'>6</h1>
              </div>
              <div>
                <h3 className=' font-thin tracking-wider uppercase'>mon</h3>

              </div>
            </div>
            <div>
              <h3 className=' font-thin tracking-wider uppercase'>Venue: XIE Turf</h3>

            </div>
            <div>
              <h3 className=' font-thin tracking-wider uppercase text-[#e6c098]'>{Events.length} events</h3>
            </div>

          </div>
          {/**Lower Table */}
          {/**Entry Header */}
          <div className=' flex items-end justify-between px-4 w-full mt-4' >
            {/** Time  */}
            <div className='  w-[50%] justify-center flex'>
              <h3 className=' text-gray-500 font-light text-2xl'>Time</h3>

            </div>
            {/**Events */}
            <div className='  w-full justify-center flex '>
              <h3 className=' text-gray-500 font-light text-2xl'>Events</h3>

            </div>
            {/**Nothing */}
            {/* <div className=' border-[1px] border-white w-full '>
              <h2></h2>

            </div> */}

          </div>
          {
            Events.map((event,index)=>{
              return(
                <>
                <EventTable event={event.event} from={event.from} to={event.to} stage={event.stage} gender={event.gender}/>
                </>
              )
            })
          }
         
          




        </div>


      </div>
    </div>

  )
}

export default schedule