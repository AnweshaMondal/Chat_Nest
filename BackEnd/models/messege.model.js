 import mongoose from 'mongoose';
//No need to import User model?

 const messagesSchema = new mongoose.Schema({

    senderId:{
        type:mongoose.Schema.Types.ObjectId,//*** 
        ref:'User',//getting from which collection
        required:true
    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    message:{
        type:String,
        required:true,
    }
 },{timestamps:true});//shows creation , updation time

 const Message = mongoose.model('message',messagesSchema );
//  module.exports = Message;
export default Message;