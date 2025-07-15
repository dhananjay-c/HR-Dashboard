import React from 'react'
import { GoTriangleRight } from "react-icons/go";

const Cards = (data) => {


    console.log(data.progress);

    return (
        <>


            <div className='py-7 px-7 bg-[rgb(38,38,38)] flex flex-col justify-center items-center h-[100%] rounded-4xl cursor-pointer'>
                <div className='bg-[rgb(51,51,51)] rounded-full w-[68px] h-[68px] flex items-center justify-center p-2'>
                    <img src={data.profile} alt="" className='w-full h-full object-cover rounded-full' />
                </div>
                <h1 className='mt-3 text-neutral-200 font-bold'>
                    {data.name}
                </h1>
                <h1 className='mt-1 font-medium text-sm text-neutral-400' >
                    {data.post}
                </h1>
                <div className='flex items-center w-full mt-5'>
                    <div className='bg-[rgb(51,51,51)] rounded-full text-neutral-800 mr-2'>
                        <GoTriangleRight />
                    </div>

                    <div className='w-20'>
                        <div className='w-full bg-neutral-900 h-2 rounded-full'>
                            <div
                                className="h-full bg-[rgb(216,167,114)] rounded-full"
                                style={{ width: `${data.progress}%` }}
                            ></div>
                        </div>
                    </div>

                    <div>
                        <h1 className='font-medium text-sm text-neutral-400 ml-2'>
                            {data.progress}%
                        </h1>
                    </div>
                </div>

            </div >
        </>
    )
}

export default Cards