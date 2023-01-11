import "./Home.css";
import React from "react";
import money from "../Assets/money.mp4";
import GitHub from "../Assets/Github.png";
import LinkedIn from "../Assets/LinkedIn.png";
import BabySteps from "../Assets/BabySteps.png";
import VPN from "../Assets/ExpressVPN.png";
//! for toggle menue
// import menuIcon from "../Assets/menu.png";
// import closeIcon from "../Assets/close.png";
import YT from "../Assets/YT.png";
import { useState } from "react";
export default function Home() {
  const [toggle, setToggle] = useState("false");
  const [menu, setMenu] = useState(false);

  //!TOGGLE FUNCTIONALITY coming soon 

  // const handleToggleClick=()=>{
  //   setToggle(!toggle)
  // }
  // let toggleStateCheck =  toggle ? true: null;
  // const handleMenuClick=()=>{
  //   setMenu(!menu)
  // }
  // const menuToggle = document.querySelector(".Toggle");
  // const showcase = document.querySelector(".Home-Container");

  // menuToggle.addEventListener("click", () => {
  //   menuToggle.classList.Toggle("active");
  //   showcase.classList.Toggle("active");
  // });

  return (
    <>
      <section className="Home-Container ">
        
        <aside>
         <span><h2 className="Logo ">Welcome To dotReduce(💲)</h2>  <p>This budget appliccation will help you bring your spending down to a smaller extent, reduce any IMPULSIVE buys by 10X. <br />
         </p></span> 
          <div className="Toggle "> </div>
        </aside>

        <video className="Video" src={money} muted autoPlay loop></video>
        <div className="overlay"></div>
        <div className="Text-Container">
          <h3>Live Like No One Else</h3>
          <br />
          <h2>
            So One Day You Can <b>Really Live</b> Like No One Else{" "}
          </h2>
          <p>
            You don’t have to see the whole staircase, just take the first step. – Martin Luther King, Jr.
          </p>
          <a href="something fun here">EXPLORE</a>
        </div>
        <ul className="Social">
          <li>
            <a href="https://www.ramseysolutions.com/dave-ramsey-7-baby-steps?gclid=Cj0KCQiAtvSdBhD0ARIsAPf8oNmzwcCwnhUyR09hV2cjCkDB4ov1Rx93LukpnMX1EmfVmNfiV3g7jdgaAiwsEALw_wcB" target="_blank" rel="noopener noreferrer">
              <img src={BabySteps} alt="LinkedIn_logo" />
            </a>
          </li>
          <li>
            {" "}
            <a href="https://github.com/Gillesedgy" target="_blank" rel="noopener noreferrer">
              <img src={GitHub} alt="GitHub_logo" />
            </a>
          </li>
          <li>
            {" "}
            <a href="https://www.linkedin.com/in/edgy-gilles-421967148/" target="_blank" rel="noopener noreferrer">
              <img src={LinkedIn} alt="LinkedIn_logo" />
            </a>
          </li>
          <li>
            {" "}
            <a href="https://www.youtube.com/@TheRamseyShow/playlists?view=1&sort=dd&shelf_id=0" target="_blank" rel="noopener noreferrer">
              <img src={YT} alt="LinkedIn_logo" />
            </a>
          </li>
          <li>
            {" "}
            <a href="https://www.expressrefer.com/refer-a-friend/30-days-free?referrer_id=53809949&utm_campaign=referrals&utm_medium=copy_link&utm_source=referral_dashboard" target="_blank" rel="noopener noreferrer">
              <img src={VPN} alt="VPN_logo" />
            </a>
          </li>


          {/* /! SWAP MENU CONTENTS WITH SOCIALS */}
        </ul>
      </section>
      <div className="Menu ">
        <ul>
          <li>
            <a href="https://63bde8741f2eee068c3fb255--tangerine-concha-d8c835.netlify.app/" target="_blank" rel="noopener noreferrer">Home</a>
          </li>
          <li>
            {" "}
            <a href="zhttps://www.ramseysolutions.com/dave-ramsey-7-baby-steps" target="_blank" rel="noopener noreferrer">
              7 Baby Steps
            </a>
          </li>

          <li>
            <a href="https://open.spotify.com/show/5exfRPDNCBHmntEkJrlLmX" target="_blank" rel="noopener noreferrer">
              Podcast
            </a>
          </li>
          <li>
            <a href="explore">Unknown</a>
          </li>
          <li>
            <a href="About">About</a>
          </li>
        </ul>
      </div>
    </>
  );
}
