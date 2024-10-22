'use client'

import React, { useState } from 'react'
import { CiMenuFries } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";

function Navbar() {
    const[isOpen , setIsOpen] = useState<boolean>(false);

  return (
    <div>
    <div className='flex justify-between py-3 px-6 items-center'>
<div className='w-32  text-3xl'>
    Logo
</div>

<div className='flex gap-6 items-center'>
    <ul className=' hidden lg:flex justify-center items-center gap-[2px] '>
        <li className=' text-lg hover:bg-gray-700 rounded-[3px] py-[6px] px-3 cursor-pointer duration-200 '>About</li>
        <li className=' text-lg hover:bg-gray-700 rounded-[3px] py-[6px] px-3 cursor-pointer duration-200 '>Contact</li>
        <li className=' text-lg hover:bg-gray-700 rounded-[3px] py-[6px] px-3 cursor-pointer duration-200 '>Services</li>
        <li className=' text-lg hover:bg-gray-700 rounded-[3px] py-[6px] px-3 cursor-pointer duration-200 '>Home</li>

        

    </ul>

<div  onClick={() => setIsOpen(true)} className='flex lg:hidden'><CiMenuFries className='text-3xl' />
</div>
</div>
<div className= {`${isOpen ? 'visible' : 'invisible'} absolute top-0 right-0 bottom-0 w-full text-center bg-gray-700 p-3`}>
    <div onClick={() => setIsOpen(false)}>
    <IoCloseSharp  className='absolute right-[3px] text-4xl text-yellow-50'/>
        </div>
<ul className = 'gap-[2px] mt-32 text-white  '>
        <li className=' text-[2rem] hover:bg-gray-200 rounded-[3px] py-[6px] px-3 cursor-pointer duration-200 '>About</li>
        <li className=' text-[2rem] hover:bg-gray-200 rounded-[3px] py-[6px] px-3 cursor-pointer duration-200 '>Contact</li>
        <li className=' text-[2rem] hover:bg-gray-200 rounded-[3px] py-[6px] px-3 cursor-pointer duration-200 '>Services</li>
        <li className=' text-[2rem] hover:bg-gray-200 rounded-[3px] py-[6px] px-3 cursor-pointer duration-200 '>Home</li>
        

    </ul> 
</div>
    </div>
    </div>
  )
}

export default Navbar




