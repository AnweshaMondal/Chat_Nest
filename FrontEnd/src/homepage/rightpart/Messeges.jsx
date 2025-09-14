import React from 'react'

function  Messeges({messege}) {
// Example props for demonstration
const isSender = true; // Change to false for receiver

//find the logged In user from the broser localStorage
const authUser = JSON.parse(localStorage.getItem("ChatApp"));
const itsMe = messege.senderId === authUser.user._id;

const chatName = itsMe ? "chat-end" : "chat-start";
const chatColor = itsMe? "bg-blue-500":"";

return (
    <div className="flex flex-col space-y-4">

     <div className={`chat ${chatName}`}>
        {/* Sender bubble */}
        <div className="flex items-end justify-end px-2">
            <div className={`relative max-w-[60%] my-3 px-4 py-1.5 rounded-2xl shadow text-base bg-blue-500 text-white ${chatColor} self-end`}>
                {/* Arrow */}
                <span className="absolute top-4 right-[-10px] w-0 h-0 border-t-[10px] border-b-[10px] border-l-[10px] border-t-transparent border-b-transparent border-l-blue-500" />
                {messege.messege}
            </div>
        </div> 
     </div>


        {/* Receiver bubble */}
        {/* <div className="flex items-start justify-start px-2">
            <div className="relative max-w-[60%] my-3 px-4 py-1.5 rounded-2xl shadow text-base bg-gray-200 text-gray-800 self-start">

                {/* Arrow */}
                {/* <span className="absolute top-4 left-[-10px] w-0 h-0 border-t-[10px] border-b-[10px] border-r-[10px] border-t-transparent border-b-transparent border-r-gray-200" /> */}
                {/* Hi! This is a receiver message. */}
            {/* </div> */}
        {/* </div> } */}
    </div>
)
}

export default Messeges;