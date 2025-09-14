import Messege from "./Messege";
import Loading from '../components/Loading.jsx';
import useGetMessege from "../../context/useGetMessege";
import React, { useEffect } from 'react';

//There is some mistake in <Messege/> componenet
function Body() {

  const { loading, messeges } = useGetMessege();
  const lastMsgRef = useRef();
  useEffect(()=>{

    //showing the sending status after hitting the send button
    setTimeout(()=>{
     if(lastMsgRef.current){
        lastMsgRef.current.scrollIntoView({ behavior:"smooth" })
     }
    },100)
  },[messeges]);

  return (
    <div className='flex-1 overflow-y-auto' style={{ maxHeight: 'calc(92vh)' }}>
      {loading ? (
        <Loading />
      ) : (
        messeges.length > 0 ? (
          messeges.map((messege) => (
            <Messege key={messege._id} messege={messege} />
          ))
        ) : (
          <div>
            <p className="text-center mt-[20%]">Say Hi to start a conversation !</p>
          </div>
        )
      )}
    </div>
  );
}

export default Body;