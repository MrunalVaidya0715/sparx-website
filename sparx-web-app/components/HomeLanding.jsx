import React from 'react'
import Slider from './Slider'

const HomeLanding = () => {
    return (
        <div className=' w-full py-20 h-screen flex flex-col justify-between items-center'>
            <div className=' w-full'>
                <Slider />
            </div>
            <div className=' max-w-[1240px] w-full h-fit p-4 flex flex-col justify-center items-center'>
                <h1 className=' text-red-500 uppercase'>Sparx </h1>
                <h3 className=' font-light text-lds tracking-wider'>March 6 Onwards</h3>



            </div>
        </div>
    )
}

export default HomeLanding