import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styles from "./navbar.module.css"
import Logo from "../assets/job-find-logo.png";
import Image from "../assets/unnamed.jpg";
import {logout} from "../redux/userSlice.js"
import {useDispatch,useSelector} from "react-redux";
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom"
import {AuthToggleChanger} from "../redux/authToggle.js"
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

const Navbar = () => {
  const authToggle = useSelector((state)=>{return state.authToggle.authValue})
  const [toggle,setToggle] = useState(false)
  const [optionToggle,setOptiontoggle] = useState(false);
  const [btn1,setBtn1] = useState(authToggle)
  // const [btn2,setBtn2] = useState(false)
  const navigate = useNavigate();
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
    <main className={styles.container}>
      <figure className={styles.LogoContainer}>
      <Link to="/"><img src={Logo} alt={""} className={styles.Logoo}/></Link>
      </figure>
      <div  className={styles.searchBtnContainer}>
          <MagnifyingGlassIcon className={styles.searchBTn} onClick={()=>{navigate('/search')}}/>
        </div>
        {toggle?(
          <section className={styles.ProfileContainer}>
            
         <figure className={styles.ProfileImgContainer} onClick={()=>{setOptiontoggle(!optionToggle)}}>
         <img src={profileImgUrl||Image} className={styles.ProfileImg}/>
         
          </figure>
          {optionToggle?(<div className={styles.ProfileOptionContainer}>
            <Link to={`/profile/${userId}`}><p className={styles.MyProfileOption}>My-Profile</p></Link>
            {/* <p className={styles.MyCompanyOption}>My-Company</p> */}
            <p className={styles.LogoutOption} onClick={()=>{dispatch(logout())}}>Log-out</p>
          </div>):""}
          </section>
        )
        :
        (
          <section className={styles.BtnContainer}>
            {/* <Link to="/auth"></Link> */}

          <div className={styles.LoginAndSignupContainer}>
            <button className={btn1?styles.LoginBTn:styles.semiLoginBtn} style={{"outline":"none"}} onClick={()=>{setBtn1(true);dispatch(AuthToggleChanger(true));navigate("/auth")}}>Login</button>
            <button className={btn1?styles.SignupBTn:styles.semiSignupBtn} style={{"outline":"none"}} onClick={()=>{setBtn1(false);dispatch(AuthToggleChanger(false));navigate("/auth")}}>Signup</button>
          </div> 
        
        {/* <div  className={styles.searchBtnContainer}>
          <MagnifyingGlassIcon className={styles.searchBTn} onClick={()=>{navigate('/search')}}/>
        </div> */}

        </section>
        )
        }   
      
    </main>
  )
}

export default Navbar