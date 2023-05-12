import Job from "../model/job.model.js"
import User from "../model/user.model.js"
export const createJob = async (req,res)=>{
   console.log(req.body)
   // param me user id deni hai
  
     const job = new Job(req.body)
    
    
    try {
        const savedJob = await job.save()
        res.status(201).json(savedJob)
    } catch (error) {
        res.status(402).json({message:error})
    }
    

}

export const editJob = async (req,res)=>{
    
    // param me userId deni hai
    if(req.params.id === req.user.id){
    try {
        // alag se hamme jobId send krni hai jise edit krna hi
        const updateJob = await Job.findByIdAndUpdate(req.JobId,
           {$set:req.body},
           { new:true}
        )

        res.status(201).json(updateJob)
    } catch (error) {
        res.status(403).json({message:error})
    }}else{
        res.status(403).json({message:error})
    }
}


export const deleteJob = async (req,res) =>{
     // param me userId deni hai
    if(req.params.id === req.user.id){
    try {
         // alag se hamme jobId send krni hai jise delete krna hi
    await Job.findByIdAndRemove(req.jobId) 
        res.status(201).json("Job Removed Sucessfully")   
    } catch (error) {

        res.status(403).json({message:error})
    }
    }else{
        res.status(403).json({message:error})
    }
}

export const getAUserJob = async (req,res)=>{
    // user id
    console.log(req.params.id)
    try {
    if(req.params.id){
     const job = await Job.find({userId:req.params.id})
     res.status(201).json(job);  
    }else{
        res.status(403).json({message:"no userID given by client"})
    }
    
    } catch (error) {
    res.status(403).json({message:`${error}`})
    }

}

export const FindOnlyOneJob = async (req,res)=>{
    // job id send hogi
    try {
        if(req.params.id){
         const job = await Job.findById(req.params.id)
         res.status(201).json(job);  
        }else{
            res.status(403).json({message:"no jobID given by client"})
        }
        
        } catch (error) {
            res.status(403).json({message:`${error}`})
        }
}



export const getAllJob = async (req,res)=>{

    const qEmploymentType = req.query.EmploymentType;
    const qExperience = req.query.Experience;
    const qJobtype = req.query.Jobtype;
    try {
    
        let products;
                 if(qExperience){
                    products = await Job.find({
                        experience:{
                            $in:[qExperience]
                      },
                  })
        
                 }else if(qEmploymentType){
                     products = await Job.find({
                         employmentType:{
                             $in:[qEmploymentType]
                       },
                   })
        
                 }else if(qJobtype){
                     products = await Job.find({
                        jobtype:{
                             $in:[qJobtype]
                         },
                     })
        
                 } else{
                    products = await Job.find()
                   
                 }  
                 res.status(201).json(products);
                 
                } catch (error) {
                res.status(403).json({message:`${error}`})
                }

}




export const search = async (req,res)=>{
    const qTitle = req.query.title;
    const qLocation = req.query.location;
    
    // you can add query by yourselves as many as u want;
    try {

        let products;
        if(qTitle){
            products = await Job.find({
                title:{
                    $regex:qTitle,$options:"i"
                },
            })

        }else if(qTitle && qLocation){
            products = await Job.find({
                title:{$regex:qTitle,$options:"i"}
            })

        }else if(qLocation){
            products = await Job.find({
                jobLocation:{
                    $regex:qLocation,$options:"i"
                },
            })

        }else{
            products = await Job.find();
        }

        res.status(201).json(products)
          
    } catch (error) {
       return  res.status(402).json({message:error})
    }
}

export const savedJob = async (req,res)=>{
console.log("JobId",req.body.jobId)
    // param me user id send karni hai
    if(req.params.id === req.user.id){
    
    try {
        const applyForJobByUser = await User.findByIdAndUpdate(req.params.id,
            {$addToSet:{jobSaved:req.body.jobId}},
            {new:true})
        
        
         res.status(201).json({message:applyForJobByUser});  
 
        } catch (error) {
            res.status(403).json({message:`${error}`})
        }
        
    }else{
            res.status(403).json({message:`${error}`})
        }
}

export const applyJob = async (req,res)=>{

    // param me user id send karni hai
    if(req.params.id === req.user.id){
    
    try {

        const applyForJobByUser = await User.findByIdAndUpdate(req.params.id,
            {$addToSet:{jobApply:req.body.jobId}},{new:true}
            ) 
         
         const applyForJobByJobSide = await Job.findByIdAndUpdate(req.body.jobId,
            {$addToSet:{applyUser:req.params.id}},{new:true}
        )
            
        res.status(201).json({UserSide:applyForJobByUser,JobSide:applyForJobByJobSide});

        } catch (error) {
            res.status(403).json({message:`${error}`})
        }
        
    }else{
            res.status(403).json({message:`${error}`})
        }
}

export const getAppliedJOb = async (req,res)=>{

    if(req.params.id === req.user.id){
        
        const user = await User.findById(req.params.id);

        const AppliedJobs = user.jobApply;
        
        const List = await Promise.all(
            AppliedJobs.map((id)=>{
                return Job.find({_id:id})
            })
        ) 

        res.status(201).json(List.flat());
    }else{
        res.status(403).json({message:"something wrong happens"})
    }
}

export const getSavedJOb = async (req,res)=>{

    if(req.params.id === req.user.id){
        
        const user = await User.findById(req.params.id);

        const SavedJobs = user.jobSaved;
        
        const List = await Promise.all(
            SavedJobs.map((id)=>{
                return Job.find({_id:id})
            })
        ) 

        res.status(201).json(List.flat())
    }else{
        res.status(403).json({message:"something wrong happens"})
    }
}