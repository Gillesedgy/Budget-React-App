import "./Home.css";
import React from "react";
import money from "../Assets/money.mp4";
import GitHub from "../Assets/Github.png";
import LinkedIn from "../Assets/LinkedIn.png";
import BabySteps from "../Assets/BabySteps.png";
import menuIcon from "../Assets/menu.png";
import closeIcon from "../Assets/close.png"
import YT from "../Assets/YT.png";
import { useState } from "react";
export default function Home() {
  const [toggle, setToggle] = useState("inactive");
  const [menu, setMenu] = useState();
  //TOGGLE FUNCTIONALITY

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
         
          <h2 className="Logo ">Welcome To dotReduce(💲)</h2>
          <div className="Toggle"> </div>
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias iure
            ipsam, dolorum nobis ea nulla. Quos sunt nihil debitis quaerat!
          </p>
          <a href="something fun here">EXPLORE</a>
        </div>
        <ul className="Social">
          <li>
            <a href="BabyStep">
              <img src={BabySteps} alt="LinkedIn_logo" />
            </a>
          </li>
          <li>
            {" "}
            <a href="https.com">
              <img src={GitHub} alt="GitHub_logo" />
            </a>
          </li>
          <li>
            {" "}
            <a href="LinkedIn">
              <img src={LinkedIn} alt="LinkedIn_logo" />
            </a>
          </li>
          <li>
            {" "}
            <a href="YT">
              <img src={YT} alt="LinkedIn_logo" />
            </a>
          </li>

          {/* /! SWAP MENU CONTENTS WITH SOCIALS */}
        </ul>
      </section>
      <div className="Menu">
        <ul>
          <li>
            <a href="http://localhost:3000/transactions">Home</a>
          </li>
          <li>
            {" "}
            <a href="zhttps://www.ramseysolutions.com/dave-ramsey-7-baby-steps">
              7 Baby Steps
            </a>
          </li>

          <li>
            <a href="https://open.spotify.com/show/5exfRPDNCBHmntEkJrlLmX">
              Podcast
            </a>
          </li>
          <li>
            <a href="explore">Explore</a>
          </li>
          <li>
            <a href="About">About</a>
          </li>
        </ul>
      </div>
    </>
  );
}
