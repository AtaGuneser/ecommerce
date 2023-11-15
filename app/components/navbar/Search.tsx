import React from 'react'

const Search = () => {
  return (
    <div className=' hidden md:flex flex-1 text-white '>
      <input className='py-2 px-3 rounded-l-md border-none outline-none flex flex-1 bg-orange-400 text-white' type="text" placeholder='Search..' />
      <button className='p-2 bg-orange-800 rounded-r-md text-sm'>Search</button>
    </div>
  )
}

export default Search