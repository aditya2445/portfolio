import React, { useEffect, useRef, useState } from 'react';
import Footer from './Footer';
// import cubes from "../"
import cube from "../Images/UserAsset/cube.png"
import dots from "../Images/UserAsset/dots.png"
import plus from "../Images/UserAsset/plus.png"
import circle from "../Images/UserAsset/circle.png"
import zigzags from "../Images/UserAsset/zigzags.png"
// import user from "../Images/UserAsset/userImage.png"
const roles = ['Developer', 'Freelancer', 'Designer', 'Problem Solver'];
import Image from "../Images/Projects/myImg.jpg"

function Home() {
  return (
    <div className='overflow-hidden flex '>
    <div className="w-11/12 max-w-[1200px] mx-auto h-[calc(100vh-100px)] relative flex justify-center items-center gap-[5rem] py-14 px-4">
      <div className="faded-text absolute bottom-[16%]  user-select-none text-gray-300 font-bold text-5xl left-0 hidden md:block">
        Aditya Mohaty
      </div>

      <div className="flex flex-col justify-center gap-4">
        <h1 className="text-3xl font-medium text-gray-700">Hii! Aditya</h1>
        <h2 className="text-5xl font-bold leading-10">
          I am a{' '}
          <span className="text-purple-500 font-extrabold">
            {"Web Developer"}
          </span>
        </h2>
        <p className="text-gray-500 max-w-md">
          I am a software developer and here is my portfolio website. Here you'll learn
          about my journey as a software developer. Happy coding!
        </p>
        <button
          className="btn-pink max-w-fit"
          >
          Hire Me
        </button>
      </div>

      <div className="md:block relative flex items-center justify-center hidden">
        <div className="absolute dot-animation">
          <img
            src={dots}
            alt="Dots"
            />
        </div>
        <div className="absolute cube-animation">
          <img
            src={cube}
            alt="Cube"
            />
        </div>
        <div className="absolute icon-circle">
          <img
            src={circle}
            />
        </div>
        <div className="absolute icon-zigzag">
          <img
            src={zigzags}
            alt="Zigzag"
            />
        </div>
        <div className="absolute icon-plus">
          <img
            src={plus}
            alt="Plus"
            />
        </div>
        <img
          src={Image}
          width={400}
          height={400}
          alt="User"
          className="user-image"
          />
      </div>
    </div>
    {/* <Footer/> */}
  </div>
  );
}

export default Home;