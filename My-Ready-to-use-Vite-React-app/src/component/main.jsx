import React,{useEffect} from 'react'
import {useSelector} from "react-redux"
import styles from "./main.module.css"
import Image from "../assets/wallpaper1.png"
import { BookmarkIcon } from '@radix-ui/react-icons';
import moment  from "moment"
import { useState } from 'react';
const Main = ({id,jobName,companyName,jobType,experience,employment,location,jobTime,companyIMg}) => {
  
  const [myToggle,setMyToggle] = useState(false);

 
  return (
    <div className={styles.container}>

      

      <div className={styles.wrapper1}>

      <div className={styles.logoContainer}>
        <img src={companyIMg || Image} className={styles.Img}/>
      </div>

      <div className={styles.smallWrapper}>

      <div className={styles.titleContainer}>
        {/* company title */}
        <h3 className={styles.JobHeading} style={{color:"#0c0c0c"}}>{jobName}</h3>
      </div>

      <div className={styles.companyNameContainer}>
        {/* Company name */}
        <p className={styles.companyName}>{companyName}</p>
      </div>

      </div>

      <div className={styles.smallScreenSaveBTn}>
        {/* it's the save btn that this div have for only mobile responsive, on bigger screeen it is display none */}
      <BookmarkIcon className={styles.realBtn}/>
      </div>

      </div>

      <div className={styles.wrapper2}>

      <div className={styles.jobTypeContainer}>
        {/* job type ex-> fulltime or part time */}
        <p className={styles.jobType}>{jobType} </p>
      </div>

      <div className={styles.experienceContainer}>
        {/* experience  */}
        <p className={styles.experience}>{experience}</p>
      </div>

      <div className={styles.employmentContainer}>
        {/* employment type -> remoteor on-site */}
        <p className={styles.employment}>{employment} </p>
      </div>

      </div>

      <div className={styles.wrapper3}>

      <div className={styles.locationContainer}>
        {/* location */}
        <p className={styles.location}>{location} </p>
      </div>

      <div className={styles.jobTimeContainer}>
        {/* job Post time  */}
        <p className={styles.jobTime}>{moment(jobTime).format('DD/MM/YYYY')} </p>
      </div>

      <div className={styles.BigScreenJobSaveBTN}>
        {/* job save button that only seen on big screen on small screen it's disabled */}
        <BookmarkIcon className={styles.realBtn}/>
      </div>

      </div>

      
      
    </div>
  )
}

export default Main