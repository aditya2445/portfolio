import React from 'react'
import { Link } from 'react-router-dom'

function ListPage() {
  return (
    <div className='w-screen min-h-screen flex flex-col fontInter overflow-hidden'>
      <div className='w-9/12 mt-4 mx-auto flex justify-center'>
        <div className='flex flex-col gap-x-6'>
        <Link
        className='font-bold text-[20px] text-black'
        to="/">Home</Link>
        <Link
        className='font-bold text-[20px] text-black'
        to="/about">About</Link>
        <Link className='font-bold text-[20px] text-black' to={"/projects"}>Projects</Link>
        <Link className='font-bold text-[20px] text-black' to={"/contact"}>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default ListPage
