//rfce = react functional componenet export
import React from 'react'
import Searchbar from './Searchbar';
import Users from './Users';
import Logout from './Logout'

function Left() {
  return (
    <div className='w-[30%]  bg-black text-gray-300'>
        <Searchbar/>
        <Users/>
        <Logout/>        
    </div>
  )
}

export default Left;