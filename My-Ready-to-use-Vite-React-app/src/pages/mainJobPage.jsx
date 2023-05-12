import React,{ useState } from 'react'
import Navbar from '../component/navbar';
import styles from "./mainJobPage.module.css";
import myImage from '../assets/myImage2.png';
import Main from '../component/main';
import { useParams  } from 'react-router-dom';
import axios from "axios"
import { useEffect } from 'react';
import moment  from "moment";
import {Link} from "react-router-dom"
const MainJobPage = () => {
  const [jobInfo,SetJobInfo] = useState("")
  console.log("jobInfo",jobInfo)

  const [userData,setUserData] = useState("")
  console.log("userData",userData)

  const [RandomJob,setRandomJob] = useState(""); 
  // console.log("RandomJob",RandomJob)

  const [myToggle,setMyToggle] = useState(false);

  let {id} = useParams();
  // console.log("id",id)

  const AllRandomJob = async ()=>{
        let res = await axios.get(
          `http://localhost:5500/api/job`
      );
      // console.log("allJobs",res.data);
      setRandomJob(res.data);
  }


  const JobGetter = async ()=>{
    let res = await axios.get(
      `http://localhost:5500/api/job/onlyOne/${id}`
  );
  // console.log("allJobs",res.data);
  SetJobInfo(res.data);
  
  }


  const profileGetter = async ()=>{
    if (typeof window !== 'undefined') {
      let userId =  JSON.parse(sessionStorage?.getItem("userID") || "{}");  
      let token =  JSON.parse(sessionStorage?.getItem("token") || "{}");  
      if(userId){
        let res = await axios.get(
          `http://localhost:5500/api/user/${userId}`,{
            headers: {
                'content-type': 'application/json',
                'token': `Bearer,${token}`
              }
        }
      );
      setUserData(res.data.userdata)
      
      }
      }
     }

   const JobSaved = async ()=>{
    let userId
    let token
    if (typeof window !== 'undefined') {
       userId =  JSON.parse(sessionStorage?.getItem("userID") || "{}");
        token =  JSON.parse(sessionStorage?.getItem("token") || "{}");   
    }
    if(userId){
      let res = await axios.put(
        `http://localhost:5500/api/job/saved/${userId}`,{jobId:id},{
          headers: {
              'content-type': 'application/json',
              'token': `Bearer,${token}`
            }
      }
        );
      console.log(res.data)
    }else{
      window.alert("please Login First")
    }
     
   }

   const JobApply = async ()=>{
    let userId
    let token
    if (typeof window !== 'undefined') {
       userId =  JSON.parse(sessionStorage?.getItem("userID") || "{}"); 
       token =  JSON.parse(sessionStorage?.getItem("token") || "{}");  
    }
    if(userId){
      let res = await axios.put(
        `http://localhost:5500/api/job/apply/${userId}`,{jobId:id},{
          headers: {
              'content-type': 'application/json',
              'token': `Bearer,${token}`
            }
      }
        );
      console.log(res.data)
    }else{
      window.alert("please Login First")
    }
     
   }

  useEffect(()=>{
    id && JobGetter()
    id && AllRandomJob()
  },[id])


   useEffect(()=>{
    jobInfo &&  profileGetter()
   },[jobInfo.length])

  
  return (
    <div className={styles.container}>

      <div className={styles.navbarContainer}>
        <Navbar/>
      </div>
    {/* recomended jobs */}
    <div className={styles.RecomendedJObContainerForBigScreen}>

    </div>
    {/* main job div */}
   
    <div className={styles.MainJObContainer}>
 
    <div className={styles.BannerIMgContainer} style={{borderRadius:"10px",border:"none"}}>
      <img src={myImage} className={styles.BannerImg} style={{borderRadius:"10px",border:"none"}}/>
     
    </div>

    <div className={styles.FrontMainPageContainer}>
          {/*front main page  */}
    {/* <img src={myImage} className={styles.CompanyPRofileImg}/> */}

    <div className={styles.jobTitleContainer}>

      <div className={styles.companyLogoSection}>
      <img src={jobInfo && jobInfo.CompanyImg || myImage} className={styles.CompanyPRofileImg}/>
      </div>

      <div className={styles.companyTitleSection}>
        <h1 className={styles.jobTitle}>{jobInfo && jobInfo.title}</h1>
        <h1 className={styles.companyTitle}>{jobInfo && jobInfo.CompanyName}</h1>
      </div>

    </div> 
    {/* upper div close jobTitleContainer */}

    <div className={styles.parentContainer}>

    <div className={styles.childdContainer1}>
    <div className={styles.SimpleDescriptionSection}>
    <p className={styles.SimpleDescription} style={{fontSize:"1rem",color: "#0c0c0c"}}>Description</p>
      <p className={styles.SimpleDescription}>{jobInfo && jobInfo.simpleDescription}</p>
    </div>

    <div className={styles.jobResponsiblitySection}>
    <p className={styles.SimpleDescription} style={{fontSize:"1rem",color: "#0c0c0c"}}>Job Responsiblities</p>
    <p className={styles.jobResponsiblity}>{jobInfo && jobInfo.responsiblities}</p>
    </div>

    <div className={styles.RequireSkillSection}>
    <p className={styles.SimpleDescription} style={{fontSize:"1rem",color: "#0c0c0c"}}>Job Requirements</p>
    <p className={styles.RequireSkill}>{jobInfo && jobInfo.jobRequirements}</p>
    </div>

    </div>

    <div className={styles.childdContainer2}>
    <div className={styles.CompanyDetailContainer}>
      {/* compnay details */}
      <p className={styles.companyDetailHeading}>Company Details</p>
      <p className={styles.Question}>Company name</p>
      <p className={styles.Answer}>{jobInfo && jobInfo.CompanyName}</p>
      <p className={styles.Question}>Created time</p>
      <p className={styles.Answer}>{jobInfo && moment(jobInfo.createdAt).format('DD/MM/YYYY')}</p>
      <p className={styles.Question}>Location</p>
      <p className={styles.Answer}>{jobInfo && jobInfo.jobLocation}</p>
    </div>

    <div className={styles.CompanyDetailContainer}>
      {/* other job imformation like location,jobtype etc */}
      <p className={styles.companyDetailHeading}>Job Details</p>
      <p className={styles.Question}>Job type</p>
      <p className={styles.Answer}>{jobInfo && jobInfo.jobtype}</p>
      <p className={styles.Question}>Employment type</p>
      <p className={styles.Answer}>{jobInfo && jobInfo.employmentType}</p>
      <p className={styles.Question}>Experience</p>
      <p className={styles.Answer}>{jobInfo && jobInfo.experience}</p>
      <p className={styles.Question}>Number of Applicants</p>
      <p className={styles.Answer}>{jobInfo && (jobInfo.applyUser.length || 0) }</p>
      <button className={styles.savedJObBTN} style={{color:"#f3f3f3",backgroundColor:"#0c0c0c",outline:"none"}} onClick={JobApply}>Apply Job</button>
      <button className={styles.savedJObBTN} onClick={JobSaved} style={{outline:"none"}}>Saved Job</button>
    </div>

    </div>
    </div>
     {/* upper div close parentContainer */}
    
    </div>
     {/* upper div close FrontMainPageContainer */}
    </div>
    {/* upper div close MainJObContainer */}
    

    {/* recomended jobs */}
    <div className={styles.RecomendedJObContainerForSmallScreen}>
    {RandomJob && RandomJob.map((h,i)=>{
          return (
                 <div key={i} style={{backgroundColor:"#f3f3f3",paddingBottom:"5px",paddingTop:"2px"}}>
                       <Link to={`/job/${h._id}`}> 
                       <Main 
                        jobName={h.title}
                        companyName={h.CompanyName}
                        jobType={h.jobtype}
                        experience={h.experience}
                        employment={h.employmentType}
                        location={h.jobLocation}
                        jobTime={h.createdAt}
                        companyIMg={h.CompanyImg}
                        />
                        </Link>
                 </div>
                    )
          })}
    </div>

      </div>
  )
}

export default MainJobPage