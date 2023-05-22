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
    <main className={styles.container}>

      

      <section className={styles.wrapper1}>

      <figure className={styles.logoContainer}>
        <img src={companyIMg || Image} className={styles.Img}/>
      </figure>

      <div className={styles.smallWrapper}>

      <div className={styles.titleContainer}>
        {/* company title */}
        <h3 className={styles.JobHeading}>{jobName}</h3>
      </div>

      <div className={styles.companyNameContainer}>
        {/* Company name */}
        <p className={styles.companyName}>{companyName}</p>
      </div>

      </div>

     {/* it's the save btn that this div have for only mobile responsive, on bigger screeen it is display none */}
      {/* <div className={styles.smallScreenSaveBTn}> 
      <BookmarkIcon className={styles.realBtn}/>
      </div> */}

      </section>

      <section className={styles.wrapper2}>

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

      </section>

      <div className={styles.wrapper3}>

      <div className={styles.locationContainer}>
        {/* location */}
        <p className={styles.location}>{location} </p>
      </div>

      <div className={styles.jobTimeContainer}>
        {/* job Post time  */}
        <p className={styles.jobTime}>{moment(jobTime).format('DD/MM/YYYY')} </p>
      </div>

     {/* job save button that only seen on big screen on small screen it's disabled */}
      {/* <div className={styles.BigScreenJobSaveBTN}>
       
        <BookmarkIcon className={styles.realBtn}/>
      </div> */}

      </div>

      
      
    </main>
  )
}

export default Main