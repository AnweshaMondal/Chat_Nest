import mongoose from 'mongoose';
import User from './user.model.js';
import Message from './messege.model.js';

const ConversationSchema = new mongoose.Schema({

    members:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:User,
    }],

    messages:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:Message,
        deafult:[]
    }]
},{timestamps:true});

const Conversation = mongoose.model('Conversation',ConversationSchema);

export default Conversation;