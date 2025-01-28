import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-[#2C333F] relative mt-[-1px] bg-gray-800 py-10">
      <div className="w-11/12 mx-auto ">
        <div className="items-center justify-between px-4">
          {/* Faded Text */}
          <div className=" lg:block hidden absolute left-0 bottom-0 text-3xl text-[#4e546e] select-none">
            Aditya Mohaty
          </div>
          {/* Social Icons */}
          <div className="w-9/12 mx-auto flex flex-col md:flex-row items-center justify-between gap-5 pr-4">
            <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/aditya-mohaty-b34126319/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white text-3xl hover:text-orange-500 transition-all" />
            </a>
            <a href="https://github.com/aditya2445" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-white text-3xl hover:text-orange-500 transition-all" />
            </a>
            <a href="https://x.com/Adibhai33304" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white text-3xl hover:text-orange-500 transition-all" />
            </a>
            </div>
            <div className="flex gap-4">
            <a href="https://leetcode.com/u/aditya_mohaty-leetcode123/" target="_blank" rel="noopener noreferrer">
              <SiLeetcode className="text-white text-3xl hover:text-orange-500 transition-all" />
            </a>
            <a href="https://www.geeksforgeeks.org/user/adityamoyg0d/" target="_blank" rel="noopener noreferrer">
              <SiGeeksforgeeks className="text-white text-3xl hover:text-orange-500 transition-all" />
            </a>
            <a href="mailto:adityamohaty123@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope className="text-white text-3xl hover:text-orange-500 transition-all" />
            </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
