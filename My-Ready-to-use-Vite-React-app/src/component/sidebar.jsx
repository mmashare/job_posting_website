import React from 'react'
import { useState } from 'react'
import styles from "./sidebar.module.css";
import { MixerHorizontalIcon } from '@radix-ui/react-icons';

import {FullTime,
  Parttime,
  Intership,
  Remote,
  Onsite,
  UnderOneYear,
  OneOrTwoYear,
  TwoToSixYear,
  OverSixYear} from '../redux/filterValue.js'
import {useDispatch} from "react-redux"
import Form from 'react-bootstrap/Form';

const Sidebar = () => {
  const [toggle,setToggle] = useState(false);
  const dispatch = useDispatch()
  const [fulltime,setFulltime] = useState(false)
  // console.log("----------------------------------------------------------------")
  // console.log("fulltime",fulltime)
  const [parttime,setParttime] = useState(false)
  // console.log("parttime",parttime)
  const [intership,setInstership] = useState(false)
  // console.log("intership",intership)
  const [remote,setRemote] = useState(false)
  // console.log("remote",remote)
  const [onsite,setOnsite] = useState(false)
  // console.log("onsite",onsite)
  const [underOneYear,setUnderOneYear] = useState(false)
  // console.log("underOneYear",underOneYear)
  const [oneOrTwoYear,setOneOrTwoYear] = useState(false)
  // console.log("oneOrTwoYear",oneOrTwoYear)
  const [twoToSixYear,setTwoToSixYear] = useState(false)
  // console.log("twoToSixYear",twoToSixYear)
  const [overSixYear,setoOerSixYear] = useState(false)
  // console.log("overSixYear",overSixYear)

  dispatch(FullTime(fulltime))
  dispatch(Parttime(parttime))
  dispatch(Intership(intership))
  dispatch(Remote(remote))
  dispatch(Onsite(onsite))
  dispatch(UnderOneYear(underOneYear))
  dispatch(OneOrTwoYear(oneOrTwoYear))
  dispatch(TwoToSixYear(twoToSixYear))
  dispatch(OverSixYear(overSixYear))


  const handleValue = (e)=>{
    if(e.target.name === "fulltime" && e.target.checked){
      setFulltime(true)
      setParttime(false)
      setInstership(false)
      setRemote(false)
      setOnsite(false)
      setUnderOneYear(false)
      setOneOrTwoYear(false)
      setTwoToSixYear(false)
      setoOerSixYear(false)
    }else if(e.target.name === "parttime" && e.target.checked){
      setFulltime(false)
      setParttime(true)
      setInstership(false)
      setRemote(false)
      setOnsite(false)
      setUnderOneYear(false)
      setOneOrTwoYear(false)
      setTwoToSixYear(false)
      setoOerSixYear(false)
    }else if(e.target.name === "intership" && e.target.checked){
      setFulltime(false)
      setParttime(false)
      setInstership(true)
      setRemote(false)
      setOnsite(false)
      setUnderOneYear(false)
      setOneOrTwoYear(false)
      setTwoToSixYear(false)
      setoOerSixYear(false)
    }else if(e.target.name === "remote" && e.target.checked){
      setFulltime(false)
      setParttime(false)
      setInstership(false)
      setRemote(true)
      setOnsite(false)
      setUnderOneYear(false)
      setOneOrTwoYear(false)
      setTwoToSixYear(false)
      setoOerSixYear(false)
    }else if(e.target.name === "onsite" && e.target.checked){
      setFulltime(false)
      setParttime(false)
      setInstership(false)
      setRemote(false)
      setOnsite(true)
      setUnderOneYear(false)
      setOneOrTwoYear(false)
      setTwoToSixYear(false)
      setoOerSixYear(false)
    }else if(e.target.name === "underOneYear" && e.target.checked){
      setFulltime(false)
      setParttime(false)
      setInstership(false)
      setRemote(false)
      setOnsite(false)
      setUnderOneYear(true)
      setOneOrTwoYear(false)
      setTwoToSixYear(false)
      setoOerSixYear(false)
    }else if(e.target.name === "oneOrTwoYear" && e.target.checked){
      setFulltime(false)
      setParttime(false)
      setInstership(false)
      setRemote(false)
      setOnsite(false)
      setUnderOneYear(false)
      setOneOrTwoYear(true)
      setTwoToSixYear(false)
      setoOerSixYear(false)
    }else if(e.target.name === "twoToSixYear" && e.target.checked){
      setFulltime(false)
      setParttime(false)
      setInstership(false)
      setRemote(false)
      setOnsite(false)
      setUnderOneYear(false)
      setOneOrTwoYear(false)
      setTwoToSixYear(true)
      setoOerSixYear(false)
    }else if(e.target.name === "overSixYear" && e.target.checked){
      setFulltime(false)
      setParttime(false)
      setInstership(false)
      setRemote(false)
      setOnsite(false)
      setUnderOneYear(false)
      setOneOrTwoYear(false)
      setTwoToSixYear(false)
      setoOerSixYear(true)
    }else{
      setFulltime(false)
      setParttime(false)
      setInstership(false)
      setRemote(false)
      setOnsite(false)
      setUnderOneYear(false)
      setOneOrTwoYear(false)
      setTwoToSixYear(false)
      setoOerSixYear(false)
    }


  }

  return (
    <main className={styles.container}>

      <div className={styles.ToggleBtncontainer} onClick={()=>{setToggle(!toggle)}}>
        <MixerHorizontalIcon className={styles.FilterIcon}/>
        <p className={styles.ToggleBtn}>Filter</p>
        </div>

      {toggle?(
      <div className={styles.Filtercontainer}>


        <div className={styles.FirstSectionWrapper}>

          <div className={styles.FirstSectionContainer}>
            <p className={styles.firstHeading}>Job Type</p>
            </div>


          <div className={styles.FirstOptionSection}>
            <section className={styles.FirstSectionFirstOptionContainer}>

              {/* <input 
              placeholder='gg' 
              className={styles.inputOfFirstSectionFirstOptionContainer} 
              type="checkbox"
              name="fulltime"
              value={fulltime}
              onChange={handleValue}
              checked={fulltime?"checked":""}
              /> */}

                <Form.Check 
                  placeholder='gg' 
                  className={styles.inputOfFirstSectionFirstOptionContainer} 
                  type="checkbox"
                  name="fulltime"
                  value={fulltime}
                  onChange={handleValue}
                  checked={fulltime?"checked":""}
                />


                <p className={styles.FirstSectionFirstOption}>Full-Time</p>
              </section>
            <section className={styles.FirstSectionSecOptionContainer}>
              <Form.Check
              placeholder='gg' 
              className={styles.inputOfFirstSectionSecOption} 
              type="checkbox"
              name="parttime"
              value={parttime}
              onChange={handleValue}
              checked={parttime?"checked":""}
              />
                <p className={styles.FirstSectionSecOption}>Part-Time</p>
              </section>
            <section className={styles.FirstSectionThirdOptionContainer}>
              <Form.Check
              placeholder='gg' 
              className={styles.inputOfFirstSectionThirdOption} 
              type="checkbox"
              name="intership"
              value={intership}
              onChange={handleValue}
              checked={intership?"checked":""}
              />
                <p className={styles.FirstSectionThirdOption}>Intership</p>
              </section>
          </div>

        </div>


        <div className={styles.SecSectionWrapper}>

          <div className={styles.SecSectionContainer}> 
            <p className={styles.SecHeading}>Employment</p>
            </div>

          <div className={styles.SecOptionSection}>

            <section className={styles.SecSectionFirstOptionContainer}>

              <Form.Check
              placeholder='gg' 
              className={styles.inputOfSecSectionFirstOption} 
              type="checkbox"
              name="remote"
              value={remote}
              onChange={handleValue}
              checked={remote?"checked":""}
              />

                <p className={styles.SecSectionFirstOption}>Remote</p>
              </section>

            <section className={styles.SecSectionsecOptionContainer}>

              <Form.Check
              placeholder='gg' 
              className={styles.inputOfSecSectionsecOption} 
              type="checkbox"
              name="onsite"
              value={onsite}
              onChange={handleValue}
              checked={onsite?"checked":""}
              />

                <p className={styles.SecSectionsecOption}>On-site</p>
              </section>
              
          </div>

        </div>

        <div className={styles.ThirdSectionWrapper}>

          <div className={styles.ThirdSectionContainer}>
            <p className={styles.thirdHeading}>Experience</p>
            </div>

          <div className={styles.ThirdOptionSection}>

            <section className={styles.thirdSectionFirstOptionContainer}>

              <Form.Check
              placeholder='gg' 
              className={styles.inputOfthirdSectionFirstOption} 
              type="checkbox"
              name="underOneYear"
              value={underOneYear}
              onChange={handleValue}
              checked={underOneYear?"checked":""}
              />

                <p className={styles.thirdSectionFirstOption}>Under 1 Year</p>
              </section>

            <section className={styles.thirdSectionsecOptionContainer}>

              <Form.Check
              placeholder='gg' 
              className={styles.inputOfthirdSectionsecOption} 
              type="checkbox"
              name="oneOrTwoYear"
              value={oneOrTwoYear}
              onChange={handleValue}
              checked={oneOrTwoYear?"checked":""}
              />

                <p className={styles.thirdSectionsecOption}>1 - 2 Years</p>
              </section>

            <section className={styles.thirdSectionthirdOptionContainer}>

              <Form.Check
              placeholder='gg' 
              className={styles.inputOfthirdSectionthirdOption} 
              type="checkbox"
              name="twoToSixYear"
              value={twoToSixYear}
              onChange={handleValue}
              checked={twoToSixYear?"checked":""}
              />

                <p className={styles.thirdSectionthirdOption}>2 - 6 Years</p>
              </section>

            <section className={styles.thirdSectionfourthOptionContainer}>

              <Form.Check
              placeholder='gg' 
              className={styles.inputOfthirdSectionfourthOption} 
              type="checkbox"
              name="overSixYear"
              value={overSixYear}
              onChange={handleValue}
              checked={overSixYear?"checked":""}
              />

                <p className={styles.thirdSectionfourthOption}>Over 6 Years</p>
              </section>

          </div>

        </div>

      </div>
      )
      :
      ""
      }

      {/*  for big screen */}

      <div className={styles.Filtercontainer1}>


        <div className={styles.FirstSectionWrapper}>

          <div className={styles.FirstSectionContainer}>
            <p className={styles.firstHeading}>Job Type</p>
            </div>


          <div className={styles.FirstOptionSection}>
            <section className={styles.FirstSectionFirstOptionContainer}>

              <Form.Check 
                placeholder='gg' 
                className={styles.inputOfFirstSectionFirstOptionContainer} 
                type="checkbox"
                name="fulltime"
                value={fulltime}
                onChange={handleValue}
                checked={fulltime?"checked":""}
                />

                <p className={styles.FirstSectionFirstOption}>Full-Time</p>
              </section>
            <section className={styles.FirstSectionSecOptionContainer}>

              <Form.Check 
              placeholder='gg' 
              className={styles.inputOfFirstSectionSecOption} 
              type="checkbox"
              name="parttime"
              value={parttime}
              onChange={handleValue}
              checked={parttime?"checked":""}
              />

                <p className={styles.FirstSectionSecOption}>Part-Time</p>
              </section>
            <section className={styles.FirstSectionThirdOptionContainer}>

              <Form.Check
              placeholder='gg' 
              className={styles.inputOfFirstSectionThirdOption} 
              type="checkbox"
              name="intership"
              value={intership}
              onChange={handleValue}
              checked={intership?"checked":""}
              />

                <p className={styles.FirstSectionThirdOption}>Intership</p>
              </section>
          </div>

        </div>


        <div className={styles.SecSectionWrapper}>

          <div className={styles.SecSectionContainer}> 
            <p className={styles.SecHeading}>Employment</p>
            </div>

          <div className={styles.SecOptionSection}>

            <section className={styles.SecSectionFirstOptionContainer}>

              <Form.Check 
              placeholder='gg' 
              className={styles.inputOfSecSectionFirstOption} 
              type="checkbox"
              name="remote"
              value={remote}
              onChange={handleValue}
              checked={remote?"checked":""}
              />

                <p className={styles.SecSectionFirstOption}>Remote</p>
              </section>

            <section className={styles.SecSectionsecOptionContainer}>
              <Form.Check 
              placeholder='gg' 
              className={styles.inputOfSecSectionsecOption} 
              type="checkbox"
              name="onsite"
              value={onsite}
              onChange={handleValue}
              checked={onsite?"checked":""}
              />
                <p className={styles.SecSectionsecOption}>On-site</p>
              </section>
              
          </div>

        </div>

        <div className={styles.ThirdSectionWrapper}>

          <div className={styles.ThirdSectionContainer}>
            <p className={styles.thirdHeading}>Experience</p>
            </div>

          <div className={styles.ThirdOptionSection}>

            <section className={styles.thirdSectionFirstOptionContainer}>

              <Form.Check
              placeholder='gg' 
              className={styles.inputOfthirdSectionFirstOption} 
              type="checkbox"
              name="underOneYear"
              value={underOneYear}
              onChange={handleValue}
              checked={underOneYear?"checked":""}
              />

                <p className={styles.thirdSectionFirstOption}>Under 1 Year</p>
              </section>

            <section className={styles.thirdSectionsecOptionContainer}>

              <Form.Check
              placeholder='gg' 
              className={styles.inputOfthirdSectionsecOption} 
              type="checkbox"
              name="oneOrTwoYear"
              value={oneOrTwoYear}
              onChange={handleValue}
              checked={oneOrTwoYear?"checked":""}
              />

                <p className={styles.thirdSectionsecOption}>1 - 2 Years</p>
              </section>

            <section className={styles.thirdSectionthirdOptionContainer}>

              <Form.Check
              placeholder='gg' 
              className={styles.inputOfthirdSectionthirdOption} 
              type="checkbox"
              name="twoToSixYear"
              value={twoToSixYear}
              onChange={handleValue}
              checked={twoToSixYear?"checked":""}
              />

                <p className={styles.thirdSectionthirdOption}>2 - 6 Years</p>
              </section>

            <section className={styles.thirdSectionfourthOptionContainer}>

            <Form.Check
            placeholder='gg' 
            className={styles.inputOfthirdSectionfourthOption} 
            type="checkbox"
            name="overSixYear"
            value={overSixYear}
            onChange={handleValue}
            checked={overSixYear?"checked":""}
            />

              <p className={styles.thirdSectionfourthOption}>Over 6 Years</p>
              </section>

          </div>

        </div>

      </div>
    </main>
  )
}

export default Sidebar