import React from 'react'
import useConversation from "../../zustand/useConversation.js"
function Person() {

  const {selectedConversation} = useConversation();

  return (
    <div className='flex items-center justify-center bg-slate-600 py-1 hover:bg-gray-500 duration-300'>
        <div className="textavatar ">
           <div className="">
             <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" className='rounded-full w-15' />
           </div>
        </div>

        <div className='px-3'>
            <h1 className='font-bold'>{selectedConversation.fullname}</h1>
            <span>Offline</span>
        </div>
    </div>
  )
}

export default Person