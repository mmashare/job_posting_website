import React from 'react'
import { useState,useEffect } from 'react'
import styles from "./profilepage.module.css"
import Navbar from '../component/navbar'
import myImage from '../assets/myImage1.jpg'
import myImage2 from "../assets/Twitter_Badge.svg.png";
import { useParams  } from 'react-router-dom'
import axios from 'axios'
import {Link} from "react-router-dom"
import Main from '../component/main'

const Profilepage = () => {
    const [companyToggle,setCompanyToggle] = useState(false);
    const [editBtnToggle,setEditBtnToggle] = useState(false)
    const [toogleForJobApply,setToggleForJobApply] = useState(false)
    const [toogleSavedjob,setToogleSavedjob] = useState(false)
    const [toogleFollowCompany,setToggleFollowCompany] = useState(false)
    const [toggleJobCreate,setToggleJobCreate] = useState(false)
    const [showJobOrCompany,setShowJobOrCompany] = useState(false);
    // this toogle is for posting job or company
    const [jobPostToogle,setJobPostToggle] = useState(true)
    const [CompanyPostToogle,setCompanyPostToogle] = useState(false)
    const [allJob,setAllJobs] = useState("");
    // console.log("allJob",allJob);
    const [userData,setUserData] = useState("") 
    // console.log("userData",userData);
    // console.log(import.meta.env.VITE_UPLOAD_PRESET)
    const [jobData,setJobData] = useState({             title:"",
                                                        CompanyName:"",
                                                        simpleDescription:"",
                                                        responsiblities:"",
                                                        jobRequirements:"",
                                                        experience:"",
                                                        employmentType:"",
                                                        jobLocation:"",
                                                        jobtype:"",
                                                        profilrImg:"",
                                                    });
    // console.log("jobData",jobData)

    const [updateProfile,setUpdateProfile] = useState({newName:"",newEmail:""})
    // console.log("updateProfile",updateProfile)


    let {id} = useParams();
    // console.log("id",id)
    // console.log("toogleForJobApply",toogleForJobApply)
    // console.log("toogleSavedjob",toogleSavedjob)
    // console.log("toogleFollowCompany",toogleFollowCompany)
    

    const HandleToogleForJobApply =()=>{
        if(toogleForJobApply === false){
        setToggleForJobApply(true)
        setToogleSavedjob(false)
        setToggleFollowCompany(false)
        }else{
            setToggleForJobApply(false)
            setToogleSavedjob(false)
            setToggleFollowCompany(false)
        }
    }

    const HandleToogleForJobSaved =()=>{
        if(toogleSavedjob === false){
        setToggleForJobApply(false)
        setToogleSavedjob(true)
        setToggleFollowCompany(false)
        }else{
            setToggleForJobApply(false)
            setToogleSavedjob(false)
            setToggleFollowCompany(false)
        }
    }

    const HandleToogleForFollowCompany =()=>{
        if(toogleFollowCompany === false){
        setToggleForJobApply(false)
        setToogleSavedjob(false)
        setToggleFollowCompany(true)
        }else{
        setToggleForJobApply(false)
        setToogleSavedjob(false)
        setToggleFollowCompany(false)
        }
    }

   const HandleToogleForJobPost = ()=>{
        if(jobPostToogle === false){
            setJobPostToggle(true)
            setCompanyPostToogle(false)
        }else{
            setJobPostToggle(false)
            setCompanyPostToogle(false)
        }
   }

        const profileGetter = async ()=>{
            let token =  JSON.parse(sessionStorage?.getItem("token") || "{}");
            let res = await axios.get(
                `${import.meta.env.VITE_BASE_URL}/api/user/${id}`,{
                    headers: {
                        'content-type': 'application/json',
                        'token': `Bearer,${token}`
                      }
                }
            );
            setUserData(res.data.userdata)
        }
        

       
        const UpdateProfileFunc = async ()=>{
            
            let token =  JSON.parse(sessionStorage?.getItem("token") || "{}");
            if(token){
            let res = await axios.put(
                `${import.meta.env.VITE_BASE_URL}/api/user/${id && id}`,{name:updateProfile.newName,email:updateProfile.newEmail},{
                    headers: {
                        'content-type': 'application/json',
                        'token': `Bearer,${token}`
                      }
                }
            )};
            // console.log("updatedProfile",res.data)
        }

        const UploadImages = (file) => {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", `${import.meta.env.VITE_UPLOAD_PRESET}`);
            axios
              .post(
                "https://api.cloudinary.com/v1_1/himanshuthakur/image/upload",
                formData
              )
              .then((res) => {
                window.alert("Image Uploaded Successfully");
                setJobData({...jobData,profilrImg:res.data.url});
                console.log(res);
                
              })
              .catch((err) => {
                window.alert("something that wrong");
              });
          };

        const CreateJobFunc = async ()=>{
            let token =  JSON.parse(sessionStorage?.getItem("token") || "{}");
            let res = await axios.post(
                `${import.meta.env.VITE_BASE_URL}/api/job`,{title:jobData.title,CompanyName:jobData.CompanyName,simpleDescription:jobData.simpleDescription,responsiblities:jobData.responsiblities,jobRequirements:jobData.jobRequirements,experience:jobData.experience,employmentType:jobData.employmentType,jobLocation:jobData.jobLocation,jobtype:jobData.jobtype,CompanyImg:jobData.profilrImg || "",userId:id},{
                    headers: {
                        'content-type': 'application/json',
                        'token': `Bearer,${token}`
                      }
                }
            );
            console.log("createCompany",res.data)
        }

        const JObGetter = async ()=>{
            let res = await axios.get(
                `${import.meta.env.VITE_BASE_URL}/api/job/single/${id}`
            );
            // console.log("allJobs",res.data);
            setAllJobs(res.data);
        }

        const GetAllAppliedJob = async ()=>{
            let userId
            let token
            if (typeof window !== 'undefined') {
                userId =  JSON.parse(sessionStorage?.getItem("userID") || "{}"); 
                 token =  JSON.parse(sessionStorage?.getItem("token") || "{}"); 
             }
             if(userId && token){
            let res = await axios.get(
                `${import.meta.env.VITE_BASE_URL}/api/job/applyjobs/${userId}`,{
                    headers: {
                        'content-type': 'application/json',
                        'token': `Bearer,${token}`
                      }
                }
            );
            console.log("appliedJobs",res.data);
            setAllJobs(res.data);
             }
        }

        const GetAllSavedJob = async ()=>{
            let userId
            let token
            if (typeof window !== 'undefined') {
                userId =  JSON.parse(sessionStorage?.getItem("userID") || "{}"); 
                token =  JSON.parse(sessionStorage?.getItem("token") || "{}");  
             }
             if(userId && token){
            let res = await axios.get(
                `${import.meta.env.VITE_BASE_URL}/api/job/savedjobs/${userId}`,{
                    headers: {
                        'content-type': 'application/json',
                        'token': `Bearer,${token}`
                      }
                }
            );
            console.log("appliedJobs",res.data);
            setAllJobs(res.data);
             }
        }

    useEffect(()=>{
            id && profileGetter()
     },[id])

     useEffect(()=>{
       if(userData &&  userData.isCompany === true){
        setCompanyToggle(true)
       }else{
        setCompanyToggle(false)
       }
     },[userData])

    useEffect(()=>{
        if(userData &&  userData.isCompany === true){
            JObGetter()
        }
    },[userData])

    useEffect(()=>{
        toogleForJobApply?GetAllAppliedJob():""
        toogleSavedjob?GetAllSavedJob():""
    },[toogleForJobApply === true,toogleSavedjob === true ])

  return (
    <div className={styles.container}>
        <div className={styles.navbarContainer}>
            <Navbar/>
        </div>
        <div className={styles.upperContainer}>
            {/* banner img */}
            <div className={styles.bannerImgContainer} >
            <img src={myImage} className={styles.bannerImg} />
            </div>
            
            {/* profile pic */}
            <div className={styles.profilePicContainer} >
            <img src={id && userData.profileIMg|| myImage} className={styles.profilePic}/>
            </div>
            
        </div>


        <div className={styles.firstContainer}>
            <div className={styles.detailContainer}>
                <p className={styles.name}>{id && userData.name}</p>
                <img src={myImage2} className={styles.verifiedIcon}/>
                {/* <p >Verifed Icon</p> */}
            </div>
            <div className={styles.editBtnContainer}>
                <button className={styles.editBtn} style={{border:"none",outline:"none"}} onClick={()=>{setEditBtnToggle(true)}}>Edit</button>
            </div>
        </div>

        <div className={styles.secContainer}>
            {/* when companyToggle true mean only those option show where we post jobs and when companyToggle is false then only those option where we can only see jobs and apply for it */}
           { companyToggle?
                (
                    // here we post job
                    <div className={styles.sidebarContainer}>

                    <div className={styles.optionContainer1}>
                        {/* showJobOrCompany jab false hoga to job show hogi and when showJobOrCompany true hoga tab company show hogi */}
                        <p className={showJobOrCompany?styles.NojobShowBtn:styles.jobShowBtn} onClick={()=>{setShowJobOrCompany(false)}}> Jobs</p>
                        {/* <p className={showJobOrCompany?styles.CompanyShowBtn:styles.NoCompanyShowBtn} onClick={()=>{setShowJobOrCompany(true)}}>Companies</p> */}
                        <button className={styles.jobCreateBtn} style={{outline:"none"}} onClick={()=>{setToggleJobCreate(true)}}>Create</button>
                    </div>
                    
                    </div>
                ):
                (
                    // here we only look for job and apply for job
                <div className={styles.sidebarContainer}>

                       <div className={styles.optionContainer}>
                            <p className={toogleForJobApply?styles.SemijobAppliedBTn:styles.jobAppliedBTn} onClick={HandleToogleForJobApply}> Applied Jobs</p>
                            <p className={toogleSavedjob?styles.SemijobSavedBtn:styles.jobSavedBtn} onClick={HandleToogleForJobSaved}> Saved Jobs </p>
                            {/* <p className={toogleFollowCompany?styles.SemifollowedCompanyBtn:styles.followedCompanyBtn} onClick={HandleToogleForFollowCompany}> Followed Companies </p> */}
                       </div>

                </div>     
                
            )}

            {/* this is the main section which show for all type of user (display section) */}
            <div className={styles.jobSeeSection}>
            {allJob && allJob.map((h,i)=>{
                console.log(h)
                    return (<div key={i} style={{backgroundColor:"#f3f3f3"}}>
                       <Link to={`/job/${h._id}`}> <Main
                        id={h._id}
                        jobName={h.title}
                        companyName={h.CompanyName}
                        jobType={h.jobtype}
                        experience={h.experience}
                        employment={h.employmentType}
                        location={h.jobLocation}
                        jobTime={h.createdAt}
                        companyIMg={h.CompanyImg}
                        /></Link>
                    </div>)
                })}
            </div>

            {/* section for edit user detail  */}
           {editBtnToggle?<div className={styles.EditProfileDataSection} >
            <div className={styles.FirstEditContainer}>
            <p className={styles.deatils}>Details</p>
            <button onClick={()=>{setEditBtnToggle(false)}} className={styles.closeDivBtn} style={{backgroundColor:"#f3f3f3"}}>X</button>
            </div>
            
            <div className={styles.UpdateDeatilsContainer}>
                <input className={styles.UpdateDeatilsNameInput} placeholder="*New Name" style={{outline:"none"}} value={updateProfile.newName} onChange={(e)=>{setUpdateProfile({...updateProfile,newName:e.target.value})}}/>
                <input className={styles.UpdateDeatilsEmailInput} placeholder="*New Email" style={{outline:"none"}} value={updateProfile.newEmail} onChange={(e)=>{setUpdateProfile({...updateProfile,newEmail:e.target.value})}}/>
                <button className={styles.UpdateDeatilsBtn} style={{outline:"none"}} onClick={UpdateProfileFunc}>Update</button>
            </div>

            </div>:""}

            {/* section for posting job */}
            {toggleJobCreate?<div className={styles.EditProfileDataSection} style={{height:"38rem"}}>
            
            <div className={styles.FirstEditContainer}>
            <p className={styles.deatils}>Create Job</p>
            <button onClick={()=>{setToggleJobCreate(false)}} className={styles.closeDivBtn} style={{backgroundColor:"#f3f3f3"}}>X</button>
            </div>

            <div className={styles.jobOrCompanySelectContainer}>
                <p className={jobPostToogle?styles.SelectedJobSelect:styles.jobSelect} >Job</p>
                {/* <p className={CompanyPostToogle?styles.SelectedCompanySelect:styles.companySelect} onClick={HandleToogleForCompanyPost}>Company</p> */}
            </div>

            <div className={styles.UpdateDeatilsContainer} style={{height:"29rem"}}>
            <input className={styles.UpdateDeatilsNameInput} placeholder="Company Name" style={{outline:"none",height:"2rem"}} value={jobData.CompanyName} onChange={(e)=>{setJobData({...jobData,CompanyName:e.target.value})}}/>
                <input className={styles.UpdateDeatilsNameInput} placeholder="Job Title" style={{outline:"none",height:"2rem"}} value={jobData.title} onChange={(e)=>{setJobData({...jobData,title:e.target.value})}}/>
                <textarea className={styles.UpdateDeatilsEmailInput} placeholder="Description" style={{outline:"none",height:"4rem",resize: "none"}} value={jobData.simpleDescription} onChange={(e)=>{setJobData({...jobData,simpleDescription:e.target.value})}}/>
                <textarea className={styles.UpdateDeatilsNameInput} placeholder="Responsibilities" style={{outline:"none",height:"4rem",resize: "none"}} value={jobData.responsiblities} onChange={(e)=>{setJobData({...jobData,responsiblities:e.target.value})}}/>
                <input className={styles.UpdateDeatilsEmailInput} placeholder="Job Location" style={{outline:"none"}} value={jobData.jobLocation} onChange={(e)=>{setJobData({...jobData,jobLocation:e.target.value})}}/>
                <input className={styles.UpdateDeatilsEmailInput} placeholder="Job Requirements" style={{outline:"none",marginTop:"2px"}} value={jobData.jobRequirements} onChange={(e)=>{setJobData({...jobData,jobRequirements:e.target.value})}}/>
                <div className={styles.inputContainer2} style={{width:"15rem",marginLeft:"auto",marginRight:"auto"}}>
                        <p className={styles.profileImg} style={{marginLeft:"10px"}}>Company Logo</p>
                        <input placeholder='gg' className={styles.inputwrapper2} type="file" style={{marginLeft:"10px"}} onChange={(e) => UploadImages(e.target.files[0])}/>
                </div>
                <div className={styles.optionofIndustryLabelContainer}>

                    <select id="indsType" className={styles.optionofIndustrySelect} style={{border:"none",outline:"none",backgroundColor:"#f3f3f3",color:"#0c0c0c"}} onChange={(e)=>{setJobData({...jobData,experience:e.target.value})}}>
                    <option value="ITS" className={styles.optionofIndustryOpt} style={{border:"none",outline:"none",backgroundColor:"#f3f3f3",color:"#0c0c0c"}} disabled>Experience</option>
                    <option value="Under 1 Year" className={styles.optionofIndustryOpt}>Under 1 Year</option>
                    <option value="1-2 Years" className={styles.optionofIndustryOpt}>1-2 Years</option>
                    <option value="2-6 Years" className={styles.optionofIndustryOpt}>2-6 Years</option>
                    <option value="Over 6 Years" className={styles.optionofIndustryOpt}>Over 6 Years</option>
                    </select>
                </div>
                {/* employmentType */}
                <div className={styles.optionofIndustryLabelContainer}>

                    <select id="emptype" className={styles.optionofIndustrySelect} style={{border:"none",outline:"none",backgroundColor:"#f3f3f3",color:"#0c0c0c"}} onChange={(e)=>{setJobData({...jobData,employmentType:e.target.value})}}>
                    <option value="Emptype" className={styles.optionofIndustryOpt} style={{border:"none",outline:"none",backgroundColor:"#f3f3f3",color:"#0c0c0c"}} disabled>Employment Type</option>
                    <option value="Remote" className={styles.optionofIndustryOpt}>Remote</option>
                    <option value="onSite" className={styles.optionofIndustryOpt}>On-site</option>
                    </select>
                </div>
                {/* jobtype */}
                <div className={styles.optionofIndustryLabelContainer}>

                    <select id="jobtype" className={styles.optionofIndustrySelect} style={{border:"none",outline:"none",backgroundColor:"#f3f3f3",color:"#0c0c0c"}} onChange={(e)=>{setJobData({...jobData,jobtype:e.target.value})}}>
                    <option value="jobtype" className={styles.optionofIndustryOpt} style={{border:"none",outline:"none",backgroundColor:"#f3f3f3",color:"#0c0c0c"}} disabled>Job Type</option>
                    <option value="Part-time" className={styles.optionofIndustryOpt}>Part-Time</option>
                    <option value="Full-time" className={styles.optionofIndustryOpt}>Full-Time</option>
                    <option value="Internship" className={styles.optionofIndustryOpt}>Intership</option>
                    </select>
                </div>
                <button className={styles.UpdateDeatilsBtn} style={{outline:"none"}} onClick={CreateJobFunc}>Update</button>
            </div>
           

            </div>
            :""}
        </div>
    </div>
  )
}

export default Profilepage