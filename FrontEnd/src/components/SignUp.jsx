import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from 'axios';
import AuthProvider, { useAuth } from "../context/AuthProvider.jsx";


function Signup() {
  
  const[authUser, setAuthUser]  = useAuth();
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  
  //watch the password and confirm password field
  const password = watch("password","");
  const confirmPassword = watch("confirmPassword","");

  const validatePasswordMatch = (value)=>{
    return value === password || "PassWord doesn't match."
  }

  const onSubmit = async (data) => {//console.log(data)//printing the data on colsole to see if working
       
    const userInfo = {
      fullname:data.fullname,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword
    };
    //api end point integration
    await axios
    .post("/api/user/signup", userInfo)//don't put semicolon here as it chains with .then()
    .then((response)=>{
      // console.log(response.data);
       if(response.data){
        alert("Sign Up successful.");
       }
       //store the user data in the local cache of the browser
       localStorage.setItem("ChatApp",JSON.stringify(response.data));//key-value pair

       //call the userAuth tto send the user data to other components
       setAuthUser(response.data);
    })
    .catch((error)=>{
    console.error(error.response ? error.response.data : error.message);
    alert("Something went wrong.");
});

 };

  return (
    <>
    <div className=" h-screen flex items-center justify-center bg-[#0B1622] ">
       {/* Form */}
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="border border-white rounded-4xl px-6 py-2 space-y-3 w-100">
        {/* Title */}
        <h1 className="text-center text-xl font-semibold text-white mb-6">
          Chat <span className="text-red-500 text-sm font-semibold0 font-semibold">App</span>
        </h1>

        {/* Signup Heading */}
        <h2 className="text-xl text-white mb-4">Signup</h2>
        
          <input
            type="text"
            placeholder="Fullname"
            className="w-full p-2 bg-transparent border border-gray-600 rounded-md text-white outline-none focus:border-green-500"
            {...register("fullname", { required: true })}
          />
          {errors.fullname && <span className="text-red-500 text-sm font-semibold">This field is required</span>}

          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 bg-transparent border border-gray-600 rounded-md text-white outline-none focus:border-green-500"
            {...register("email", { required: true })}
          />
         {errors.email && <span className="text-red-500 text-sm font-semibold ">This field is required</span>}

          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 bg-transparent border border-gray-600 rounded-md text-white outline-none focus:border-green-500"
            {...register("password", { required: true})}
          />
          {errors.password && <span className="text-red-500 text-sm font-semibold-500 text-sm font-semibold">This field is required</span>}

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-2 bg-transparent border border-gray-600 rounded-md text-white outline-none focus:border-green-500"
            {...register("confirmPassword", { required: true , validate:validatePasswordMatch })}
          />
          
          {errors.confirmPassword && <span className="text-red-500 text-sm font-semibold">{errors.confirmPassword.message}</span>}

          {/* Footer */}
          <div className="flex justify-between items-center text-sm font-semibold text-gray-400">
             <p>
              Have an account? <Link to = "/login" className="text-blue-600">Login</Link>
             </p>
             <input type="submit" value = "Signup" className="text-white font-semibold bg-green-400 px-2 py-1 rounded-md cursor-pointer"/>
            {/* <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
            >
              Signup
            </button> */}
          </div>
        </form>
    </div>
  </>
  );
}

export default Signup;
