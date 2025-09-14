//hook 
import React, { useEffect, useState } from 'react'
import Cookies from "js-cookie";
import axios from "axios";
import { allUsers } from '../../../BackEnd/controller/User.controller';

function getAllUsers() {
 
    const[getAllUsers, setAllUsers] = useState([]);
    const[loading,setLoading] = useState(false);
    useEffect(()=>{
       
    const getUsers = async()=>{

        setLoading(true)
        try
        {
          //filter token from cookies
          const token = Cookies.get("jwt");
          const response = await axios.get("/user/allUsers",{
                           credentials : "include",
                           headers:{
                             Authorization:`Bearer ${token}`
                           }});

            setAllUsers(response.data);
            setLoading(false);
        }
       catch(error){
         console.log("Error in getAllUsers");
        }
      }
      //call the getusers function
      getUsers();
     },[])
     return[allUsers,loading];
    }

export default getAllUsers