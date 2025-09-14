import React from 'react'
import useConversation from '../../components/zustand';

function Contact({key, user}) {

  const {selectedConversation, setSeelectedConversation} = useConversation();
  const isSelected = selectedConversation?._id === user._id
  return (
    // creating one Contact component
  <div
    className={`hover:bg-slate-400 duration-300 ${isSelected ? "bg-slate-700" : ""}`}
    onClick={() => setSeelectedConversation(user)}
  >
    <div className='flex space-x-4 px-6 py-2 hover:bg-slate-700 duration-300 cursor-pointer items-center'>
            <div className="textavatar">
                <div className="w-15 rounded-full">
                  <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" className='rounded-full' />
                </div>
            </div>
                 
            <div className='px-4 py-2'>
                <h1 className='font-bold'>{user.fullname}</h1>
                <span>{user.email}</span>
            </div>
    </div>
  </div>
  )
}

export default Contact;
