import React from 'react'
import useConversation from '../zustand/useConversation';
import axios from 'axios';

function useSendMessege() {

    const [loading, setLoading] = useState(false);
    const{messege, setMessege, selectedConversation} = useConversation();
    const sendMesseges = async(messege)=>{
       
      setLoading(true);
      try{
           const res = await axios.post(`/api/messege/send/${selectedConversation._id}`,{messege})
           setMessege([...messege, res.data]);
           setLoading(false);
          }
      catch(err){
          console.log("Error in getting messeges", err);
          setLoading(false);
      }
        };

        return{loading,sendMesseges}; 
    }

export default useSendMessege