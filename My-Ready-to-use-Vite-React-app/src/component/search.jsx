import React from 'react'
import styles from "./search.module.css"
import { MagnifyingGlassIcon,HomeIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import {Link} from "react-router-dom"
const Search = ({title,setTitle,location,setLocation,jobGetter,isDisible,text})=>{
  // const [location,setLocation] = useState("");
  console.log("location",location)
  // const [title,setTitle] = useState("");
  console.log("title",title);

  

  const handleTitle= (e)=>{
    setTitle(e.target.value)
  }

  
  const handleLocation= (e)=>{
    setLocation(e.target.value)
  }


  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.ContainerinputOFJobTitle} style={{border:"1px solid #D6D5D5",boxShadow:"0.5px 0.5px 1px #010101"}}><MagnifyingGlassIcon className={styles.searchIcon}/><input placeholder={isDisible?'Go to search page':'Search'} className={styles.inputOFJobTitle} value={title} onChange={handleTitle} disabled={isDisible?"disabled":""}/></div>
        <div className={styles.ContainerinputOFLocation} style={{border:"1px solid #D6D5D5",boxShadow:"0.5px 0.5px 1px #010101"}}><HomeIcon className={styles.homeIcon}/><input placeholder={isDisible?'Go to search page':'Location'} className={styles.inputOFLocation} value={location} onChange={handleLocation} disabled={isDisible?"disabled":""}/></div>
        <Link to="/search"><button className={styles.searchBTn} style={{border:"none",outline:"none"}} onClick={jobGetter}>{text?"Go to search":"Search"}</button></Link>
      </div>
    </div>
  )
}

export default Search