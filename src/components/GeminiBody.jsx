"use client";
import React from 'react'
import {
  CircleUserRound,
} from "lucide-react";
import { cardData } from '@/data/data';
import Card from './Card';
const GeminiBody = ({theme}) => {
  return (
    <div className='flex-1 min-h-[100vh] pb-[15vh] relative'>
      <div className="flex items-center justify-between p-5 text-xl text-gray-400">
        <p>Gemini</p>
        <CircleUserRound size={40} className="text-softTextColor" />
      </div>
      <div className="max-w-[900px] m-auto">
        <div className='my-12 text-5xl font-medium p-5'>
          <p className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400 '><span className=' bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400'>Hello,</span> Mansi</p>
          <p className='text-5xl mt-2'>How can I help you today?</p>
        </div>
        <div className="grid grid-cols-4 gap-5 p-5">
        {cardData.map((item)=>(
          <Card key={item.id} desc={item.desc} icon={item.icon} theme={theme} />
        ))}  
        </div>
      </div>
    </div>
  )
}

export default GeminiBody
