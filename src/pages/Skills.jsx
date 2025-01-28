import React from 'react'
import html from "../Images/Stack/HTML.png"
import css from "../Images/Stack/CSS.png"
import js from "../Images/Stack/Javascript.svg"
import exp from "../Images/Stack/Express.png"
import next from "../Images/Stack/NextJsCircle.png"
import tail from "../Images/Stack/Tailwind.png"
import njs from "../Images/Stack/Nodejs.svg"
import mongo from "../Images/Stack/MongoDB.svg"
import red from "../Images/Stack/Redux.svg"
import vercel from "../Images/Stack/Vercel.svg"
import git from "../Images/Stack/Git.svg"
import gith from "../images/Stack/Github.svg"
import chart from "../Images/Stack/ChartJs.svg"
import bash from "../Images/Stack/Bash.svg"
import netlify from "../Images/Stack/netlify.svg"
import react from "../Images/Stack/React.png"
import boot from "../Images/Stack/Bootstrap.svg"
import matui from "../Images/Stack/MaterialUI.svg"
import blobImage from "../Images/UserAsset/UserImage.png"
function Skills() {
  return (
    <div className="container skills-container flex flex-col lg:flex-row items-center justify-center">
        <div className="skill-fade-text">Skills</div>
            <div className="skill-container-left">
              <h2 className="skill-heading">
                <span className="caps">M</span>e and
                <br />
                MyTech Stack
              </h2>
  
              <div className="skill-subHeading">
                <p>
                  I am a highly motivated computer science & engineering student with a passion for technology and its application in solving real-world problems. Goal is to work with an organization where I can learn new skills and increase my abilities for the organizational goals as well as myself.
                </p>
                <p>
                  As a tech enthusiast, I'm currently exploring in Software Development, Full Stack Development & pursuing 𝐁.𝐓𝐞𝐜𝐡 from Odisha University of Technology and Research and love exploring new technologies.
                </p>
                
              </div>
            </div>
  
            <div className="skill-container-right flex">
              <img src={blobImage} className="blob-style" alt="" />
  
              <img src={html} alt="" className="skills-logo" />
              <img src={css} alt="" className="skills-logo" />
              <img src={js} alt="" className="skills-logo" />
              <img src={react} alt="" className="skills-logo" />
              <img src={njs} alt="" className="skills-logo" />
              <img src={next} alt="" className="skills-logo" />
              <img src={red} alt="" className="skills-logo" />
              <img src={tail} alt="" className="skills-logo" />
              <img src={boot} alt="" className="skills-logo" />
              <img src={matui} alt="" className="skills-logo" />
              <img src={exp} alt="" className="skills-logo" />
              <img src={git} alt="" className="skills-logo" />
              <img src={gith} alt="" className="skills-logo" />
              {/* <!-- <img src="./images/stack/Graphql.svg" alt="" class="skills-logo" /> --> */}
              <img src={mongo} alt="" className="skills-logo" />
              <img src={vercel} alt="" className="skills-logo" />
              <img src={chart} alt="" className="skills-logo" />
              <img src={bash} alt="" className="skills-logo" />
              {/* <img src={docker} alt="" class="skills-logo" /> */}
              {/* <img src alt="" class="skills-logo" /> */}
              <img src={netlify} alt="" className="skills-logo" />
            </div>
          
          
          
        </div>
  )
}

export default Skills
