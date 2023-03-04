import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import { AiTwotoneTrophy } from 'react-icons/ai'
import { AiTwotoneStar } from 'react-icons/ai'
import {GiTrophiesShelf} from 'react-icons/gi'
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
    const [showPoint, setShowPoint] = useState(false)

    const viewDetails = () => {
        setShowPoint(prev => !prev)
    }

    const rankCol = [
        {
            name: "Place",
            selector: row => row.rank
        },
        {
            name: "Points",
            selector: row => row.points,
            sortable: true,

        },
    ]
    const rankData = [
        {
            rank: 1,
            points: "50 pts"
        },
        {
            rank: 2,
            points: "30 pts"
        },
        {
            rank: 3,
            points: "20 pts"
        },
    ]

    const customStyles = {
        rows: {
            style: {
                backgroundColor: "#252a34",
                color: "white"
            }
        },


    }


    return (
        <div className='py-20  relative  flex flex-col justify-center items-center'>
            <div className=' p-2 flex flex-col justify-center items-center'>
                <h1 className=''>
                    <span className=' tracking-wide text-red-500'>SPARX </span>
                    2023
                    
                </h1>
                <h2 className=' font-light'>Points Table</h2>
                <div className=' mt-4'>
                    <p className=' text-gray-500 text-sm'>[ Last updated on 03-03-2023 ]</p>
                </div>
            </div>
            <div className='  w-[85%] lg:[75%] max-w-[500px] h-[500px] no-scrollbar overflow-y-auto flex flex-col justify-center mt-2  items-center rounded-lg  border-[1px] border-gray-500'>
                <div className=' w-full h-full flex flex-col justify-between items-center'>
                    <div className=' w-full flex items-center justify-between bg-gray-700/50 backdrop-blur-md'>
                        <div className=' w-fit pl-2'>
                            <GiTrophiesShelf size={25}/>
                        </div>
                        <div className='  w-full p-4 ml-2 text-lg lg:text-xl'>
                            <h3 className=' text-gray-600 font-light'>Rank</h3>
                        </div>
                        <div className='  w-full p-2 text-lg lg:text-xl'>
                            <h3 className=' text-gray-600 font-light'>Class</h3>
                        </div>
                        <div className='  w-full p-4 text-lg lg:text-xl'>
                            <h3 className=' text-gray-600 font-light'>Points</h3>
                        </div>
                        {/*Entry */}




                    </div>
                    {
                        data.map((row, index) => (
                            <div key={index} className={
                                row.rank % 2 !== 1 ? ("w-full pl-2 flex items-center justify-between bg-gray-900/50 text-md md:text-lg") :
                                    ("w-full pl-2 flex items-center justify-between bg-gray-900/90 backdrop-blur-sm text-md md:text-lg ")
                            }
                            >
                                <div className={row.rank === 1 ? "text-[#C9B037]" : row.rank === 2 ? "text-[#c0c0c0]" : row.rank === 3 ? "text-[#AD8A56]" : " text-gray-100"}>
                                    {
                                        row.rank === 1 ? <AiTwotoneTrophy /> : row.rank === 2 ? <AiTwotoneTrophy /> : row.rank === 3 ? <AiTwotoneTrophy /> : <AiTwotoneStar className=' text-gray-400' />
                                    }
                                </div>
                                
                                <div className=' ml-10  w-full '>
                                    <p className={
                                        row.rank === 1 ? "text-[#C9B037] font-extrabold" : row.rank === 2 ? "text-[#c0c0c0] font-extrabold" : row.rank === 3 ? "text-[#AD8A56] font-extrabold" : " text-gray-400 ml-[1px]"
                                    }>{row.rank}</p>
                                </div>
                                <div className=' w-full p-4'>
                                    <p className=' text-gray-400 font-medium'>{row.class}</p>
                                </div>
                                <div className=' w-full pl-10 p-4'>
                                    <h3 className=' text-[#e6c098]'>{row.points}</h3>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className=' mt-8'>
                <h3 className=' text-blue-400 tracking-wider cursor-pointer' onClick={viewDetails}>
                    {
                        showPoint ? "Hide Points Details" : " Show Points Details"
                    }
                </h3>
            </div>
            <div className={showPoint ? " mt-4 flex flex-col justify-center items-center" : "hidden"}>
                <DataTable columns={rankCol} data={rankData}
                    customStyles={customStyles}
                >

                </DataTable>
            </div>
        </div>
    )
}

export default points