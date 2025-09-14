// import jwt from 'jsonwebtoken';

// const createTokenAndSaveCookie = (userId,resp)=>{
  
//     const token = jwt.sign({userId},process.env.JWT_TOKEN,
//                            {expiresIn:"10d"});

//     //generate a cookie to send to client
//     resp.cookie("jwt",token,
//         {
//         httpOnly:true,
//         //  secure:true,
//         secure: process.env.NODE_ENV === "production",
//          sameSite:"strict"
//         }
//     );
// }
// export default createTokenAndSaveCookie;