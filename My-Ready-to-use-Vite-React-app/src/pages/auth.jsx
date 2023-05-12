import React from 'react'
import styles from "./auth.module.css"
import Navbar from '../component/navbar'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"
import {loginStart,loginSuccess,loginFailure,logout,profileImgGetter,tokenGetter} from "../redux/userSlice.js"
import {useDispatch,useSelector} from "react-redux"
const Auth = () => {
    // thebeast07 --> this is my preset name
    const [toggle,setToggle] = useState(false);
    const dispatch = useDispatch();
    const [radioCheck,setRadioCheck] = useState(false)
    const [email,setEmail] = useState("");
    const [name,setName] = useState("");
    const [profileImg,setProfileIMg] = useState("");
    const [password,setPassword] = useState("");
    // console.log("email",email);
    // console.log("Password",password);
    const [signupToggle,setSignupToggle] = useState(false)
    
    // console.log(import.meta.env.VITE_BASE_URL)
    

    const handleLogin = async () =>{
       
        try {
            let res = await axios.post(
                `${import.meta.env.VITE_BASE_URL}/api/login`,{email,password}
              );
              console.log("res",res.data.userdata._id)
              dispatch(loginSuccess(res.data.userdata._id))
              dispatch(tokenGetter(res.data.access_token))
              dispatch(profileImgGetter(res.data.userdata.profileIMg))
              location.reload();
              
        } catch (error) {
            console.log("err",error)
            dispatch(loginFailure())
        }
       
    }

    const handleSignUp = async () =>{
        dispatch(loginStart())
        try {
            let res = await axios.post(
                `${import.meta.env.VITE_BASE_URL}/api/signup`,{name,email,password,profileIMg:profileImg,isCompany:radioCheck}
              );
              console.log("res",res.data.userdata._id)
              dispatch(loginSuccess(res.data.userdata._id))
              dispatch(profileImgGetter(res.data.userdata.profileIMg))
              setSignupToggle(true)
            //   location.reload();
              
        } catch (error) {
            console.log("err",error)
            dispatch(loginFailure())
        }
        
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
            setProfileIMg(res.data.url);
            console.log(res);
            
          })
          .catch((err) => {
            window.alert("something that wrong");
          });
      };

      useEffect(()=>{
        if (typeof window !== 'undefined') {
           let userId =  JSON.parse(sessionStorage?.getItem("userID") || "{}");  
           if(userId && userId.length < 1){
            dispatch(logout())
           }
          }
      },[handleLogin,handleSignUp])

  return (
    <div className={styles.container}>
        <div className={styles.nvbarContainer}>
            <Navbar/>
        </div>
        <div className={styles.wrapper}>
        <div className={styles.bannerContainer}>banner</div>
        <div className={styles.mainContainer}>
           
            {toggle?
        (
            <div className={styles.semiContainer}>
                <div className={styles.infoContainer}>
                    <h3 className={styles.text1}>Get Started</h3>
                    <p  className={styles.text2}>Create your account now</p>
                </div>

                <div className={styles.detailContainer}>
                    <div className={styles.inputContainer1}>
                        <p className={styles.name}>Name</p>
                        <input placeholder='gg' className={styles.inputwrapper} value={name} onChange={(e)=>{setName(e.target.value)}}/>
                    </div>
                    <div className={styles.inputContainer1}>
                        <p className={styles.name}>Email</p>
                        <input placeholder='gg' className={styles.inputwrapper} value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>
                    <div className={styles.inputContainer1}>
                        <p className={styles.name}>Password</p>
                        <input placeholder='gg'className={styles.inputwrapper} value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    </div>
                    <div className={styles.inputContainer2}>
                        <p className={styles.profileImg}>Profile Image</p>
                        <p className={styles.profileImg} style={{color:"#FF335A",fontWeight: 300}}>Please wait for 1 min atleast after you upload image</p>
                        <input placeholder='gg' className={styles.inputwrapper2} type="file" onChange={(e) => UploadImages(e.target.files[0])}/>
                    </div>
                    
                    <div className={styles.inputContainer4}>
                    <input placeholder='gg' className={styles.inputwrapper3} type="radio" value={radioCheck} checked={radioCheck?"checked":""} onChange={()=>{setRadioCheck(!radioCheck)}}/>
                        <p className={styles.profileImg}>Company Account?</p>
                       
                    </div>
                    {radioCheck?<div className={styles.inputContainer5}>

                        <p className={styles.profileImg1}>{"Note -> Now you select the company account option so that you can only post jobs and can not apply for other jobs "}</p>
                       
                    </div>:""}
                    
                    <div className={styles.inputContainer3}>
                        {signupToggle?<p className={styles.profileImg} style={{color:"#FF335A",fontWeight: 300}}>Done ,Now you have to login to access all things</p>:""}
                        <button className={styles.btnSignup} style={{outline:"none",border:"none"}} onClick={handleSignUp}>Sign Up</button>
                        <p className={styles.text3}>Have an account? <span style={{color:'#111727',cursor:"pointer"}} onClick={()=>{setToggle(false);window.scrollTo(0, 0);}}>Login</span></p>
                    </div>
                </div>
            </div>
            )
            :
            (
                <div className={styles.semiContainer2}>
                <div className={styles.infoContainer}>
                    <h3 className={styles.text1}>Login</h3>
                    <p  className={styles.text2}>to get access to your saved jobs. </p>
                </div>

                <div className={styles.detailContainer}>
                    
                    <div className={styles.inputContainer1}>
                        <p className={styles.name}>Email</p>
                        <input placeholder='gg' className={styles.inputwrapper} value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>
                    <div className={styles.inputContainer1}>
                        <p className={styles.name}>Password</p>
                        <input placeholder='gg'className={styles.inputwrapper} value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    </div>
                   
                    <div className={styles.inputContainer3}>
                        <button className={styles.btnSignup1} style={{outline:"none",border:"none"}} onClick={handleLogin}>Log in</button>
                        <p className={styles.text3} style={{fontSize:"0.8rem"}}>Don't have an account? <span style={{color:'#111727',cursor:"pointer"}} onClick={()=>{setToggle(true)}}>Signup</span></p>
                    </div>
                </div>
                </div>
            )
            }
            <div className={styles.imgContainer}>

            </div>
        </div>
        </div>
    </div>
  )
}

export default Auth;