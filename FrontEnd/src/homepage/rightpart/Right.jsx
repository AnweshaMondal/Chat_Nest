import React from 'react'
import Person from './Person';
// import Messeges from './Messeges';
import Body from './Body.jsx';
import TypeInput from './TypeInput';
import useConversation from '../../zustand/useConversation.js';
import {useAuth} from '../..context/AuthProvider.jsx';


function Right() {

  const {selectedConversation, setSelectedConversation } = useConversation();
  useEffect(()=>{
    return setSelectedConversation},
    [setSelectedConversation]);
  return (
    <div>
      {!selectedConversation ? (<NoChatSelected/>) : (<>
      <div className='w-screen h-screen bg-slate-900 text-gray-300 flex-grow relative flex flex-col'>
      <Body/>    
      <TypeInput/>
    </div></>)}
    </div>
  )
}

export default Right;


const NoChatSelected = ()=>{
  const [authUser] = useAuth();
  return (
    <>
    <div className='flex h-screen items-center justify-center'>
      <h1 className='text-center'>Welcome <span>{authUser.user.fullname}</span></h1>
      <br/>
       No chat selected , please start conversation by selecting anyone from your  contact
    </div>
    </>
  )
}