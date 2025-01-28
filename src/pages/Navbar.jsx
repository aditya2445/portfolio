import React, { useEffect, useState } from 'react'
import {NavbarLinks} from "../data/NavbarLinks"
import { Link, matchPath, useLocation } from 'react-router-dom'
import { FaRegWindowClose } from "react-icons/fa";
import { CgMoreR } from "react-icons/cg";
function Navbar() {
    const location = useLocation()
    const [opened, setOpened] = useState(false);
    const matchRoute = (route) => {
        return matchPath({path:route},location.pathname);
    }
    // useEffect(()=>{
    //     setOpened(false)
    // },[location])
  return (
    <div className='w-9/12 mt-4 mx-auto md:flex md:items-center h-14 flex items-center justify-center'>

      <div className='w-11/12 md:flex md:max-w-maxContent mx-auto md:items-center md:justify-between flex items-center justify-between'>
        <Link to="/">
            {/* <img src={} width={160} height={32}/> */}
            <p
              className="font-bold text-2xl w-[160px] h-[32px] bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 bg-clip-text text-transparent animateText"
            >
              ADITYA
            </p>

        </Link>
        <nav className='hidden md:block'>
            <ul className='flex gap-x-6 text-[#F1F2FF]'>
                {NavbarLinks.map((link,i)=>(
                    <li key={i}>
                        <Link to={link.path}>
                        <p className={`font-bold text-[20px] ${matchRoute(link.path)?("text-teal-500"):("text-black")}`}>
                            {link.title}
                        </p>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
        <div
        onClick={(e)=>setOpened(!opened)}
        className='block md:hidden'>
          {
            opened ?
              (
                <Link to={"/"}>
                  <FaRegWindowClose 
                  size={30}/>
                </Link>)
              :(
                <Link to={"/listpage"}>
                  <CgMoreR 
                    size={30}
                  />
                </Link>
              )
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar
