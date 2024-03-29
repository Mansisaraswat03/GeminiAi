import React from 'react'
import {
    Code
  } from "lucide-react";
const Card = ({desc,icon,theme}) => {
  return (
    <div className={`h-48 p-4 bg-bgSecondaryColor rounded-xl relative cursor-pointer ${theme==="dark"?"hover:bg-gray-700":"hover:bg-gray-200"}`}>
    <p className={`${theme==="dark"? "text-white" : "text-black"}`}>{desc}</p>
    {icon}
  </div>
  )
}

export default Card
