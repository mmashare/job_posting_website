import  mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    },
    profileIMg:{
        type:String,
       
    },
    isCompany:{
        type:Boolean,
        default:false
    },
    jobApply:{
        type:[String]
    },
    jobSaved:{
        type:[String]
    },
    companyFollow:{
        type:[String]
    },
   
    
},{timestamps:true},
);

export default mongoose.model("User",UserSchema);