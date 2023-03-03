import React from 'react'
import { AiTwotoneTrophy } from 'react-icons/ai'
import { AiTwotoneStar } from 'react-icons/ai'
const points = () => {
    const data = [
        {
            rank: 1,
            class: "SE CS",
            points: 85,
        },
        {
            rank: 2,
            class: "SE IT",
            points: 25,
        },
        {
            rank: 3,
            class: "SE EXTC",
            points: 0,
        },
        {
            rank: 4,
            class: "TE CS",
            points: 10,
        },
        {
            rank: 5,
            class: "TE IT",
            points: 95,
        },
        {
            rank: 6,
            class: "TE EXTC",
            points: 75,
        },
        {
            rank: 7,
            class: "BE CS",
            points: 20,
        },
        {
            rank: 8,
            class: "BE IT",
            points: 90,
        },
        {
            rank: 9,
            class: "BE EXTC",
            points: 10,
        },
    ]

    const viewDetails = () => {
        console.log("Hello")
    }


    return (
        <div className='py-20  relative  flex flex-col justify-center items-center'>
            <div className=' p-2 flex flex-col justify-center items-center'>
                <h2>SPARX 2023 Points Table</h2>
                <div className=' mt-4'>
                    <p className=' text-gray-500 text-sm'>[ Last updated on 03-03-2023 ]</p>
                </div>
            </div>
            <div className='  w-[90%] lg:[75%] max-w-[500px] h-[500px] no-scrollbar overflow-y-auto flex flex-col justify-center mt-2  items-center rounded-lg  border-[1px] border-gray-500'>
                <div className=' w-full h-full flex flex-col justify-between items-center'>
                    <div className=' w-full pl-0 flex items-center justify-between bg-[#15181E]/80'>
                        <div className=' p-2'>

                        </div>
                        <div className='  w-[50%] p-2'>
                            <h3>Rank</h3>
                        </div>
                        <div className='  w-full p-2'>
                            <h3>Class</h3>
                        </div>
                        <div className='  w-full p-2'>
                            <h3>Points</h3>
                        </div>
                        {/*Entry */}




                    </div>
                    {
                        data.map((row, index) => (
                            <div key={index} className={
                                row.rank === 1 ? ("w-full pl-2 flex items-center justify-between bg-gray-700 py-8 text-xl") :
                                    ("w-full pl-2 flex items-center justify-between bg-[#252a34] py-2 border-t-[1px] border-gray-400")
                            }>
                                <div className={row.rank === 1 ? "text-[#C9B037] font-extrabold" : row.rank === 2 ? "text-[#c0c0c0] font-extrabold" : row.rank === 3 ? "text-[#AD8A56] font-extrabold" : " text-gray-400 ml-[1px]"}>
                                    {
                                        row.rank === 1 ? <AiTwotoneTrophy /> : row.rank === 2 ? <AiTwotoneTrophy /> : row.rank === 3 ? <AiTwotoneTrophy /> : <AiTwotoneStar className=' text-gray-700' />
                                    }
                                </div>
                                <div className='  w-[50%] p-2'>
                                    <p className={
                                        row.rank === 1 ? "text-[#C9B037] font-extrabold" : row.rank === 2 ? "text-[#c0c0c0] font-extrabold" : row.rank === 3 ? "text-[#AD8A56] font-extrabold" : " text-gray-400 ml-[1px]"
                                    }>{row.rank}</p>
                                </div>
                                <div className='  w-full p-2'>
                                    <p>{row.class}</p>
                                </div>
                                <div className='  w-full p-2'>
                                    <h3>{row.points}</h3>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className=' mt-8'>
                <h3 className=' text-blue-400 tracking-wider cursor-pointer' onClick={viewDetails}>View Points Details</h3>
            </div>
        </div>
    )
}

export default points