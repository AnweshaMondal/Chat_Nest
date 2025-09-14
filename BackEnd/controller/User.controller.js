import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
// import {createTokenAndSaveCookie} from '../jwt/generateToken.js'//if export defult = no {} during import

//write function to operate on User collection/Model
export const signUp = async(req,resp)=>{
   try{
    //destructure the resp body
   const{fullname, email,password,confirmPassword} = req.body;

   const hashpassword = await bcrypt.hash(password, 10);//hash() is a function 
   if(password !== confirmPassword)
   {
     return resp.status(400).json({"error":"PassWord doesn't match"});
   }

   const user = await User.findOne({email});//using {} due to object destructruturing 
   if(user){//if String is not empty,
      return resp.status(400).json({error:"User is already registered."});
   }

   //if 2 above edge cases are passed, create a new document/user
   const newUser = new User({
      fullname,
      email,
      password:hashpassword//look at the syntax
   });
  
   await newUser.save();//save the user in the collection
   // if(newUser){
   //    createTokenAndSaveCookie(newUser._id,resp);//using mongoDB's unique document ID
   //    //using createTokenAndSaveCookie func as a callback to carry data
   //    resp.status(200).json({messege:"User have registered successfully!",
   //       user:{
   //       id: newUser._id,
   //       fullname: newUser.fullname,
   //       email:newUser.email}});//send a success status
   //   }
   }
   catch(error){
       console.log(error);
       resp.status(500).json({error:"Internal Server Error!"});
   }
}


//login function
export const login = async (req,resp)=>{

     const {email, password} = req.body;
   try{
      const user = await User.findOne({email});

      if(!user){//if user is null, bcrypt will throw error, so first check user field
         return resp.status(400).json({error:"Email is not matching."});
      }

      const pswdIsMatch = await bcrypt.compare(password,user.password);
      if(!pswdIsMatch)
      {
        return resp.status(400).json({error:"Password is not matching."});
      }

      //else login the user
      // createTokenAndSaveCookie(user._id, resp);

      // resp.status(200).json({messege:"User have logged in successfully!",
      //    user:{
      //    id: user._id,
      //    fullname: user.fullname,
      //    email:user.email}
      // });
   }
   catch(error){
      resp.status(500).json({error:"Intenal Server Error"});
   }
}


//Fetch all users from mongo-DB
export const allUsers = async (req, resp) => {
  try {  

   const allUsers = await User.find().select("-password");
   resp.status(201).json({"users":allUsers});
   // const loggedInUser = req.user.id;
   // const filteredusers = await User.find({_id:{$ne : loggedInUser}}).select("-password"); // fetches all data from mongoDB
   //  resp.status(201).json(filteredusers); // ⚠ this is wrong
//   } catch {
//     resp.status(500).send("Error fetching contacts from the database");
//   }
  }catch(err)
  {
    console.log("Error:"+ err);
  }
};


