import User from "../model/user.model.js"

export const updateUser = async (req,res)=>{
    if(req.params.id === req.user.id){
        try {
            const UpdateUser = await User.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{new:true})
            
            // ye {new:true} ka matlab hai ki jab ye hamme res.ody send kare after we update something to ye hamme vo {res.body} new vali hi send kare. 

            res.status(200).json(UpdateUser);
        } catch (error) {
            return res.status(403).json({message:`${error}`})
        }
    }else{
       return  res.status(403).json({message:"token is not valid!"}) 
    }
}





export const deleteUser = async (req,res)=>{
    if(req.params.id === req.user.id){
        try {
            await User.findByIdAndRemove(req.params.id,)

        res.status(200).json({message:"user has been deleted"});
        } catch (error) {
           return  res.status(403).json({message:`${error}`});
        }
    }else{
        return res.status(403).json({message:"tokken is not valid!"}) ;
    }
}

export const GetAUser = async (req,res)=>{
    if(req.params.id === req.user.id){
        try {
         const SingleUser = await User.findById(req.params.id)

        res.status(200).json({userdata:SingleUser});
        } catch (error) {
           return  res.status(403).json({message:`${error}`});
        }
    }else{
        return res.status(403).json({message:"tokken is not valid!"}) ;
    }
}