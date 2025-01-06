import React from 'react'
import { FaMap } from 'react-icons/fa'

const SearchBox = () => {
  return (
    <div className='bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
    xl:grid-cols-4 items-center justify-center gap-8 mt-4 sm:mt-23 w-[95%] sm:w-[80%]'>
      {/* first search input */}
      <div className='flex items-center space-x-6'>
        <FaMap className='w-6 h-6 text-blue-600'/>
        <div>
          <p className='text-black text-lg font-medium mb-[0.2rem]'>Location</p>
          <input type="text" placeholder='Where are you going?' className='outline-none border-none placeholder:text-gray-800'/>
          
        </div>
      </div>
    </div>
  )
}

export default SearchBox
