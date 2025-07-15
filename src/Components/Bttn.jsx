import React from 'react'

const Bttn = (data) => {
    return (
        <>
            <div className='bg-[rgb(38,38,38)] w-[100%] px-5 py-3 flex items-center justify-between cursor-pointer rounded-full'>
                <h1>{data.title}</h1>
                <div>{data.icon}</div>
            </div>
        </>
    )
}

export default Bttn