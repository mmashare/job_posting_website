import React,{ useState,useEffect }  from 'react'
import styles from "./searchpage.module.css";
import Navbar from '../component/navbar';
import Search from '../component/search';
import Main from '../component/main';
import axios from 'axios';
import {Link} from "react-router-dom"
import Image from '../assets/tomImage.jpg'
const SearchPage = () => {
    const [allJobs,setAllJobs] = useState("");
    console.log(allJobs)
    const [title,setTitle] = useState();
    const [location,setLocation] = useState();

    // console.log("title",title)
    // console.log("location",location)


    const jobGetter = async()=>{
        if(title && title.length){
            let res = await axios.get(
                `http://localhost:5500/api/job/search?title=${title}`
              );
              setAllJobs(res.data)
        }else if(location && location.length){
            let res = await axios.get(
                `http://localhost:5500/api/job/search?location=${location}`
              );
              setAllJobs(res.data)
        }else if (title && location){
            let res = await axios.get(
                `http://localhost:5500/api/job/search?title=${title}`
              );
              setAllJobs(res.data)
        }else{
            let res = await axios.get(
                `http://localhost:5500/api/job`
              );
              setAllJobs(res.data)
        }
        
    }
      

  return (
    <div className={styles.Container}>
        <div className={styles.NavContainer}><Navbar /></div>
        <div className={styles.searchComponentContainer}>
            <Search 
            title={title}
            setTitle={setTitle}
            location={location}
            setLocation={setLocation}
            jobGetter={jobGetter}
            />
            </div>
        <div className={styles.jobsContainer}>
            {allJobs && allJobs.map((h,i)=>{
                        return (<div key={i} style={{backgroundColor:"#ffffff"}}>
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
                        </div>)
                            })}
        </div>
    </div>
  )
}

export default SearchPage