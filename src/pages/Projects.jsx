import React from "react";
// import { projectData } from "../data/projectData";
import html from "../Images/Stack/HTML.png"
import css from "../Images/Stack/CSS.png"
import js from "../Images/Stack/javascript.svg"
import exp from "../Images/Stack/Express.png"
import next from "../Images/Stack/NextJsCircle.png"
import tail from "../Images/Stack/Tailwind.png"
import njs from "../Images/Stack/Nodejs.svg"
import mongo from "../Images/Stack/MongoDB.svg"
import red from "../Images/Stack/Redux.svg"
import vercel from "../Images/Stack/Vercel.svg"
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectSection = () => {
  return (
    <div className="project-section">
      <h2 className="page-header">
        Projects
      </h2>

      <div className="project-container">
        {/* Project 1 */}
        <div className="project-card project1">
          <div className="project-number project-number-right">
            01
          </div>
          <div className="project-content project-content-left">
            <div className="project-skill-container">
                <img className="project-skill" src={html} alt=""/>
                <img className="project-skill" src={css} alt=""/>
                <img className="project-skill" src={js} alt=""/>
                <img className="project-skill" src={exp} alt=""/>
                {/* <img className="project-skill" src={next} alt=""/> */}
                <img className="project-skill" src={tail} alt=""/>
                <img className="project-skill" src={njs} alt=""/>
                <img className="project-skill" src={mongo} alt=""/>
                <img className="project-skill" src={red} alt=""/>
                {/* <img className="project-skill" src={vercel} alt=""/> */}
          </div>
                <h2 class="project-heading">StudyNotion</h2>
                  <div class="project-subheading">
                  StudyNotion is a fully functional ed-tech platform that enables users to create, consume, and rate educational content. The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS.
                  </div>
                  <div class="btn-grp">
                    <Link
                    to={"http://github.com"}
                    class="btn-pink btn-project">
                      <i title="GitHub Link" class="fa-brands fa-github icon">
                        <FaGithub/>
                      </i>
                      Read More
                    </Link>
                  </div>
          </div>
        </div>
        {/* project 2 */}
        <div className="project-card project2">
          <div className="project-number project-number-left">
            02
          </div>
          <div className="project-content project-content-right">
            <div className="project-skill-container">
                {/* <img className="project-skill" src={html} alt=""/> */}
                {/* <img className="project-skill" src={css} alt=""/> */}
                <img className="project-skill" src={js} alt=""/>
                <img className="project-skill" src={exp} alt=""/>
                {/* <img className="project-skill" src={next} alt=""/> */}
                {/* <img className="project-skill" src={tail} alt=""/> */}
                <img className="project-skill" src={njs} alt=""/>
                <img className="project-skill" src={mongo} alt=""/>
                <img className="project-skill" src={red} alt=""/>
                {/* <img className="project-skill" src={vercel} alt=""/> */}
            </div>
                <h2 class="project-heading">Tweet Tube</h2>
                  <div class="project-subheading">
                    TweetTube is a complete and complete backend project with high level of pipelining that aims in mixing of 2 social media platforms - Twitter and YouTube,to use at once to get the best of both. 
                  </div>
                  <div class="btn-grp">
                    <Link
                    to={"https://github.com/aditya2445/BackendYT"}
                    class="btn-pink btn-project">
                      <i title="GitHub Link" class="fa-brands fa-github icon">
                        <FaGithub/>
                      </i>
                      Read More
                    </Link>
                  </div>
          </div>
        </div>
        {/* project 3 */}
        <div className="project-card project3">
          <div className="project-number project-number-right">
            03
          </div>
          <div className="project-content project-content-left">
          <div className="project-skill-container">
                <img className="project-skill" src={html} alt=""/>
                <img className="project-skill" src={css} alt=""/>
                <img className="project-skill" src={js} alt=""/>
                <img className="project-skill" src={exp} alt=""/>
                {/* <img className="project-skill" src={next} alt=""/> */}
                <img className="project-skill" src={tail} alt=""/>
                <img className="project-skill" src={njs} alt=""/>
                <img className="project-skill" src={mongo} alt=""/>
                {/* <img className="project-skill" src={red} alt=""/> */}
                {/* <img className="project-skill" src={vercel} alt=""/> */}
            </div>
                <h2 class="project-heading">MentorConnect</h2>
                  <div class="project-subheading">
                    The project in Smart India Hackathon aims to provide the best way Mentoring during the Career/Education is a vital aspect for success of a candidate and this can achieve amazingly positive changes in the life of a mentee
                  </div>
                  <div class="btn-grp">
                    <Link
                    to={"https://github.com/aditya2445/MentorConnect"}
                    class="btn-pink btn-project">
                      <i title="GitHub Link" class="fa-brands fa-github icon">
                        <FaGithub/>
                      </i>
                      Read More
                    </Link>
                    <a href="">
                      <i title="GitHub Link" class="fa-brands fa-github icon"></i>
                    </a>
                  </div>
          </div>
        </div>
        {/* project 4 */}
        <div className="project-card project4">
          <div className="project-number project-number-left">
            04
          </div>
          <div className="project-content project-content-right">
          <div className="project-skill-container">
                <img className="project-skill" src={html} alt=""/>
                {/* <img className="project-skill" src={css} alt=""/> */}
                <img className="project-skill" src={js} alt=""/>
                <img className="project-skill" src={exp} alt=""/>
                <img className="project-skill" src={next} alt=""/>
                <img className="project-skill" src={tail} alt=""/>
                {/* <img className="project-skill" src={njs} alt=""/> */}
                <img className="project-skill" src={mongo} alt=""/>
                {/* <img className="project-skill" src={red} alt=""/> */}
                {/* <img className="project-skill" src={vercel} alt=""/> */}
            </div>
                <h2 class="project-heading">MusicClasses</h2>
                  <div class="project-subheading">
                      Music Classes is nextjs project which uses shadcn features for UI/UX.it allows users to create account and enroll into courses whatever they want to learn.
                  </div>
                  <div class="btn-grp">
                    <Link 
                    to={"https://github.com/aditya2445/musicapp"}
                    class="btn-pink btn-project">
                      <i title="GitHub Link" class="fa-brands fa-github icon">
                        <FaGithub/>
                      </i>
                      Read More
                    </Link>
                    <a href="">
                      <i title="GitHub Link" class="fa-brands fa-github icon"></i>
                    </a>
                  </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
