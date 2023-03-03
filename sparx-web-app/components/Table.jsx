import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import points from '../src/points.json'
const Table = () => {
    const data = useMemo(() => points, [])
    const columns = useMemo(() => [
        {
            Header: "ID",
            accessor: "id",
        },
        {
            Header: "Class",
            accessor: "class",
        },
        {
            Header: "Points",
            accessor: "points",
        },
    ], [])
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

    return (
        <div className=' w-full h-fit p-4 flex flex-col justify-center items-center'>
            <div>
                <h1>Points React Table</h1>
            </div>
            <div>
                <table {...getTableBodyProps()} >
                    <thead className=' text-blue-200 bg-white'>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()}>
                                        {column.render("Header")}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => (
                                        <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>

                </table>

            </div>


        </div>
    )
}

export default Table