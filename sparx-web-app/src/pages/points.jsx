import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { AiTwotoneTrophy } from 'react-icons/ai'
import { AiTwotoneStar } from 'react-icons/ai'
import { GiTrophiesShelf } from 'react-icons/gi'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'
import { BsDashLg } from 'react-icons/bs'
import Link from 'next/link'

const dataPoints = [
    {

        id: 1,
        class: "TE-IT",
        points: 490,
        pos: 0,


    },
    {
        id: 2,
        class: "SE-COMPS",
        points: 240,
        pos: 0,


    },
    {
        id: 3,
        class: "BE-EXTC",
        points: 130,
        pos: 2,

    },
    {
        id: 4,
        class: "TE-COMPS",
        points: 210,
        pos: -1,

    },
    {
        id: 5,
        class: "TE-EXTC",
        points: 170,
        pos: -1,


    },
    {
        id: 6,
        class: "BE-COMPS",
        points: 150,
        pos: 0,


    },
    {
        id: 7,
        class: "BE-IT",
        points: 100,
        pos: 0,

    },
    {
        id: 8,
        class: "FE-B",
        points: 140,
        pos: 1,

    },
    {
        id: 9,
        class: "SE-EXTC",
        points: 220,
        pos: -1,

    },

    {
        id: 10,
        class: "FE-A",
        points: 130,
        pos: 1,

    },
    {
        id: 11,
        class: "FE-D",
        points: 60,
        pos: 2,

    },
    {
        id: 12,
        class: "FE-C",
        points: 70,
        pos: 1,

    },
    {
        id: 13,
        class: "SE-IT",
        points: 20,
        pos: -1,
    },


]


const points = () => {

    const [data, setData] = useState([...dataPoints])


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

    useEffect(() => {
        // Function to sort the data in descending order based on "points" and update ranks
        const sortDataByPointsAndSetRank = () => {
          const sortedData = data.slice().sort((a, b) => b.points - a.points);
          sortedData.forEach((item, index) => {
            item.id = index + 1;
            
          });
    
          setData(sortedData);
        };
    
        sortDataByPointsAndSetRank();
      }, []);


    return (
        <div className='py-20 flex flex-col justify-center items-center'>
            <div className=' p-2 flex flex-col justify-center items-center'>
                <h1 className=''>
                    <span className=' tracking-wide text-red-500'>SPARX </span>
                    2<span className=' text-red-500'>K</span>23

                </h1>
                <h2 className=' font-light'>Points Table</h2>
                <div className=' mt-4'>
                    <p className=' text-gray-500 text-sm'>[ Last updated on 28-03-2023 ]</p>
                </div>
                <Link href='/winners'>
                    <div className=' mt-4'>
                        <p className=' text-blue-500 text-lg font-bold'>View Sparx-23 Winners</p>
                    </div>
                </Link>
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
                                
                                    <div className={row.id === 1 ? "text-yellow-400" : row.id === 2 ? "text-gray-200" : row.id === 3 ? "text-amber-700" : " text-gray-100"}>
                                        {
                                            row.id === 1 ? <AiTwotoneTrophy size={25} /> : row.id === 2 ? <AiTwotoneTrophy size={25} /> : row.id === 3 ? <AiTwotoneTrophy size={25} /> : <AiTwotoneStar size={25} className=' text-gray-400' />
                                        }
                                    </div>

                                    <div className=' ml-2 flex justify-center '>
                                        <p className={
                                            row.rank === 1 ? "text-yellow-400 font-extrabold" : row.rank === 2 ? "text-gray-200 font-extrabold" : row.rank === 3 ? " text-amber-700 font-extrabold" : " text-gray-400 ml-[1px]"
                                        }>{row.rank}</p>
                                    </div>
                                </div>
                                <div className='flex justify-start w-full p-4'>
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