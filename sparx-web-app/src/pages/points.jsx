import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import { AiTwotoneTrophy } from 'react-icons/ai'
import { AiTwotoneStar } from 'react-icons/ai'
import { GiTrophiesShelf } from 'react-icons/gi'
const points = () => {

    const data = [
        {
            rank: 1,
            class: "TE-IT",
            points: 330,


        },
        {
            rank: 2,
            class: "SE-COMPS",
            points: 220,


        },
        {
            rank: 3,
            class: "TE-EXTC",
            points: 130,


        },
        {
            rank: 4,
            class: "TE-COMPS",
            points: 120,

        },
        {
            rank: 5,
            class: "SE-EXTC",
            points: 50,

        },
        {
            rank: 6,
            class: "BE-EXTC",
            points: 30,

        },
        {
            rank: 7,
            class: "SE-IT",
            points: 20,


        },
        {
            rank: 8,
            class: "BE-COMPS",
            points: 0,


        },
        {
            rank: 9,
            class: "BE-IT",
            points: 0,

        },
        {
            rank: 10,
            class: "FE-A",
            points: 0,

        },
        {
            rank: 11,
            class: "FE-B",
            points: 0,

        },
        {
            rank: 12,
            class: "FE-C",
            points: 0,

        },
        {
            rank: 13,
            class: "FE-D",
            points: 0,

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
        head: {
            style: {
                color: "black",

            }
        }


    }


    return (
        <div className='py-20 flex flex-col justify-center items-center'>
            <div className=' p-2 flex flex-col justify-center items-center'>
                <h1 className=''>
                    <span className=' tracking-wide text-red-500'>SPARX </span>
                    2<span className=' text-red-500'>K</span>23

                </h1>
                <h2 className=' font-light'>Points Table</h2>
                <div className=' mt-4'>
                    <p className=' text-gray-500 text-sm'>[ Last updated on 10-03-2023 ]</p>
                </div>
            </div>
            <div className='  w-[90%] lg:w-[75%] max-w-[500px] overflow-hidden flex flex-col justify-center mt-2  items-center rounded-lg  border-[1px] border-gray-500'>
                <div className=' w-full h-full flex flex-col justify-between items-center'>
                    <div className=' w-full flex items-center justify-between bg-gray-700/50'>

                        <div className='flex justify-center w-[50%] p-4  text-lg lg:text-xl'>
                            <h3 className=' text-gray-200 font-light'>Rank</h3>
                        </div>
                        <div className=' flex justify-center w-full p-4 text-lg lg:text-xl'>
                            <h3 className=' text-gray-200 font-light'>Class</h3>
                        </div>
                        <div className=' flex justify-center w-[40%] p-4 text-lg lg:text-xl'>
                            <h3 className=' text-gray-200 font-light'>Points</h3>
                        </div>
                        {/*Entry */}




                    </div>
                    {
                        data.map((row, index) => (
                            <div key={index} className={
                                row.rank % 2 !== 1 ? ("w-full px-1 flex items-center justify-between bg-gray-900/50 text-md md:text-lg") :
                                    ("w-full px-1 flex items-center justify-between bg-gray-900/90 text-md md:text-lg ")
                            }
                            >
                                <div className=' p-4 flex w-[50%] items-center justify-center'>
                                    <div className={row.rank === 1 ? "text-yellow-400" : row.rank === 2 ? "text-gray-200" : row.rank === 3 ? "text-amber-700" : " text-gray-100"}>
                                        {
                                            row.rank === 1 ? <AiTwotoneTrophy size={25} /> : row.rank === 2 ? <AiTwotoneTrophy size={25} /> : row.rank === 3 ? <AiTwotoneTrophy size={25} /> : <AiTwotoneStar size={25} className=' text-gray-400' />
                                        }
                                    </div>

                                    <div className=' ml-2 flex justify-center '>
                                        <p className={
                                            row.rank === 1 ? "text-yellow-400 font-extrabold" : row.rank === 2 ? "text-gray-200 font-extrabold" : row.rank === 3 ? " text-amber-700 font-extrabold" : " text-gray-400 ml-[1px]"
                                        }>{row.rank}</p>
                                    </div>
                                </div>
                                <div className=' w-full flex justify-center p-4'>
                                    <p className=' text-gray-400 font-medium'>{row.class}</p>
                                </div>
                                <div className=' w-[40%] flex items justify-center p-4'>
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
                        showPoint ? "Hide Points Allocation Details" : " Show Points Allocation Details"
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