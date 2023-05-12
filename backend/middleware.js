// import jwt from "jsonwebtoken";


// export const verifyToken = (req,res,next)=>{
   
//     // const authorization = req.headers["token"];
//     const authorization = req.cookies.access_token; 
     
//     if(!authorization){
//         return res.status(403).json({message:"your are not authenticated!"})
//     }else{

//     try {
//         let token = authorization;

//          jwt.verify(token,process.env.JWT,(err,user)=>{
//             if(err){
//                 return res.status(402).json({message:"token is not valid!"});
//             }
//             // user ke ander ._id hogi because jab hamne jwt token banaya tha to ussme hamne apne user ki ID use kari thi.
//             req.user = user;
       
//            next();
//         })
//     } catch (error) {
//        return res.status(402).json({messsage:"problem in token i think"});  
//     }
//     }
    
    
// }


import jwt from "jsonwebtoken";


export const verifyToken = (req,res,next)=>{
   
    const authorization = req.headers["token"];
     
     
    if(!authorization){
        return res.status(403).json({message:"your are not authenticated!"})
    }else{

    try {
        let token;
        token = authorization.split(",")[1];

         jwt.verify(token,process.env.JWT,(err,user)=>{
            if(err){
                return res.status(402).json({message:"token is not valid!"});
            }
            // user ke ander ._id hogi because jab hamne jwt token banaya tha to ussme hamne apne user ki ID use kari thi.
            req.user = user;
       
           next();
        })
    } catch (error) {
       return res.status(402).json({messsage:"problem is token i think"});  
    }
    }
    
    
}