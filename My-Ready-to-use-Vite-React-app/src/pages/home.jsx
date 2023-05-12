import React,{ useEffect,useState } from 'react'
import Navbar from '../component/navbar'
import Search from '../component/search'
import Sidebar from '../component/sidebar'
import Main from '../component/main'
import styles from "./home.module.css"
import axios from 'axios'
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux"
const Home = () => {
    
    const [allJobs,setAllJobs] = useState();
    // console.log(allJobs)
    const [title,setTitle] = useState();
    const [location,setLocation] = useState();

     const {
        fulltime,
        parttime,
        intership,
        remote,
        onsite,
        underOneYear,
        oneOrTwoYear,
        twoToSixYear,
        overSixYear
    } = useSelector((state)=>{  
    return state.Filter
     })
    
    // console.log("---------------------------------------------------------------------")
    // console.log("fulltime",fulltime)
    // console.log("parttime",parttime)
    // console.log("intership",intership)
    // console.log("remote",remote)
    // console.log("onsite",onsite)
    // console.log("underOneYear",underOneYear)
    // console.log("oneOrTwoYear",oneOrTwoYear)
    // console.log("twoToSixYear",twoToSixYear)
    // console.log("overSixYear",overSixYear)



    const jobGetterFun = async ()=>{

        if(fulltime === true){
            
            let res = await axios.get(
              "http://localhost:5500/api/job?Jobtype=Full-time"
            );
            setAllJobs(res.data)
          }else if(parttime === true){
            
            let res = await axios.get(
              "http://localhost:5500/api/job?Jobtype=Part-time"
            );
            setAllJobs(res.data)
          }else if(intership === true){
            
            let res = await axios.get(
              "http://localhost:5500/api/job?Jobtype=Internship"
            );
            setAllJobs(res.data)
          }else if(remote === true){
            
            let res = await axios.get(
              "http://localhost:5500/api/job?EmploymentType=Remote"
            );
            setAllJobs(res.data)
          }else if(onsite === true){
            
            let res = await axios.get(
              "http://localhost:5500/api/job?EmploymentType=onSite"
            );
            setAllJobs(res.data)
          }else if(underOneYear === true){
            
            let res = await axios.get(
              "http://localhost:5500/api/job?Experience=Under 1 Year"
            );
            setAllJobs(res.data)
          }else if(oneOrTwoYear === true){
            
            let res = await axios.get(
              "http://localhost:5500/api/job?Experience=1-2 Years"
            );
            setAllJobs(res.data)
          }else if(twoToSixYear === true){
            
            let res = await axios.get(
              "http://localhost:5500/api/job?Experience=2-6 Years"
            );
            setAllJobs(res.data)
          }else if(twoToSixYear === true){
            
            let res = await axios.get(
              "http://localhost:5500/api/job?Experience=2-6 Years"
            );
            setAllJobs(res.data)
          }else if(overSixYear === true){
            
            let res = await axios.get(
              "http://localhost:5500/api/job?Experience=Over 6 Years"
            );
            setAllJobs(res.data)
          }else{

            let res = await axios.get("http://localhost:5500/api/job");
      
            setAllJobs(res.data);
          }
 
    }




    useEffect(()=>{
        jobGetterFun();
    
    },[fulltime,parttime,intership,remote,onsite,underOneYear,oneOrTwoYear,twoToSixYear,overSixYear])
  return (
    <div className={styles.container}>
        <div className={styles.NavbarContainer}>
            <Navbar/>
        </div>
        <div className={styles.SearchContainer}>
            <Search
            isDisible={true}
            text={true}
            />
        </div>
        <div className={styles.MainContainer}>
            <div className={styles.SidebarContainer}>
                <Sidebar/>
            </div>
            <div className={styles.JobContainer}>
                {allJobs && allJobs.map((h,i)=>{
                    return (<div key={i} style={{backgroundColor:"#ffffff"}}>
                      <Link to={`/job/${h._id}`}>
                        <Main
                        id={h._id}
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
                    </div>)
                })}
                
            
            </div>
        </div>
    </div>
  )
}

export default Home