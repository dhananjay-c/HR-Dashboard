import React from 'react'
import Search from './Search'
import Bttn from './Bttn'
import { FaSort } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import Cards from './Cards';
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.png'
import p5 from '../assets/p5.png'
import p6 from '../assets/p6.png'
import p7 from '../assets/p7.png'
import p8 from '../assets/p8.png'
import p9 from '../assets/p9.png'
import p10 from '../assets/p10.png'
import BigCard from './BigCard';


const People = () => {

    const users1 = [
        {
            name: "Alice Johnson",
            position: "UI/UX Designer",
            progress: 82
        },
        {
            name: "Rahul Mehta",
            position: "Frontend Developer",
            progress: 65
        },
        {
            name: "Maria Gonzalez",
            position: "Project Manager",
            progress: 90
        },
        {
            name: "Takeshi Nakamura",
            position: "QA Engineer",
            progress: 47
        },
        {
            name: "Fatima Khan",
            position: "Backend Developer",
            progress: 73
        }
    ];
    const profiles = [p1, p2, p3, p4, p5];

    const users2 = [
        {
            name: "David Smith",
            position: "DevOps Engineer",
            progress: 58
        },
        {
            name: "Chen Wei",
            position: "AI Researcher",
            progress: 91
        },
        {
            name: "Elena Petrova",
            position: "Mobile App Developer",
            progress: 76
        },
        {
            name: "Oluwaseun Adeyemi",
            position: "Cloud Architect",
            progress: 63
        },
        {
            name: "Isabella Rossi",
            position: "Data Analyst",
            progress: 84
        }
    ];
    const profiles2 = [p7, p4, p2, p6, p5];






    return (
        <>
            <div className='px-10 py-12 text-neutral-200  w-300 overflow-y-auto h-screen scrollbar-custom border-r-1 border-neutral-700'>
                <div className='flex text-sm'>
                    <h1 className='cursor-pointer'>People</h1> <h1 className='px-3 text-neutral-400'>&gt;</h1><h1 className='text-neutral-400 cursor-pointer'>Design Team</h1>
                </div>
                <div className='mt-10'>
                    <h1 className='text-5xl font-bold'>{13} People</h1>
                </div>
                <div className='flex items-center mt-10 justify-between'>
                    <div className='w-[50%]'><Search></Search></div>
                    <div className='w-[23%]'><Bttn title="Position" icon={<FaSort></FaSort>}></Bttn></div>
                    <div className='w-[23%]'><Bttn title="More" icon={<IoFilter></IoFilter>}></Bttn></div>
                </div>

                <div className='flex items-center mt-10 justify-between  w-[100%] h-56'>
                    {users1.map((user, index) => (
                        <div key={index}>
                            <Cards
                                profile={profiles[index]} // match images with users
                                name={user.name}
                                post={user.position}
                                progress={user.progress}
                            />
                        </div>
                    ))}
                </div>

                <div className='flex items-center mt-7 justify-between  w-[100%]  h-56'>
                    <div className='w-[40%] '><BigCard></BigCard></div>
                    <div>
                        <Cards profile={p9} name={"Liam Becker"} post={"Security Analyst"} progress={6}></Cards>
                    </div>
                    <div>
                        <Cards profile={p10} name={"Ananya Deshmukh"} post={"Product Designer"} progress={95}></Cards>
                    </div>
                    <div>
                        <Cards profile={p8} name={"Carlos Rivera"} post={"Full Stack Developer"} progress={44}></Cards>
                    </div>

                </div>


                <div className='flex items-center mt-7 justify-between  w-[100%] h-56'>
                    {users2.map((user, index) => (
                        <div key={index}>
                            <Cards
                                profile={profiles2[index]}
                                name={user.name}
                                post={user.position}
                                progress={user.progress}
                            />
                        </div>
                    ))}
                </div>


            </div>



        </>
    )
}

export default People