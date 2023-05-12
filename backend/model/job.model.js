import  mongoose from "mongoose"

const JobSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        
    },
    CompanyImg:{
        type:String,
        
    },
    CompanyName:{
        type:String,
        required:true,
    },
    simpleDescription:{
        type:String,
    },
    responsiblities:{
        type:String,
        
    },
    jobRequirements:{
        type:String,
        require:true
    },
    userId:{
        type:String,
        required:true
    },
    experience:{
        type:String,
        required:true
    },
    applyUser:{
        type:[String]
    },
    employmentType:{
        type:String
        // remote/on-site
    },
    jobLocation:{
        type:String
    },
    jobtype:{
        type:String
        // fullTime/partTime/Insternship
    }
    
},{timestamps:true},
);

export default mongoose.model("Job",JobSchema);