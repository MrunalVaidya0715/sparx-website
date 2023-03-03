import React from 'react'
import DataTable from 'react-data-table-component'
const PointsTable = () => {

  const columns = [
    {
        name: "Class",
        selector: row => row.class
    },
    {
        name: "Points",
        selector: row => row.points,
        sortable: true,

    },
  ];
const data = [
    {
        id: 1,
        class: "SE CS",
        points: 85,
    },
    {
        id: 2,
        class: "SE IT",
        points: 25,
    },
    {
        id: 3,
        class: "SE EXTC",
        points: 0,
    },
    {
        id: 4,
        class: "TE CS",
        points: 10,
    },
    {
        id: 5,
        class: "TE IT",
        points: 95,
    },
    {
        id: 6,
        class: "TE EXTC",
        points: 75,
    },
    {
        id: 7,
        class: "BE CS",
        points: 20,
    },
    {
        id: 8,
        class: "BE IT",
        points: 90,
    },
    {
        id: 9,
        class: "BE EXTC",
        points: 10,
    },
]
const customStyles = {
    rows: {
        style: {
            backgroundColor: "#fe0123"
        }
    },
    
}

  return (
    <div className=' w-full h-fit p-4 flex flex-col justify-center items-center'>
        <div>
            <h1>Points Table</h1>
        </div>
        <div >
            <DataTable className=' bg-red-400' 
            columns={columns} 
            data={data}
            customStyles={customStyles}
            >

            </DataTable>
        </div>

    </div>

  )
}

export default PointsTable