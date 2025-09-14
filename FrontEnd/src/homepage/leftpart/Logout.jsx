import React from 'react'
import { RiLogoutCircleLine } from "react-icons/ri";
import { useState } from 'react';
import axios from "axios";
import Cookies from "js-cookie";

function Logout() {
 
   const[loadin, setLoading] = useState(fasle);
   const handleLogOut = async()=>{
   setLoading(true);

   try{
      const res = axios.post("/api/user/logout");
      localStorage.removeItem("ChatApp"); //???
      Cookies.remove("jwt");//remove cookies as well
      setLoading(false);
      alert("Logged out successfully.");
      window.location.reload();//reloads the page
    }
    catch(err){
      console.log("Error in LogOut");
    }
   
  }
  return (
    <div>
      <div className=' fixed bottom-0 left-0 '>
        <button type="submit" className="flex items-center justify-center h-12 w-12 hover:bg-gray-600 rounded-full duration-300 cursor-pointer">
        <RiLogoutCircleLine onClick={handleLogOut}/>
      </button>
      </div>
    </div>
  )
}

export default Logout;