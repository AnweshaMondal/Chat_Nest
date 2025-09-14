import React from 'react'
import { FaSearch } from "react-icons/fa";

function Searchbar() {
  return (
   <div className = 'h-[10vh]'>
     <div className='px-4 py-4'>
    <form action="">
      <div className='rounded-lg flex items-center space-x-4'>
        <label className="flex-grow">
          <input
            type="search"
            className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:outline-none"
            placeholder="Search"
          />
        </label>
        <button type="submit" className="flex items-center justify-center h-12 w-12 bg-gray-200 hover:bg-gray-600 rounded-full duration-300 cursor-pointer">
          <FaSearch className="text-xl text-gray-700" />
        </button>
      </div>
    </form >
    </div>
   </div>
  )
}

export default Searchbar