"use client"
import React, { useState } from 'react'
import { Menu,Plus } from 'lucide-react';
const Sidebar = () => {
    const [open , setOpen] = useState(true);
  return (
    <div className="min-h-[100vh] inline-flex flex-col justify-between bg-bgSecondaryColor py-6 px-4">
      <div>
      <Menu size={25} onClick={()=>setOpen(!open)} className='cursor-pointer text-softTextColor' />
      <div className='mt-3 inline-flex items-center py-2 gap-3 px-4 bg-bgPrimaryColor rounded-full text-md text-gray-400 cursor-pointer'>
      <Plus size={20} className='cursor-pointer text-softTextColor' />
      {open ?<p>New Chat</p>:null}
      </div>
      {open?
      <div className='flex flex-col'>
       <p className='mt-8'>Recent</p>
      </div>:null}
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Sidebar
