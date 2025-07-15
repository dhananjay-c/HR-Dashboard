import React from 'react'
import NavButtons from './NavButtons'
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { FaSackDollar } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";
import { IoStatsChart } from "react-icons/io5";
import { IoDocument } from "react-icons/io5";
import { IoIosChatboxes } from "react-icons/io";
import { RiCustomerServiceFill } from "react-icons/ri";



const SideNav = () => {
    return (
        <>

            <div className='w-70 h-screen bg-[rgb(26,26,26)] pt-10 '>
                <div className='pl-8'>
                    <h1 className='text-neutral-200  text-2xl font-bold cursor-pointer'>HBoard</h1>
                    <h2 className='mt-10 text-neutral-400 text-sm'>Tools</h2>
                </div>
                <div className='pt-3 pl-4'>
                    <div><NavButtons title="Dashboard" icon={<TbLayoutDashboardFilled size={18} />}></NavButtons></div>
                    <div className='mt-3'><NavButtons title="Finance" icon={<FaSackDollar size={18} />}></NavButtons></div>
                    <div className='mt-3'><NavButtons title="People" icon={<IoPeople size={18} />}></NavButtons></div>
                    <div className='mt-3'><NavButtons title="Statistics" icon={<IoStatsChart size={18} />}></NavButtons></div>
                    <div className='mt-3'><NavButtons title="Documents" icon={<IoDocument size={18} />}></NavButtons></div>
                </div>

                <div className='pl-8'>
                    <h2 className='mt-10 text-neutral-400 text-sm'>Others</h2>
                </div>
                <div className='pt-3 pl-4'>
                    <div><NavButtons title="Chat" icon={<IoIosChatboxes size={18} />}></NavButtons></div>
                    <div className='mt-3'><NavButtons title="Support" icon={<RiCustomerServiceFill size={18} />}></NavButtons></div>
                </div>
            </div>
        </>
    )
}

export default SideNav