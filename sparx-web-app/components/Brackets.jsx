import React from 'react'

const Brackets = () => {
    return (
        <div className=' flex w-full justify-center items-center'>
            <div className=' border-2 max-w-[1024px] overflow-x-scroll overflow-scroll border-white/20 flex justify-center w-full items-start p-4'>
                <div className='  pb-20 flex gap-20 justify-center items-start w-full px-4 h-full'>
                    {/**Round 1 */}
                    <div className=' flex w-[250px] flex-col gap-12 justify-between items-start'>
                        {/**Label */}
                        <div>
                            <h2 className='uppercase'>Round1</h2>
                        </div>
                        {/**Matches */}
                        {/**Main Group 1 */}
                        <div className=' flex flex-col w-full'>
                            {/**group1 */}
                            <div className=' flex w-full flex-col justify-between items-center gap-1'>
                                {/**Match1 */}
                                <div className=' w-full rounded-md overflow-hidden flex justify-between items-center bg-gray-500'>
                                    <div className=' p-4'>
                                        <p>1</p>
                                    </div>
                                    <div className='p-4 w-full flex justify-center bg-gray-700'>
                                        <p>FE-C</p>
                                    </div>
                                    <div className=' p-4 bg-gray-500'>
                                        1
                                    </div>
                                </div>
                                <div className=' w-full rounded-md overflow-hidden flex justify-between items-center bg-gray-500'>
                                    <div className=' p-4'>
                                        <p>2</p>
                                    </div>
                                    <div className='p-4 w-full flex justify-center bg-gray-700'>
                                        <p>BE-IT</p>
                                    </div>
                                    <div className=' p-4 bg-gray-500'>
                                        0
                                    </div>
                                </div>
                            </div>
                            {/**Connector */}
                            <div className=' z-[-20] relative left-[50%] flex scale-y-150'>
                                <div className=' border-2 border-l-0 border-white/20 w-full h-[100px]' />
                                <div className=' border-white/20 border-t-2 translate-y-[50%] w-[30%]'>

                                </div>
                            </div>
                            {/**group2 */}
                            <div className=' flex w-full flex-col justify-between items-center gap-1'>
                                {/**Match2 */}
                                <div className=' w-full rounded-md overflow-hidden flex justify-between items-center bg-gray-500'>
                                    <div className=' p-4'>
                                        <p>3</p>
                                    </div>
                                    <div className='p-4 w-full flex justify-center bg-gray-700'>
                                        <p>FE-D</p>
                                    </div>
                                    <div className=' p-4 bg-gray-500'>
                                        3
                                    </div>
                                </div>
                                <div className=' w-full rounded-md overflow-hidden flex justify-between items-center bg-gray-500'>
                                    <div className=' p-4'>
                                        <p>4</p>
                                    </div>
                                    <div className='p-4 w-full flex justify-center bg-gray-700'>
                                        <p>FE-B</p>
                                    </div>
                                    <div className=' p-4 bg-gray-500'>
                                        5
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/**Main Group 2 */}
                        <div className=' flex flex-col w-full'>
                            {/**group3 */}
                            <div className=' flex w-full flex-col justify-between items-center gap-1'>
                                {/**Match3 */}
                                <div className=' w-full rounded-md overflow-hidden flex justify-between items-center bg-gray-500'>
                                    <div className=' p-4'>
                                        <p>5</p>
                                    </div>
                                    <div className='p-4 w-full flex justify-center bg-gray-700'>
                                        <p>FE-A</p>
                                    </div>
                                    <div className=' p-4 bg-gray-500'>
                                        -
                                    </div>
                                </div>
                                <div className=' w-full rounded-md overflow-hidden flex justify-between items-center bg-gray-500'>
                                    <div className=' p-4'>
                                        <p>6</p>
                                    </div>
                                    <div className='p-4 w-full flex justify-center bg-gray-700'>
                                        <p>SE-IT</p>
                                    </div>
                                    <div className=' p-4 bg-gray-500'>
                                        -
                                    </div>
                                </div>
                            </div>
                            {/**Connector */}
                            <div className=' z-[-20] relative left-[50%] flex scale-y-150'>
                                <div className=' border-2 border-l-0 border-white/20 w-full h-[100px]' />
                                <div className=' border-white/20 border-t-2 translate-y-[50%] w-[30%]'>

                                </div>
                            </div>

                            {/**group4 */}
                            <div className=' flex w-full flex-col justify-between items-center gap-1'>
                                {/**Match4 */}
                                <div className=' w-full rounded-md overflow-hidden flex justify-between items-center bg-gray-500'>
                                    <div className=' p-4'>
                                        <p>7</p>
                                    </div>
                                    <div className='p-4 w-full flex justify-center bg-gray-700'>
                                        <p>SE-COMPS</p>
                                    </div>
                                    <div className=' p-4 bg-gray-500'>
                                        -
                                    </div>
                                </div>
                                <div className=' w-full rounded-md overflow-hidden flex justify-between items-center bg-gray-500'>
                                    <div className=' p-4'>
                                        <p>8</p>
                                    </div>
                                    <div className='p-4 w-full flex justify-center bg-gray-700'>
                                        <p>TE-IT</p>
                                    </div>
                                    <div className=' p-4 bg-gray-500'>
                                        -
                                    </div>
                                </div>

                            </div>
                        </div>


                        {/**Main Group 3 */}
                        <div className='flex flex-col w-full'>
                            <div className=' flex w-full flex-col justify-between items-center gap-1'>
                                {/**Match5 */}
                                <div className=' w-full rounded-md overflow-hidden flex justify-between items-center bg-gray-500'>
                                    <div className=' p-4'>
                                        <p>9</p>
                                    </div>
                                    <div className='p-4 w-full flex justify-center bg-gray-700'>
                                        <p>SE-EXTC</p>
                                    </div>
                                    <div className=' p-4 bg-gray-500'>
                                        -
                                    </div>
                                </div>
                                <div className=' w-full rounded-md overflow-hidden flex justify-between items-center bg-gray-500'>
                                    <div className=' p-4'>
                                        <p>10</p>
                                    </div>
                                    <div className='p-4 w-full flex justify-center bg-gray-700'>
                                        <p>TE-EXTC</p>
                                    </div>
                                    <div className=' p-4 bg-gray-500'>
                                        -
                                    </div>
                                </div>

                            </div>
                            {/**Connector */}
                            <div className=' z-[-20] relative left-[50%] flex scale-y-150'>
                                <div className=' border-2 border-l-0 border-white/20 w-full h-[100px]' />
                                <div className=' border-white/20 border-t-2 translate-y-[50%] w-[30%]'>

                                </div>
                            </div>

                            {/**Bye */}
                            <div className=' flex w-full flex-col justify-between items-center gap-1'>
                                {/**Match5 */}
                                <div className=' w-full rounded-md overflow-hidden flex justify-between items-center bg-gray-800'>
                                    <p className=' p-4 w-full flex justify-center items-center'>BYE</p>
                                </div>


                            </div>



                        </div>

                    </div>




                    {/**Quarter Final */}
                    <div className=' flex w-[250px] flex-col gap-12 justify-between items-start'>
                        {/**Label */}
                        <div>
                            <h2 className='uppercase'>Quarters</h2>
                        </div>
                        {/**Matches */}
                        {/**Main Group 1 */}
                        <div className='mt-28 flex flex-col w-full'>
                            {/**group1 */}
                            <div className=' flex w-full flex-col justify-between items-center gap-1'>
                                {/**Match1 */}
                                <div className=' w-full rounded-md overflow-hidden flex justify-between items-center bg-gray-500'>
                                    <div className=' p-4'>
                                        <p>1</p>
                                    </div>
                                    <div className='p-4 w-full flex justify-center bg-gray-700'>
                                        <p>FE-C</p>
                                    </div>
                                    <div className=' p-4 bg-gray-500'>
                                        -
                                    </div>
                                </div>
                                <div className=' w-full rounded-md overflow-hidden flex justify-between items-center bg-gray-500'>
                                    <div className=' p-4'>
                                        <p>4</p>
                                    </div>
                                    <div className='p-4 w-full flex justify-center bg-gray-700'>
                                        <p>FE-B</p>
                                    </div>
                                    <div className=' p-4 bg-gray-500'>
                                        -
                                    </div>
                                </div>
                            </div>
                            {/**Connector */}
                            <div className=' z-[-20] relative left-[50%] flex scale-y-150'>
                                <div className=' border-2 border-l-0 border-white/20 w-full h-[260px]' />
                                <div className=' border-white/20 border-t-2 translate-y-[50%] w-[30%]'>

                                </div>
                            </div>
                            {/**group2 */}
                            <div className=' flex w-full flex-col justify-between items-center gap-1'>
                                {/**Match2 */}
                                <div className=' w-full rounded-md overflow-hidden flex justify-between items-center bg-gray-500'>
                                    <div className=' p-4'>
                                        <p>??</p>
                                    </div>
                                    <div className='p-4 w-full flex justify-center bg-gray-700'>
                                        <p>??</p>
                                    </div>
                                    <div className=' p-4 bg-gray-500'>
                                        -
                                    </div>
                                </div>
                                <div className=' w-full rounded-md overflow-hidden flex justify-between items-center bg-gray-500'>
                                    <div className=' p-4'>
                                        <p>??</p>
                                    </div>
                                    <div className='p-4 w-full flex justify-center bg-gray-700'>
                                        <p>??</p>
                                    </div>
                                    <div className=' p-4 bg-gray-500'>
                                        -
                                    </div>
                                </div>
                            </div>
                            {/**Main group 2 */}
                            {/**group1 */}
                            <div className=' mt-[21rem] flex w-full flex-col justify-between items-center gap-1'>
                                {/**Match1 */}
                                <div className=' w-full rounded-md overflow-hidden flex justify-between items-center bg-gray-500'>
                                    <div className=' p-4'>
                                        <p>??</p>
                                    </div>
                                    <div className='p-4 w-full flex justify-center bg-gray-700'>
                                        <p>??</p>
                                    </div>
                                    <div className=' p-4 bg-gray-500'>
                                        -
                                    </div>
                                </div>
                                <div className=' w-full rounded-md overflow-hidden flex justify-between items-center bg-gray-500'>
                                    <div className=' p-4'>
                                        <p>11</p>
                                    </div>
                                    <div className='p-4 w-full flex justify-center bg-gray-700'>
                                        <p>BE-EXTC</p>
                                    </div>
                                    <div className=' p-4 bg-gray-500'>
                                        -
                                    </div>
                                </div>
                            </div>
                            {/**Connector */}
                            <div className=' z-[-20] relative left-[50%] flex scale-y-150'>
                                <div className=' border-2 border-l-0 border-white/20 w-full h-[300px]' />
                                <div className=' border-white/20 border-t-2 translate-y-[50%] w-[30%]'>

                                </div>
                            </div>
                            {/**group2 */}
                            <div className=' flex w-full flex-col justify-between items-center gap-1'>
                                {/**Match2 */}
                                <div className=' w-full rounded-md overflow-hidden flex justify-between items-center bg-gray-500'>
                                    <div className=' p-4'>
                                        <p>12</p>
                                    </div>
                                    <div className='p-4 w-full flex justify-center bg-gray-700'>
                                        <p>BE-COMPS</p>
                                    </div>
                                    <div className=' p-4 bg-gray-500'>
                                        -
                                    </div>
                                </div>
                                <div className=' w-full rounded-md overflow-hidden flex justify-between items-center bg-gray-500'>
                                    <div className=' p-4'>
                                        <p>13</p>
                                    </div>
                                    <div className='p-4 w-full flex justify-center bg-gray-700'>
                                        <p>TE-COMPS</p>
                                    </div>
                                    <div className=' p-4 bg-gray-500'>
                                        -
                                    </div>
                                </div>
                            </div>

                        </div>






                    </div>


                    {/**Semis */}

                    <div className=' flex w-[250px] flex-col gap-12 justify-between items-start'>
                        {/**Label */}
                        <div>
                            <h2 className='uppercase'>Semis</h2>
                        </div>
                        {/**Matches */}
                        {/**Main Group 1 */}
                        <div className=' mt-[19rem] flex flex-col w-full'>
                            {/**group1 */}
                            <div className=' flex w-full flex-col justify-between items-center gap-1'>
                                {/**Match1 */}
                                <div className=' w-full rounded-md overflow-hidden flex justify-between items-center bg-gray-500'>
                                    <div className=' p-4'>
                                        <p>??</p>
                                    </div>
                                    <div className='p-4 w-full flex justify-center bg-gray-700'>
                                        <p>??</p>
                                    </div>
                                    <div className=' p-4 bg-gray-500'>
                                        -
                                    </div>
                                </div>
                                <div className=' w-full rounded-md overflow-hidden flex justify-between items-center bg-gray-500'>
                                    <div className=' p-4'>
                                        <p>??</p>
                                    </div>
                                    <div className='p-4 w-full flex justify-center bg-gray-700'>
                                        <p>??</p>
                                    </div>
                                    <div className=' p-4 bg-gray-500'>
                                        -
                                    </div>
                                </div>
                            </div>
                            {/**Connector */}
                            <div className=' z-[-20] relative left-[50%] flex scale-110'>
                                <div className=' border-2 border-l-0 border-white/20 w-full h-[47rem]' />
                                <div className=' border-white/20 border-t-2 translate-y-[50%] w-[30%]'>

                                </div>
                            </div>
                            {/**group2 */}
                            <div className=' flex w-full flex-col justify-between items-center gap-1'>
                                {/**Match2 */}
                                <div className=' w-full rounded-md overflow-hidden flex justify-between items-center bg-gray-500'>
                                    <div className=' p-4'>
                                        <p>??</p>
                                    </div>
                                    <div className='p-4 w-full flex justify-center bg-gray-700'>
                                        <p>??</p>
                                    </div>
                                    <div className=' p-4 bg-gray-500'>
                                        -
                                    </div>
                                </div>
                                <div className=' w-full rounded-md overflow-hidden flex justify-between items-center bg-gray-500'>
                                    <div className=' p-4'>
                                        <p>??</p>
                                    </div>
                                    <div className='p-4 w-full flex justify-center bg-gray-700'>
                                        <p>??</p>
                                    </div>
                                    <div className=' p-4 bg-gray-500'>
                                        -
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>


                    {/**Finals */}
                    <div className=' flex w-[250px] flex-col gap-12 justify-between items-start'>
                        {/**Label */}
                        <div>
                            <h2 className='uppercase'>Finals</h2>
                        </div>
                        {/**Matches */}
                        {/**Main Group 1 */}
                        <div className=' mt-[46rem] flex flex-col w-full'>
                            {/**group1 */}
                            <div className=' flex w-full flex-col justify-between items-center gap-1'>
                                {/**Match1 */}
                                <div className=' w-full rounded-md overflow-hidden flex justify-between items-center bg-gray-500'>
                                    <div className=' p-4'>
                                        <p>??</p>
                                    </div>
                                    <div className='p-4 w-full flex justify-center bg-gray-700'>
                                        <p>??</p>
                                    </div>
                                    <div className=' p-4 bg-gray-500'>
                                        -
                                    </div>
                                </div>
                                <div className=' w-full rounded-md overflow-hidden flex justify-between items-center bg-gray-500'>
                                    <div className=' p-4'>
                                        <p>??</p>
                                    </div>
                                    <div className='p-4 w-full flex justify-center bg-gray-700'>
                                        <p>??</p>
                                    </div>
                                    <div className=' p-4 bg-gray-500'>
                                        -
                                    </div>
                                </div>
                            </div>



                        </div>

                    </div>



                </div>
            </div>
        </div>
    )
}

export default Brackets