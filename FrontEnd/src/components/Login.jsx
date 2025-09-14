import React from 'react'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios';
import AuthProvider, { useAuth } from "../context/AuthProvider.jsx";
import { Routes } from "react-router"

function Login() {

  // const[authUser, setAuthUser]  = useAuth();
  const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm();

  const onSubmit = (data) => {//console.log(data)//printing the data on colsole to see if working
    const userInfo = {
      email: data.email,
      password: data.password,
    };

     axios
    .post("/api/user/login", userInfo)//don't put semicolon here as it chains with .then()
    .then((response)=>{
      console.log(response.data);
      alert("Login successful.");

       localStorage.setItem("ChatApp",JSON.stringify(response.data));//key-value pair
       //call the userAuth to send the user data to other components
      //  setAuthUser(response.data);
    })
    .catch((error)=>{
    console.error(error.response ? error.response.data : error.message);
    alert(error.response.data.error);
});

  }

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#0B1622]">
      
      <div className="bg-[#111827] p-8 rounded-lg  w-125 border border-white">
        {/* Title */}
        <form  onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
        <h1 className="text-center text-xl font-semibold text-white mb-6">
          Chat <span className="text-green-500">App</span>
        </h1>

        {/* Login Heading */}
        <h2 className="text-lg font-semibold text-white mb-4 ">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 bg-transparent border border-gray-600 rounded-md text-white outline-none focus:border-green-500"
          {...register("email", { required: true })}
        />
         {errors.email && <span className="text-red-500 text-sm font-semibold ">This field is required</span>}
 
         <input
          type="password"
          placeholder="Enter PassWord"
          className="w-full p-2 bg-transparent border border-gray-600 rounded-md text-white outline-none focus:border-green-500"
          {...register("password", { required: true })}
        />
         {errors.password && <span className="text-red-500 text-sm font-semibold ">This field is required</span>}

          {/* Footer */}
         <div className="flex justify-between items-center text-sm text-gray-400">
             <p>
              Don't have an account? <Link to = "/signup" className="text-blue-600">Signup</Link>
             </p>
             <input type="submit" value = "Login" className="text-white font-semibold bg-green-400 px-2 py-1 rounded-md "/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;
