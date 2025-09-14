import Conversation from '../models/conversation.model.js'
import Message from '../models/messege.model.js';

export const sendMessage = async(req, resp)=>{

    try{
        //const message = req.body.message;
       //OR
       const {message} = req.body;
       const {id:receiverId} = req.params;
       const {id:senderId} = req.user._id; //current logged in user      

       let conversation = await Conversation.findOne({
          memebers:{$all:[senderId,receiverId]}//if conversation present then find the convo objet
       });
       //no conversation found
       if(!conversation){
          conversation = await Conversation.create({
            members:[senderId,receiverId]
          })
       }
       const newMessage = new Message({
        senderId,
        receiverId,
        message
       });
        
       //add the mssg into conversation array
       if(newMessage){
        conversation.messages.push(newMessage._id);
       }
       //save the mssg in DB
    // await conversation.save();
    // await newMessage.save();-->Use Promise 

      await Promise.all([conversation.save(), newMessage.save()]);//run parallel

      //send response
      resp.status(201).json({
        message:"Message sent successFully",
        newMessage
     });
    }
    catch(err){
        resp.status(500).json({error:"Internal Server Error!"});
    }
}

//getting the messeges from the DB
export const getMessage = async(req, resp)=>{
    
    try{
        const {id:receiverId} = req.params;
        const {id:senderId} = req.user._id;

        let conversation = await Conversation.findOne({
          memebers:{$all:[senderId,receiverId]}//if conversation present then find the convo objet
       }).populate("messages");

       //no conversation found
       if(!conversation){
          return resp.status(201).send([]); //Empty Array
        }

        //else if any conversation has happened
        const messeges = conversation.messages;
        resp.status(201).json(messeges);
       }
    catch(err){
        resp.status(500).json({error:"Internal Server Error!"});
    }
}