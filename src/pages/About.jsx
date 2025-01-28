import React from 'react';
import Image from "../Images/Projects/myImg.jpg"
import Skills from './Skills';
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <section className=" text-white py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold bg-gradient-to-r from-teal-500  to-pink-500 text-transparent bg-clip-text animateText ">
            About Me
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Passionate about building things that matter.
          </p>
        </div>

        <div className="w-9/12 mx-auto md:flex lg:flex-row flex-col gap-4 items-center justify-around">
          {/* Left Section (Image or Avatar) */}
          <div className="flex flex-1 items-center justify-center mb-8 md:mb-0">
            <img
              src={Image}
              width={360}
              alt="Your Avatar"
              className="mt-2 rounded-xl shadow-xl shadow-teal-300 object-cover"
            />
          </div>

          {/* Right Section (Textual Content) */}
          <div className="flex flex-col flex-1 text-lg text-gray-400">
            <p className="mb-1">
              Hi, I’m <strong>Aditya Mohaty</strong>, a passionate and determined Web Developer based . I enjoy creating
              beautiful and functional websites using technologies like React, Tailwind CSS, and Node.js. My goal is
              to create applications that make a difference in users' lives.
            </p>
            <p className="mb-1">
              With a background in front-end development and an eye for design, I strive to merge creativity with
              functionality. In my free time, I explore new technologies, to grab opportunities and
              collaborate with developers around the world.
            </p>
            <p className='mb-1'>
              Currently i am pursuing my Bachelors of technology degree in computer Science and Engineering Branch in Odisha University of Technology and Research.
            </p>
            <p>
              I believe in writing clean, maintainable code and always seek to improve my skills. If you'd like to work
              with me or chat about tech, feel free to reach out.
            </p>
          </div>
        </div>
      </div>
      <div className="w-9/12 mt-5 p-4 mx-auto md:flex gap-2 flex-col items-center justify-center">
        <h2 className='font-bold text-2xl text-stone-500'>My Resume</h2>
        <Link
        className='font-bold text-[20px] text-black bg-teal-300 p-3 rounded-xl'
        to={"https://drive.google.com/file/d/1MFhkc3erKmptyRAjh7Zic9_o5OaKl4aq/view?usp=drivesdk"}
        >
          Resume
        </Link>
      </div>
      <Skills/>
    </section>
  );
};

export default About;
