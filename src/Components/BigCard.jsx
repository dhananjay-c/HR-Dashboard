import React from 'react'
import appicon from '../assets/appicpn.png'
import cover from '../assets/cover.png'

const BigCard = () => {
    return (
        <>
            <div className='w-[100%] h-[100%] flex justify-between bg-gradient-to-r from-[rgb(194,147,216)] to-[rgb(237,191,162)] rounded-3xl '>
                <div className='p-7'>
                    <h1 className='text-3xl'>Work through</h1>
                    <h1 className='text-3xl'>the Mobile App</h1>
                    <div className='w-22 cursor-pointer mt-9'><img src={appicon} alt="" /></div>
                </div>
                <div>
                    <img src={cover} alt="" className='w-43 mr-7' />
                </div>
            </div>
        </>
    )
}

export default BigCard