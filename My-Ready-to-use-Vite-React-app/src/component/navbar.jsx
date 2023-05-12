import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styles from "./navbar.module.css"
import Logo from "../assets/job-find-logo.png";
import Image from "../assets/unnamed.jpg";
import {logout} from "../redux/userSlice.js"
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom"
const Navbar = () => {
  const [toggle,setToggle] = useState(false)
  const [optionToggle,setOptiontoggle] = useState(false);
  const [btn1,setBtn1] = useState(true)
  const [btn2,setBtn2] = useState(false)
  
  // console.log("btn1",btn1)
  // console.log("btn2",btn2)

  const dispatch = useDispatch();
  // console.log("optionToggle",optionToggle)
  let userId =  JSON.parse(sessionStorage?.getItem("userID") || "{}");
  // console.log("userId",userId)

  let profileImgUrl = JSON.parse(sessionStorage?.getItem("profileImg") || "{}");
 
  useEffect(() => {
    userId && userId.length?setToggle(true):setToggle(false)
     
    },[userId]); 

  
  return (
    <div className={styles.container}>
      <div className={styles.LogoContainer}>
      <Link to="/"><img src={Logo} alt={""} className={styles.Logoo}/></Link>
      </div>
      
        {toggle?(
          <div className={styles.ProfileContainer}>
         <div className={styles.ProfileImgContainer} onClick={()=>{setOptiontoggle(!optionToggle)}}>
         <img src={profileImgUrl||Image} className={styles.ProfileImg}/>
          </div>
          {optionToggle?(<div className={styles.ProfileOptionContainer}>
            <Link to={`/profile/${userId}`}><p className={styles.MyProfileOption}>My-Profile</p></Link>
            {/* <p className={styles.MyCompanyOption}>My-Company</p> */}
            <p className={styles.LogoutOption} onClick={()=>{dispatch(logout())}}>Log-out</p>
          </div>):""}
          </div>
        )
        :
        (
          <div className={styles.BtnContainer}>
          <Link to="/auth"><button className={btn1?styles.LoginBTn:styles.semiLoginBtn} style={{"outline":"none"}} onClick={()=>{setBtn2(false);setBtn1(true)}}>Login</button></Link>
          <Link to="/auth"><button className={btn2?styles.semiSignupBtn:styles.SignupBTn} style={{"outline":"none"}} onClick={()=>{setBtn1(false);setBtn2(true)}}>Signup</button></Link>
        </div>
        )
        }
        

        
      
    </div>
  )
}

export default Navbar