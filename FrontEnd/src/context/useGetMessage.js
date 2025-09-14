import React ,{useState} from 'react'
import useConversation from '../components/zustand';
import axios from 'axios';

const useGetMessage = ()=>{
  
    const [loading, setLoading] = useState(false);
    const{messege, setMessege, selectedConversation} = useConversation();

    useEffect(()=>{
        getMessage = async()=>{
            setLoading(true);
            if(selectedConversation && selectedConversation._id){
            try{
                const res = await axios.get(`/api/messege/get/${selectedConversation._id}`)
                setMessege(res.data);
                setLoading(false);
            }
            catch(err){
                console.log("Error in getting messeges", err);
                setLoading(false);
            }
          }
        };

        getMessage();

    },[selectedConversation, setMessege]);
    
    return {loading, messege}
}

export default useGetMessage;