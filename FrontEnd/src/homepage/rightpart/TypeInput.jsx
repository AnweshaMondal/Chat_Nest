import React from 'react'
import { IoSend } from "react-icons/io5";
import useSendMessege from '../../context/useSendMessege.js';

function TypeInput() {

  const [messege, setMessege] = useState("")
  const {loading,sendMesseges} = useSendMessege();
  const handleSubmit = async(e)=>{
    e.preventDefault();
    await sendMesseges(messege);
    setMessege("")
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="absolute bottom-0 left-0 w-full flex items-center gap-2 p-4 bg-[#0B1622] ">
      <input
        type="text"
        className="flex-1 bg-black text-white p-3 rounded-md outline-none"
        placeholder="Type here"
        value = {messege}
        onChange = {(e)=>setMessege(e.target.value)}
      />
      <button className="hover:bg-gray-500 p-2 rounded-full duration-300 cursor-pointer">
        <IoSend className="text-3xl text-white" />
      </button>
     </div>
    </form>
  )
}

export default TypeInput
