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
                `${import.meta.env.VITE_BASE_URL}/api/job/search?title=${title}`
              );
              setAllJobs(res.data)
        }else if(location && location.length){
            let res = await axios.get(
                `${import.meta.env.VITE_BASE_URL}/api/job/search?location=${location}`
              );
              setAllJobs(res.data)
        }else if (title && location){
            let res = await axios.get(
                `${import.meta.env.VITE_BASE_URL}/api/job/search?title=${title}`
              );
              setAllJobs(res.data)
        }else{
            let res = await axios.get(
                `${import.meta.env.VITE_BASE_URL}/api/job`
              );
              setAllJobs(res.data)
        }
        
    }
      

  return (
    <main className={styles.Container}>
        <nav className={styles.NavContainer}><Navbar /></nav>
        <aside className={styles.searchComponentContainer}>
            <Search 
            title={title}
            setTitle={setTitle}
            location={location}
            setLocation={setLocation}
            jobGetter={jobGetter}
            />
            </aside>
        <section className={styles.jobsContainer}>
            {allJobs ? allJobs.map((h,i)=>{
                        return (<figure key={i} style={{backgroundColor:"#ffffff"}}>
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
                        </figure>)
                            }):<div className={styles.loader}>Empty</div>}
        </section>
    </main>
  )
}

export default SearchPage