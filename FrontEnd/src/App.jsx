import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Left from './homepage/leftpart/Left.jsx';
import Right from './homepage/rightpart/Right';
import SignUp from './components/SignUp.jsx';
import Login from './components/Login.jsx';
import AuthProvider, { useAuth } from "./context/AuthProvider.jsx";
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
    <div className='flex h-screen'>
      {/* <Left />
      <Right /> */}
      {/* <div className="w-screen h-screen flex items-center justify-center bg-[#0B1622]">}
       {/* Child (Signup component goes here) */}
      {/* <SignUp/> */}
      {/* <Login/> */}
      {/* </div> */}
    </div><Routes>
        <Route
          path="/"
          element={authUser ? (
            <div className='flex h-screen'>
              <Left />
              <Right />
            </div>) : (
            <Navigate to="/login" />
          )} />

         <Route path="/signup" element={<SignUp />}/>
         <Route path="/login" element={authUser ? <Navigate to="/"/> : <Login />}/>
       </Routes>
      </>
    
  );
}

export default App;