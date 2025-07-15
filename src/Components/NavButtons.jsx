import React from 'react'

const NavButtons = (data) => {
    return (
        <>
            <div className='flex items-center px-4 w-60 py-3 rounded-2xl bg-gradient-to-r hover:from-[rgb(167,143,236)] hover:to-[rgb(114,198,234)] transition-all duration-900 cursor-pointer'>
                <div className='text-neutral-200'>{data.icon}</div>
                <h1 className='text-neutral-200 ml-3 text-base'>{data.title}</h1>
            </div>
        </>
    )
}

// rgb(167, 143, 236) rgb(114, 198, 234)

export default NavButtons