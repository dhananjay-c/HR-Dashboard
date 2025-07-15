import React from 'react'
import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa6";
import ProjectCard from './ProjectCard';
import ProgressCard from './ProgressCard';

const Stat = () => {
    return (
        <>
            <div className='w-120 p-10 mt-2'>
                <div className='flex justify-between mt-1'>
                    <div className='text-neutral-200 bg-[rgb(38,38,38)] p-3 rounded-2xl cursor-pointer'>
                        <IoSearch size={30} />
                    </div>
                    <div className='text-neutral-200 bg-[rgb(38,38,38)] p-3 rounded-2xl cursor-pointer'>
                        <FaBell size={30} />
                    </div>
                </div>
                <h1 className='font-bold text-neutral-200 text-3xl mt-10'>Statistics</h1>
                <div>
                    <ProgressCard progress={75}></ProgressCard>
                </div>
                <h1 className='font-bold text-neutral-200 text-3xl mt-10'>Projects</h1>
                <div className=' flex justify-between mt-7'>
                    <ProjectCard title={"Total"} number={201} color={"rgb(76, 62, 145)"}></ProjectCard>
                    <ProjectCard title={"Completed"} number={67} color={"rgb(132, 216, 195)"}></ProjectCard>
                </div>
                <div className=' flex justify-between mt-7'>
                    <ProjectCard title={"In Progress"} number={78} color={"rgb(237, 129, 101)"}></ProjectCard>
                    <ProjectCard title={"Waiting"} number={56} color={"rgb(219, 63, 63)"}></ProjectCard>
                </div>


            </div>
        </>
    )
}

export default Stat