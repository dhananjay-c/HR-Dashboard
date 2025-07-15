import React from 'react'
import { CiSearch } from "react-icons/ci";


const Search = () => {
    return (
        <>
            <div className='bg-[rgb(38,38,38)] w-[100%] rounded-full px-5 py-3 cursor-pointer flex items-center'>
                <CiSearch size={22}></CiSearch>
                <input type="text" className='px-2 ml-1 text-neutral-200 focus:outline-none focus:ring-0 placeholder-neutral-200' placeholder='Search' />
            </div>
        </>
    )
}

export default Search